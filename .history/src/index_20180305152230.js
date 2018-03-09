//Create a new component
import React from "react";
import ReactDOM from "react-dom";

const App =  function(){
    return <div>Hi...</div>;
}

//render react dom component
ReactDOM.render(<App />,document.querySelector('.container'));