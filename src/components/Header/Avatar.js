import './Avatar.css';

const Avatar = ({firstName, lastName, img, right=false}) => {
    const fullName = `${firstName} ${lastName}`
    
    if (right === false) {
        return (
            <span className="d-flex flex-row">
                <img src={img} alt={fullName} className="avatar m-3" />
                <h5 className="text-light align-self-center avatarText">{firstName} {lastName}</h5>
            </span>
        );
    } else {
        return (
            <span className="d-flex flex-row">
                <h5 className="align-self-center avatarText">{firstName} {lastName}</h5>
                <img src={img} alt={fullName} className="avatar m-3" />
            </span>
        );
    }
}

export default Avatar;