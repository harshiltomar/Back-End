import { v2 as cloudinary } from "cloudinary";
//fs is file system used ro read and manage file system
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_KEY,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //upload default on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resouce_type: "auto",
    });
    // File has been uploaded successfully
    console.log("File is uploaded on Cloudinary ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Remove the Locally saved Temp file as the upload operation got failed
    return null;
  }
};
