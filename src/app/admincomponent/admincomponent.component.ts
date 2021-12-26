import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
@Component({
  selector: 'app-admincomponent',
  templateUrl: './admincomponent.component.html',
  styleUrls: ['./admincomponent.component.css'],
  providers:[AdminserviceService]
})
export class AdmincomponentComponent implements OnInit {
  // user = { id : 1, name : 'Hello'};
  constructor(private _std: AdminserviceService) { }  
  // this.user = this._std.callServer();
  ngOnInit(): void {
  }
  
}
