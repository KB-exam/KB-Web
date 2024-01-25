import { instance } from ".."

interface GetPostsType {
    any: any
}

export const createPost = (body: GetPostsType) => {
    return instance.post("getPosts", body)
}