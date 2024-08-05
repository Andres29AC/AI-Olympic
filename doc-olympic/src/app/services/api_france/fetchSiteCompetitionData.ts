import axios from 'axios';

const SITES_API_URL = 'https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=20&refine=category_id%3A%22venue-olympic%22';

export async function getSiteCompetitionData() {
  try {
    const response = await axios.get(SITES_API_URL);
    const events = response.data.results.map((event: any) => ({
      code_site: event.code_site,
      nom_site: event.nom_site,
      category_id: event.category_id,
      sports: event.sports,
      start_date: event.start_date,
      end_date: event.end_date,
      adress: event.adress,
      latitude: event.latitude,
      longitude: event.longitude,
      point_geo: event.point_geo,
    }));
    console.log("API Response Data:", events);
    return events;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw new Error("Error fetching data");
  }
}
