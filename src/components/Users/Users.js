import s from './Users.module.css'
import userPhoto from '../../assets/images/userPhoto.png';
import { NavLink } from 'react-router-dom';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} 
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div> 
        {

            props.users.map(u => <div key={u.id}> 
                <span>
                    <div>
                        <NavLink to={"/content/" + u.id} >
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </NavLink>
                    </div>
                    <div>

                        {u.followed ? <button className={s.buttonFoll} onClick={() => {

                            props.unfollow(u.id)

                        }}>Unfollow</button>
                            : <button className={s.buttonUnFoll} onClick={() => {

                                props.follow(u.id)

                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;