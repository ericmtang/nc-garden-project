import './Avatar.css';

const Avatar = ({firstName, lastName, img}) => {
    const fullName = `${firstName} ${lastName}`
    return (
        <span className="d-flex flex-row">
            <h5 className="text-light align-self-center avatarText">{firstName} {lastName}</h5>
            <img src={img} alt={fullName} className="avatar m-3" />
        </span>
    )
}

export default Avatar;