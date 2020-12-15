import {Request, Response} from "express";
import User from "../entities/User";
import UserRepository from "../repositories/UserRepository";

class UserController{


    public async Store(req: Request, res: Response): Promise<void>{
        var { email, password, name } = req.body;
        var user = new User(name,email,password);
        var validation = await user.Validate();
        if(validation.length == 0){
            try{
                await user.Store();
                res.redirect("/");
            }catch(err){
                validation.push("Erro interno!");
                res.redirect(`/singup?errors=${JSON.stringify(validation)}&form=${JSON.stringify({email,name})}`);
            }
        }else{
            res.redirect(`/singup?errors=${JSON.stringify(validation)}&form=${JSON.stringify({email,name})}`);
        }
    }

    public async Auth(req: Request, res: Response): Promise<void> {
        let { email, password } =  req.body;

        let result = await User.Login(email,password);
    
        if((result as User).name != undefined){
            (req.session as any).user = result;
            res.redirect("/");
        }else{
            (req.session as any).user = null;
            res.redirect(`/login?errors=${JSON.stringify(result)}`);
        }
    }

    public async Logout(req: Request, res: Response): Promise<void>{
        (req.session as any).user = null;
        res.redirect('/login');
    }

}

export default new UserController();