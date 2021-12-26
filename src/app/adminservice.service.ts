import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private expressUrl = 'http://localhost:3000/';
  private httpOptions = {
     headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };  
  private students$ = new Observable<any>();//observable
  private classes$ = new Observable<any>();//observable of class
  private newUser = new Observable<any>();//observable of new signup
  private student$ = new Observable<any>();//observable of a student
  User: any;
  
  constructor(private http : HttpClient) { }
  getStudents(){
    return this.students$ = this.http.get(this.expressUrl+"admin/students");
  }
  getClasses(){
    return this.classes$ = this.http.get(this.expressUrl+"admin/classes");
  }
  getStudent(id:any){
    console.log(this.expressUrl+"admin/students/${id}");
    return this.student$ = this.http.get(this.expressUrl+"admin/students/${id}", this.httpOptions);
  }
  signUp(data: any){
    this.newUser = this.http.post(this.expressUrl+"user/signup", data);
    this.newUser.subscribe(dataUser => {
    return dataUser;
      // console.log(dataUser);      
    });
  }
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }
    else{
      errorMessage = "Error Code: ${error.status}\nMessage: ${error.message}";      
    }
  console.log(errorMessage);
  return throwError(errorMessage);  
  }

}