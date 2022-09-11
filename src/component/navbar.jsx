import SignIn from "./SignIn"
import {auth} from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import LogOut from "./LogOut"


const Navbar = () => {
    const [user] = useAuthState(auth)
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <h1 className="d-flex text-white">Chat App</h1>

                 {user ? <LogOut /> : <SignIn />}   
                    
                </div>
                
            </nav>
        </>
    )
}

export default Navbar