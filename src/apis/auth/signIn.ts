import { instance } from ".."

interface SignInType {
    empNumber: string;
    password: string;
}

export const signIn = (body: SignInType) => {
    return instance.post<{message: string}>("login", body )
}