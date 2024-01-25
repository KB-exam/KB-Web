import { instance } from ".."

interface SignUpType {
    empNumber: string;
    nickname: string;
    password: string;
}

export const signUp = (body: SignUpType) => {
    return instance.post("signup", body)
}