import React,{useState,useRef} from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import './Postshare.css'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import {useDispatch, useSelector} from 'react-redux'
import { uploadImage, uploadPost } from '../../Actions/UploadAction'

const Postshare = () => {
    const loading=useSelector((state)=>state.postReducer.uploading)
    const [image,setImg]=useState(null);
    const imageRef=useRef();
    const desc=useRef();
    const dispatch=useDispatch();
    const {user}=useSelector((state)=>state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

    const onImageChange=(event)=>{
        if(event.target.files && event.target.files[0]){
            let img=event.target.files[0];
            // setImg({
            //     // image:URL.createObjectURL(img)
            //     image:img,
            // });

            setImg(img);
        }
    }
    const reset=()=>{
        setImg(null);
        desc.current.value=""
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newPost={
            userId: user._id,
            desc:desc.current.value 
        }
        if(image){
            const data= new FormData();
            const filename=Date.now()+image.name;
            data.append("name",filename);
            data.append("file",image);
            newPost.image=filename;
            console.log(newPost)
            try{
                dispatch(uploadImage(data))
            }catch(error){
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }
    return (
        <div className='PostShare'>
            <img src={user.profilePicture?serverPublic+user.profilePicture:serverPublic+"defaultProfile.png"} alt="" />
            <div>
                <input
                ref={desc} required
                type="text" placeholder="What's Happening" />
                <div className="postOptions">
                    <div className="options" onClick={()=>imageRef.current.click()}><UilScenery />Photo</div>
                    <div className="options"><UilPlayCircle />Video</div>
                    <div className="options"><UilLocationPoint />Location</div>
                    <div className="options"><UilSchedule />Shedule</div>
                    <button className="button ps-button"
                            onClick={handleSubmit}
                            disabled={loading}
                            >{loading?"Uploading":"Share"}</button>
                    <div style={{display:'none'}}>
                        <input 
                        type="file" 
                        name="myImage" 
                        ref={imageRef} 
                        onChange={onImageChange}/>
                    </div>
                </div>
                {image && 
                <div className="previewImage">
                    <UilTimes onClick={()=>setImg(null)}/>
                    <img src={URL.createObjectURL(image)} alt="" />
                </div>
                
                }


            </div>

        </div>
    )
}

export default Postshare