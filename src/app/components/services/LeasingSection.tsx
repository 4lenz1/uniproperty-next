'use client';

import Image from 'next/image';

export default function LeasingSection() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* 左側文字區塊 */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">不動產賃貸</h2>
          <p className="text-lg font-semibold mb-2">不動產租賃｜Leasing</p>
          <p className="mb-4 leading-relaxed">
            日本在住外國籍のお客様に、安全で高品質な賃貸サービスをご提供いたします。
            一般の住宅賃貸に加え、学生寮、社宅、事務所、店舗などの賃貸も取り扱っております。
            日本の法律や不動産業界の規範に精通したプロフェッショナルが、最適な賃貸プランをご提案いたします。
          </p>
          <p className="mb-6 leading-relaxed">
            提供在日外籍人士安全、高品質的租賃服務。
            除一般房屋租賃外，也涵蓋學生宿舍、公司員工宿舍、事務所及商鋪租賃等。
            為您量身打造最佳租屋方案。
          </p>
          <ul className="space-x-4 font-semibold text-[#1e40af] text-base flex flex-wrap">
            <li># 外國籍可賃</li>
            <li># 海外審查</li>
            <li># 電子契約</li>
            <li># オンライン内見</li>
          </ul>
        </div>

        {/* 右側圖片區塊 */}
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src="/leasing.jpg" // ← 請將你上傳的圖檔放進 public/images
            alt="不動產賃貸流程"
            width={700}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
