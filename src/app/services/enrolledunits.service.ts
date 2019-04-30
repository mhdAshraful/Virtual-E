import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';



export class EnrolledUnits {
  name: string;
}



@Injectable({
  providedIn: 'root'
})

export class EnrolledUnitsService {

  private enrolledunits: Observable<EnrolledUnits[]>;
  private unitscollection: AngularFirestoreCollection<EnrolledUnits>;

  constructor(private afs: AngularFirestore) {
    this.unitscollection = this.afs.collection<EnrolledUnits>(`enrolledunits`);
    this.enrolledunits = this.unitscollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        })
    );
  }

  getItems(): Observable<EnrolledUnits[]> {
    return this.enrolledunits;
  }
}
