import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormDataService {
private messageSource=new BehaviorSubject<any>('ttt')
private detailsPatientSource=new BehaviorSubject<any>('ttt')
private IndexSource=new BehaviorSubject<any>('ttt')

currentMessage = this.messageSource.asObservable();
currentindex = this.IndexSource.asObservable();
currentdetailsPatient = this.detailsPatientSource.asObservable();

constructor() {
  
 }

 functionOne(i,tab){
 
  var index = tab.findIndex(s => s.type === i);
/*   console.log('ggggggggggggggggg',i,tab[index],index) */
  return tab[index]
 
}
GetIndex(index:any){
  this.IndexSource.next(index)
  
}
GetId(formId:any){
  this.messageSource.next(formId)
}

GetPatient(PatientID:any){
  this.detailsPatientSource.next(PatientID)
}


}
