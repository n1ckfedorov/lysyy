'use client';

import Image from 'next/image';

export const Privilege = () => {
  return (

    <div className="container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 border-t border-gray-200 pt-16">

      <div className="flex flex-col items-center  gap-4">
        <div className="w-full bg-white rounded-lg flex items-center justify-center h-40">
          <Image src="https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/05/Logo-Daniel-Smith-smaller-2-05d3679c.webp" alt="Privilege 1" width={100} height={100} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-bold">
            Ambassador of Daniel Smith paints
          </h3>

          <p className="text-gray-600 text-center">Read more on Jan’s Ambassador role for Daniel Smith watrecolor paints, the paints Jan loves to use the most on Jan Min & Daniel Smith</p>
        </div>
      </div>
      <div className="flex flex-col items-center  gap-4">
        <div className="w-full bg-white rounded-lg flex items-center justify-center h-40">
          <Image src="https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/3e/iws-holland-e1707310095995-3e938b85.webp" alt="Privilege 2" width={100} height={100} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-bold">
            International Watercolor Society Holland
          </h3>

          <p className="text-gray-600 text-center">Jan has been a board member of the International Watercolor Society in Holland for many years and currently is its president. For more information please visit: IWS Holland website</p>
        </div>
      </div>
      <div className="flex flex-col items-center  gap-4">
        <div className="w-full bg-white rounded-lg flex items-center justify-center h-40">
          <Image src="https://watercolorsjanmin.com/wp-content/themes/yootheme/cache/c2/Pitsburg-Watercolor-Society-logo-c217da88.webp" alt="Privilege 3" width={100} height={100} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-bold">
            Pittsburgh Watercolor Society (USA)
          </h3>
          <p className="text-gray-600 text-center">Jan is a signature member of the Pittsburgh Watercolor Society in the USA. For more information please visit: PWS website</p>
        </div>
      </div>
    </div>

  );
};
