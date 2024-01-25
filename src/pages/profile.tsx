import { deletePost } from "@/apis/quiz/deletePost"
import { ResponseMyQuiz, myQuiz } from "@/apis/quiz/myQuiz"
import { Button } from "@/components/button"
import { useEffect, useState } from "react"

export default () => {
    const [state,setState] = useState<ResponseMyQuiz[]>([])
    useEffect(() => {
        myQuiz().then(({data}) => {
            setState(data)
        })
    },[])

    const deleteQuiz = (id: number) => {
        const result = confirm("삭제하시겠습니까?")
        if(result) {
            deletePost({questionId: id})
            window.location.reload()
        }
    }

    return <main className="pt-24 min-h-full flex justify-center">
        <div className="flex flex-col items-center gap-3 max-w-[624px] w-full">
            <h1 className=" text-3xl">내가 만든 퀴즈</h1>
            {state.map(({title, empNumber, questionId}) => <div className="flex gap-3 w-full ">
                <div className="px-3 py-2 flex items-center justify-between w-full shadow-md rounded-lg">
                    <div>{title}</div>
                    <Button className="bg-[#595041] text-yellow-400 rounded-md" onClick={() => deleteQuiz(questionId)}>삭제하기</Button>
                </div>
            </div>)}
        </div>
        
    </main>
}