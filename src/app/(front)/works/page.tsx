import Works, { type WorkProps } from './components/Works';

const mockWorks: WorkProps[] = [
  {
    id: 1,
    title: 'Vancouver Island 1',
    description: 'watercolor',
    image: 'https://cdn.artgalleria.com/55850/artworks/1976682/247bb148-bc61-45ef-a016-1f22f1d344f2-l.JPG',
    isSold: true,
    width: 100,
    height: 100,
  },
  {
    id: 2,
    title: 'Vancouver Island 2',
    description: 'watercolor',
    image: 'https://cdn.artgalleria.com/55850/artworks/1976682/247bb148-bc61-45ef-a016-1f22f1d344f2-l.JPG',
    width: 100,
    height: 100,
  },

  {
    id: 3,
    title: 'Vancouver Island 3',
    description: 'watercolor',
    image: 'https://cdn.artgalleria.com/55850/artworks/1978472/514041fe-1ee6-49a3-a24a-15f6380af6be-l.JPG',
    width: 100,
    height: 100,
  },

  {
    id: 4,
    title: 'Vancouver Island 4',
    description: 'watercolor',
    image: 'https://cdn.artgalleria.com/55850/artworks/1978472/514041fe-1ee6-49a3-a24a-15f6380af6be-l.JPG',
    width: 100,
    height: 100,
  },

  {
    id: 5,
    title: 'Vancouver Island 5',
    description: 'watercolor',
    image: 'https://cdn.artgalleria.com/55850/artworks/1976682/247bb148-bc61-45ef-a016-1f22f1d344f2-l.JPG',
    isSold: true,
    width: 100,
    height: 100,
  },

  {
    id: 6,
    title: 'Vancouver Island 6',
    description: 'watercolor',
    image: 'https://cdn.artgalleria.com/55850/artworks/1976682/247bb148-bc61-45ef-a016-1f22f1d344f2-l.JPG',
    isSold: false,
    width: 100,
    height: 100,

  },

  {
    id: 7,
    title: 'Vancouver Island 7',
    description: 'watercolor',
    image: 'https://cdn.artgalleria.com/55850/artworks/1978472/514041fe-1ee6-49a3-a24a-15f6380af6be-l.JPG',
    isSold: true,
    width: 100,
    height: 100,
  },

  {
    id: 8,
    title: 'Vancouver Island 8',
    description: 'watercolor',
    image: 'https://cdn.artgalleria.com/55850/artworks/1978472/514041fe-1ee6-49a3-a24a-15f6380af6be-l.JPG',
    isSold: true,
    width: 100,
    height: 100,
  },

];
export default async function WorksPage() {
  return (

    <Works works={mockWorks} />

  );
}
