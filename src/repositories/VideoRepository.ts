import IRepository from "./IRepository";
import Video from  "../entities/Video";
import Database from "../Database";
import Category from "../entities/Category";
import { json } from "body-parser";

class VideoRepository implements IRepository<Video>{
    public async Add(entity: Video): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async GetById(id: number): Promise<Video> {
        let result = await Database.where({id: id}).table("videos");
        if(result.length > 0 ){
            let video = result[0] as Video;


            let categoryId = video.category;
            let cat = await Database.where({id: categoryId}).table("categories");
            let category = cat[0] as Category;
            video.category = category;
            

            let relatedVideos = await Database.where({category: categoryId}).table("videos") as Array<Video>;

            relatedVideos = relatedVideos.filter(v => v.id != video.id );

            video.related = relatedVideos;

            let comments = await Database.where({video:video.id}).table("comments");

            video.comments = comments;

            return video;
        }else{
            return null;
        }
    }
    public async GetAll(): Promise<Video[]> {
        let videos = await Database.select().table("videos") as Video[];

        // await videos.forEach(async video => {
            
        //     try{
        //         let result = await Database.where({id: video.category}).table("categories");
        //         let category = result[0] as Category;
            
        //         video.categoryTitle = category.title;
        //     } catch(err){
        //         console.log(err);
        //     }
        // })

        for(let i = 0; i < videos.length; i++){

            let video = videos[i];

            let result = await Database.where({id: video.category}).table("categories");
            let category = result[0] as Category;
                    
            video.categoryTitle = category.title;
               
        }

        console.log(videos);    
        return videos;

    }
    public async Update(id: number, entity: Video): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public async Delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public async AddView(id: Number): Promise<void> {
        let res = await Database.where({id: id}).table("videos");
        if(res.length > 0){
            let video = res[0] as Video;
            const count = await Database.update({views: video.views + 1 }).where({id: id}).table("videos");
        }
    }

}

export default new VideoRepository();