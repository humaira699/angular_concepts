import { Component, OnInit } from '@angular/core';
import{AdminserviceService} from '../adminservice.service';
@Component({
  selector: 'app-view-classes',
  templateUrl: './view-classes.component.html',
  styleUrls: ['./view-classes.component.css'],
  providers: [AdminserviceService]
})
export class ViewClassesComponent implements OnInit {
  classes: any;
  constructor(private adminService: AdminserviceService) { }
  ngOnInit(): void {
    this.classes = this.adminService.getClasses();
  }

}
