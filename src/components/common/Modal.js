import React from 'react';
import styled from 'styled-components';
import MainLogo from "./assets/mainLogo.png";

// 모달의 회색 뒷배경을 담당함.
const ModalTemplate = styled.div`  
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(222, 222, 222, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달창을 담당함.
const ModalBlock = styled.div`
  box-sizing: border-box;
  width: ${props => props.width || '30vw'};
  height: fit-content;
  max-height: 85vh;
  background: white;
  border-radius: 3rem;
  padding: 2vw 3vw 3vw;

  .closeButton {
    box-sizing: border-box;
    display: block;
    width: fit-content;
    height: fit-content;
    float: right;
    font-family: 'LotteMartDream';
    font-size: 1.5vw;
    font-weight: 400;
    color: #707070;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

// 모달창 내부의 Title을 담당함.
const ModalTitleBlock = styled.div`
  box-sizing: border-box;
  padding: 0.5vw;
  width: 100%;
  flex: fit-content;
  display: flex;
  justify-content: center;
  
`;

const ModalLogoBlock = styled.div`
  box-sizing: border-box;
  width: 20vw;
  display: flex;
  justify-content: center;

  img {
    width: 12vw;
    height: fit-content;
  }
`;

const ModalContent = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-top: 1vw;
`;


// 부모 props를 변경하여 다시 돌려주는 형태 고민.
const Modal = ({width, visible, onClose, children}) => {
    if(!visible) return null;

    return (
        <>
            <ModalTemplate>
                <ModalBlock width={width}>
                    <button className={"closeButton"} onClick={onClose}>X</button>
                    <ModalTitleBlock>
                        <ModalLogoBlock>
                            <img className={"mainLogo"} src={MainLogo} alt={"로고창"}/>
                        </ModalLogoBlock>
                    </ModalTitleBlock>

                    <ModalContent>
                        {children}
                    </ModalContent>
                </ModalBlock>
            </ModalTemplate>}

        </>
    );
};

export default Modal;
