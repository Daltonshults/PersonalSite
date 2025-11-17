import React from "react";
import { useState } from 'react';
import ComponentOne from "./compOne";
import ComponentTwo from "./compTwo";
import ComponentThree from "./compThree";

const MainBody: React.FC = () => {

    const [ page, setPage ] = useState<number>(0);
 
    return (
        <div>
            {page == 0 ? <ComponentOne/> : page == 1 ?<ComponentTwo/> : <ComponentThree/> }
            <button onClick={ () => (
                page == 0 ? setPage(1) : page == 1 ? setPage(2) : setPage(0)
            ) }>
                {"⟨<"}
            </button>
            <button onClick={ () => (
                page == 0 ? setPage(1) : page == 1 ? setPage(2) : setPage(0)
            ) }>
                {"⟨<"}
            </button>
        </div>
    )
}

export default MainBody;