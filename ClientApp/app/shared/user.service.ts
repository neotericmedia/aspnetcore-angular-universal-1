import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { IUser } from '../models/User';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class UserService {
  private baseUrl: string;
  // private usersUrl = 'api/users/users.json';

  constructor(private http: HttpClient, private injector: Injector) {
    this.baseUrl = this.injector.get(ORIGIN_URL);
  }

  // getProducts(): Observable<IUser[]> {
  //   return this.http.get<IUser[]>(this.productUrl).pipe(
  //     tap(data => console.log('All: ' + JSON.stringify(data))),
  //     catchError(this.handleError)
  //   );
  // }

  // getUsers() {
  //   return this.http.get<IUser[]>(`${this.baseUrl}/api/users`);
  // }

  getUsers(): IUser[] {
    return [
      {
        'id': 14,
        'name': 'test'
      },
      {
        'id': 10,
        'name': 'asd'
      },
      {
        'id': 13,
        'name': 'asdfasdfasd'
      },
      {
        'id': 12,
        'name': 'GRIMMR3AP3R'
      },
      {
        'id': 11,
        'name': 'Gaulomatic'
      },
      {
        'id': 8,
        'name': 'paonath'
      },
      {
        'id': 7,
        'name': 'daveo1001'
      },
      {
        'id': 6,
        'name': 'markwhitfeld'
      },
      {
        'id': 5,
        'name': 'Ketrex'
      },
      {
        'id': 4,
        'name': 'LiverpoolOwen'
      }
    ];
  }

  getUser(user: IUser) {
    return this.http.get<IUser>(`${this.baseUrl}/api/users/` + user.id);
  }

  deleteUser(user: IUser) {
    return this.http.delete<IUser>(`${this.baseUrl}/api/users/` + user.id);
  }

  updateUser(user: IUser) {
    return this.http.put<IUser>(`${this.baseUrl}/api/users/` + user.id, user);
  }

  addUser(newUserName: string) {
    return this.http.post<IUser>(`${this.baseUrl}/api/users`, {
      name: newUserName
    });
  }
}
