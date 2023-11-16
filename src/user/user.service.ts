import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { v4 as uuidv4} from 'uuid';
export class UserService {
  private users: User[] = [];

  addUser( first_name:string, 
    last_name:string, email: string, age: number)   {

        const id = uuidv4();
        const newUser= new User (id, first_name, last_name, email, age);

        this.users.push(newUser);
        return this.users;
    }

    getUsers() {
        return [...this.users];
    }

    getUserById(id:string) {
       return this.getUser(id)[0];
    }

    getUser(id:string) {
        const index=  this.users.findIndex((u) => u.id === id);
        return [this.users[index], index];
    }
    updateUser(id:string,first_name:string, 
        last_name:string, email: string, age: number ) {

            const [targetUser, index] = this.getUser(id);
            const index1 = this.users.findIndex(p => p.id == id)

            const data ={targetUser, first_name, last_name, email, age};

            const newUser = new User(
                id, 
                data.first_name,
                data.last_name,
                data.email, 
                data.age )

           this.users[index1] = newUser;
           return newUser;
        
    }

    deleteUser(id:string) {
        const index = this.users.findIndex(p => p.id == id)

        this.users.splice(index,1);
    }
}