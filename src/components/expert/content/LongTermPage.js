import React from 'react';
import styled from "styled-components";

import ContentHeader from "../../common/ContentHeader";
import Introduction from "../../common/Introduction";

import ProfileImage from "../../common/ProfileImage";

import PostListTemplate from "../PostListZone";
import NewPostInput from "../NewPostInput";
import PostBlock from "../../common/post/PostBlock";
import CommonHr from "../../common/CommonHr";
import Person from "../../common/assets/005-gardener.png";
import Pencil from "../../common/assets/pencil (1).png";
import Heart from "../../common/assets/like.png";


const LongTermPage = () => {
    // 작성된 글 제목 영역 레이아웃
    const PostTitleTemplate = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

    // 품앗이 반 정보 영역
    const PoomClassInfoArea = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
    `;

    // 품앗이 반 제목
    const PoomClassTitle = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
      margin: 0.5vw 0;
      color: #565656;
      font-size: 1.2vw;
    `;

    // 품앗이 반 활동 시간
    const PoomClassTime = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
      color: #AAAAAA;
      font-size: 0.8vw;
      font-weight: 300;
    `;

    // 글 작성자
    const WriterInfo = styled.div`
      box-sizing: border-box;
      width: fit-content;
      height: fit-content;
      margin: 0 0.25vw;
      display: inline-block;
      color: #565656;
      font-size: 0.8vw;
      font-weight: 300;
    `;


    // 이미지 영역 레이아웃
    const AttachedImgTemplate = styled.div`
      box-sizing: border-box;
      width: 100%;
      height: 10vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

    // 이미지 첨부 사진 영역(한 공간에 최대 3장 출력)    
    const AttachedImgArea = styled.div`
      box-sizing: border-box;
      width: 85%;
      height: 10vw;
      text-align: center;
    `;

    // 첨부된 이미지 스타일링
    const StyledAttachedImg = styled.div`
      box-sizing: border-box;
      display: inline-block;
      margin: 0 0.3vw;
      width: 30%;
      height: 10vw;
      background-color: #F2F2F2;
    `;

    // 첨부된 이미지를 보기 위한 이동 버튼
    const StyledButton = styled.button`
      width: fit-content;
      height: 100%;
      font-family: 'BMJUA';
      font-size: 2vw;
      color: #DEDEDE;
      background: none;
      border: none;
      cursor: pointer;
    `;

    // 댓글
    const StyledComment = styled.div`
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      height: fit-content;
      margin: 1vw 0 0;
      padding: 0vw 1vw;
      text-align: right;
      color: #565656;
      font-weight: 300;
      font-size: 0.8vw;
    `;

    const PostContent = styled.div`
      box-sizing: border-box;
      height: fit-content;
      font-size: 1vw;
      margin: 1vw 0 2vw;
    `;

    return (
        <div>
            <ContentHeader>품앗이 반 찾기</ContentHeader>
            <Introduction>
                품앗이 반은 품앗이 반을 이루는 가족끼리 정기적으로 모여 자발적으로 활동을 하는 모입입니다! <br/>
                품앗이 반에 참여하여 아이의 친구들과 재미있는 활동을 시작해보아요 :)
            </Introduction>

            <PostListTemplate>
                <PostBlock postInput={true}>
                    <ProfileImage size={4} imgSrc={Person}></ProfileImage>
                    <NewPostInput content={'FindClass'}>
                        글 작성하기...
                        <img src={Pencil} alt="작성" style={{width: "1.2vw"}}/>
                    </NewPostInput>
                </PostBlock>

                <CommonHr/>

                <PostBlock postInput={false}>
                    <PostTitleTemplate>
                        <PoomClassInfoArea>
                            <PoomClassTitle>
                                우리동네 품앗이 <WriterInfo>작성자 : 준이맘</WriterInfo>
                            </PoomClassTitle>
                            <PoomClassTime>활동시간 : 매주 수요일 17시</PoomClassTime>
                        </PoomClassInfoArea>
                        <img src={Heart} style={{width: "1.25vw", height: "1.25vw"}}/>
                    </PostTitleTemplate>

                    <PostContent>
                        오랜만에 야외로 나가보았습니다~ <br/>
                        오랜만의 야외활동이라 그런지 아이들이 너무 좋아해서 즐거운 활동이었습니다. <br/>
                        기존에 만들었던 천막을 활용해 놀이를 하니 아이들도 뿌듯함을 느끼더라구요!
                    </PostContent>

                    <AttachedImgTemplate>
                        <StyledButton> &lt; </StyledButton>

                        <AttachedImgArea>
                            <StyledAttachedImg/>
                            <StyledAttachedImg/>
                            <StyledAttachedImg/>

                        </AttachedImgArea>

                        <StyledButton> > </StyledButton>
                    </AttachedImgTemplate>

                    <StyledComment>댓글 5</StyledComment>
                </PostBlock>

                <PostBlock postInput={false}>
                    <PostTitleTemplate>
                        <PoomClassInfoArea>
                            <PoomClassTitle>
                                우리동네 품앗이 <WriterInfo>작성자 : 준이맘</WriterInfo>
                            </PoomClassTitle>
                            <PoomClassTime>활동시간 : 매주 수요일 17시</PoomClassTime>
                        </PoomClassInfoArea>
                        <img src={Heart} style={{width: "1.25vw", height: "1.25vw"}}/>
                    </PostTitleTemplate>

                    <PostContent>
                        오랜만에 야외로 나가보았습니다~ <br/>
                        오랜만의 야외활동이라 그런지 아이들이 너무 좋아해서 즐거운 활동이었습니다. <br/>
                        기존에 만들었던 천막을 활용해 놀이를 하니 아이들도 뿌듯함을 느끼더라구요!
                    </PostContent>

                    <AttachedImgTemplate>
                        <StyledButton> &lt; </StyledButton>

                        <AttachedImgArea>
                            <StyledAttachedImg/>
                            <StyledAttachedImg/>
                            <StyledAttachedImg/>

                        </AttachedImgArea>

                        <StyledButton> > </StyledButton>
                    </AttachedImgTemplate>

                    <StyledComment>댓글 5</StyledComment>
                </PostBlock>

            </PostListTemplate>
        </div>
    );
};

export default LongTermPage;
