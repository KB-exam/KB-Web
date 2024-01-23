import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface PropsType {
    type?: HTMLInputTypeAttribute | undefined;
    label: string;
    name: string;
    value: string;
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ label, type, name, value, onChange }:PropsType) => {
    return <div className="w-full">
        <div>{label}</div>
        <input type={type} value={value} name={name} onChange={onChange} className="w-full px-4 py-2 border-[1px] border-gray-500 rounded-sm" />
    </div>
}