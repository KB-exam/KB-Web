import Link from "next/link"

export const Header = () => {
    return <header className="fixed flex justify-center items-center w-full h-20 shadow-md">
       <Link href={"/"}>
         KB Web
       </Link>
    </header>
}