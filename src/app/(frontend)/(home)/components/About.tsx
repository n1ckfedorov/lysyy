import { BookOpen, Paintbrush, Palette, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-x-0 lg:gap-x-10 items-center">
        <div className="md:col-span-2 lg:border-r border-secondary/30 lg:pr-10  ">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Sergiy Lysyy in a Quick Overview

          </h2>
          <p className="mt-4 max-w-2xl">
            Sergiy Lysyy is a passionate artist, educator, and mentor.
            His life revolves around painting, teaching aspiring artists, and hosting professional workshops.
            With years of experience, he inspires others to discover their creative potential and express themselves through art.

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

            <div className="flex flex-col items-start gap-2 md:border-r border-secondary/50 md:pr-10">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-4 ">
                <Palette className="size-8 text-secondary" />
                Artist
              </h3>
              <p>
                I was born in Odessa region, Ukraine in 1971. Since 2011 I live in Klaipeda, Lithuania
                I paint a lot as it is my great passion and always try to participate in different meetings, conferences, biennales and exhibitions. I love to paint the city sceneries
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-4 ">
                <BookOpen className="size-8 text-secondary" />
                Teaching
              </h3>

              <p>
                I actively participate in popularizing watercolor pouring techniques in Lithuania and abroad, organizing watercolor pouring mastery demonstrations and lessons all over the world.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 md:border-r border-secondary/50 md:pr-10">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-4 ">
                <Trophy className="size-8 text-secondary" />
                Awards
              </h3>
              <p>
                I have been nominated and awarded numerous prizes and awards.
                <br />

                <Link href="/awards" className="text-blue-500 hover:underline">See: Awards</Link>

              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-4 ">
                <Paintbrush className="size-8 text-secondary" />
                Works
              </h3>
              <p>
                My works have been exhibited all over the world, won international awards, and many are in private collections.
                <br />
                <Link href="/works" className="text-blue-500 hover:underline">Explore My Works</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mx-auto col-span-2 lg:col-span-1">
          <Image
            src="/assets/images/about.jpg"
            alt="Sergiy Lysyy"
            width={500}
            height={500}
            className="rounded-lg shadow-md"

          />
        </div>

      </div>
    </section>
  );
};
