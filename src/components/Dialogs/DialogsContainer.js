import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './Message/Message';

<DialogItem />;
<Message />


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }       
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);














/* /* const DialogsContainer = (props) => {

    let state = props.store.getState().dialogPage
    /* 
    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> )
    let messageElements = state.messagesData
    .map(m =>  <Message textmessage={m.textmessage}/>)

    let newMessageBody = state.newMessageBody */ 

   /* let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    
    let onNewMessageChange = (body) => {
         props.store.dispatch(updateNewMessageBodyCreator(body))
         /* let action = updateNewMessageBodyCreator(body)
         props.store.dispatch(action) */
   /* } 

    return (
        <Dialogs updateNewMessageBody = {onNewMessageChange} 
            sendMessage ={onSendMessageClick}
            dialogPage = {state}
        />
    )
} */
