import axios from "axios"
const axios_instance = axios.create({
    baseURL : import.meta.env.VITE_SERVER_BASE_URL,
})

export async function Redirect () {
    
    let response : {data : {access_token : string , refresh_token: string}}
    const url = new URL(window.location.href)
    const path = url.pathname + url.search
    
    try{
        response = await axios_instance.get( path )
        console.log(response.data)
        axios_instance.interceptors.request.use((config) => {
            config.headers.Authorization = "Bearer " + response.data["access_token"]
            return config
        })
        response = await axios_instance.post("/oauth/login", {"socialType" : "KAKAO"})
        console.log(response.data)
        
        // window.location.href="/mypage"
    }
    catch(e){
        window.alert("로그인 실패")
        // window.location.href="/"
    }
    
}






