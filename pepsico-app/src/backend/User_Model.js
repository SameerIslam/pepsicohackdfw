//import uuid from "uuid";

export class User{
    constructor(name, email, userId){
        
        this.userId = userId;
        

        this.name = name;
        this.email = email;
    }

    toMap(){
        return {
            userId : this.userId,
            name : this.name,
            email : this.email,
        };
    }
}

export function fromUserMap(map){
    return new User(
        map['name'],
        map['email'],
        map['userId']
    );
}