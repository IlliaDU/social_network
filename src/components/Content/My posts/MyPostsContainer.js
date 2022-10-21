import { connect } from 'react-redux';
import { addPostActionCreator, newPostTextActionCreator } from '../../../redux/content-reducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) =>{
    return {
        postsData: state.contentPage.postsData,
        newPostText: state.contentPage.newPostText
    }
}
let mapDispatchToProps = (dispatch ) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(newPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;





/* const MyPostsContainer = (props) => {
    let state = props.store.getState(); */

    /* let postElement = props.postsData.map(p => <Post post={p.post} likeCount={p.likeCount} />)
    let newPostElement = React.createRef() */

   /*  let btnaddPost = () => { */
        /* let text = newPostElement.current.value; */
        //props.addPost();
        /* props.store.dispatch(addPostActionCreator()) */
    /* } */
   /*  let newText = (text) => { */
        //let text = newPostElement.current.value;
        // props.updateNewPostText(text)
      /*   let action = newPostTextActionCreator(text)
        props.store.dispatch(action)
    } */

/*     return (<MyPosts updateNewPostText={newText} 
                    addPost={btnaddPost} 
                    postsData={state.contentPage.postsData}
                    newPostText = {state.contentPage.newPostText}/>)
} */