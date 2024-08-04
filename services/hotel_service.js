export const generateHotelsData = (city, hotelsData) => {
    if (city) {
      const filteredHotels = hotelsData.filter(
        (hotel) => hotel.city.toLowerCase() === city
      );
      if (filteredHotels.length > 0) {
        return filteredHotels;
      }
      return null;
    }
    return null;
  };
  