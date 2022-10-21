import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
    
    let postElement = props.postsData.map(p => <Post post={p.post} likeCount={p.likeCount} />)
    let newPostElement = React.createRef()

    let btnaddPost = () => {
        //let text = newPostElement.current.value; 
        props.addPost();
        //props.dispatch(addPostActionCreator())
    }
    let newText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        /*  let action = newPostTextActionCreator(text)
            props.dispatch(action)  */
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={newText} className={s.pole}></textarea>
                </div>
                <div>
                    <button onClick={btnaddPost} className={s.btn}>New Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
                {/* <Post post={postsData[0].post} likeCount={postsData[0].likeCount}/>
                <Post post={postsData[1].post} likeCount={postsData[1].likeCount}/>
                <Post post={postsData[2].post} likeCount={postsData[2].likeCount}/> */}
            </div>
        </div>

    )
}

export default MyPosts;