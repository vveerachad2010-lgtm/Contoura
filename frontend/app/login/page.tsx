// frontend/src/app/login/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // ยิงไปที่ Nginx (/api/auth/login) -> Backend
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error('Login failed');

      const data = await res.json();
      
      // บันทึก Token (ในอนาคตควรใช้ cookie แต่ตอนนี้เอาแบบง่ายก่อน)
      localStorage.setItem('token', data.access_token);
      alert('Login สำเร็จ! ยินดีต้อนรับ Admin');
      
      // ส่งไปหน้า Dashboard (เดี๋ยวเราค่อยสร้างหน้านี้)
      router.push('/'); 
    } catch (err) {
      setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/30 rounded-full blur-[100px] -z-10"></div>

      <div className="glass-card w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-white text-glow">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-400 transition"
              placeholder="admin@contour-a.co.th"
              required 
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-400 transition"
              placeholder="••••••••"
              required 
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition shadow-lg shadow-purple-500/30"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
}