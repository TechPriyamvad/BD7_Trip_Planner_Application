import { faker } from '@faker-js/faker';
import fs from 'fs';
import { indianHotelCities } from '../constants/hotels.js';

// Generate random flights data
// First delete the existing flights.json file in assets folder
// then call this function to generate new data and write it to the file
export const generateHotelsData = (count) => {
  const hotelsData = [];
  const hotelNumbers = new Set();

  for (let i = 0; i < count; i++) {
    const hotel = {
      hotel_id: faker.string.uuid(),
      name: faker.company.name() + ' Hotel',
      city: indianHotelCities[
        Math.floor(Math.random() * indianHotelCities.length)
      ].city,
      price_per_night: '₹' + faker.finance.amount({ min: 200, max: 100000 }),
      available_rooms: faker.number.int({ min: 1, max: 100 }),
    };

    if (!hotelNumbers.has(hotel.hotel_id)) {
      hotelNumbers.add(hotel.hotel_id);
      hotelsData.push(hotel);
    }
  }
  // Write data to a JSON file
  fs.writeFileSync('assets/hotels.json', JSON.stringify(hotelsData, null, 2));
  return hotelsData;
};
