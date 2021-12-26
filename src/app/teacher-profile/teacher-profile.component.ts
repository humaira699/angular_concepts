import { Component, Input, Output, EventEmitter, HostListener , OnInit } from '@angular/core';
import {Teacher} from './teacher';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {
  teacher: Teacher ={
    name: "Dr Gul Zahra",
    designation: 'Assitant Professor',
    class: "CSc 7"    
  };
  img_src = "../assets/img/teacher_.jpg";
  eventMessage = '';
  
  message(){
    this.eventMessage = 'You have clicked me!';
  }
  KeyeventMessage = '';
  onKeyUp(x: any){
    this.KeyeventMessage = x.target.value + '|';
  }
// :::::::::::::::::::::::::::::::::::::::::::::::::

constructor() { }

  ngOnInit(): void {
    
  }

}
