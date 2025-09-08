export const fetchHostels = async (location = "Madhapur, Hyderabad") => {
  try {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hostels+near+${encodeURIComponent(
      location
    )}&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.results) return [];

    return data.results.slice(0, 5).map((place) => ({
      name: place.name,
      rating: place.rating,
      address: place.formatted_address,
      mapsUrl: `https://www.google.com/maps/place/?q=place_id:${place.place_id}`,
      photo: place.photos
        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${apiKey}`
        : null,
    }));
  } catch (err) {
    console.error("Places API error:", err);
    return [];
  }
};
