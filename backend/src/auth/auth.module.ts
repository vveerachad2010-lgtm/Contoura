// backend/src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module'; // ถ้ายังไม่มีไฟล์นี้ เดี๋ยวสร้าง step ถัดไป
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'MY_SECRET_KEY_CHANGE_LATER', // Key ลับสำหรับเซ็นลายเซ็น Token
      signOptions: { expiresIn: '1d' }, // Token อายุ 1 วัน
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // ลบ PrismaService ออกจากตรงนี้ถ้ามี
})
export class AuthModule {}