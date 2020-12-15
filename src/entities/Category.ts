export default class Category{

    public id: Number;
    public title: String;
    public slug: String;
    public videos: Array<any>

    public constructor(id: Number, title: String, slug: String){
        this.id = id;
        this.title = title;
        this.slug = slug;
    }

}