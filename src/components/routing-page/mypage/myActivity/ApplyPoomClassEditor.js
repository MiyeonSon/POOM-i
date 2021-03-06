import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import Quill from "quill";
import 'quill/dist/quill.bubble.css';
import {CategoryBlock, SmallTitle} from "../../../common/post/StyledEditor";
import {StyledSelect} from "../../../common/styling/StyledInput";
import {useSelector} from "react-redux";

const CategoryContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 0 0.5vw;
`;

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */

  .ql-editor {
    box-sizing: border-box;
    width: 100%;
    height: 12vh;
    font-family: paybooc-Medium;
    font-size: 0.8vw;
    line-height: 1.5;
    background-color: #F3F3F3;
  }

  // placeholder css
  .ql-editor.ql-blank::before {
    font-family: paybooc-Medium;
    font-style: normal;
  }
`;

const ApplyPoomClassEditor = ({onChangeField, contents, childId}) => {
    const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
    const quillInstance = useRef(null); // Quill 인스턴스를 설정

    const {childList} = useSelector(({detailInfo}) => ({
        childList : detailInfo.childList
    }));

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: '내용을 작성하세요...',
            modules: {
                // 더 많은 옵션
                // https://quilljs.com/docs/modules/toolbar/ 참고
                toolbar: [
                    [{header: '1'}, {header: '2'}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
            },
        });

        // quill에 text-change 이벤트 핸들러 등록
        // 참고: https://quilljs.com/docs/api/#events
        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source) => {
            if (source === 'user') {
                onChangeField({key: 'contents', value: quill.root.innerHTML});
            }
        });
    }, [onChangeField]);

    return (
        <div>
            <CategoryBlock>
                <SmallTitle>* 자녀</SmallTitle>
                <CategoryContent>
                    <StyledSelect onChange={(e) => onChangeField({key:'childId', value : e.target.value})}>
                        <option value="null">-</option>
                        {
                            childList.data.map(child => (
                                <option value={child.child_id} key={child.child_id}>{child.name}</option>
                            ))
                        }
                    </StyledSelect>
                </CategoryContent>
            </CategoryBlock>

            <CategoryBlock style={{padding: '0'}}>
                <SmallTitle>* 내용</SmallTitle>
                <CategoryContent>
                    <QuillWrapper>
                        <div ref={quillElement}/>
                    </QuillWrapper>
                </CategoryContent>

            </CategoryBlock>
        </div>
    );
};

export default ApplyPoomClassEditor;
