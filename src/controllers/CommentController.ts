import {Request, Response} from 'express';
import CommentRepository from "../repositories/CommentRepository"

class CommentController {
  public async Store(request: Request, response: Response): Promise<void>{
    let {video, content} = request.body;
    let user = (request as any).user;
    let name = user.name;

    await CommentRepository.Add(content, name, video);
    response.redirect("/video/" + video);

  }
}

export default new CommentController();