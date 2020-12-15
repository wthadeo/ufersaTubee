"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const VideoRepository_1 = __importDefault(require("../repositories/VideoRepository"));
class VideoController {
    Stream(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let video = yield VideoRepository_1.default.GetById(Number.parseInt(req.params.video));
            let resolution = Number.parseInt(req.params.resolution);
            const range = req.headers.range;
            let uri = "./build/public/videos/";
            switch (resolution) {
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
            if (!range) {
                res.status(400).send("Requires Range Header");
            }
            const videoPath = uri;
            const videoSize = fs_1.default.statSync(uri).size;
            // Parse Range
            //Example = "bytes=32324-"
            const CHUNK_SIZE = Math.pow(10, 6); // 1MB
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
            const videoStream = fs_1.default.createReadStream(videoPath, { start, end });
            return videoStream.pipe(res);
        });
    }
    Video(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let video = yield VideoRepository_1.default.GetById(Number.parseInt(req.params.id));
            let user = req.user;
            if (video != null) {
                yield VideoRepository_1.default.AddView(video.id);
                res.render("video", Object.assign(Object.assign({}, video), { user }));
            }
            else {
                res.redirect("/");
            }
        });
    }
}
exports.default = new VideoController();
