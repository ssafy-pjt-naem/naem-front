interface ButtonParameter{
    content : string;
    className : string;
    handler : (e : React.MouseEvent<HTMLButtonElement>)  => void | ((e : void)  => void);
    SvgComponent? : React.ComponentType<{
        className : string
    }>
}

function Button({content, className, handler, SvgComponent} : ButtonParameter ){

    if(SvgComponent){
        return(
            <>
                <button onClick={handler} className={"rounded-lg flex justify-center items-center " + className}><div>{content}</div> <SvgComponent className="ml-1" /> </button>
                
            
            </>
            
        )
    }
    else{
        return(
            <>
                 <button onClick={handler} className={"rounded-lg flex justify-center items-center " + className}><div>{content}</div></button>
            </>
        )
    }


}

export default Button;