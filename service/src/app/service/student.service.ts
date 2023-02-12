import { Injectable } from '@angular/core';
import { Student } from 'src/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }


  public students: Student[] = [
    {
      id: 13132547,
      name: 'Benny',
      mark: 98,
      image: 'assets/images/emp3.png',
      department: 'ct',
      dob: new Date('2019-01-16')
  },
  {
      id: 13245673,
      name: 'Shameem',
      mark: 65,
      image: 'assets/images/emp6.png',
      department: 'ct',
      dob: new Date('2019-01-16')
  },
  {
      id: 13563434,
      name: 'Safeer',
      mark: 79,
      image: 'assets/images/emp4.png',
      department: 'ct',
      dob: new Date('2019-01-16')
  },
  {
      id: 45632190,
      name: 'Aswani',
      mark: 95,
      image: 'assets/images/emp1.png',
      department: 'ec',
      dob: new Date('2019-01-16')
  },
  {
      id: 13476545,
      name: 'Althaf',
      mark: 50,
      image: 'assets/images/emp3.png',
      department: 'ec',
      dob: new Date('2019-01-16')
  }
  ]


  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student) {
    this.students.push(student);
  } 

  deleteStudent(id) {
    this.students = this.students.filter(item => item.id !== id);
    return this.students;
  }


}
