import { ReactNode } from "react";

type ButtonType = JSX.IntrinsicElements["button"]
interface PropsType extends ButtonType {
    children: ReactNode;
}

export const Button = ({ children,className, ...props }:PropsType) => {
    return <button className={" border-[1px] px-4 py-2 " + (className || '')} {...props}>
        {children}
    </button>
}