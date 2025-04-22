'use client';

import Image from 'next/image';

export default function PropertyManagementSection() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* 左側文字 */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">物件管理</h2>
          <p className="text-lg font-semibold mb-2">
            物件管理｜Property Management
          </p>
          <p className="mb-4 leading-relaxed">
            長年にわたり、賃貸物件や民泊旅館の管理経験を持ち、日本の物件管理に関する法令に精通しています。
            お預かりした在日不動産を丁寧に管理し、クラウドや通信アプリなどの最新デジタル技術を駆使し、
            より効率的で便利な顧客との連携を実現します。
          </p>
          <p className="mb-6 leading-relaxed">
            具備多年出租套房、公寓以及民宿旅館管理經驗，熟知日本物件管理相關法令。
            用心管理維護顧客所委託的在日不動產，並有效運用雲端技術及通訊軟體等現代電子科技，
            創造與顧客更效率便利的連結。
          </p>
          <ul className="space-x-4 font-semibold text-[#1e40af] text-base flex flex-wrap">
            <li># 電子化管理</li>
            <li># </li>
            <li># </li>
            <li># </li>
          </ul>
        </div>

        {/* 右側圖片 */}
        <div className="md:w-1/2">
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/management.jpg" // 放進 public/images/
              alt="物件圖片"
              fill
              className="object-cover"
              priority
            />
            {/* 可以未來加上輪播控制邏輯 */}
          </div>
        </div>
      </div>
    </section>
  );
}
