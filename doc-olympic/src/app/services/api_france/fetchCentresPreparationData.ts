import axios from 'axios';

const CENTRES_API_URL = 'https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-centres-de-preparation-aux-jeux/records?limit=20';

export async function getCentresPreparationData() {
  try {
    const response = await axios.get(CENTRES_API_URL);
    const events = response.data.results.map((event: any) => ({
      id: event.id,
      title: event.title,
      lang: event.lang,
      subtitle: event.subtitle,
      description: event.description,
      special_features: event.special_features,
      known_for: event.known_for,
      facilities: JSON.parse(event.facilities),
      altitude: event.altitude,
      picture: JSON.parse(event.picture),
      gallery: JSON.parse(event.gallery),
      meteo: JSON.parse(event.meteo),
      geo_area: JSON.parse(event.geo_area),
      location: JSON.parse(event.location)
    }));
    console.log("API Response Data:", events);
    return events;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw new Error("Error fetching data");
  }
}
