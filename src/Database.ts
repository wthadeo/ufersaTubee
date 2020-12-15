import knex from "knex";

class Database{

    public instance: knex;

    public constructor(){
        this.instance = knex({
            client: 'mysql2',
            connection: {
                host: '127.0.0.1',
                user: "root",
                password:"",
                database: "ufersatube"
            }
        });
    }

}

export default new Database().instance;