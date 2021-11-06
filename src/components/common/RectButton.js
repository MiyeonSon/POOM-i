import React from 'react';
import styled from "styled-components";


const StyledRectButton = styled.button`
  box-sizing: border-box;
  margin: ${props => props.margin || '0 0 0 1vw'};
  padding: 0.5vw 1vw;
  border-radius: 0.2vw;
  width: ${props => props.width || 'fit-content'};
  height: fit-content;
  background: ${props => props.backgroundColor || '#DEDEDE'};
  color: ${props => props.color || '#8E8E8E'};
  font-size: 0.8vw;
  font-weight: 700;
  font-family: 'LotteMartDream';
  letter-spacing: 0.1vw;
  border: none;
  cursor: pointer;
`;

const RectButton = ({width, margin, onClick, backgroundColor, color, children}) => {

    return (
        <StyledRectButton width={width} margin={margin} backgroundColor={backgroundColor} color={color}
                          onClick={onClick}>{children}</StyledRectButton>
    );
};

export default RectButton;
