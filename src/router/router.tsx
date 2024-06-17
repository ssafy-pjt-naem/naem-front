import { createBrowserRouter } from "react-router-dom";
import Main from '@/pages/Main'
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import FindId from "@/pages/FindId";
import FindIdSuccess from "@/pages/FindIdSuccess";
import KakaoRedirect from "@/pages/KakaoRedirect";
import MyPage from "@/pages/MyPage";


const router = createBrowserRouter([
    {
        path : "/",
        element:<Main />
    },
    {
        path : "/login",
        element:<Login />
    },
    {
        path : "/register",
        element:<Register/>
    },
    {
        path : "/findId",
        element : <FindId/>
    },
    {
        path : "/findId/success",
        element : <FindIdSuccess/>
    },
    {
        path : "/oauth/kakao/callback",
        element : <KakaoRedirect/>
    },
    {
        path : "/mypage",
        element : <MyPage/>
    }

])

export default router;