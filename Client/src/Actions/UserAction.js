import * as UserApi from '../Api/UserRequest'
//2:32:25
export const updateUser=(id,formData)=>async(dispatch)=>{
    dispatch({type:"UPDATING_START"})
    try {
        const {data}=await UserApi.updateUser(id,formData);
        dispatch({type:"UPDATING_SUCCESS",data:data})
        console.log("Updated")
    } catch (error) {
        dispatch({type:"UPDATING_FAIL"})
    }
}

export const followUser=(id,data)=>async(dispatch)=>{
    dispatch({type:"FOLLOW_USER"});
    UserApi.followUser(id,data)
}
export const unfollowUser=(id,data)=>async(dispatch)=>{
    dispatch({type:"UNFOLLOW_USER"});
    UserApi.unFollowUser(id,data)
}

