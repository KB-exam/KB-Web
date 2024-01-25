import { getLocalItem } from "@/util/localstorage";
import { instance } from ".."

interface DeletePostType {
    questionId: number;
}

export const deletePost = (body: DeletePostType) => {
    return instance.post("/deleteQuestion", {...body,jwt: getLocalItem("access")})
}