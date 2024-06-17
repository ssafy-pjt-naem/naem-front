import Button from "@/common/Button";
import HeaderNav from "@/common/HeaderNav";
import { useNavigate } from "react-router-dom";

function FindId(){
    const navigate = useNavigate()

    return (
        <div className="w-full h-full relative">
            <HeaderNav textContent="아이디 찾기" prevPath="/login"/>

            <div className="m-auto w-6/12 pt-3 relative">   
                <div className="mb-4">
                    <div className="mb-2">회원 가입시 등록한 이메일을 입력해주세요.</div>
                    <div className="flex mb-2">
                        <input className="border-light border rounded-md p-2 w-[250px] focus:bg-strongpressed" placeholder="이메일"/>
                        <Button content="인증번호" className="bg-main text-white p-2 w-[100px] ml-2" />
                    </div>
                    <div className="flex">
                        <input className="border-light border rounded-md p-2 w-[250px] focus:bg-strongpressed" placeholder="인증번호 입력"/>
                        <Button content="확인" className="bg-light text-lightline p-2 w-[100px] ml-2"/>
                    </div>
                    <div><span className="text-red">특수문자를 포함하여 입력해주세요</span></div>
                </div>

            </div>      
            <Button content="완료" className="bg-light text-lightline p-2 w-[300px] absolute m-auto bottom-6 left-0 right-0" handler={()=>{navigate('/findId/Success')}}/>
        </div>

    )
}

export default FindId;