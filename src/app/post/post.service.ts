import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url='https://jsonplaceholder.typicode.com';
  
httpoptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
constructor( private httpClient:HttpClient) {}



getAll():Observable<any>{
  return this.httpClient.get(this.url+'/posts/').pipe(catchError((error:HttpErrorResponse)=>{
    console.error('An error occurred:', error);
    return throwError(error);
  })
  )
}
// getall():Observable<any>{
//   return this.httpClient.get(this.url).pipe(catchError((error:HttpErrorResponse)=>{
// return throwError(error)
//   })
//   )
// }

find(id:number):Observable<any>{
  return this.httpClient.get(this.url+'/posts/'+id).pipe(catchError((error:HttpErrorResponse)=>{
    return throwError(error);
  })
  )
}
create(post:Post):Observable<any>{
  return this.httpClient.post(this.url+'/posts/',JSON.stringify(post),this.httpoptions).pipe(catchError((error:HttpErrorResponse)=>{
    return throwError(error);
  })
  )
}
update(id:number,post:Post):Observable<any>{
  return this.httpClient.put(this.url+'/posts/'+ id,JSON.stringify(post),this.httpoptions).pipe(catchError((error:HttpErrorResponse)=>{
    return throwError(error);
  })
  )
}
delete(id:number){
  return this.httpClient.delete(this.url+'/posts/'+ id).pipe(catchError((error:HttpErrorResponse)=>{
    return throwError(error);
  })
  )
}

}
