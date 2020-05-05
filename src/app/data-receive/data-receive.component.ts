import { Component, Input } from "@angular/core";
import{ MessageService} from '../app.service';
import { Subscription } from "rxjs";


@Component({
  selector:'data-receive',
  templateUrl:'../data-receive/data-receive.component.html'
})
export class DataRecevingComponenet{
  @Input() name:string;
  subscription:Subscription;
  messagefromSibling:string;
  constructor(private messageService:MessageService){
    console.log(this.messagefromSibling);
    this.subscription= this.messageService.getMessage()
    .subscribe(myMessage=>{
      console.log('Getting vale from data sending component',myMessage);
      this.messagefromSibling=myMessage;
    });
  }
  

}