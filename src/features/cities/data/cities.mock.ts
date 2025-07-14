import { City } from '../../types/city.types';

const cityNames = [
    'Jakarta',
    'Surabaya',
    'Bandung',
    'Medan',
    'Semarang',
    'Palembang',
    'Makassar',
    'Batam',
    'Yogyakarta',
    'Denpasar',
];

export const cities: City[] = cityNames.map((name, i) => {
    // const officeCount = officeSpaces.filter((space)=> space.location === name).length;

    return {
        id: i + 1,
        name,
        officeCount: 1,
        image: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
    };
});
    