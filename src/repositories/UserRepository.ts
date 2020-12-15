import Database from "../Database";
import User from "../entities/User";
import IRepository from "./IRepository";

interface UserRaw{
    id?: Number;
    name?: String;
    email?: String;
    password?: String;
}


class UserRepository implements IRepository<User>{
    

    public async DoesAnyUserHasThisEmail(email: String): Promise<boolean>{
        var data = await Database.where({email: email}).table("users");
        return data != undefined && data.length > 0;
    } 

    public async Add(entity: User): Promise<void> {
            try{
                await Database.insert({email: entity.email, name: entity.name, password: entity.password}).table("users");
            }catch(err){
                throw Error("Failed to store user");
            }
    }
    
    public async GetAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
   
    public async Update(id: number, entity: User): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    public async Delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async GetById(id: number): Promise<User>{
        try{
            var data = (await Database.where({id: id}).table("users")) as UserRaw;
            var user = new User(data.name,data.email,data.password,data.id,true);
            return user;
        }catch(err){
            console.log(err);
            throw Error("No user found");
        }
    }

    async GetByEmail(email: String): Promise<User>{
        try{
            var data = (await Database.where({email: email}).table("users"))[0] as UserRaw;
            var user = new User(data.name,data.email,data.password,data.id,true);
            return user;
        }catch(err){
            console.log(err);
            throw Error("No user found");
        }
    }

}

export default new UserRepository();