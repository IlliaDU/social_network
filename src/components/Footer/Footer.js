import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.foot}>
            <div className={s.text}>
                <h1 >It's my social network!</h1>
                <h2>Copyright reserved!</h2>
            </div>
        </div>
    )
}

export default Footer;