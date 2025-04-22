'use client';

const services = [
  {
    id: '01.',
    title: '不動産売買｜Sales & Purchase',
    desc: '国内外の不動産売買に関するエージェント業務、税金・法律相談や融資サポート、アフターサービス等幅広いご要望に対応します。',
    link: '#',
  },
  {
    id: '02.',
    title: '不動産賃貸｜Leasing',
    desc: '住宅賃貸仲介、法人契約、空室対策や賃貸管理サービスを提供。住宅から店舗・事務所、マンスリーマンションや民泊対応物件まで幅広いニーズに対応可能です。',
    link: '#',
  },
  {
    id: '03.',
    title: '物件管理｜Property Management',
    desc: '賃貸・売買の両方に対応した包括的な物件管理。内装、家賃回収、滞納対応など安心の運営をサポートします。',
    link: '#',
  },
  {
    id: '04.',
    title: '資産運用顧問｜Asset Consulting',
    desc: '市場調査、収益試算、融資相談、税務アドバイス、信託活用など、資産形成・相続対策に特化した総合アドバイスを提供します。',
    link: '#',
  },
  {
    id: '05.',
    title: 'インテリアデザイン｜Interior Design',
    desc: 'COMING SOON',
    link: '#',
  },
];

export const ServiceOverview = () => {
  return (
    <section className="bg-white w-full py-16">
      <div className="container mx-auto px-4">
        {/* 標題 */}
        <h2 className="text-lg font-semibold tracking-widest text-gray-700 mb-6">
          事業概要｜SERVICE OVERVIEW
        </h2>

        {/* 卡片區塊 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-md shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <p className="text-sm text-blue-800 font-semibold mb-2">
                  {service.id}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">{service.desc}</p>
              </div>
              <div className="mt-4">
                <a
                  href={service.link}
                  className="text-sm text-blue-700 hover:underline inline-flex items-center"
                >
                  詳しく View More &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
