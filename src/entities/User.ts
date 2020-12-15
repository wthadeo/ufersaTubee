import IRepository from "../repositories/IRepository";
import UserRepository from "../repositories/UserRepository";
import bcrypt from "bcrypt";
import e from "express";

export default class User{

    public id: Number;
    public name: String;
    public email: String;
    public password: String;
    private _persistent: boolean;
    private _repository: typeof UserRepository;

    public constructor(name: String,email: String,password: String,id: Number = -1,persistent: boolean = false){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this._persistent = persistent;
        this._repository = UserRepository;
    }

    public async Validate(): Promise<Array<String>>{
        let errors = new Array<String>();

        if(await this._repository.DoesAnyUserHasThisEmail(this.email)){
            errors.push("E-mail já cadastrado na plataforma");
        }

        return errors;
    }

    public async Store(): Promise<void>{
        if(this._persistent) return;
        const saltRounds = 10;
        let salt = await bcrypt.genSalt(saltRounds);
        this.password = await bcrypt.hash(this.password,salt);
        await this._repository.Add(this);
    }

    public async Update(): Promise<void>{
        if(!this._persistent) return;
    }

    public async Delete(): Promise<void>{
        if(!this._persistent) return;
    }

    public static async Login(email: String, password: String): Promise< User | Array<String>>{
        
        let errors = new Array<String>();
        if(await UserRepository.DoesAnyUserHasThisEmail(email)){
            let user = await UserRepository.GetByEmail(email);
            let rightPassword = await bcrypt.compare(password,user.password as string);

            if(rightPassword){
                return user as User;
            }else{
                errors.push("Senha errada");
            }
        }else{
            errors.push("Usuário não existe");
        }

        return errors;
    }

}