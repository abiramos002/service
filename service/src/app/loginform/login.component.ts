import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/student';
import { StudentService } from '../service/student.service';
import { ToastrService } from 'ngx-toastr';



@Component({
    selector:'login-demo',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css'],
})

export class Logincomponent implements OnInit
{

    show: boolean = false;

    department: string = '';

    student: Student;

    students : Student[] = [
    
    ]

    
    constructor(private _studentService: StudentService, private _toastrService: ToastrService) {
        this._studentService.getStudents()
    }

    ngOnInit() {
       console.log(this._studentService.students)
    }


    getStudentsByDepartment(department) {
        this.department = department;
    }

    getDetail(student) {
        this.show = true;
        this.student = student;
    }

    

    add() {

    }

    deleteStudent(id) {
        console.log("inside delete");
        this.students = this._studentService.deleteStudent(id);
        this._toastrService.error("Removed Successfully")
    }

}