import React, {useState} from 'react';
import styled from 'styled-components';
import MainLogo from "../../../common/assets/mainLogo.png";
import {StyledInput} from "../../../common/styling/StyledInput";
import RectButton from "../../../common/RectButton";
import client from "../../../../lib/api/client";
import {CommonHr} from "../../../common/styling/StyledTag";

const VoteBackground = styled.div`
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

const VoteTemplate = styled.div`
  box-sizing: border-box;
  width: 35vw;
  height: fit-content;

  background: white;
  border-radius: 3rem;
  padding: 2vw;
`;

const LogoBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 10vw;
`;

const TitleBlock = styled.div`
  box-sizing: border-box;
  margin: 1vw 0 0.2vw;
  width: 100%;

  text-align: center;
  font-size: 1.2vw;
  line-height: 1.7vw;
`;

const ContentTemplate = styled.div`
  box-sizing: border-box;
  width: 100%;
`;


const CategoryItemBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0.2vw;
`;

const CategoryItemTitle = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 0.9vw;
`;

const CategoryItemContent = styled.div`
  box-sizing: border-box;
  width: 30vw;
  padding: 0;
  margin: 0;

  font-size: 0.8vw;
  font-weight: 300;
  line-height: 1vw;
`;

const PlaceImg = styled.img`
  box-sizing: border-box;
  width: 15vw;
`;

const VoteContent = ({voteId, info}) => {
    const {address, detail_address, purpose_using, expired_at, image_uris} = info.data;

    const [dong, setDong] = useState('');
    const [ho, setHo] = useState('');
    const [vote, setVote] = useState('');

    const onSubmit = () => {
        console.log(dong);
        console.log(ho);
        console.log(vote);

        client.post(`/vote/${voteId}`, {
            dong: dong,
            ho: ho,
            vote_type: vote
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then( r =>
            alert('????????? ?????????????????????')
        );
    }

    return (
        <VoteTemplate>
            <LogoBlock>
                <LogoImg src={MainLogo} alt={'????????????'}/>
            </LogoBlock>

            <TitleBlock>
                <span style={{color: '#4E7093'}}>" {address} {detail_address} "</span>??? <br/>
                ????????? ?????? ???????????? ?????? ?????? ?????? <br/>
            </TitleBlock>
            <div style={{fontSize: '0.9vw', color: '#70707099', textAlign: 'center'}}>
                ( ?????? ????????? : {expired_at} )
            </div>

            <ContentTemplate>
                <div style={{margin: '1vw 0 2vw', textAlign: 'center'}}>
                    <PlaceImg src={image_uris} alt={"????????? ??? ?????????"}/>
                </div>
                <CategoryItemBlock>
                    <CategoryItemTitle>[ ?????? ?????? ]</CategoryItemTitle>
                    <CategoryItemContent dangerouslySetInnerHTML={{__html: purpose_using}}/>
                </CategoryItemBlock>

                <CommonHr margin={'0.5vw 0'}/>

                <CategoryItemBlock style={{
                    display: 'flex',
                    alignItems: 'flexEnd'
                }}>
                    <CategoryItemTitle>* ?????? ???????????? ???/?????? ????????? ??????????????????. : &nbsp;
                        <StyledInput width={'3vw'} onChange={(e) => setDong(`${e.target.value}???`)}/>??? &nbsp;
                        <StyledInput width={'3vw'} onChange={(e) => {
                            setHo(`${e.target.value}???`)
                        }}/>???
                    </CategoryItemTitle>

                </CategoryItemBlock>

                <CategoryItemBlock>
                    <CategoryItemTitle>
                        * ?????? ????????? ????????? ?????? ???????????? ?????? ???????????????????
                    </CategoryItemTitle>
                    <div id={'radioBlock'} style={{margin: '0.7vw 0.5vw'}}
                         onClick={(e) => setVote(`${e.target.value}`)}>
                        <label><input type="radio" name={'spaceVote'} value={'AGREE'}/> ???, ???????????????.</label>
                        <label><input type="radio" name={'spaceVote'} value={'DISAGREE'}/> ?????????, ???????????????.</label>
                    </div>
                </CategoryItemBlock>

            </ContentTemplate>

            <div style={{textAlign: 'right'}}>
                <RectButton backgroundColor={'#FFB663'} onClick={onSubmit}>?????? ??????</RectButton>
            </div>
        </VoteTemplate>
    );
};


const VoteSpaceInfo = ({voteId, info, error, loading}) => {
    if (error) {
        return <div>?????? ??????</div>
    }

    return (
        <VoteBackground>
            {!loading && info && (
                <VoteContent voteId={voteId} info={info}/>
            )}
        </VoteBackground>
    );
};

export default VoteSpaceInfo;
