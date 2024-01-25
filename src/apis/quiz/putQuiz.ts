import { instance } from ".."
import { CreatePostType } from "./createPost";

export const putQuiz = ({choice,...body}: CreatePostType) => {
    let choices = {} as any;
    if(body.type === "4") choice?.forEach((e,idx) => {
        choices["choice"+(idx+1)] = e
    })
    return instance.put("")
}