import { Component } from "@angular/core";
import{ MessageService} from '../app.service';
import { Observable } from "rxjs";
import 'rxjs/add/observable/fromEvent';

@Component({
  selector:'data-send',
  templateUrl:'../data-send/data-send.component.html'
})
export class DataSendingComponent {
name='Angular';
constructor(private messageService: MessageService){}
passInputData(){
  var button = document.querySelector('button');
  var keyups= Observable.fromEvent(button,'click')
  .subscribe(value=>{
    //console.log(value);
    if(value.type==='click'){
      console.log('input value: ',this.name);
      this.messageService.updateMessage(this.name);
    }
  }); 
  setTimeout(()=>{
    keyups.unsubscribe()
  },4000);
  ;
}
}