import { useState } from "react"

interface PropsType {
    elements: string[]
}

export const Dropdown = ({elements}: PropsType) => {
    const [state,setState] = useState<boolean>()
    return <div className="relative h-8">
        <div onClick={() => setState(!state)}>드롭다운 벨류</div>
       {state && <div className="absolute -top-9">
            {elements.map((str) => <div>{str}</div>)}
        </div>}
    </div>
}