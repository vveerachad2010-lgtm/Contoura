import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* --- Navbar (เมนูกระจกด้านบน) --- */}
      <nav className="fixed top-0 w-full z-50 p-4">
        <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-widest text-white">
            CONTOUR-A
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-200">
            <Link href="#services" className="hover:text-white hover:scale-105 transition">SERVICES</Link>
            <Link href="#portfolio" className="hover:text-white hover:scale-105 transition">PORTFOLIO</Link>
            <Link href="#contact" className="hover:text-white hover:scale-105 transition">CONTACT</Link>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition">
            Start Project
          </button>
        </div>
      </nav>

      {/* --- Hero Section (ส่วนหัวเว็บ) --- */}
      <section className="flex-1 flex items-center justify-center relative pt-20">
        {/* วงกลมแสงพื้นหลัง */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 text-glow">
            We Design Future.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
            บริการออกแบบเว็บไซต์และกราฟิกระดับมืออาชีพ <br/>
            ยกระดับธุรกิจด้วยดีไซน์ที่แตกต่างและทันสมัย
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#portfolio" className="glass px-8 py-3 rounded-full text-white font-semibold hover:bg-white/20 transition">
              ดูผลงานของเรา
            </Link>
          </div>
        </div>
      </section>

      {/* --- Services Section (การ์ดกระจก 3 ใบ) --- */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Web Design</h3>
            <p className="text-gray-300">ออกแบบเว็บไซต์รองรับ SEO และ AEO เน้นความสวยงามและการใช้งานที่ลื่นไหล</p>
          </div>
          {/* Card 2 */}
          <div className="glass-card">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Branding</h3>
            <p className="text-gray-300">สร้างภาพลักษณ์แบรนด์ โลโก้ และอัตลักษณ์องค์กรให้จดจำง่าย</p>
          </div>
          {/* Card 3 */}
          <div className="glass-card">
            <h3 className="text-2xl font-bold mb-4 text-pink-300">Development</h3>
            <p className="text-gray-300">พัฒนาระบบหลังบ้านด้วยเทคโนโลยี Enterprise Grade ปลอดภัยและรวดเร็ว</p>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
        © 2025 Contour-A Co., Ltd. All rights reserved.
      </footer>
    </div>
  );
}