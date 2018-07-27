import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth , private _Router: Router) { }

  ngOnInit() {
  }

  signout() {
    this.afAuth.auth.signOut();
    this._Router.navigateByUrl('/login');
  }
}
