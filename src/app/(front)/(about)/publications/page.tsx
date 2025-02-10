import type { Metadata } from 'next';
import { GalleryBanner, TextContent } from '@/components';
import { BaseTemplate } from '@/templates/BaseTemplate';

const bannerSlides = [
  {
    id: 2,
    image: 'https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/f5/whatsapp-image-2022-05-11-at-3.23.10-pm-f52fe088.webp',
  },
  {
    id: 3,
    image: 'https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/32/Boats-in-the-mist-38-x-56-cm-scaled-321470c4.webp',
  },
];

const publications = `
    <strong>2024</strong>
        <ul>
            <li>NWS/RWS International Exhibition, Edinburgh – <em>Merit Award</em></li>
            <li>Fabriano in Aquarello</li>
            <li>Vietnam in Acquarello – <em>Top 30 Award</em></li>
            <li>NWWS 2024 Membership Exhibition – <em>Awarded with Faso/Boldbrush Award</em></li>
            <li>San Diego Watercolor Society Plein Air Juried Exhibition 2024</li>
            <li>Monza, “Thoughts of Eternity“, Frascati, Roma</li>
            <li>Daniel Smith Brand Ambassadors Exhibition</li>
            <li>Step by Step, Gdansk – <em>Excellence Award</em></li>
            <li>Silk Road Exhibition, Xi Ann, China</li>
            <li>San Diego 44th International Exhibition</li>
            <li>84th International Watercolor Exhibition, North West Watercolor Society</li>
            <li>La Venezie, Treviso – Seconda Espozizione Internazionale di Acquarellisti Contemporanei</li>
            <li>Awards Online Exhibition, American Society of Marine Artists</li>
            <li>Watercolor Golden Brush International Guest Artist</li>
            <li>IFAM, Malaysia International Online Art Exhibition and Competition</li>
            <li>Caudete Biennale Watercolor Exhibition</li>
        </ul>
`;

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Publications of Sergiy Lysyy',
};

export default async function Publications() {
  return (
    <BaseTemplate>
      <GalleryBanner slides={bannerSlides} className="md:!mx-10 h-[calc(90dvh-76px)]" />

      <TextContent
        texts={publications}
        title="Publications"
        subtitle="Publications in magazines etc. in the last years
"
      />
    </BaseTemplate>

  );
}
