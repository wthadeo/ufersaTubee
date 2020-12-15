import {Request, Response} from "express";
import User from "../entities/User";
import UserLogin from "../entities/UserLogin";
import CategoryRepository from "../repositories/CategoryRepository";
import VideoRepository from "../repositories/VideoRepository";

interface ses{
    user: string;
}

class HomeController{

    public async Index(req: Request, res: Response): Promise<void>{     
        let categories = await CategoryRepository.GetAll();
        let videos = await VideoRepository.GetAll();
        let user = (req as any).user;

        return res.render("index",{categories,videos, user});
    }

    public async Singup(req: Request, res: Response): Promise<void>{

        let errors = null;
        let email, name = null;
        
        try{
             errors = JSON.parse(req.query.errors as string) as Array<String>;
        }catch(err){}
        
        try{
            let form = JSON.parse(req.query.form as string);
            email = form.email;
            name = form.name;
        }catch(err){}
        

        return res.render("singup",{errors,email,name});
    }

    public async Singin(req: Request, res: Response): Promise<void>{

        let errors = new Array<string>();

        try{
            errors = JSON.parse(req.query.errors as string);
        }catch(err){}

        res.render("login",{errors});
    }
    
    public async Category(req: Request, res: Response): Promise<void>{

        let categories = await CategoryRepository.GetAll();
        let user = (req as any).user;
        let slug = req.params.slug;
        let category = await CategoryRepository.GetBySlug(slug);
        if(category != null){
            res.render("category",{...category, categories, user});
        }else{
            res.redirect("/");
        }
    }
}

export default new HomeController();