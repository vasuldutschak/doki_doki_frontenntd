import PropTypes from "prop-types";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #1e1e1e;
    color: #aaa;
    text-align: center;
    padding: 20px 10px; 
    width: 100%;
    border-top: 1px solid #444;
    font-size: 14px;
`

const Footer = ({cssClasses,...allyProps}) => {
    return (
        <FooterContainer className={cssClasses} {...allyProps}>
            <div className="content-container">
                <p style={{margin: '5px 0'}}>Developed by: <span style={{color: '#fff'}}>Vasyl Dutchak</span></p>
                <p style={{margin: '5px 0'}}>© {new Date().getFullYear()} All rights reserved</p>
            </div>
        </FooterContainer>
    );
};

Footer.propTypes = {
    cssClasses: PropTypes.string,
    allyProps: PropTypes.object // Props passed to FooterContainer
};


export default Footer;