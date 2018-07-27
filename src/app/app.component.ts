import { Component } from '@angular/core';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private afAuth:AngularFireAuth){

  }
  title = 'app';
}
