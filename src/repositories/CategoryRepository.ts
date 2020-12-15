import Database from "../Database";
import Category from "../entities/Category";
import IRepository from "./IRepository";

class CategoryRepository implements IRepository<Category>{

    Add(entity: Category): Promise<void> {
        throw new Error("Method not implemented.");
    }
    GetById(id: number): Promise<Category> {
        throw new Error("Method not implemented.");
    }
    public async GetBySlug(slug: string): Promise<Category>{
        var result = await Database.where({slug: slug}).table("categories");
        if(result.length == 0){
            return null;
        }else{
            let category = result[0] as Category;
            category.videos = await Database.where({category: category.id}).table("videos");
            return category;
        }
    }
    public async GetAll(): Promise<Category[]> {
       return (await Database.select().table("categories")) as Category[];
    }
    Update(id: number, entity: Category): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    Delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}

export default new CategoryRepository();