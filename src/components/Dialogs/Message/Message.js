import React from 'react'
import s from './Message.module.css'

const Message = (props) => {

/*     let newMessage = React.createRef();

    let send = () => {
        let message = newMessage.current.value;
        alert(message)
    } */

    return (
        <div>
            <div className={s.message}>
                {props.textmessage}
            </div>
            {/* <div>
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={send}>Send</button>
                </div>
            </div> */}
        </div>
    )
}

export default Message;