import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormDataService {
private messageSource=new BehaviorSubject<any>('ttt')
private IndexSource=new BehaviorSubject<any>('ttt')

currentMessage = this.messageSource.asObservable();
currentindex = this.IndexSource.asObservable();

constructor() {
  
 }


GetIndex(index:any){
  this.IndexSource.next(index)
  
}
GetId(formId:any){
  this.messageSource.next(formId)
}
}
