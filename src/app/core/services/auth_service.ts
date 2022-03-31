import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Subject, tap, throwError } from "rxjs";
import { AuthResponseData } from "../interfaces/interfaces";
import { User } from "../models/user_model";


@Injectable({providedIn: 'root'})

export class AuthService {  

    private url = 'http://localhost:8080'
    user = new Subject<User>();

    constructor(private http: HttpClient) {}

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            `${this.url}/signup`,
            {
                email: email,
                password: password
            }
        )
        .pipe(
            catchError(err => this.handleError(err)),
            tap(resData => this.handleAuthentication(
                resData.email, 
                resData.localId!, 
                resData.idToken!,
                +resData.expiresIn
            ))                      
        )
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            `${this.url}/login`,
            {
                email: email,
                password: password
            }
        )
        .pipe(
            catchError(err => this.handleError(err)),
            tap(resData => this.handleAuthentication(
                resData.email, 
                resData.localId!, 
                resData.idToken!,
                +resData.expiresIn
            ))                       
        )
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'Unknown error occured';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(() => errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS': 
                errorMessage = 'This email exists';
        }
        return throwError(() => errorMessage);
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 10000);
        const user = new User(email, userId!, token!, expirationDate);
        this.user.next(user);
    }

}