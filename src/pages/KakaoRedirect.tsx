import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { kakaoRedirectHandler } from "@/util/kakao";


function KakaoRedirect(){

    useEffect(() => {  
        kakaoRedirectHandler()        
    })

    return (
        <div className="w-full h-full relative">
            <div className= "absolute right-0 left-0 m-auto w-[200px] top-[300px]">
                <div className="loader-animation m-auto">
                </div>
                <div className="font-bold text-xl text-center mt-2">잠시만 기다려주세요</div>
            </div>
        </div>
    )
}

export default KakaoRedirect;

