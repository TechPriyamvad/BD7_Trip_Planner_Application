import { faker } from '@faker-js/faker';
import fs from 'fs';
import { indianHotelCities } from '../constants/hotels.js';

// Generate random flights data
// First delete the existing flights.json file in assets folder
// then call this function to generate new data and write it to the file
export const generateSitesData = (count) => {
  const sitesData = [];
  const sitesNumbers = new Set();

  for (let i = 0; i < count; i++) {
    const site = {
      site_id: faker.string.uuid(),
      name: faker.company.name() + ' Site',
      city: indianHotelCities[
        Math.floor(Math.random() * indianHotelCities.length)
      ].city,
      description: faker.lorem.sentence(),
    };

    if (!sitesNumbers.has(site.site_id)) {
      sitesNumbers.add(site.site_id);
      sitesData.push(site);
    }
  }
  // Write data to a JSON file
  fs.writeFileSync('assets/sites.json', JSON.stringify(sitesData, null, 2));
  return sitesData;
};
