import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Schedule {
        day1: string;
        day2: string;
        lec1: string;
        lec2: string;
        tut1: string;
        tut2: string;
        room1: string;
        room2: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private schedules: Observable<Schedule[]>;
  private scheduleCollection: AngularFirestoreCollection<Schedule>;

  constructor(private afs: AngularFirestore) {
    this.scheduleCollection = this.afs.collection<Schedule>(`Schedule`);
    this.schedules = this.scheduleCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        })
    );
  }

  getItems(): Observable<Schedule[]> {
    return this.schedules;
  }

  // getItem(id: string): Observable<Schedule> {
  //   return this.scheduleCollection.doc<Schedule>(id).valueChanges().pipe(
  //       take(1),
  //       map(idea => {
  //         idea.id = id;
  //         return schedules;
  //       })
  //   );
  // }
}

  // addIdea(idea: Idea): Promise<DocumentReference> {
  //   return this.ideaCollection.add(idea);
  // }
  //
  // updateIdea(idea: Idea): Promise<void> {
  //   return this.ideaCollection.doc(idea.id).update({ name: idea.name, notes: idea.notes });
  // }
  //
  // deleteIdea(id: string): Promise<void> {
  //   return this.ideaCollection.doc(id).delete();
  // }
