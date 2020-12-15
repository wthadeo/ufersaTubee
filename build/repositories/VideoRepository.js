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
const Database_1 = __importDefault(require("../Database"));
class VideoRepository {
    Add(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield Database_1.default.where({ id: id }).table("videos");
            if (result.length > 0) {
                let video = result[0];
                let categoryId = video.category;
                let cat = yield Database_1.default.where({ id: categoryId }).table("categories");
                let category = cat[0];
                video.category = category;
                let relatedVideos = yield Database_1.default.where({ category: categoryId }).table("videos");
                relatedVideos = relatedVideos.filter(v => v.id != video.id);
                video.related = relatedVideos;
                let comments = yield Database_1.default.where({ video: video.id }).table("comments");
                video.comments = comments;
                return video;
            }
            else {
                return null;
            }
        });
    }
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let videos = yield Database_1.default.select().table("videos");
            // await videos.forEach(async video => {
            //     try{
            //         let result = await Database.where({id: video.category}).table("categories");
            //         let category = result[0] as Category;
            //         video.categoryTitle = category.title;
            //     } catch(err){
            //         console.log(err);
            //     }
            // })
            for (let i = 0; i < videos.length; i++) {
                let video = videos[i];
                let result = yield Database_1.default.where({ id: video.category }).table("categories");
                let category = result[0];
                video.categoryTitle = category.title;
            }
            console.log(videos);
            return videos;
        });
    }
    Update(id, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    AddView(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield Database_1.default.where({ id: id }).table("videos");
            if (res.length > 0) {
                let video = res[0];
                const count = yield Database_1.default.update({ views: video.views + 1 }).where({ id: id }).table("videos");
            }
        });
    }
}
exports.default = new VideoRepository();
