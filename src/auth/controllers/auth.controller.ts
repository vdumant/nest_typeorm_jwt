import { Controller, Post, Req, UseGuards, Get } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { PayloadToken } from '@auth/models/token.model';
import { AuthService } from './../services/auth.service';
import { User } from './../../users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    const user = req.user as User;
    return this.authService.generateJWT(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Req() req: Request) {
    const user = req.user as PayloadToken;
    return this.authService.getUser(user.sub);
  }
}
