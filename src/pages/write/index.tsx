import { createPost } from "@/apis/quiz/createPost";
import { putQuiz } from "@/apis/quiz/putQuiz";
import { Button } from "@/components/button"
import { Dropdown } from "@/components/dropdown"
import { Input } from "@/components/input"
import { useWirte } from "@/hooks/useWrite"
import { useRouter } from "next/router";
import { useEffect } from "react";

const type2 = ["O","X"];
const type4 = ['1','2','3','4']

export const WritePage = (id?: string) => {
    const { state, problem } = useWirte()
    const { push } = useRouter();

    const writeApi = async () => {
        const other = state.problems[0]
        
        if(id) {
            putQuiz(other);
        }else {
            const { status } = await createPost(other)
            if(status === 200) push("/profile")
        }
    }

    useEffect(() => {

    },[])

    return <main className="py-32 px-10 flex justify-center">
        {
            state.problems.map(({type,category, title,content,choice,answer},idx) => {
                const {changeChoice,changeProblemText,clickProblemText,changeType} = problem(idx)
                const isOX = type === "2"; 
                return (<div className="flex flex-col gap-3 max-w-[624px] w-full">
                    <Input placeholder="(ex 수신, 집합투자 등" label="문제의 유형" name="category" value={category} onChange={changeProblemText} />
                    <div className="flex gap-3">
                    <input type="radio" onChange={changeType[2]} checked={type === "2"} />
                    OX 퀴즈
                    </div>
                    <div className="flex gap-3">
                    <input type="radio" onChange={changeType[4]} checked={type === '4'} />
                    4지선다 퀴즈
                    </div>
                    
                    <Input placeholder="(ex 거주성에 대한 설명으로 옳은것은 ?" label="퀴즈 제목" name="title" value={title} onChange={changeProblemText} />
                    <Input placeholder="(ex 거주성에 대한 예시 4가지..." label="추가적인 설명" name="content" value={content} onChange={changeProblemText} />
                    
                    {!isOX && Array(Number(type)).fill("2").map((_,idx) => <Input placeholder={(idx+1)+"번 문제"} label={(idx+1) + "번"} name="choice" value={choice[idx]} onChange={changeChoice(idx)}/>)}
                    <div>문제의 정답</div>
                    <Dropdown elements={isOX ? type2 : type4 } value={answer} onChange={clickProblemText} />
                    <Button onClick={writeApi} className="bg-[#595041] text-yellow-400">
                        작성하기
                    </Button>
                </div>)})
        }
    </main>
}

export default () => WritePage()