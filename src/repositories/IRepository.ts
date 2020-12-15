export default interface IRepository<T>{
    Add(entity: T): Promise<void>;
    GetById(id: number): Promise<T>;
    GetAll(): Promise<Array<T>>;
    Update(id: number,entity: T): Promise<boolean>;
    Delete(id: number): Promise<boolean>;
}