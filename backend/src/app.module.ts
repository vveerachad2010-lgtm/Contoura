import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module'; // <--- เพิ่มบรรทัดนี้

@Module({
  imports: [
    PrismaModule, // <--- เพิ่มตรงนี้ด้วย
    AuthModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}