import { FormEvent, ReactNode } from "react"

type SubmitType = (e: FormEvent<HTMLFormElement>) => void;

interface PropsType {
    children: ReactNode;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const AuthLayer = ({ children, onSubmit }:PropsType) => {
    return <main className=" h-full w-full flex justify-center items-center">
        <form onSubmit={onSubmit} className=" w-96 px-4 py-8 bg-white shadow-lg rounded-sm flex flex-col gap-3">
            {children}
        </form>
    </main>
}