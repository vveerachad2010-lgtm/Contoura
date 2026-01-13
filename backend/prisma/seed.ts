// backend/prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // 1. ตั้งค่ารหัสผ่าน Admin (แก้ได้ตรงนี้)
  const password = 'ChangeMe1234'; 
  
  // เข้ารหัสรหัสผ่านก่อนบันทึก (เพื่อความปลอดภัยสูงสุด)
  const hashedPassword = await bcrypt.hash(password, 10);

  // 2. สร้าง Admin หรืออัปเดตถ้ามีอยู่แล้ว
  const admin = await prisma.user.upsert({
    where: { email: 'admin@contour-a.co.th' },
    update: {}, // ถ้ามีแล้วไม่ต้องทำอะไร
    create: {
      email: 'admin@contour-a.co.th',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('🎉 Created Admin User:', admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });