import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


<DialogItem />;
<Message />



const Dialogs = (props) => {

    let state = props.dialogPage
    
    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key = {d.id} id={d.id} /> )
    let messageElements = state.messagesData
    .map(m =>  <Message textmessage={m.textmessage} key = {m.id}/>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
        //props.store.dispatch(sendMessageCreator())
    }
    
    let onNewMessageChange = (e) => {
         let body = e.target.value
         props.updateNewMessageBody(body)
         //props.store.dispatch(updateNewMessageBodyCreator(body))
         /* let action = updateNewMessageBodyCreator(body)
         props.store.dispatch(action) */
    }

    return (
        
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            
            {dialogsElements}
               {/*  <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}  />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} /> */}
            </div>
            <div className={s.messages}>
             <div>{messageElements}</div>
             <div>
                 <div><textarea value={newMessageBody} onChange= {onNewMessageChange} placeholder='Enter your message'></textarea></div>
                 <div><button onClick = { onSendMessageClick }>Send</button></div>
             </div>
                {/* <Message textmessage={messagesData[0].textmessage}/>
                <Message textmessage={messagesData[1].textmessage}/>
                <Message textmessage={messagesData[2].textmessage}/> */}
            </div>
            
        </div>
        
    )
}

export default Dialogs;