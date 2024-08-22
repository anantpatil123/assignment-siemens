import { Component, OnInit } from '@angular/core';
import { StudetService } from '../../services/studet.service';
import { Student } from '../../interface/student';
import { TableComponent } from '../../compoents/table/table.component';

@Component({
  selector: 'parent',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit{
  studentList!: Student[];


  constructor(private studentService: StudetService) {

  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe((res) => {
      this.studentList = res;
      console.log("StudentList", this.studentList)
    })
  }

}
