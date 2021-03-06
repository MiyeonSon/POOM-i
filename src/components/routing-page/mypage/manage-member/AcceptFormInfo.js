import React, {useState} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import client from "../../../../lib/api/client";
import {NoListGrayComment} from "../../../common/NoListComment";
import {BsTriangleFill} from "react-icons/bs";
import {FileLink} from "../../../common/mypage/StyledLink";
import RectButton from "../../../common/RectButton";

const FormInfoTemplate = styled.div`
  box-sizing: border-box;
  margin: 1vw 0;
  padding: 2vw 2vw;
  width: 100%;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #AAAAAA;
  border-radius: 14px;

  .nonRotate {
    transform: rotate(0);
  }

  .rotate {
    transform: rotate(180deg);
  }
`;

const FormInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormInfoHeader = styled.div`
  box-sizing: border-box;
  width: 90%;
  margin-left: 1vw;
  font-size: 1.1vw;
  font-weight: 700;
  cursor: pointer;
`;

const FormInfoMoreBlock = styled.div`
  box-sizing: border-box;
  margin: 1vw 2vw 0;
  font-size: 1vw;
  font-weight: 400;
  line-height: 2vw;
`;

const TextBlock = styled.div`
  box-sizing: border-box;
  margin: 0 1vw;
  padding: 1vw;
  font-size: 0.9vw;
  font-weight: 300;
  background-color: #F5F5F5;
`;

const FormInfo = ({form}) => {
    const {vote_id, purpose_using, registrant_nick, residence_info, vote_address_info} = form;

    const checkAddress = () => {
        const addressCheck = residence_info.address.trim() === vote_address_info.address.trim();
        const extraCheck = residence_info.extra_address.trim() === vote_address_info.extra_address.trim();

        return addressCheck && extraCheck;
    }

    const {token} = useSelector(({user}) => ({
        token: user.token
    }));

    const acceptForm = () => {
        client.patch(`admin/approve/vote?vote_id=${vote_id}`, {}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        window.location.reload();
    }

    const [click, setClick] = useState(false);

    return (
        <FormInfoTemplate>
            <FormInfoBlock>
                <BsTriangleFill className={click ? 'rotate' : 'nonRotate'} color={'#AAAAAA'} size={'1vw'}/>

                <FormInfoHeader onClick={() => setClick(!click)}>
                    ?????? ?????? :
                    ({vote_address_info.post_code}) {vote_address_info.address} {vote_address_info.detail_address} {vote_address_info.extra_address}
                </FormInfoHeader>
                <RectButton width={'4vw'} backgroundColor={'#FFB663'} type={'button'} onClick={acceptForm}>??????</RectButton>
            </FormInfoBlock>

            {
                click && (
                    <FormInfoMoreBlock>
                        *  ??? ????????? : {registrant_nick} <br/>
                        *  ????????? ??? ?????? ?????? ?????? : {checkAddress() ? '??????' : '?????????'}
                        <FileLink marginLeft={'0.5vw'} onClick={() => window.open(residence_info.certification_info.residence_file_URL)}>
                            ?????? ?????? ?????? ???????????? >
                        </FileLink>
                        <br/>
                        *  ?????? ??????
                        <TextBlock dangerouslySetInnerHTML={{__html: purpose_using}} />
                    </FormInfoMoreBlock>
                )
            }
        </FormInfoTemplate>
    );
}

const AcceptFormInfo = ({formList, error, loading}) => {
    if (error) {
        return <div>?????? ??????</div>
    }

    return (
        <>
            {
                !loading && formList && (
                    formList.data.length === 0 ? (
                        <NoListGrayComment>????????? ????????? ??? ?????? ?????? ???????????? ????????????.</NoListGrayComment>
                    ) : (
                        <div>
                            {console.log(formList.data.length)}
                            {
                                formList.data.map(form => (
                                    <FormInfo form={form} key={form.vote_id}/>
                                ))
                            }
                        </div>
                    )
                )}
        </>
    );
};

export default AcceptFormInfo;
