import { GoogleOAuthGuard } from './google-oauth.guard';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { GoogleService } from './google.service';

@Controller('auth-google')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req : any) {
    // Initiates the Google OAuth flow
    return req;
  }

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req: any) {
    return this.googleService.googleLogin(req);
  }
}