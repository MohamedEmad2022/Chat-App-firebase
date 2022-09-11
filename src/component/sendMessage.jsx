
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { auth, db } from "../firebase"


const SendMessage = () => {

    const [input, setInput] = useState("")

    const SendingMassege = async (e)=>{
        e.preventDefault()
        if(input === ""){
            alert("cant send empty massege")
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, "messages"),{
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput("")
        
    }

    return (
        <>
            <form onSubmit={SendingMassege} className="bottom container p-0">
                <div className="input-group">
                    <input type="text" onChange={(e)=> setInput(e.target.value)} value={input} className="form-control" placeholder="Message"/>
                    <button className="btn btn-success" type="submit" id="button-addon2" onClick={SendingMassege}>Send</button>
                </div>
            </form>
        </>
    )

}

export default SendMessage