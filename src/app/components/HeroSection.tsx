'use client';

import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="bg-white w-full py-12 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* 左側文字內容 */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold tracking-widest text-gray-700 mb-2">
            企業情報｜ABOUT
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-4">
            顧客プライバシーを徹底的に保護する
            <br />
            日本不動產のプロフェッショナル
          </h1>
          <h3 className="text-base md:text-lg text-gray-700 font-medium mb-2">
            顧客第一主義・透明度の高い日本不動產運用
          </h3>
          <p className="text-sm text-gray-600 leading-7">
            Your Trusted Partner in Japanese Real Estate, Prioritizing Customer
            Privacy.
          </p>
        </div>

        {/* 右側圖片 */}
        <div className="flex-1 w-full h-[260px] md:h-[400px] relative">
          <Image
            src="/hero-tokyo.png" // 📌 請將你的圖放在 public/hero-tokyo.jpg
            alt="Tokyo View"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-md shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
};
