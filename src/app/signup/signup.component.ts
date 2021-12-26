import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser: any;
  username = "";
  password="";
  constructor(private adminServ: AdminserviceService) { }

  ngOnInit(): void {
  }
  onClickSubmit(data: any) {    
    const user: any = {
      username: data.username,
      password: data.password
    }
    
    this.newUser = this.adminServ.signUp(user);
    console.log(user);
    console.log(this.newUser);
    // alert(this.newUser.success);
 }

}
