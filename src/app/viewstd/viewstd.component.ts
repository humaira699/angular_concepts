import { Component, OnInit } from '@angular/core';
import {stds} from '../staticData';
@Component({
  selector: 'app-viewstd',
  templateUrl: './viewstd.component.html',
  styleUrls: ['./viewstd.component.css']
})
export class ViewstdComponent implements OnInit {
  Class_stds = stds;
  constructor() { }

  ngOnInit(): void {
  }

}
