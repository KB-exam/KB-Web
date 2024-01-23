import { ReactNode } from "react"

interface PropsType {
    children: ReactNode
}

export const AuthLayer = ({ children }:PropsType) => {
    return <main className=" h-full w-full flex justify-center items-center">
        <div className=" w-96 px-4 py-8 bg-white shadow-md rounded-sm">
            {children}
        </div>
    </main>
}