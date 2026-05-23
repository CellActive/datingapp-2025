// This file contains types related to user and authentication.

//This type is user object returned from API after login or registration.
export type User = {
    id: string;
    displayName: string;
    email: string;
    token: string;
    imageUrl?: string;
}

// This type is used for login.
export type LoginCreds = {
    email: string;
    password: string;
}

// This type is used for registration.
export type RegisterCreds = {
    email:string;
    displayName: string;
    password: string;
}
