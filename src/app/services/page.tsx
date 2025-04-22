import AssetConsultingSection from '../components/services/AssetConsultingSection';
import InteriorDesignSection from '../components/services/InteriorDesignSection';
import LeasingSection from '../components/services/LeasingSection';
import PropertyManagementSection from '../components/services/PropertyManagementSection';
import SalesPurchaseSection from '../components/services/SalesPurchaseSection';

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <SalesPurchaseSection />
      <LeasingSection />
      <PropertyManagementSection />
      <AssetConsultingSection />
      <InteriorDesignSection />
    </main>
  );
}
