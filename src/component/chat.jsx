import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../firebase"
import Message from "./message"
import SendMessage from "./sendMessage"


const Chat = ()=>{
    const [messages, setMessages] = useState([])


    useEffect(()=>{
        const q =  query(collection(db, "messages"), orderBy("timestamp"));
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
            let messages =[]
            querySnapshot.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })

        return ()=> unsubscribe()

    },[])
    
    return(
        <>
        <div className="container main" >
            {messages && messages.map((message)=>{
                return <Message key={message.id} message= {message}/>
            })}
            
        </div>
        <SendMessage />
        
        </>
    )
}

export default Chat