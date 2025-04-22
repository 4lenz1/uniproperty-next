// app/page.tsx

import { BrandIntro } from './components/BrandIntro';
import { CompanyProfile } from './components/CompanyProfile';
import { HeroSection } from './components/HeroSection';
import { ServiceOverview } from './components/ServiceOverview';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />

      <section id="home_brand">
        <BrandIntro />
      </section>

      <section id="home_services">
        <ServiceOverview />
      </section>
      <section id="home_corporateProfile">
        <CompanyProfile />
      </section>
    </main>
  );
}
