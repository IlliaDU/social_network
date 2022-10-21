const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogsData: [
       { id: "1", name: "Illia" },
       { id: "2", name: "Victor" },
       { id: "3", name: "Sasha" },
       { id: "4", name: "Sveta" },
       { id: "5", name: "Valera" },
    ],
    messagesData: [
       { id: "1", textmessage: "Hi" },
       { id: "2", textmessage: "How are you?" },
       { id: "3", textmessage: " I'am okay)" },

    ],
    newMessageBody: ""
 }

const dialogReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            } 
        }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, { id: "6", textmessage: body }]
            }
        default:
            return state;
        }
    

}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export default dialogReducer;