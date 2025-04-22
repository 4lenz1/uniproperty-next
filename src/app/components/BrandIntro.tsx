'use client';

import Image from 'next/image';

export const BrandIntro = () => {
  return (
    <section className="bg-white w-full py-16">
      <div className="container mx-auto px-4">
        {/* 標題 */}
        <div className="mb-10">
          <h2 className="text-sm font-semibold tracking-widest text-gray-700 mb-2">
            ブランドについて｜ABOUT THE UNIPROPERTY BRAND
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
            日本の不動産を通じ人を繋ぎ、
            <br />
            新たなコミュニティを築く。
          </h3>
          <p className="text-sm italic font-medium text-gray-700 mt-2">
            以下不動産為線・繫就日本移民投資新社群
            <br />
            <span className="font-semibold">
              Connecting People, Building New Communities
              <br />
              Through Japanese Real Estate.
            </span>
          </p>
        </div>

        {/* 左右排版：文字 + logo */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* 左側文字區塊 */}
          <div className="flex-1 text-sm text-gray-700 leading-7 space-y-4">
            <p>
              UNIPROPERTYという名前は、私たちのバリューとビジョンを反映しています。「Uni」は「Unique」に由来し、お客様に唯一無二のサービスを提供することを目指しています。同時に「Unity」を象徴し、不動産を通じて日本を愛する人々を結びつけ、新たなコミュニティを築くことを目指しています。
            </p>
            <p>
              ロゴには知恵と安定を象徴する藍藍色が使用され、4つの「U」が織り交ぜられたデザインは、団結と協力の精神を表現しています。これこそが私たちの企業化の中心です。
              海外投資家の方も、日本に移住を計画されている方も、UNIPROPERTYは日本の不動産における最も信頼できるパートナーです。
            </p>
            <p>
              UNIPROPERTY的名稱體現了我們的品牌理念與價值觀。「Unij」來源於「Unique」，代表我們致力於為客戶提供獨一無二的服務；同時也象徵著「Unity」，我們希望藉由不動產連結熱愛日本的人們，打造一個團結的新社群。
            </p>
            <p>
              我們的Logo採用了優雅的藍藍，運藍色象徵智慧、包容與穩定。四個相互交織的「U」字，進一步強化團結與協作的精神，這正是我們公司文化的核心。
              無論您是投資者亦或是計劃移居日本，UNIPROPERTY都將成為您在日本不動產旅程中最值得信賴的夥伴。
            </p>
          </div>

          {/* 右側 logo 區塊 */}
          <div className="flex-1 flex justify-center md:justify-center">
            <Image
              src="/section-logo.png" // 📌 請將 logo 放在 public 資料夾下
              alt="UNIPROPERTY Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
