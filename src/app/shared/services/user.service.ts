import { UserTable } from './../constants/database.constant';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { FirebaseDatabase } from '../../../../node_modules/angularfire2';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireDb: AngularFireDatabase) { }

  public addUser(user: User): void {
    this.fireDb.object(`${UserTable}/${user.uid}`).set(user);
  }
}
