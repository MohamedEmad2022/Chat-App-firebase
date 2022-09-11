
import './App.css';
import Navbar from './component/navbar';
import { auth } from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Chat from './component/chat';

function App() {

  const [user] = useAuthState(auth)

  return (

    <div className='container p-0 ' style={{ height: "auto" }}>
      <div className=" shadow rela" style={{ height: "auto" }}>
        <Navbar />
        {user && <Chat />}

      </div>

    </div>

  );
}

export default App;
