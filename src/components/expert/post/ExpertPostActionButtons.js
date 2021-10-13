import React, { useState } from 'react';
import styled from 'styled-components';
import palette from "../../../lib/styles/palette";
import ExpertAskRemoveModal from "./ExpertAskRemoveModal";
import Modal from "../../common/Modal";
import FindRearingEditorContainer from "../../../containers/write/FindRearingEditorContainer";


const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;



const ExpertPostActionButtons = ({ onEdit, onRemove }) => {
    const [modal, setModal] = useState(false);
    const [editorModal, setEditorModal] = useState(false);

    const onEditClick = () => {
        setEditorModal(true);
        onEdit();   // 기존 데이터 write가 상태 관리하도록 넘김.
    }

    const onRemoveClick = () => {
        setModal(true);
    };
    const onCancel = () => {
        setModal(false);
    };
    const onConfirm = () => {
        setModal(false);
        onRemove();
    };



return (
<>
    <PostActionButtonsBlock>
        <ActionButton onClick={onEditClick}>수정</ActionButton>
        <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
    </PostActionButtonsBlock>

    {editorModal && <Modal><FindRearingEditorContainer /></Modal>}


    <ExpertAskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
    />
</>
);
};

export default ExpertPostActionButtons;