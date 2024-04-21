import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // Get User details from frontend
  // Validation - not empty
  // Check if user already exists: username, email
  // Check for images, check for avatar
  // Upload them to Cloudinary, avatar
  // Create user object- create entry in db
  // Remove password and refresh token feild from Response
  // Check for user creation
  // Return response

  const { fullName, email, username, password } = req.body;
  console.log("email", email);
});

export { registerUser };
