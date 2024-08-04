export const generateSitesData = (city, sitesData) => {
    if (city) {
      const filteredSites = sitesData.filter(
        (site) => site.city.toLowerCase() === city
      );
      if (filteredSites.length > 0) {
        return filteredSites;
      }
      return null;
    }
    return null;
  };
  