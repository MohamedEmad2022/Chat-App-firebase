import GoogleButton from "react-google-button"
import {auth} from "../firebase"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"


const googleSignIn = () => {
    const provider = new GoogleAuthProvider(auth)
    signInWithRedirect(auth, provider)
}
const SignIn = ()=> {

    return(
        <div className="d-flex">
            <GoogleButton onClick={googleSignIn} />
        </div>
    )
}

export default SignIn