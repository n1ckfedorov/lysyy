import { BaseTemplate } from '@/templates/BaseTemplate';
import { About } from './components/About';
import { Banner } from './components/Banner';
import { Counter } from './components/Counter';

export default async function Home() {
  return (
    <BaseTemplate>
      <Banner />
      <About />
      <Counter />
    </BaseTemplate>

  );
}
