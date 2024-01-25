import { getLocalItem } from "@/util/localstorage";
import { instance } from ".."

interface CreatePostType {
    "title": string,
    "content": string,
    "type": "2" | "4",
    "answer": string,
    "choice": string[],//4지선다인 경우
}

export const createPost = ({choice,...body}: CreatePostType) => {
    let choices = {} as any;
    if(body.type === "4") choice?.forEach((e,idx) => {
        choices["choice"+(idx+1)] = e
    })
    return instance.post("/makeQuestion", { ...choices,...body,accessToken: getLocalItem("access") })
}