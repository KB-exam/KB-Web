import { signIn } from "@/apis/auth/signIn"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Layer } from "@/components/layer"
import { useForm } from "@/hooks/useForm"
import { setLocalitem } from "@/util/localstorage"
import Link from "next/link"
import { useRouter } from "next/router"

export default () => {
    const {state,onHandleChange} = useForm({
        empNumber: '',
        password: '',
    })
    const { push } = useRouter();
    return <Layer.AuthLayer onSubmit={async (e) => {
        e.preventDefault();
        const { data, status } = await signIn(state)
        const { message } = data;
        setLocalitem("access", message);

        switch(status) {
            case 401:
                break;
            case 403:
                break;
        }
        push("/");
        console.log(status)
    }}>
        <Input placeholder="직원번호" name="empNumber" label="직원번호" value={state.empNumber} onChange={onHandleChange} />
        <Input placeholder="비밀번호" name="password" label="비밀번호" value={state.password} onChange={onHandleChange} />
        
        <Button className=" py-2 rounded-sm bg-yellow-400 text-white border-0">로그인</Button>
        <Link href={"/auth/sign-up"} className="w-full  bg-[#595041] text-yellow-400 rounded-md border-0">
            <Button type="button" className=" w-full">
                    회원가입으로
            </Button>
        </Link>
            
    </Layer.AuthLayer>
}