import { AppUser } from './../interface/app-user';
import { Injectable } from '@angular/core';
import { FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  // simple save/update functionality for the db. 
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  // returns the db object for a user(uid) and passes as observable to user interface
  get(uid: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
