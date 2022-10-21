const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
       { id: "1", post: "Hi, how are you?", likeCount: "15" },
       { id: "2", post: "It's my first post", likeCount: "52" },
       { id: "3", post: "Wayyy!!!", likeCount: "30" },
    ],
    newPostText: "Illia",
    profile: null
 }

const contentReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: state.newPostText,
                likeCount: 34
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ' '
            }
        }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const newPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}



export default contentReducer;