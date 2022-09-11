import { auth } from "../firebase"


const Message = ({message}) => {

    const messageClassName = message.uid === auth.currentUser.uid ? "sent" : "recived"
    return(
        <div >
            <div className={`${messageClassName} message-con`} >
                <div className="p-con">
                    <p className="p-name" >{message.name}</p>
                <p className="fs-6 m-0">{message.text}</p>
                </div>
                
            </div>
        </div>
    )
}
export default Message