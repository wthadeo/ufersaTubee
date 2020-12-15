import express, { Router }  from 'express';
import {Request, Response} from 'express';
import HomeController from "./controllers/HomeController";
import VideoController from "./controllers/VideoController";
import UserController from "./controllers/UserController";
import CommentController from "./controllers/CommentController";
import Auth from "./middlewares/Auth";


let router = express.Router();

router.get("/",Auth,HomeController.Index);
router.get("/video/:id",Auth,VideoController.Video);
router.get("/stream/:video/:resolution",Auth,VideoController.Stream);
router.get("/singup",HomeController.Singup);
router.post("/auth",UserController.Auth);
router.get("/login",HomeController.Singin);
router.post("/user",UserController.Store);
router.get("/category/:slug",Auth,HomeController.Category);
router.post("/comment", Auth, CommentController.Store);
router.get("/logout",UserController.Logout);

export default router;