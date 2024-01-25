import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface PropsType {
    type?: HTMLInputTypeAttribute | undefined;
    label?: string;
    name: string;
    value: string;
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ label, type, name, value, onChange, placeholder }:PropsType) => {
    return <div className="w-full">
        {label && <div>{label}</div>}
        <input placeholder={placeholder} type={type} value={value} name={name} onChange={onChange} className="w-full px-4 py-2 border-[1px] border-gray-500 rounded-sm" />
    </div>
}