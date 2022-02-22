import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../classes/interfaces";
import * as moment from "moment";
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { pluck, share, shareReplay, tap, take } from 'rxjs/operators';


@Injectable()
export class AuthService {

    private url = 'http://localhost:8080'
    
    constructor(private http:  HttpClient) {

    }

    login(email: string, password: string) {
        let temp;
        return this.http.post<User>(`${this.url}/hotel/get/all`, {email, password}).pipe(res => {return temp = res;})
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration!);
        return moment(expiresAt);
    }
}