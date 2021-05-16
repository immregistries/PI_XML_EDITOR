import { formatDate } from '@angular/common';

export class subComment{
    message: string;
    editTime:Date;
    idUserPost:string;

    constructor(uid, message){
        this.editTime = new Date();       
        this.idUserPost=uid;
        this.message=message;
    }
    
}
