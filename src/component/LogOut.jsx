import { signOut } from "firebase/auth";
import {auth} from "../firebase"


const LogOut = () => {

const SignOut = () => {
    signOut(auth)
}
    return(
        <button className="btn btn-light" onClick={SignOut}> LogOut
        </button>
    )
}

export default LogOut