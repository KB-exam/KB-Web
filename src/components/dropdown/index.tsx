import { useState } from "react"

interface PropsType {
    elements: string[];
    value: string;
    onChange: (value: string) => void; 
}

export const Dropdown = ({elements, onChange,value}: PropsType) => {
    const [state,setState] = useState<boolean>()
    return <div onClick={() => setState(!state)} className="relative cursor-pointer h-10 flex items-center border-[1px] rounded-sm px-3">
        <div>{value}</div>
       {state && <div className="absolute top-9 border-[1px] border-gray-400 z-10 w-full bg-white">
            {elements.map((str) => <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => onChange(str)}>{str}</div>)}
        </div>}
    </div>
}