import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Global แปลว่าประกาศครั้งเดียว ใช้ได้ทุกที่ (ไม่ต้อง import บ่อยๆ)
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}