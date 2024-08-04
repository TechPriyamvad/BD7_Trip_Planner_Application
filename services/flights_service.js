export const generateFlightsData = (origin, destination, flightsData) => {
  if (origin && destination) {
    const filteredFlights = flightsData.filter(
      (flight) => flight.origin === origin && flight.destination === destination
    );
    if (filteredFlights.length > 0) {
      return filteredFlights;
    }
    return null;
  }
  return null;
};
