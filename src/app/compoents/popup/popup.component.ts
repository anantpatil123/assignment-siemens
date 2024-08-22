import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, FormsModule, MinLengthValidator, MinValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudetService } from '../../services/studet.service';
import { InputTextModule } from 'primeng/inputtext';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, InputTextModule, NgIf],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  studentForm: FormGroup;
  @Output() onFromSubmit = new EventEmitter();
  @Input() isEditMode: boolean | undefined;
  @Input() studentData: any;
  @Input() newStudentId :number | undefined;
  @Output() closed = new EventEmitter<void>();


  constructor(private fb: FormBuilder,
    private studentService: StudetService
  ) {
    this.studentForm = this.fb.group({
      firstName: new FormControl("",),
      lastName: new FormControl("",),
      email: new FormControl("", Validators.email),
      mobileNumber: new FormControl("",)
    })
  }

  ngOnInit() {
    console.log("in popup newStudentId", this.newStudentId);
    if (this.isEditMode) {
      this.studentForm.controls['firstName'].patchValue(this.studentData.firstName);
      this.studentForm.controls['lastName'].patchValue(this.studentData.lastName)
      this.studentForm.controls['email'].patchValue(this.studentData.email)
      this.studentForm.controls['mobileNumber'].patchValue(this.studentData.mobileNumber)
    }


  }


  onSubmit() {
    
    if (this.isEditMode == true) {
      const student = {
        id:this.studentData.id,
        firstName: this.studentForm.value.firstName,
        lastName: this.studentForm.value.lastName,
        email: this.studentForm.value.email,
        mobileNumber: this.studentForm.value.mobileNumber
      }
      this.studentService.editStudent(this.studentData.id,
        student).subscribe((res) => {
          console.log(" Form is Edited res", res)
          this.onFromSubmit.emit('true');
          this.close();
        });


    } else if(this.isEditMode == false) {
      const student = {
        id:this.newStudentId,
        firstName: this.studentForm.value.firstName,
        lastName: this.studentForm.value.lastName,
        email: this.studentForm.value.email,
        mobileNumber: this.studentForm.value.mobileNumber
      }
      this.studentService.postStudent(student).subscribe((res) => {
        console.log("res", res)
        this.onFromSubmit.emit('true');
        this.close();
      })

    }
  }

    close(): void {
      this.closed.emit();
    }

  }
