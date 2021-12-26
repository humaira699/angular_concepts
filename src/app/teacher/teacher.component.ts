import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Teacher} from './teacher';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {   
  teacher: Teacher ={
    name: "Dr Gul Zahra",
    designation: 'Assitant Professor',
    class: "CSc 7"    
  }; 
    
  constructor() { }
  ngOnInit(): void {    
  }

}
