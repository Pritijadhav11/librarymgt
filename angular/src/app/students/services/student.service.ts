import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ environment as env} from '../../../environments/environment';
import{Student} from '../interface/student'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
path=env.serverUrl+'api/student';



constructor(private http:HttpClient) { }
  
  registerStudent(student:Student): Observable<Student>
  {
return this.http.post<Student>(this.path+'/create',student)
  }
  studentSignin(student): Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response'
    };

   return this.http.post<any>(this.path +'/auth',student,httpOptions);
  
  
  }
}