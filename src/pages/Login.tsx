import Logo from '@/assets/mainlogo.svg?react'
import Button from '@/common/Button';
import { NavLink, useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();

    return (
        <div className="w-full h-full relative">
            <Logo className="absolute w-[146px] h-[42px] m-auto left-0 right-0 top-[151px]"/>
            
            <form className="pt-[309px]">
                <input type="string" className="block m-auto border-light border rounded-lg w-[358px] h-[51px] mb-4 p-3 focus:bg-strongpressed"></input>
                <input type="password" className="block m-auto border-light border rounded-lg w-[358px] h-[51px] mb-4 p-3 focus:bg-strongpressed"></input>
                <div className="m-auto w-[358px] h-[51px]">
                    <label className="block text-light text-lg"><input type="checkbox" className="mr-1 w-[24px] h-[24px] align-middle border-main border rounded-lg"/> <span>로그인 상태유지</span></label> 
                </div>
            </form>
        

            <Button content="확인" className="bg-main text-white m-auto w-[358px] h-[51px] text-xl" handler={()=>{}} />
            <div className="text-center mt-4 text-light">
                <span className="pr-4"><NavLink to="/find/id">아이디 찾기</NavLink></span>
                <span className="border-l-[1.5px] border-r-[1.5px] ml-2 pl-4 mr-2 pr-4"><NavLink to="/find/pw">비밀번호 재설정</NavLink></span>
                <span className="pl-4"><NavLink to="/register">회원가입</NavLink></span>
            </div>
            
        </div>

    )
}

export default Login;