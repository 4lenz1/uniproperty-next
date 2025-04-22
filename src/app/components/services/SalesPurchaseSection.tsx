'use client';

import Image from 'next/image';

export default function RealEstateSaleSection() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* 左側文字 */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">不動產売買</h2>
          <p className="text-lg font-semibold mb-2">
            不動產買賣｜Sales & Purchase
          </p>

          <p className="text-base text-gray-700 leading-relaxed mb-4">
            外国人の日本不動産売買プロセスに精通したエージェントが、一気通貫のサービスをご提供いたします。
            税金や法合に関する相談や、複雑な購入手続きもサポートいたします。ご要望に応じて、ビザ申請サポートや
            融資のご紹介（在日台湾資本、中国資本銀行および日系銀行と提携）等のサービスもご提供いたします。
          </p>

          <p className="text-base text-gray-700 leading-relaxed mb-6">
            由精通外籍人士置產流程的專業經紀人提供垂直整合服務，為您解答相關稅金、法合問題並協助處理置產時的繁瑣手續。
            並根據需求，提供融資介紹（在日台資、中資銀行及本地銀行）、簽證申辦等服務。
          </p>

          <ul className="space-x-4 font-semibold text-[#1e40af] text-base flex flex-wrap">
            <li># 日本移住</li>
            <li># 海外投資</li>
            <li># 融資紹介</li>
            <li># 電子契約</li>
          </ul>
        </div>

        {/* 右側圖片 */}
        <div className="md:w-1/2">
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/process.jpg"
              alt="Real Estate Purchase Flow"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
