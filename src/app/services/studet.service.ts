import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudetService {
  private apiUrl = 'api/students';
  constructor(private http:HttpClient) {

}

// getStudents():Observable<any>{
//   return this.http.get('http://localhost:3000/students')
  
// }

// postStudents(student:any):Observable<any>{
//   return this.http.post('http://localhost:3000/students',student)
  
// }

// editStudent(id:any,studentData:any):Observable<any>{
//   return this.http.put(`http://localhost:3000/students/${id}`,studentData)
  
// }

// deleteStudent(id:any):Observable<any>{
//   return this.http.delete(`http://localhost:3000/students/${id}`,) 
// }



getStudents(): Observable<any> {
  return this.http.get<any>(this.apiUrl);
}

postStudent(student: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, student);
}

editStudent(id: number, studentData: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${id}`, studentData);
}

deleteStudent(id: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/${id}`);
}




}


