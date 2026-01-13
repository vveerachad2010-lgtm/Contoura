import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module'; // <--- ต้องมีบรรทัดนี้

@Module({
  imports: [
    PrismaModule, // <--- ต้องมีใน imports
    PassportModule,
    JwtModule.register({
      secret: 'MY_SECRET_KEY_CHANGE_LATER',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}