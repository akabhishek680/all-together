import { Component, OnInit } from '@angular/core';
import { BackendServerService } from 'src/Server/backend-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'all-together-angular';

  constructor(private server: BackendServerService) {}

  ngOnInit(): void {
    this.getUserProfileInfo();
  }

  getUserProfileInfo = () => {

    this.server.getUserProfileInfo().subscribe(response => {

      console.log(response);
    }, (error) => {
      console.log('Internal Server Error!!!', error);
    })
  }

}
