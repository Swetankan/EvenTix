import { v2 as cloudinary } from "cloudinary";

export async function uploadBase64Image(base64DataUrl, folder) {
try {
const result = await cloudinary.uploader.upload(base64DataUrl, {
folder: folder,
});
return result.secure_url;
} catch (err) {
console.error(`Cloudinary upload error: ${err.message}`);
throw new Error("Failed to upload image to Cloudinary");
}
}