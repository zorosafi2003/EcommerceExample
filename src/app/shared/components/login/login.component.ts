import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, AfterViewInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router,
    private afAuth:AngularFireAuth ,private zone: NgZone) { 

  }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.zone.run(()=>{
          this._Router.navigateByUrl('admin/product')
        });
      }
      
    });
  }

  loginByGoogle(){
    this._AuthService.loginByGoogle().then(()=>{
      this.zone
      this._Router.navigate(['/admin/product']);
    });;
  }

  loginByFaceBook(){
    this._AuthService.loginByFaceBook();
  }

  loginByPassword(){
    this._Router.navigate(['/admin/product']);
  }
}
