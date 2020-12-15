import express from 'express';
import routes from "./routes";
import path from "path";
import session from "express-session";



class App{
    public instance: express.Application;
    public constructor(){
        this.instance = express();
        this.SetMiddlewares();
    }

    private SetMiddlewares(): void {
        this.instance.use(session({
            secret: 'mamatex',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: false }
          }))
        this.instance.use(express.json());
        this.instance.use(express.urlencoded({extended: false}));
        this.instance.use(express.static(path.join(__dirname, '/public')));
        this.instance.set('views', path.join(__dirname, '/views'));
        this.instance.set('view engine','ejs');
        this.instance.set('trust proxy', 1); 
        this.instance.use(routes);

    }
}


export default new App();