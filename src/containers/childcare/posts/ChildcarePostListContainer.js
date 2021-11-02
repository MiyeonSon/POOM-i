import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ChildcarePostList from "../../../components/routing-page/childcare/posts/ChildcarePostList";
import {childcareListPosts} from "../../../modules/childcare/childcarePosts";

const ChildcarePostListContainer = () => {
    const dispatch = useDispatch();
    const {posts, error, loading, user} = useSelector(
        ({childcarePosts, loading, user}) => ({
            posts : childcarePosts.posts,
            error : childcarePosts.error,
            loading : loading['posts/EXPERT_LIST_POSTS'],
            user : user.user
        })
    );

    useEffect(() => {
        dispatch(childcareListPosts());
    }, [dispatch]);


    return (
        <>
            <ChildcarePostList
                loading={loading}
                error={error}
                childcarePosts={posts}
                showWriteButton={user}
            />


        </>

    );
};

export default ChildcarePostListContainer;


