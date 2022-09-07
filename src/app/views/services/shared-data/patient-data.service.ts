import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  private messageSource=new BehaviorSubject<any>('ttt')
private IndexSource=new BehaviorSubject<any>('ttt')


currentMessage = this.messageSource.asObservable();
currentindex = this.IndexSource.asObservable();
  constructor() {


    


   }

   GetIndex(index:any){
    this.IndexSource.next(index)
    
  }
  GetId(PatID:any){
    this.messageSource.next(PatID)
    console.log('here is service')
    console.log(PatID)

  }
}
