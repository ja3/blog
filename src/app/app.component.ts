import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor () {
    var config = {
      apiKey: "AIzaSyDizumdSPw-HGt32g4rNdTTpSlP3NsqEGw",
      authDomain: "post-c992c.firebaseapp.com",
      databaseURL: "https://post-c992c.firebaseio.com",
      projectId: "post-c992c",
      storageBucket: "post-c992c.appspot.com",
      messagingSenderId: "673403296100"
    };
    firebase.initializeApp(config);
  }
}
