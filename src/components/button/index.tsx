import { ReactNode } from "react";

interface PropsType {
    children: ReactNode;
}

export const Button = ({ children }:PropsType) => {
    return <button className=" border-[1px] px-4 py-2">
        {children}
    </button>
}