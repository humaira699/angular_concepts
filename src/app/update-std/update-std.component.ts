import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
@Component({
  selector: 'app-update-std',
  templateUrl: './update-std.component.html',
  styleUrls: ['./update-std.component.css'],
  providers:[AdminserviceService]
})
export class UpdateStdComponent implements OnInit {
  students: any;
  constructor(private adminSer: AdminserviceService) { }

  ngOnInit(): void {
    this.students = this.adminSer.getStudents();

  }

}
