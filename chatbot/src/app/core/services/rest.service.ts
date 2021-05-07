import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.baseApi;

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private readonly http: HttpClient
  ) { }

  sendMessage(data): Observable<any> {
    return this.http.post(`${URL+'/sendMessage'}`, data);
  }
}
