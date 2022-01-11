import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userListRequest } from '../../redux/actions/UserActions';

function UserList(props: any) {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.userList);

    console.log("user---saga--response", user)
    useEffect(() => {
        dispatch(userListRequest())
    }, []);

    return (
        <div>
            <p>User list</p>
            {
                user.isLoading ? <p>Loading </p> : (user.error ? <p>{user.error}</p> :
                    user && user.userList && user.userList.map((item: any, index: number) => {
                        return (
                            <p key={item.id}>{item.name}</p>
                        )
                    }))
            }
            {
                console.log("props.data", user)
            }
        </div>
    )
}

export default UserList;
