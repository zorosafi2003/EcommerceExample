import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '../../../../node_modules/angularfire2/auth';
import * as firebase from 'firebase/app'
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private CurrentUser :firebase.User ;

  constructor(private afAuth: AngularFireAuth, private _UserService: UserService,
    private _Router: Router) { 

      this.afAuth.auth.onAuthStateChanged((user) => {
        if (user != null) {
        this.CurrentUser = user;
        }
      
      });
    }

  loginByGoogle() {
  return  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {
      var user = new User(result.user.email,
        result.user.displayName, result.user.phoneNumber, result.user.uid, result.user.photoURL, 'Gmail');
      this._UserService.addUser(user);
    })

  }

  loginByFaceBook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(result => {
      this._Router.navigateByUrl('/admin/product');
      var user = new User(result.user.email,
        result.user.displayName, result.user.phoneNumber, result.user.uid, result.user.photoURL, 'FaceBook');
      this._UserService.addUser(user);
    });

  }
  SignUpByEmail(user: User, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, password).then(result => {
      this._Router.navigateByUrl('/admin/product');
      user.uid = result.user.uid;
      this._UserService.addUser(user);
    });

  }

  getCurrentUser() {
   return this.CurrentUser;
  }
}
