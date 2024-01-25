import { getLocalItem } from "@/util/localstorage";
import { instance } from ".."

export interface ResponseMyQuiz {
    title: string;
    empNumber: number;
    questionId: number;
}

export const myQuiz = () => {
    const body = { jwt: getLocalItem("access") || '' }
    return instance.post<ResponseMyQuiz[]>("/myQuestion", body)
}