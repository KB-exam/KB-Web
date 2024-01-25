import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value,setValue] = useState<string>('')
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="mt-28 mb-4 flex flex-col gap-3 items-center">
        <h1 className=" text-2xl">문제 풀이를 위해 개수를 입력해 주세요</h1>
        <Input placeholder="문제 수를 입력해 주세요" name="" value={value} onChange={e => setValue(e.target.value)}/>
        <Link href={"/" + value}>
          <Button className="bg-[#595041] text-yellow-400">문제 풀러가기</Button>
        </Link>
      </div>
    </main>
  );
}
