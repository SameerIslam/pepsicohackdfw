export class User{
    constructor(name, email, userId){
        if (userId === 0){
            this.userId = uuid(0);
        }else{
            this.userId = userId;
        }

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