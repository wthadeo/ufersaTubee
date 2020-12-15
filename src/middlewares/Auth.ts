import {Request, Response} from "express";
export default function(req: Request, res: Response, next: any ){
    let user = (req.session as any).user;
    if(user != null){
        (req as any).user = user;
        console.log(user);
        next();
    }else{
        res.redirect("/login");
    }
}