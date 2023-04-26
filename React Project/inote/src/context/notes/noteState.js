import React from "react";
import noteContext from "./noteContext";

const noteState = (props)=>{

    const state = {
        "name": "Deepak",
        "class": "5b"
    }
    return (
        <noteContext.Provider value={state}>
            {props.childern}
        </noteContext.Provider>
    )


}

export default noteState; 