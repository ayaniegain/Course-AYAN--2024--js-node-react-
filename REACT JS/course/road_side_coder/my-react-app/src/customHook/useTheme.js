import { useState } from "react";


function useTheme(theme) {

    const [themeclr, setthemeclr] = useState(theme)


    let toggle=()=>{

        themeclr =="white" ? setthemeclr("black") : setthemeclr("white")
    }
    
    return {themeclr,toggle}
    
}

export default useTheme;