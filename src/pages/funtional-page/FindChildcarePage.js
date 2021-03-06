import React from 'react';
import DefaultSetting from "../../components/common/layout/DefaultSetting";
import PageContentTemplate from "../../components/common/layout/PageContentTemplate";

import SideNaviTemplate from "../../components/layout/sideNavi/SideNaviTemplate";
import SideTitle from "../../components/layout/sideNavi/SideTitle";
import SideElem from "../../components/layout/sideNavi/SideElem";

import ChildcarePage from "../../components/routing-page/childcare/ChildcarePage";

const FindChildcarePage = () => {
    return (
        <>
            <DefaultSetting>
                <SideNaviTemplate>
                    <SideTitle>품앗이 찾기</SideTitle>
                    <SideElem title={"품앗이 꾼 찾기"} link={"/childcare"} select />
                    <SideElem title={"품앗이 반 찾기"} link={"/class"} />
                </SideNaviTemplate>

                <PageContentTemplate>

                    <ChildcarePage/>

                </PageContentTemplate>
            </DefaultSetting>
        </>
    );
};

export default FindChildcarePage;
