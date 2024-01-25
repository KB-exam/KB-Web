import { signUp } from "@/apis/auth/signup"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Layer } from "@/components/layer"
import { useForm } from "@/hooks/useForm"
import Link from "next/link"
import { useRouter } from "next/router"


export default () => {
    const {state,onHandleChange} = useForm({
        nickname: '',
        empNumber: '',
        password: '',
    })
    const { push } = useRouter();

    return <Layer.AuthLayer onSubmit={async (e) => {
        e.preventDefault();
        const { status } = await signUp(state);
        switch(status) {
            case 401:
                break;
            case 403:
                break;
        }
        push("sign-in")
        console.log(status)
    }}>
        <Input placeholder="이름" name="nickname" label="이름" value={state.nickname} onChange={onHandleChange} />
        <Input placeholder="직원번호" name="empNumber" label="직원번호" value={state.empNumber} onChange={onHandleChange} />
        <Input placeholder="비밀번호" name="password" label="비밀번호" value={state.password} onChange={onHandleChange} />
        
        <Button className=" py-2 rounded-sm bg-yellow-400 text-white">회원가입</Button>
        <Link href={"/auth/sign-in"}  className="w-full bg-[#595041] text-yellow-400">
            <Button type="button" className=" w-full">
                    로그인으로
            </Button>
        </Link>
 
    </Layer.AuthLayer>
}