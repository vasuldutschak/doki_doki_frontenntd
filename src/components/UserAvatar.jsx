import PropTypes from 'prop-types';
import styled from "styled-components";

const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover; /* Щоб зображення виглядало акуратно */
    margin-right: 15px;
    border: 2px solid #1db954;
`

const UserAvatar = ({ avatarStyle='Transparent', topType="LongHairStraight", accessoriesType='Prescription01', hairColor='Blonde', facialHairType='Blank', clotheType='BlazerShirt', eyeType='Default', eyebrowType='Default', mouthType='Default', skinColor='Light', alt='user avatar', cssClasses }) => {
    const avatarUrl = `https://avataaars.io/?avatarStyle=${avatarStyle}&topType=${topType}&accessoriesType=${accessoriesType}&hairColor=${hairColor}&facialHairType=${facialHairType}&clotheType=${clotheType}&eyeType=${eyeType}&eyebrowType=${eyebrowType}&mouthType=${mouthType}&skinColor=${skinColor}`;

    return <Avatar src={avatarUrl} alt={alt} className={cssClasses} />;
};

UserAvatar.propTypes = {
    avatarStyle: PropTypes.string,
    topType: PropTypes.string,
    accessoriesType: PropTypes.string,
    hairColor: PropTypes.string,
    facialHairType: PropTypes.string,
    clotheType: PropTypes.string,
    eyeType: PropTypes.string,
    eyebrowType: PropTypes.string,
    mouthType: PropTypes.string,
    skinColor: PropTypes.string,
    alt: PropTypes.string,
    cssClasses: PropTypes.string,
};


export default UserAvatar;
