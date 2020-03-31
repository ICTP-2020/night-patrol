import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  URL: string = 'http://localhost:3000';
  // URL: string = 'https://ictp2020-np-server.azurewebsites.net';

  constructor(private http: HttpClient) { 

  }

  getMessages(): Observable<Object> {
    return this.http.get(URL + '/messages');
  }

  getMessage(id: string): Observable<Object> {
    return this.http.get(URL + `/messages/${id}`);
  }

}