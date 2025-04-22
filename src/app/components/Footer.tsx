export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm mt-auto">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        {/* 公司介紹 */}
        <div>
          <h4 className="font-semibold text-lg mb-2">ユニプロパティ株式会社</h4>
          <p className="text-gray-300 leading-relaxed">
            日本在地專業房產公司，擁有超過10年的經驗，服務海外投資者與居住者。
          </p>
        </div>

        {/* 聯絡資訊 */}
        <div>
          <h4 className="font-semibold text-lg mb-2">聯絡方式</h4>
          <ul className="text-gray-300 space-y-1">
            <li>地址：東京都港区南青山</li>
            <li>電話：+81-3-1234-5678</li>
            <li>Email：info@uniproperty.co.jp</li>
          </ul>
        </div>

        {/* 社群連結 */}
        <div>
          <h4 className="font-semibold text-lg mb-2">追蹤我們</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/unipro_jp"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              Instagram
            </a>
            {/* 其他平台可加 */}
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4 text-gray-400">
        © {new Date().getFullYear()} Uniproperty Co., Ltd. All rights reserved.
      </div>
    </footer>
  );
};
