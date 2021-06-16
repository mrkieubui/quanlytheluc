import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginStatus = true;
  title = 'Quản lý thể lực';

  changeLoginStatus(_event: any) {
    // console.log("change login status: " );
  }
}
