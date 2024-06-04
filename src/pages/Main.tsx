import Logo from '@/assets/mainlogo.svg?react'
import Background from '@/assets/background.svg?react'
import Kakao from '@/assets/kakao.svg?react'
import Button from '@/common/Button';
import { useNavigate } from 'react-router-dom';


function Main(){

    const navigate = useNavigate();

    return (
        <div className="w-full h-full relative">
            <Logo className="absolute top-[150px] left-[50px]"/>
            <div className="absolute text-xl font-normal w-[220px] h-[55px] top-[210px] left-[50px]">
                장애인과 장애인 보호자라면 커뮤니티 플랫폼 <span className="text-main">나음</span>
            </div>
            <Background className="absolute -z-10 right-0 bottom-0"/>
            
            <div className="text-light text-center pt-[420px] relative">
                <span className="bg-white">로그인 후 이용해보세요.</span>
                <hr className="absolute w-10/12 bottom-3 -z-10 m-auto left-0 right-0"/>
            </div>
            <Button content={"카카오톡으로 로그인"} SvgComponent={Kakao} handler={() => {}} className={"bg-kakao text-strong font-bold w-[358px] h-[51px] m-auto mt-5"} />
            <Button content={"로그인 하러 가기"} handler={() => {navigate('/login')}} className={"bg-main text-white font-bold w-[358px] h-[51px] m-auto mt-5"} />
        </div>

    )
}

export default Main;