import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  show:boolean = false;

  ngOnInit() {
  }


  @Input()
  student: Student;

  @Output()
  back = new EventEmitter<boolean>();


  goBack() {
    this.back.emit(this.show);
  }






  

}
