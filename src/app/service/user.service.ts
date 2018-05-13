import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppUser } from './../interface/app-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "angularfire2/database";
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase,) { }

  // simple save/update functionality for the db. 
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      pictureUrl: user.photoURL
    });
  }

  // returns the db object for a user(uid) and passes as observable to user interface
  get(uid: string): Observable<AppUser> {
    const userObj: AngularFireObject<AppUser> =  this.db.object('/users/' + uid);
    return userObj.valueChanges();
  } 
}
