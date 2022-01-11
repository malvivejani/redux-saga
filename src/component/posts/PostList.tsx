import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions/PostActions';

function PostList() {

    // const postData = useSelector((state: any) => state.postList);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchPosts());
    // }, []);

    return (
        <div>
            <p>Post list</p>
            {/* {
                postData.isLoading ? <p>Loading </p> : (postData.error ? <p>{postData.error}</p> :
                    postData && postData.post && postData.post.map((item: any, index: number) => {
                        return (
                            <p key={item.id}>{item.title}</p>
                        )
                    }))
            } */}
        </div>
    )
}

export default PostList;
