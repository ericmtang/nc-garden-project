import './Avatar.css';

const Avatar = ({firstName, lastName, img, header=false}) => {
    const fullName = `${firstName} ${lastName}`
    
    if (header !== false) {
        return (
            <span className="d-flex flex-row">
                <img src={img} alt={fullName} className="avatar headerAv ml-3" />
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