import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {childcareListPosts} from "../../../modules/childcare/childcarePosts";
import {getChildList} from "../../../modules/detailInfo/detailInfo";

import ChildcarePostList from "../../../components/routing-page/childcare/posts/ChildcarePostList";

const ContainerChildcarePostList = () => {
    const dispatch = useDispatch();
    const {posts, error, loading, token} = useSelector(
        ({childcarePosts, loading, user}) => ({
            posts: childcarePosts.posts,
            error: childcarePosts.error,
            loading: loading['posts/EXPERT_LIST_POSTS'],
            token: user.token
        })
    );


    useEffect(() => {
        dispatch(childcareListPosts(token));
        dispatch(getChildList(token));
    }, [dispatch, token]);


    return (
        <>
            <ChildcarePostList
                loading={loading}
                error={error}
                childcarePosts={posts}
            />
        </>

    );
};

export default ContainerChildcarePostList;


