import type { Metadata } from 'next';
import { TextContent } from '@/components';
import { PhotoBanner } from '@/components/PhotoBanner';

const exhibitions = `
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
    <strong>2023</strong>
        <ul>
            <li>Publishing my book: <em>Catch the Light</em></li>
            <li>IWS Santiago Watercolor for All – <em>Third Prize with "14th July Glacier"</em></li>
            <li>JIWI International Watercolor Institute Exhibition</li>
            <li>Exposition Internationale Aquarelles Albi 2023</li>
            <li>Masters of Watercolor 2023, Leiden</li>
            <li>Article in <em>Kunstenaar magazine</em></li>
            <li>San Diego Watercolor 43rd International Exhibition – <em>2nd Prize of Public Voted Work with "Silence" (sold)</em></li>
            <li>NWS National Watercolor Society Member Exhibition – <em>"Awakening"</em></li>
            <li>Pennsylvania Watercolor Society 44th Annual International Juried Exhibition – <em>"Awakening", receiving the Marney Leppley and Pittsburgh Watercolor Society Award</em></li>
            <li>NWS National Watercolor Society and Royal Scottish Society 2024 Exchange Exhibition – <em>Merit Award</em></li>
            <li>IWM 2024 International Watercolor Masters – <em>Rising Star Award</em></li>
            <li>Aquous Open 2023, Pittsburgh Watercolor Society – <em>Signature Membership</em></li>
            <li>Rivers of Color, International Exhibition Mexico</li>
            <li>Watercolor International 6, Thessaloniki</li>
            <li>Marechausee Museum, Nov/Dec</li>
        </ul>
    <strong>2022</strong>
        <ul>
            <li>JIWI Invited Artist in Excellent Paintings</li>
            <li>Fabriano</li>
            <li>IWS India</li>
            <li>IWS Bulgaria</li>
            <li>Exposition d'Aquarelles de Coquelles</li>
            <li>Exposition d'Aquarelles – Albi, France / Warsaw, Poland – <em>Top 20 Excellence Award</em></li>
            <li>Winter, Member SDWS Member Exhibition</li>
            <li>Spring, Member SDWS Member Exhibition</li>
            <li>Summer, Member SDWS Member Exhibition</li>
            <li>Selection for Live Gallery Exhibition, Society of Watercolor Artists, USA</li>
            <li>7th Biennale Belgrade, Serbia</li>
            <li>Special Mention by Jury, Fabriano Watercolor International Prize 2022</li>
            <li>Step By Step Golden Edition</li>
            <li>Pittsburgh Watercolor Society Selection for Aqueous Open 2022 – <em>(Two Works)</em></li>
            <li>Invited Artist, V1 Biennale Internacional, Acuarela, Spain – <em>Oct/Nov</em></li>
            <li>IAS France/Vietnam – <em>Top 20 Excellence Award in "Peaceful World"</em></li>
            <li>Selection for Summer Member SDWS Member Exhibition</li>
            <li>With Watercolour in the Heart Exhibition, Gdansk, Poland – <em>Second Prize</em></li>
            <li>Invited Artist, IWS Indonesia</li>
            <li>Invited Artist, Freedom Ukraine</li>
        </ul>
`;

export const metadata: Metadata = {
  title: 'Exhibitions',
  description: 'Exhibitions of Sergiy Lysyy',
};

export default async function Exhibitions() {
  return (
    <>
      <PhotoBanner image="https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/f5/whatsapp-image-2022-05-11-at-3.23.10-pm-f52fe088.webp" />
      <TextContent
        texts={exhibitions}
        title="Exhibitions"
        subtitle="Listing of  group exhibitions in the last years"
      />
    </>
  );
}
