'use client';

import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import Image from 'next/image';

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex-1"
    >
      {/* Hero 圖片區塊 */}
      <div className="relative w-full h-[400px] md:h-[600px]">
        <Image
          src="/contact-background.png"
          alt="Tokyo Tower"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 max-w-7xl mx-auto">
          <h2 className="text-white text-2xl sm:text-4xl font-bold bg-blue-900 bg-opacity-90 px-4 py-2">
            Contact / Access
          </h2>
          <p className="mt-4 text-white text-sm sm:text-base max-w-md bg-gradient-to-r from-fuchsia-700 to-pink-500 bg-opacity-90 px-4 py-2 rounded">
            Connect with us to discover your perfect Japanese property and begin
            your journey toward a new community.
          </p>
        </div>
      </div>

      {/* 內容三欄區塊 */}
      <div className="bg-white py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Detail */}
          <div>
            <h3 className="font-bold mb-4">連絡先｜CONTACT DETAIL</h3>
            <p className="mb-2 font-semibold leading-relaxed">
              ユニプロパティ株式会社
              <br />
              UNIPROPERTY CO., LTD.
            </p>
            <p className="flex items-center gap-2 mb-1">
              <PhoneOutlined /> +81 (3) 3527 3840
            </p>
            <p className="flex items-center gap-2 mb-1">
              <PhoneOutlined rotate={90} /> +81 (3) 3527 3841
            </p>
            <p className="flex items-center gap-2">
              <MailOutlined />
              <a
                href="mailto:info@uniproperty.co.jp"
                className="text-blue-500 hover:underline"
              >
                info@uniproperty.co.jp
              </a>
            </p>
            <h4 className="font-semibold mt-6 mb-2">
              本社所在地｜OUR LOCATION
            </h4>
            <p className="leading-relaxed">
              〒103-0024 東京都中央区日本橋小舟町8番6号 501
              <br />
              Rm. 501, 8-6 Kobunacho, Nihonbashi, Chuo-ku, Tokyo 103-0024, Japan
            </p>
            <h4 className="font-semibold mt-6 mb-2">Follow Us</h4>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.instagram.com/unipro_jp?igsh=MW9ycWVpMmd2NXp1MA=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="mailto:info@uniproperty.co.jp"
                aria-label="Email"
              >
                <img
                  src="/icons/mail.svg"
                  alt="Email"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://line.me/R/ti/p/@364oungl"
                target="_blank"
                rel="noreferrer"
                aria-label="LINE"
              >
                <img
                  src="/icons/line.svg"
                  alt="LINE"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          {/* Access Info */}
          <div>
            <h3 className="font-bold mb-4">アクセス｜ACCESS</h3>
            <p className="font-semibold mb-2">公共交通機関</p>
            <ol className="list-decimal pl-5 text-sm space-y-1">
              <li>三越前駅：A4出口から徒歩約7分</li>
              <li>人形町駅：A5出口から徒歩約7分</li>
              <li>小伝馬町駅：1番出口から徒歩約8分</li>
              <li>日本橋駅：D2出口から徒歩約8分</li>
              <li>新日本橋駅：5番出口から徒歩約10分</li>
              <li>神田駅：南口から徒歩約12分</li>
            </ol>
            <p className="font-semibold mt-4 mb-2">Public Transportation</p>
            <ol className="list-decimal pl-5 text-sm space-y-1">
              <li>Mitsukoshimae Station: About a 7-minute walk from Exit A4</li>
              <li>Ningyocho Station: About a 7-minute walk from Exit A5</li>
              <li>Kodemmacho Station: About an 8-minute walk from Exit 1</li>
              <li>Nihonbashi Station: About an 8-minute walk from Exit D2</li>
              <li>
                Shin-Nihonbashi Station: About a 10-minute walk from Exit 5
              </li>
              <li>Kanda Station: About a 12-minute walk from the South Exit</li>
            </ol>
          </div>

          {/* Google Map */}
          <div>
            <iframe
              title="Uniproperty Map"
              src="https://maps.google.com/maps?q=〒103-0024 東京都中央区日本橋小舟町8番6号&t=m&z=14&output=embed&iwloc=near"
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
