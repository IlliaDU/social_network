import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css'


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
        <div className={s.dialogAvatar}>
        <img  src='https://mena.org.ua/wp-content/uploads/2014/03/avatar.png'/>
        </div>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;