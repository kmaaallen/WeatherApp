import React from 'react';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInImage = styled.div`
    animation: 10s ${fadeInAnimation};
    background-size: cover;
    height: 100vh;
`;

function Background(props) {
    return (
        <FadeInImage
            key={props.background}
            style={{ backgroundImage: `url(${props.background})` }}>
            {props.children}
        </FadeInImage>
    );
}

export default Background;