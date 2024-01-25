import { getLocalItem } from "@/util/localstorage"
import Link from "next/link"
import { useDebugValue, useEffect, useState } from "react"
import { Button } from "../button";

export const Header = () => {
    const [token,setToken] = useState<string>();
    useEffect(() => {
      setToken(getLocalItem("access") ?? '')
    }) 
    return <header className=" fixed px-[20%] bg-white text-yellow-400 font-bold text-2xl flex justify-between items-center w-full h-20 shadow-md">
       <Link href={"/"}>
         KB CPT
       </Link>
       {
          <Link href={token ? "/write" : "/auth/sign-in"}>
            <Button className="border-0 bg-[#595041] text-yellow-400 text-xl rounded-lg ">
            {token ? "작성하기" : "로그인/회원가입"}
            </Button>        
          </Link>
        }
    </header>
}