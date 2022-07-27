import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }
   
   
  create_Newemployee(Record:any){
  return this.fireservices.collection('Employee').add(Record);
  }
  get_Allemployee(){
    return this.fireservices.collection('Employee').snapshotChanges();
  }
  update_employee(recordid:any,record:any)
  {
     return  this.fireservices.doc('Employee/' + recordid).update(record);
  }
  delete_employee(record_id:any)
  {
  this.fireservices.doc('Employee/' + record_id).delete();
  }

}
