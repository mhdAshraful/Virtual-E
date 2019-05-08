import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface Marks {
  name: string;
  desc: string;
  marks: string;
}

@Injectable({
  providedIn: 'root'
})
export class MarksService {
  private marks: Observable<Marks[]>;
  private marksCollection: AngularFirestoreCollection<Marks>;

  constructor(private afs: AngularFirestore) {
    this.marksCollection = this.afs.collection<Marks>(`marks`);
    this.marks = this.marksCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map( a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
  }

  getItems(): Observable<Marks[]> {
    return this.marks;
  }

}
