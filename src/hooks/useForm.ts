import { ChangeEvent, useState } from "react"

export const useForm = <T,>(initState: T) => {
    const [state,setState] = useState<T>(initState);

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setState({...state,[name]: value});
    }
    
    return {state,onHandleChange,setState}
}