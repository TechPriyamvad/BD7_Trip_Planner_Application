import { faker } from '@faker-js/faker';
import fs from 'fs';
import { indianCities } from '../constants/flights.js';

// Generate random flights data
// First delete the existing flights.json file in assets folder
// then call this function to generate new data and write it to the file
export const generateFlightsData = (count) => {
  const flightsData = [];
  const flightNumbers = new Set();

  for (let i = 0; i < count; i++) {
    const departure_time = faker.date.future().toLocaleString();
    const departureDate = new Date(departure_time);

    if (isNaN(departureDate.getTime())) continue;

    const arrivalDate = new Date(
      departureDate.getTime() +
        Math.floor(Math.random() * 6 + 1) * 60 * 60 * 1000
    ); // Add 1 to 5 hours
    // console.log(`${typeof(departure_time)}`);

    if (isNaN(arrivalDate.getTime())) continue;

    const flight = {
      flight_id: faker.airline.flightNumber(),
      origin: indianCities[Math.floor(Math.random() * indianCities.length)],
      destination:
        indianCities[Math.floor(Math.random() * indianCities.length)],
      departure_time: departureDate.toLocaleString(),
      arrival_time: arrivalDate.toLocaleString(),
      price: '₹' + faker.finance.amount(),
    };

    if (!flightNumbers.has(flight.flight_id)) {
      flightNumbers.add(flight.flight_id);
      flightsData.push(flight);
    }
  }
  // Write data to a JSON file
  fs.writeFileSync('assets/flights.json', JSON.stringify(flightsData, null, 2));
  return flightsData;
};
