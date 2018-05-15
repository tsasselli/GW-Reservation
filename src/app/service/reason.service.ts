import { AngularFireList } from 'angularfire2/database';
import { IReason } from './../interface/IReason';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ReasonService {
  reason$: Observable<IReason[]>

  constructor(private db: AngularFireDatabase) { 
    const reason: AngularFireList<IReason> = this.db.list("reasons");
    this.reason$ = reason.valueChanges();
  }

  saveToDb(reason) {
    return this.db.list('/reasons').push(reason);
  }

}
