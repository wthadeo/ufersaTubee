import {Request, Response } from "express";
import fs from "fs";
import VideoRepository from "../repositories/VideoRepository";

class VideoController{

    public async Stream(req: Request, res: Response ): Promise<Response>{

        let video = await VideoRepository.GetById(Number.parseInt(req.params.video));
        let resolution = Number.parseInt(req.params.resolution);

        const range = req.headers.range;

        let uri = "./build/public/videos/";

        switch(resolution){
            case 1080:
                uri += video.res1080;
                break;
            case 720:
                uri += video.res720;
                break;
            case 480:
                uri += video.res480;
                break;
            case 360:
                uri += video.res360;
                break;
        }
        
    
        if(!range){
            res.status(400).send("Requires Range Header");
        }
    
        const videoPath = uri;
        const videoSize = fs.statSync(uri).size;
    
        // Parse Range
        //Example = "bytes=32324-"
        const CHUNK_SIZE = 10 ** 6; // 1MB
        const start = Number(range.replace(/\D/g, ""));
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    
        const contentLength = end - start + 1;
        const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "videos/mp4",
        };
        res.writeHead(206, headers);
    
        const videoStream = fs.createReadStream(videoPath, { start, end });
    
        return videoStream.pipe(res);
    }

    public async Video(req: Request, res: Response): Promise<void>{
       let video = await VideoRepository.GetById(Number.parseInt(req.params.id));
       let user = (req as any).user;
       if(video != null){
            await VideoRepository.AddView(video.id);
            res.render("video",{...video, user});
       }else{
           res.redirect("/");
       }
    }

}

export default new VideoController();