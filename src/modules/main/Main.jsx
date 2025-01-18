import PropTypes from "prop-types";
import styled from "styled-components";

const MainContainer = styled.main`
    margin-top: 60px;
    flex: 1;
`

function Main({children,cssClasses,...allyProps}) {
    return (
        <MainContainer role="main" className={cssClasses} {...allyProps}>{children}</MainContainer>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired, // Обов'язковий дочірній контент (React-компоненти, текст, тощо)
    allyProps: PropTypes.object,
    cssClasses:PropTypes.string,// Додаткові властивості (опціонально)
};



export default Main