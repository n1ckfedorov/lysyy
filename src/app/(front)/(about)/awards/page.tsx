import type { Metadata } from 'next';
import { TextContent } from '@/components';
import { PhotoBanner } from '@/components/PhotoBanner';
import { BaseTemplate } from '@/templates/BaseTemplate';

const awards = `
<strong>2024</strong>
        <ul>
            <li><em>Merit Winner</em> – NWS/RWS Exhibition in the Royal Scottish Gallery</li>
            <li><em>Top 30 Excellence Award</em> – Vietnam in Acquarello</li>
            <li><em>Faso/Boldbrush Award</em> – North West Watercolor Society</li>
            <li><em>Honorable Mention</em> – 8th Plein Air Exhibition, San Diego Watercolor Society</li>
            <li><em>Excellence Award</em> – Step by Step 2024, Gdansk</li>
            <li><em>Juror’s Choice Holbein Award</em> – San Diego Watercolor Society member exhibition “Not the Obvious”</li>
            <li><em>Excellence Award</em> – “Wadden Light” Treviso</li>
            <li><em>Top 80 Award</em> – IFAM, Malaysia</li>
        </ul>
    <strong>2023</strong>
        <ul>
            <li><em>Third Prize</em> – "14th July Glacier", IWS Santiago Watercolor for All</li>
            <li><em>Top 30 Award of Excellence</em> – Exposition D’Aquarelles Albi</li>
            <li><em>2nd Prize of Public</em> – San Diego Watercolor Society 43rd International Exhibition</li>
            <li><em>Marney Leppley & Pittsburgh Watercolor Society Award</em> – Pennsylvania Watercolor Society 44th Annual International Juried Exhibition</li>
            <li><em>Merit Award</em> – North West Society / Royal Scottish Watercolor Society 2024</li>
            <li><em>Rising Star Award</em> – International Watercolor Masters 2024</li>
        </ul>
    <strong>2022</strong>
        <ul>
            <li><em>Top 20 Award of Excellence</em> – Exposition d’Aquarelles Albi/Warsaw</li>
            <li><em>Special Mention</em> – International Jury in Fabriano as Finalist</li>
            <li><em>Second Prize</em> – Watercolor in the Heart, Gdansk</li>
            <li><em>Pursuit of Excellence Award</em> – International Watercolor Masters 2023</li>
            <li><em>Cover Feature</em> – Baohong Paper</li>
            <li><em>Third Prize</em> – Freedom Ukraine</li>
        </ul>
   <strong>2021</strong>
        <ul>
            <li><em>Third Prize</em> – San Diego Watercolor Society Member Exhibition</li>
            <li><em>Excellence Award</em> – Japanese International Watercolor Institute</li>
            <li><em>Excellence Award</em> – International Pyrenee Online Exhibition</li>
            <li><em>Second Prize</em> – San Diego Watercolor Society Member Exhibition</li>
            <li><em>Honorable Award</em> – Mini Watercolor Kiev</li>
            <li><em>Highly Commended Finalist Award</em> – International Watercolor Masters</li>
            <li><em>Certificate of Merit</em> – Fabriano International Watercolor Biennale</li>
        </ul>
    <strong>2020</strong>
        <ul>
            <li><em>Silver Medal</em> – Mondial Art Academie</li>
            <li><em>Honorable Nomination</em> – Biennale International Prize, Fabriano</li>
            <li><em>Certificate of Achievement</em> – Step by Step, Poland</li>
            <li><em>5th Place</em> – Masters of Watercolor, Moscow</li>
            <li><em>Nomination</em> – Painting of the Year, Holland</li>
        </ul>
    <strong>2019</strong>
        <ul>
            <li><em>First Prize</em> – GAWA Watercolor Contest</li>
            <li><em>Finalist</em> – Watercolor Contest, Galeria Esdé, Italy</li>
            <li><em>Tintoretto Brushes Kit</em></li>
        </ul>
   <strong>2018</strong>
        <ul>
            <li><em>Honorable Award</em> – IWS Pakistan</li>
            <li><em>Exhibition Award</em> – Galeria Esdé, Italy</li>
            <li><em>Best 50 Watercolorists</em> – GAWA</li>
            <li><em>Exhibition Award</em> – IWS Czech</li>
        </ul>
`;

export const metadata: Metadata = {
  title: 'Awards',
  description: 'Awards of Sergiy Lysyy',
};

export default async function Awards() {
  return (
    <BaseTemplate>
      <PhotoBanner image="https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/f5/whatsapp-image-2022-05-11-at-3.23.10-pm-f52fe088.webp" />
      <TextContent
        texts={awards}
        title="Awards"
        subtitle="Listing of awards Sergiy Lysyy has received"
      />

    </BaseTemplate>

  );
}
