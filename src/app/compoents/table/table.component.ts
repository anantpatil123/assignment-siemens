import { Component, Input, OnInit } from '@angular/core';
import { StudetService } from '../../services/studet.service';
import { NgFor, NgIf } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor,PopupComponent,NgIf,],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  studentList: any=[];
  isPopupVisible = false;
  isEditMode:boolean = false
  selectedStudent:any;
  newStudentId:number=1;

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

  refreshForm(event:any){
    if(event){
      this.getStudents()
      this.isEditMode=false;
    }
  }

  onEdit(row:any){
    console.log("studentData",row);
     this.isPopupVisible=true;
     this.isEditMode =true;
     this.selectedStudent=row;
  }

  onDelete(id:any){
 this.studentService.deleteStudent(id).subscribe((res)=>{
  console.log("Deleted",res)
    this.refreshForm(true);
 })
  }

  onCreate(newId:number){
    this.isEditMode=false;
    this.isPopupVisible=true;
    this.newStudentId=newId +1;
  }


  openPopup(): void {
    this.isPopupVisible = true;
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }
}
