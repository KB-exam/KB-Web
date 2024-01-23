import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Layer } from "@/components/layer"
import { useForm } from "@/hooks/useForm"
import Link from "next/link"

export default () => {
    const {state,onHandleChange} = useForm({
        number: '',
        password: '',
    })
    return <Layer.AuthLayer>
        <Input name="number" label="number" value={state.number} onChange={onHandleChange} />
        <Input name="password" label="password" value={state.password} onChange={onHandleChange} />
        
        <Link href={"/auth/sign-up"}>
            <Button>
                회원가입으로
            </Button>
        </Link>
    </Layer.AuthLayer>
}