import { Component, OnInit } from '@angular/core';
// import { StudentService } from '../student.service';
// import { Student } from '../student/student';
// import { HttpClient } from '@angular/common/http';
import {AdminserviceService} from '../adminservice.service';
@Component({
  selector: 'app-viewstd-service',
  templateUrl: './viewstd-service.component.html',
  styleUrls: ['./viewstd-service.component.css'],
  providers: [AdminserviceService]
})
export class ViewstdServiceComponent implements OnInit {
  students: any;
  // id = "618a460b0e54c05838ad77b6";
  constructor(private adminService: AdminserviceService){ }
  ngOnInit(): void {    
    // get all students
    this.students = this.adminService.getStudents();
    // get a student by id
    // this.students = this.adminService.getStudent(this.id);
  }
}
