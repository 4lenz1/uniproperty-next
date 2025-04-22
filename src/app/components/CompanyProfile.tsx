'use client';

export const CompanyProfile = () => {
  return (
    <section className="bg-white w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-semibold tracking-widest text-black mb-6">
          会社概要｜CORPORATE PROFILE
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-300 text-black">
            <tbody>
              <tr className="border-b">
                <th className="p-3 w-40 font-medium bg-white">商号</th>
                <td className="p-3">ユニプロパティ株式会社</td>
              </tr>
              <tr className="border-b">
                <th className="p-3 font-medium bg-white">英文表記</th>
                <td className="p-3">UNIPROPERTY Co., Ltd.</td>
              </tr>
              <tr className="border-b">
                <th className="p-3 font-medium bg-white">本社所在地</th>
                <td className="p-3">
                  〒103-0024 東京都中央区日本橋小舟町8番6号 501
                </td>
              </tr>
              <tr className="border-b">
                <th className="p-3 font-medium bg-white">代表電話</th>
                <td className="p-3">03-3527-3840</td>
              </tr>
              <tr className="border-b">
                <th className="p-3 font-medium bg-white">設立</th>
                <td className="p-3">令和6年6月26日</td>
              </tr>
              <tr className="border-b">
                <th className="p-3 font-medium bg-white">代表者</th>
                <td className="p-3">代表取締役　李 哲夫</td>
              </tr>
              <tr className="border-b">
                <th className="p-3 font-medium bg-white">資本金</th>
                <td className="p-3">8,000,000 円</td>
              </tr>
              <tr className="border-b">
                <th className="p-3 font-medium bg-white">所属協会</th>
                <td className="p-3">公益社団法人 東京都宅地建物取引業協会</td>
              </tr>
              <tr className="border-b">
                <th className="p-3 font-medium bg-white">免許証番号</th>
                <td className="p-3">東京都知事(1)第 111257 号</td>
              </tr>
              <tr>
                <th className="p-3 font-medium bg-white">事業内容</th>
                <td className="p-3 space-y-1">
                  <ul className="list-disc list-inside">
                    <li>
                      ①
                      国内外での不動産売買、賃貸、管理、仲介、情報提供サービス、開発業
                    </li>
                    <li>② 各種保険代理業</li>
                    <li>③ 建築工事の設計、施工、監理、請負業</li>
                    <li>④ 各種建築物のリフォーム工事業</li>
                    <li>⑤ 旅館業法に基づく旅館、ホテル営業及び簡易宿泊業</li>
                    <li>⑥ 住宅宿泊事業法に基づく宿泊事業、管理及び仲介業</li>
                    <li>⑦ 貿易及び輸出入代行業</li>
                    <li>⑧ 各種コンサルティング業</li>
                    <li>⑨ 前各号に付帯又は関連する一切の事業</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
