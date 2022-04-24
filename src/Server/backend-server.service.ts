import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendServerService {

  constructor(private http: HttpClient) { }

  getUserProfileInfo = () => {
    return this.http.get('/api/users/profile');
  }
}
