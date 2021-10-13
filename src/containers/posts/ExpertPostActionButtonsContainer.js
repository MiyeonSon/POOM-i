import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updatePost} from "../../modules/expertWrite";
import ExpertPostActionButtons from "../../components/expert/post/ExpertPostActionButtons";

const ExpertPostActionButtonsContainer = ({ onEdit, onRemove }) => {
    const dispatch = useDispatch();

    const {
        contents,
        recruit_type,
        child_id,
        start_date,
        start_time,
        end_date,
        end_time,
        post,
        postError,
        originalPostId
    } = useSelector(({write}) => ({
        contents: write.contents,
        recruit_type: write.recruit_type,
        child_id: write.child_id,
        start_date : write.start_date,
        start_time: write.start_time,
        end_date: write.end_date,
        end_time : write.end_time,
        post: write.post,
        postError: write.postError,
        originalPostId: write.originalPostId
    }));

    const onPublish = () => {
        if (originalPostId) {
            dispatch(updatePost({
                contents,
                recruit_type,
                child_id,
                start_date,
                start_time,
                end_date,
                end_time,
                post,
                postError,
                expert_id: originalPostId
            }))
            return;
        }
    }

    return (
        <ExpertPostActionButtons

        />
    );
};

export default ExpertPostActionButtonsContainer;
