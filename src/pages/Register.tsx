import Prev from "@/assets/prev.svg?react"
import { NavLink } from "react-router-dom";
import Button from "@/common/Button";
import Radio from "@/common/Radio";

function Register(){

    return (
        <div className="w-full h-full relative">
            <NavLink className="absolute top-[20px] left-[10px]" to="/login">
                <Prev />
            </NavLink>
            <div className="h-[60px] border-b-2 border-b-lightline flex justify-center items-center">
                <div className="font-semibold text-lg">회원가입</div>
            </div>

            <div className="m-auto w-6/12 pt-3">

                <div className="w-[285px] mb-4">
                    <div className="mb-2">회원 유형 선택 <span className="text-red">*</span></div>
                    <div className="flex justify-between">
                        <Radio name="identity" value="me" label="장애인 본인"/>
                        <Radio name="identity" value="guardian" label="장애인 보호자"/>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="mb-2">휴대폰 번호 인증<span className="text-red">*</span></div>
                    <div className="flex mb-2">
                        <input className="border-light border rounded-md p-2 w-[250px] focus:bg-strongpressed" placeholder="'-'없이 입력해주세요"/>
                        <Button content="인증번호" className="bg-main text-white p-2 w-[100px] ml-2" />
                    </div>
                    <div className="flex">
                        <input className="border-light border rounded-md p-2 w-[250px] focus:bg-strongpressed" placeholder="인증번호 입력"/>
                        <Button content="확인" className="bg-light text-lightline p-2 w-[100px] ml-2"/>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="mb-2">아이디<span className="text-red">*</span></div>
                    <div className="flex ">
                        <input className="border-light border rounded-md p-2 w-[250px] focus:bg-strongpressed" placeholder="아이디를 입력해주세요"/>
                        <Button content="중복확인" className="bg-main text-white p-2 w-[100px] ml-2" />
                    </div>
                    <div><span className="text-red">이미 사용 중인 아이디입니다</span></div>
                </div>

                <div className="mb-4">
                    <div className="mb-2">비밀번호<span className="text-red">*</span></div>
                    <div className="mb-2"><input className="border-light border rounded-md p-2 w-[360px] focus:bg-strongpressed" placeholder="8~13자 이내 (영문, 숫자, 특수문자 포함)"/></div>
                    <div><input className="border-light border rounded-md p-2 w-[360px] focus:bg-strongpressed" placeholder="비밀번호 확인"/></div>
                    <div><span className="text-red">특수문자를 포함하여 입력해주세요</span></div>
                </div>

                <div className="mb-4">
                    <div className="mb-2">닉네임<span className="text-red">*</span></div>
                    <div className="flex ">
                        <input className="border-light border rounded-md p-2 w-[250px] focus:bg-strongpressed" placeholder="10자 이내, 특수문자 불가"/>
                        <Button content="중복확인" className="bg-main text-white p-2 w-[100px] ml-2" />
                    </div>
                    <div><span className="text-red">10자 이내로 입력해주세요 / 이미 사용중인 닉네임입니다</span></div>
                </div>

                <div>
                    <Button content="완료" className="bg-light text-lightline p-2 w-[360px] ml-2"/>
                </div>
            </div>

            
      
            
        </div>

    )
}

export default Register;