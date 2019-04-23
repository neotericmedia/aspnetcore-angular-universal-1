import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';
import { IUser } from '../models/User';

@Injectable()
export class UserService {
  private baseUrl: string;
  users = [
    {
      "id": 14,
      "name": "test",
      "entryTime": "2019-04-23T16:02:03.3619922"
    },
    {
      "id": 10,
      "name": "asd",
      "entryTime": "2019-04-23T10:19:51.6086314"
    },
    {
      "id": 13,
      "name": "asdfasdfasd",
      "entryTime": "2019-04-23T10:19:45.4226921"
    },
    {
      "id": 12,
      "name": "GRIMMR3AP3R",
      "entryTime": "2019-04-22T14:25:59.132788"
    },
    {
      "id": 11,
      "name": "Gaulomatic",
      "entryTime": "2019-04-22T14:25:59.1327877"
    },
    {
      "id": 8,
      "name": "paonath",
      "entryTime": "2019-04-22T14:25:59.1327869"
    },
    {
      "id": 7,
      "name": "daveo1001",
      "entryTime": "2019-04-22T14:25:59.1327867"
    },
    {
      "id": 6,
      "name": "markwhitfeld",
      "entryTime": "2019-04-22T14:25:59.1327864"
    },
    {
      "id": 5,
      "name": "Ketrex",
      "entryTime": "2019-04-22T14:25:59.1327861"
    },
    {
      "id": 4,
      "name": "LiverpoolOwen",
      "entryTime": "2019-04-22T14:25:59.1327859"
    }
  ]

  constructor(private http: HttpClient, private injector: Injector) {
    this.baseUrl = this.injector.get(ORIGIN_URL);
  }

  getUsers() {
    // return this.http.get<IUser[]>(`${this.baseUrl}/api/users`);
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
