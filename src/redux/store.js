import contentReducer from "./content-reducer"
import dialogReducer from "./dialog-reducer"

let store = {
   _state: {
      dialogPage: {
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
         newMessageBody: ''
      },
      contentPage: {
         postsData: [
            { id: "1", post: "Hi, how are you?", likeCount: "15" },
            { id: "2", post: "It's my first post", likeCount: "52" },
            { id: "3", post: "Wayyy!!!", likeCount: "30" },
         ],
         newPostText: { text: 'Illia' }
      }
   },
   _callSubscribe() { },


   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscribe = observer;
   },

   dispatch(action) {

      this._state.contentPage = contentReducer(this._state.contentPage, action)
      this._state.dialogPage = dialogReducer(this._state.dialogPage, action)

      this._callSubscribe(this._state)

   }

}

export default store;
