import { services } from './data/services';
import { SiteLayout } from './layouts/SiteLayout';
import { Hero } from './sections/Hero';
import { ServiceCatalog } from './sections/ServiceCatalog';

export default function App() {
  return (
    <SiteLayout>
      <Hero />
      <ServiceCatalog services={services} />
    </SiteLayout>
  );
}
