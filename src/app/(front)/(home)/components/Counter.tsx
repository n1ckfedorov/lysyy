'use client';

import { NumberTicker } from '@/components/magicui/number-ticker';
import { motion } from 'framer-motion';
import { Medal, Palette, Presentation, Users } from 'lucide-react';

type CounterItem = {
  title: string;
  value: number;
  icon: string;
};

const counterItems: CounterItem[] = [
  { title: 'Years of Experience', value: 10, icon: 'palette' },
  { title: 'Awards', value: 20, icon: 'medal' },
  { title: 'Workshops', value: 30, icon: 'presentation' },
  { title: 'Students', value: 40, icon: 'users' },
];

const renderIcon = (icon: string) => {
  switch (icon) {
    case 'medal':
      return <Medal size={40} className="text-secondary" />;
    case 'presentation':
      return <Presentation size={40} className="text-secondary" />;
    case 'palette':

      return <Palette size={40} className="text-secondary" />;
    default:
      return <Users size={40} className="text-secondary" />;
  }
};

export function Counter() {
  return (
    <section className="container mx-auto px-6 py-16  border-t border-gray-300">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-3xl font-semibold text-gray-900 shrink-0">
          Sergiy's Journey
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {counterItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="flex flex-col items-center gap-4 p-6 bg-secondary/5 shadow-md rounded-xl shadow-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}

          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
              {renderIcon(item.icon)}
            </div>

            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>

            <NumberTicker
              value={item.value}
              decimalPlaces={0}
              className="text-5xl font-extrabold bg-gradient-to-r from-primary/80 to-primary/50 text-transparent bg-clip-text"
            />
          </motion.div>

        ))}
      </div>
    </section>
  );
}
