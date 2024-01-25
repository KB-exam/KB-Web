export const Footer = () => {
    return <footer className="flex flex-col justify-center py-4 items-center [&>span]:text-center border-t-[1px] border-gray-400 w-full">
        <span className=" font-bold text-lg">제작자</span>
        <div className="flex justify-center gap-3">
            <div className="text-center">
                <p>App - 장인수</p>
                <p>FrontEnd - 김태완</p>
            </div>
            <div className="text-center">
                <p>BackEnd, DBA - 정현욱</p>
                <p>BackEnd, Ops - 김동현</p>
                <p>홍보 - 정재윤</p>
            </div>
        </div>
       
    </footer>
}