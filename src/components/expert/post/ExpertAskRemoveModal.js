import React from 'react';
import AskModal from "../../common/AskModal";

const ExpertAskRemoveModal = ({visible, onConfirm, onCancel}) => {
    return (
        <AskModal visible={visible}
                  description={"글을 정말 삭제하시겠습니까?"}
                  confirmText={'삭제'}
                  onConfirm={onConfirm}
                  onCancel={onCancel}
        />
    );

};

export default ExpertAskRemoveModal;