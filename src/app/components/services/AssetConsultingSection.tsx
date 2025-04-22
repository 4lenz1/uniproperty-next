'use client';

import Image from 'next/image';

export default function AssetConsultingSection() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* 左側文字 */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">資產運用顧問</h2>
          <p className="text-lg font-semibold mb-2">
            資產運用顧問｜Asset Consulting
          </p>
          <p className="italic text-gray-500 text-xl mb-8">COMING SOON</p>

          <ul className="space-x-4 font-semibold text-[#1e40af] text-base flex flex-wrap">
            <li>#</li>
          </ul>
        </div>

        {/* 右側圖片 */}
        <div className="md:w-1/2">
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/asset.jpg" // 請放到 public/images/
              alt="Asset Consulting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
