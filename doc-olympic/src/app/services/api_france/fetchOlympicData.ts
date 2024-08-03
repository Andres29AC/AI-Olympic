import axios from 'axios';

const OLYMPIC_API_URL = 'https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-evenements-olympiade-culturelle/records?limit=20';

export async function getOlympicEventData() {
  try {
    const response = await axios.get(OLYMPIC_API_URL);
    const events = response.data.results.map((event: any) => ({
      id: event.id,
      name: event.name,
      description: event.presentation_synthetique_du_projet_c,
      startDate: event.date_de_debut_c,
      endDate: event.date_de_fin_c,
      publicAddress: event.public_adresse_c,
      location: event.lieu_de_presentation_c,
      address: event.adresse_c,
      price: event.tarif_du_projet_c,
      priceDetails: event.veuillez_preciser_les_tarifs_du_projet_c,
      instagram: event.instagram_link,
      facebook: event.facebook_link,
      twitter: event.twitter_link,
      discipline: event.discipline_principale_du_projet_c
    }));
    console.log("API Response Data:", events);
    return events;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw new Error("Error fetching data");
  }
}

