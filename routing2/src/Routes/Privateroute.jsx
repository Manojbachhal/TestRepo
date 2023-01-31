import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { validate } from "../Context/Authcontect";
function Privateroute({children}) {
  const {login, handle}= useContext(validate)
  if(login){
    return children
  }else{
    return <Navigate to='/login'/>
  }
}

export default Privateroute