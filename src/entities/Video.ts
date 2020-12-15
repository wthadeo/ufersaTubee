import Category from "./Category";
import UComment from "../entities/UComment"

export default class Video{

    public id: Number;
    public title: String;
    public description: String;
    public views: number = 0;
    public res360: String;
    public res480: String;
    public res720: String;
    public res1080: String;
    public category: Category;
    public related: Array<Video>;
    public comments: Array<UComment>;
    public categoryTitle: String; 

}