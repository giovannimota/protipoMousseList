import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private httpClient: HttpClient) {

  }

  getToDos() {
    return this.httpClient.get("https://5385edb6-6fa2-463e-9b95-68cf25664fae.mock.pstmn.io/todos");
  }

}
