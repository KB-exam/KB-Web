import { instance } from ".."

interface ChangePostType {
    any: any
}

export const changePost = (body: ChangePostType) => {
    return instance.put("changePost", body)
}