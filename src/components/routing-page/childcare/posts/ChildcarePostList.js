import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {setOriginalPost} from "../../../../modules/childcare/childcareWrite";
import {
    likedCancelChildCarePost,
    likedChildCarePost,
    removeChildcarePost
} from "../../../../lib/api/childcare/childcarePosts";
import ChildcarePostActionButtons from "../post/ChildcarePostActionButtons";
import PostItemTemplate from "../../../common/post/PostItemTemplate";
import HorizontalWriterInfo from "../../../common/user-info/HorizontalWriterInfo";
import UnderlinedDivision from "../../../common/UnderlinedDivision";
import {IoHeartOutline, IoHeart} from "react-icons/io5";
import Modal from "../../../common/Modal";
import RectButton from "../../../common/RectButton";
import ContainerApplyChildcareEditor
    from "../../../../containers/childcare/apply-write/ContainerApplyChildcareEditor";
import {getExpertId} from "../../../../modules/childcare/childcareApplyWrite";
import ContainerApplyChildcarePostList
    from "../../../../containers/childcare/apply-posts/ContainerApplyChildcarePostList";
import {PostContent, PostCreateDate} from "../../../common/post/PostInfo";


const PostHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
`;


const PostFooter = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SeparateArea = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InterestBlock = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: fit-content;
  height: fit-content;
  color: #565656;
  font-weight: 300;
  font-size: 0.9vw;
`;


const ChildcarePostItem = ({childcarePost}) => {
    const dispatch = useDispatch();
    const {
        created_at,
        writer,
        contents,
        writer_score,
        recruit_type,
        recruitment_status,
        expert_id,
        start_date,
        start_time,
        end_date,
        end_time,
        liked_count,
        applied_count,
        apply_status,
        like_status
    } = childcarePost;

    const {nick, token} = useSelector(({user}) => ({
        nick: user.userInfo.nick,
        token: user.token
    }));

    // ???????????? ??????/?????? ????????? ??? ??? ????????? ???????????? ??????
    const ownPost = nick === writer;

    // ????????? ??? ????????? ?????? ??????
    const onEdit = () => {
        dispatch(setOriginalPost(childcarePost));
    }

    // ????????? ??? ????????? ?????? ??????
    const onRemove = async () => {
        try {
            await removeChildcarePost(token, expert_id);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }


    // ????????? ??? ?????? ??? ?????? ??? ??? ?????? Modal ??? ??????
    const [supportModal, setSupportModal] = useState(false);
    const onSupport = () => {
        dispatch(getExpertId(childcarePost));
        setSupportModal(true);
    }

    const onClose = () => {
        setSupportModal(false);
    }

    /*
     * ????????? ??? ????????? ????????? ?????? ??????
     * Redux??? ???????????? ?????? api??? ???????????? ????????? ???????????? ???????????? ?????????.
     */
    const [liked, setLiked] = useState(false);
    const [likedNum, setLikedNum] = useState(liked_count);

    // ????????? ?????? ??????
    const onLiked = async () => {
        setLiked(true);
        likedChildCarePost(token, expert_id).then(r => {
            setLikedNum(liked_count + 1);
        });
    }
    // ????????? ?????? ????????????
    const onLikedCancel = async () => {
        setLiked(false);
        likedCancelChildCarePost(token, expert_id).then(r => {
            setLikedNum(liked_count);
        });
    }


    return (
        <>
            <PostItemTemplate type={recruit_type}>
                <PostHeader>
                    <HorizontalWriterInfo user={writer} review={writer_score}/>
                    {ownPost && <ChildcarePostActionButtons onEdit={onEdit} onRemove={onRemove}/>}
                </PostHeader>
                <br/>

                <UnderlinedDivision margin={'1vw 0 1.5vw'}>
                    ?????? ?????? : {`${start_date} ${start_time} ~ ${end_date} ${end_time}`}
                </UnderlinedDivision>

                <PostContent dangerouslySetInnerHTML={{__html: contents}}/>
                <PostCreateDate>????????? : {created_at}</PostCreateDate>


                <PostFooter>
                    <SeparateArea>
                        <InterestBlock>
                            ?????? {applied_count}
                            &nbsp; &nbsp;
                            ?????? {likedNum}
                        </InterestBlock>
                    </SeparateArea>

                    <SeparateArea>
                        {
                            liked || like_status === 'LIKE' ? (
                                <IoHeart onClick={onLikedCancel} size={'1.5vw'}
                                         color={'#FF5151'} style={{cursor: 'pointer'}}/>
                            ) : (
                                <IoHeartOutline onClick={onLiked} size={'1.5vw'}
                                                style={{cursor: 'pointer'}}/>
                            )
                        }

                        {recruitment_status === 'CLOSED' ? (
                            <RectButton backgroundColor={"#AAAAAA"}>?????? ??????</RectButton>
                        ) : (
                            (nick === writer || apply_status === "APPLY") ? (
                                <div>
                                    <RectButton backgroundColor={"#AAAAAA"} onClick={() => setSupportModal(true)}>
                                        ????????? ??????
                                    </RectButton>
                                    {
                                        supportModal &&
                                        <Modal width={'38vw'} visible={supportModal} onClose={onClose}>
                                            <ContainerApplyChildcarePostList writer={writer}
                                                                             expertId={expert_id}/>
                                        </Modal>
                                    }
                                </div>
                            ) : (
                                <div>
                                    <RectButton backgroundColor={"#FFB663"} onClick={onSupport}>????????????</RectButton>
                                    {
                                        supportModal &&
                                        <Modal visible={supportModal} onClose={onClose}>
                                            <ContainerApplyChildcareEditor/>
                                        </Modal>
                                    }
                                </div>
                            )

                        )}
                    </SeparateArea>
                </PostFooter>
            </PostItemTemplate>
        </>
    );
};


const ChildcarePostList = ({childcarePosts, loading, error}) => {
    if (error) {
        console.log(error);
        return <div>?????? ??????</div>
    }

    return (
        <>
            {!loading && childcarePosts && (
                <div>
                    {childcarePosts.data.slice(0).reverse().map(childcarePost => (
                        <ChildcarePostItem childcarePost={childcarePost} key={childcarePost.expert_id}/>
                    ))}

                </div>
            )}

        </>

    );
};

export default ChildcarePostList;