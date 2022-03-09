export interface User {
    email: string;
    password: string;
}

export interface AuthResponseData {
    email: string;
    password: string;
    idToken?: string;
    localId?: string;
    expiresIn: Date;
}