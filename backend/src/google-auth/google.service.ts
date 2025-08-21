import { Injectable } from "@nestjs/common";
import { Request } from "express";


@Injectable()
export class GoogleService {
  constructor() {}

   googleLogin(req : Request) {
    console.log('Google login request:', req.user);
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}