import Button from "@/common/Button";
import Check from "@/assets/check.svg?react"
import Copy from "@/assets/copy.svg?react"

import HeaderNav from "@/common/HeaderNav";
import { useNavigate } from "react-router-dom";


function copyToClipboard(e :React.MouseEvent<HTMLButtonElement>){
    const myText = e.target?.textContent;
    navigator.clipboard.writeText(myText);
    alert("클립보드에 복사했습니다.")
}

function FindIdSuccess(){

    const navigate = useNavigate()
    

    return (
        <div className="w-full h-full relative">
            <HeaderNav textContent="아이디 찾기 완료" prevPath="/login"/>

            <div className="mt-[150px]">
                
                <div className="w-full flex justify-center mb-2">
                    <Check/>
                </div>
                <div className="w-full flex justify-center font-bold mb-2">아이디 찾기 완료!</div>
                <div className="w-6/12 text-center p-2 rounded-md m-auto bg-lightpressed">
                    <div>회원님의 아이디는 다음과 같습니다.</div>
                    <div className="flex justify-center items-center">
                        <div className="text-main underline mr-1 cursor-pointer" onClick={copyToClipboard}>sample id </div>
                        <Copy/>
                    </div>
                </div>
                
            </div>    

            <Button content="로그인 하러 가기" className="bg-main text-white p-2 w-[300px] absolute m-auto bottom-6 left-0 right-0" handler={() => {navigate('/login')}}/>
        </div>

    )
}

export default FindIdSuccess;