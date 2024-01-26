import { ResponseReadPostType, getExam } from "@/apis/quiz/getExam";
import { Button } from "@/components/button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default () => {
    const id = useRouter().query.id;

    const [state,setState] = useState<(ResponseReadPostType & {check: string})[]>([]);
    useEffect(() => {
        if(!id) return;
        getExam({quantity: Number(id || '10') }).then(({ data }) => {
            setState(data.map((_) => ({..._, check: "" })));
        })
    },[id])
    
    const [page,setPage] = useState<number>(0);
    const goLeft = () => page && setPage(page-1)
    const goRight = () => page < (state.length-1) && setPage(page+1)
    
    const [modal,setModal] = useState<boolean>(false)
    const getCorrect = (reverse: "plus" | "minus") => {
        let correctCount = 0;

        state.forEach(({answer,check}) => {
            if (check && (reverse === 'plus' ? answer === check : answer !== check)) {
                correctCount++;
            }
        });
        return correctCount
    }
    console.log(state)
    return <main className="pt-28 min-h-full flex justify-center items-center">
        <div className="flex flex-col gap-3 px-10">
            {page+1} / {state.length}
            {!!state.length && (() => {
                const { questionId,title,content,type,choice1,choice2,choice3,choice4,category,answer, check,empNumber} = state[page]
                const checkAnswer = (answer:string) => {
                    const temp = [...state];
                    if(temp[page].check) return;
                    temp.splice(page,1, { ...state[page], check: answer })
                    setState(temp)
                }
                return <div>
                {check && <h2 className=" text-lg mb-5 text-yellow-400">정답: {answer}, 선택한 정답: {check}</h2>}
                <h2 className={` text-lg mb-5 ${check ? answer === check ? " text-green-500" : "text-red-600" : ""}`}>{title}</h2>
                {content && <p>{content}</p>}
                {type === 2 ? <div>
                    <Button onClick={() => checkAnswer("O")}>
                        O
                    </Button>
                    <Button onClick={() => checkAnswer("X")}>
                        X
                    </Button>
                </div> : <div className="flex flex-col gap-3">
                    {[choice1,choice2,choice3,choice4].map((str,idx)  => 
                    <Button onClick={() => checkAnswer((idx+1).toString())}>
                        {str}
                    </Button>)}
                </div>
                }
            </div>
            })()
            }
            <div className="relative flex gap-3 justify-center">
                <Button onClick={goLeft} className="bg-[#595041] text-yellow-400">
                    {"<"}
                </Button>
                <Button onClick={goRight} className="bg-[#595041] text-yellow-400">
                    {">"}
                </Button>
                <Button onClick={() => setModal(true)}  className="bg-[#595041] text-yellow-400">
                    통계보기
                </Button>
                {modal && <div className="fixed -mt-52 flex flex-col w-40 px-5 py-3 bg-white shadow-lg rounded-lg border-[1px] border-gray-400">
                    <div>맞은 문제 {getCorrect("plus")}</div>
                    <div>틀린 문제 {getCorrect("minus")}</div>
                    <div>남은 문제 {state.length - getCorrect("plus") - getCorrect("minus") }</div>
                    <Button onClick={() => setModal(false)}>
                        닫기
                    </Button>
                </div>}
            </div>
            
        </div>
    </main>
}