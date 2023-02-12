import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/student';
import { StudentService } from '../service/student.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student:Student;

  constructor(private _studentService: StudentService, private _toastrService: ToastrService) { }

  ngOnInit() {
  }

  add(name, regno, dob, sel1, mark) {

    this.student = {
      id: regno,
      name: name,
      dob: dob,
      department: sel1,
      mark: mark,
      image: 'assets/images/emp3.png'
    }

    this._studentService.addStudent(this.student);

    this._toastrService.success("Added Successfully")


  }



}
