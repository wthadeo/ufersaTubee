import Database from "../Database";

class CommentRepository{
  public async Add(content:string, name:string, video:number): Promise<void> {
    await Database.insert({content, name, video}).table("comments");   
  }  
}

export default new CommentRepository();