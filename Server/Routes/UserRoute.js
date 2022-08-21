import express  from "express";
// import { getAllUsers } from "../../Client/src/Api/UserRequest.js";
import { deleteUser, followUser, getAllUsers, getUser, UnFollowUser, updateUser } from "../Controllers/UserController.js";
import authMiddleWare from "../Middleware/authMiddleware.js";
const router=express.Router();

router.get('/',getAllUsers)
router.get('/:id',getUser)
// router.put('/:id',authMiddleWare,updateUser)
// router.delete('/:id',authMiddleWare,deleteUser)
// router.put('/:id/follow',authMiddleWare,followUser)
// router.put('/:id/unfollow',authMiddleWare,UnFollowUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
router.put('/:id/follow',followUser)
router.put('/:id/unfollow',UnFollowUser)

export default router;