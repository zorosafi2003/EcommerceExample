import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SignupComponent implements OnInit {

  data:any={};
  constructor(private _AuthService: AuthService) { }

  ngOnInit() {
  }

  signup(){
   var user = new User(this.data.email,this.data.name,this.data.phone,"","","Email");
    this._AuthService.SignUpByEmail(user,this.data.password);
  }
}
