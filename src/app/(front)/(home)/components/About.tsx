import { BookOpen, Paintbrush, Palette, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-x-0 lg:gap-x-10 items-center">
        <div className="md:col-span-2 lg:border-r border-secondary/30 lg:pr-10 order-2 lg:order-1 ">
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
                Sergiy creates captivating paintings, using a unique blend of colors, textures, and expressive strokes.
                His works are deeply influenced by nature, emotions, and human connection.
                Each piece tells a story, inviting the viewer to pause and reflect.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-4 ">
                <BookOpen className="size-8 text-secondary" />
                Teaching
              </h3>

              <p>
                As an educator, Sergiy helps artists of all levels master different techniques.
                He conducts

                <strong>live workshops, online classes, and private training sessions</strong>
                .
                His teaching approach focuses on creativity, confidence, and self-expression.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 md:border-r border-secondary/50 md:pr-10">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-4 ">
                <Trophy className="size-8 text-secondary" />

                Awards
              </h3>
              <p>
                Recognized in various art competitions, Sergiy’s work has been exhibited in prestigious galleries and collections worldwide.
                His achievements include multiple awards and nominations for excellence in fine arts.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-4 ">
                <Paintbrush className="size-8 text-secondary" />
                Works
              </h3>
              <p>
                Explore Sergiy’s latest artworks and projects in the
                {' '}
                <Link href="/works" className="text-blue-500 hover:underline">works</Link>
                {' '}
                section. Discover his artistic vision, techniques, and masterpieces available for purchase.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center order-1 lg:order-2 mx-auto col-span-2 lg:col-span-1">
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
