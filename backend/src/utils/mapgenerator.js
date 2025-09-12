// backend/utils/mapGenerator.js
import axios from "axios";
import { v2 as cloudinary } from "cloudinary";

/**
 * Generate a static map image from Google Maps and upload to Cloudinary
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @returns {Promise<string>} Cloudinary secure URL of uploaded map image
 */
export const generateVenueMap = async (lat, lng) => {
  try {
    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=600x300&markers=color:red|${lat},${lng}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    // Fetch raw image buffer from Google Maps API
    const response = await axios.get(mapUrl, { responseType: "arraybuffer" });

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "venue-maps", resource_type: "image" },
        (err, uploadResult) => {
          if (err) reject(err);
          else resolve(uploadResult);
        }
      ).end(response.data);
    });

    return result.secure_url;
  } catch (err) {
    console.error("Error generating venue map:", err.message);
    throw new Error("Failed to generate venue map");
  }
};
