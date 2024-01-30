import { useReducer } from "react";
function Reduser(props) {
    const intisla=props.text
    const hide="this content is hidden"
    const [state,dispatch]=useReducer(Reduse,intisla)

    function Reduse(state,action) {
        switch(action){
            case "true":
                return hide
            case "false":
                return intisla
        }
    }
    return(
        <div className="item">
        <h1>{state}</h1>
        <button onClick={()=>{dispatch(state==intisla ? "true" : "false") 
        console.log(state==intisla ? "true" : "false")}}>Hide</button>
        </div>
    )
}
export default Reduser;