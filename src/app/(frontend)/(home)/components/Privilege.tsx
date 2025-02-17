'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Privilege = () => {
  return (

    <div className="container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 border-t border-gray-200 pt-16">

      <div className="flex flex-col items-center  gap-4">
        <div className="w-full bg-white rounded-lg flex items-center justify-center h-40">
          <Image src="/assets/images/rosa.png" alt="Privilege 1" width={400} height={100} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-bold">
            Ambassador of Rosa
          </h3>

          <p className="text-gray-600 text-center">
            Sergiy Lysyy is an Ambassador of Rosa Paints.
            {' '}
            <br />
            For more information please visit:
            <br />
            <Link href="https://rosa.ua/uk/content/84-sergiy-lysyy-art-colaboration" target="_blank" className="text-blue-500 hover:underline">
              Rosa Paints
            </Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center  gap-4">
        <div className="w-full bg-white rounded-lg flex items-center justify-center h-40">
          <Image src="/assets/images/national-water.png" alt="Privilege 2" width={200} height={200} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-bold">
            National Watercolor Society
          </h3>

          <p className="text-gray-600 text-center">
            Sergiy Lysyy is a signature member of the National Watercolor Society in the USA.
            {' '}
            <br />
            For more information please visit:
            <br />
            {' '}
            <Link href="https://www.nationalwatercolorsociety.org/" target="_blank" className="text-blue-500 hover:underline">National Watercolor Society</Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center  gap-4">
        <div className="w-full bg-white rounded-lg flex items-center justify-center h-40">
          <Image src="/assets/images/accademia-internazionale-dell-acquarello.png" alt="Privilege 3" width={120} height={100} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-bold">
            Accademia Internazionale dell&#39;Acquerello
          </h3>
          <p className="text-gray-600 text-center">
            Sergiy Lysyy has been a members of the Academy.
            {' '}
            <br />
            For more information please visit:
            <br />
            {' '}
            <Link href="https://www.accademiainternazionaledellacquarello.com/" target="_blank" className="text-blue-500 hover:underline">
              Accademia Internazionale dell'Acquerello
            </Link>
          </p>
        </div>
      </div>
    </div>

  );
};
