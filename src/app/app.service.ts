import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })


export class MessageService{
  myMessage = new Subject<string>();
  getMessage():Observable<string>{
    return this.myMessage.asObservable();
  }

  updateMessage(message:string){
    this.myMessage.next(message);
  }

}