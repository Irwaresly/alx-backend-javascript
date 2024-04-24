// 100-await.js

// Importing the required functions from utils.js
import { uploadPhoto, createUser } from "./utils.js";

// Defining an async function named asyncUploadUser
async function asyncUploadUser() {
  try {
    // Calling the uploadPhoto and createUser functions asynchronously
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    // Returning an object with the responses
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    // If one of the async functions fails, return an empty object
    console.error("Error:", error);
    return {
      photo: null,
      user: null
    };
  }
}

// Exporting the asyncUploadUser function
export default asyncUploadUser;

