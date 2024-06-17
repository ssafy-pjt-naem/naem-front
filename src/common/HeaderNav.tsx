import Prev from "@/assets/prev.svg?react"
import { NavLink } from "react-router-dom";

interface HeaderNavParameter {
    textContent? : string,
    prevPath : string
}

function HeaderNav({textContent, prevPath} : HeaderNavParameter){


    return (
        <>  
            <NavLink className="absolute top-[20px] left-[10px]" to={prevPath}>
                <Prev />
            </NavLink>
            <div className="h-[60px] border-b-2 border-b-lightline flex justify-center items-center mb-8">
                <div className="font-semibold text-lg">{textContent}</div>
            </div>        
        </>
    )

}

export default HeaderNav;

