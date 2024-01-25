import { getLocalItem } from "@/util/localstorage";
import { instance } from ".."

interface ReadPostType {
    quantity: number;
}

export interface ResponseReadPostType {
    "questionId": number,
    "title": string,
    "content": string,
    "type": number,
    "choice1": string | null,
    "choice2": string | null,
    "choice3": string | null,
    "choice4": string | null,
    "answer": string,
    "empNumber": number | null,
    "category": string | null
}

export const getExam = (body: ReadPostType) => {
    return instance.post<ResponseReadPostType[]>("/getExam", { ...body, accessToken: getLocalItem("access") })
}