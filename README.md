# Vibing - Music App

A music platform where users can upload tracks, create playlists, and indulge in a personalized and seamless music listening experience. 🎶






## Table of Contents

1. [Build With](#build-with)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation (backend)](#installation-backend)
    - [Setting Up Environmental Variables](#setting-up-environmental-variables)
    - [Installation (frontend)](#installation-frontend)
    - [Setting up Cloudinary Preset](#setting-up-cloudinary-preset)
5. [How to Run](#how-to-run)
6. [Acknowledgements](#acknowledgements)
7. [License](#license)
8. [Connect With Me](#connect-with-me)

## Build With

[![React](https://img.shields.io/badge/React-blue?logo=react&logoColor=white)](https://reactjs.org/)

[![Express.js](https://img.shields.io/badge/Express.js-green?logo=express&logoColor=white)](https://expressjs.com/)

[![MongoDB](https://img.shields.io/badge/MongoDB-brightgreen?logo=mongodb&logoColor=white)](https://www.mongodb.com/)


## Features

- **Upload Songs:** Users can upload their own songs to the platform.
- **Create Playlist:** Users can create custom playlists and add songs to them.
- **Search Song:** Search functionality to find songs by title.
- **Add Song to Playlist:** Ability to add songs from the library to existing playlists.
- **Playback Controls:** Play, pause, and adjust volume controls for playing songs.
## Getting Started
Prerequisites
.
* npm
  ```sh
  npm install npm@latest -g
  ```
* MongoDB installed and running locally.
  

## Installation (backend)

1. Clone the repo
   ```sh
   git clone https://github.com/Anshul-AB/Vibing.git
   ```
2. Install NPM packages
   ```sh
   cd backend
   npm install
   ```
3. Setting Up Environmental Variables
- create a .env file.
 ```sh
 PORT=5000
MONGODB_URL="mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority"
JWT_SECRET_KEY="your_secret_key_here"
   ```


## Installation (frontend)

To get started with our app and upload songs, you'll need to set up a Cloudinary preset. Follow the steps below:

1. ***Setting up Cloudinary Preset***

- Sign up for a Cloudinary account 
- If you haven't already, [sign up for a Cloudinary account](https://cloudinary.com/users/register/free) (they offer a free tier that should be sufficient for most projects).

 **Create a Cloudinary preset:**
   - Log in to your Cloudinary dashboard.
   - Go to "Settings" > "Upload presets" > "Add upload preset."
   - Configure preset settings (e.g., enable song uploads).
   - Save the preset.

 **Configure your app to use the Cloudinary preset:**
   - Integrate the Cloudinary SDK or API in **\frontend\src\components\Common\CloudinaryUpload.jsx** to facilitate uploads.
   - Use the preset you created when uploading songs. This preset will define the upload parameters, such as storage location, transformation settings, etc.

3. Install NPM packages
   ```sh
   cd frontend
   npm install
   ```
4. Enter your API in `configure.js`
   ```js
   export const cloudinary_upload_preset = "Your_Cloudinary_Preset";
   ```
## How to run

- Navigate to `backend` directory
```sh
  node/nodemon index.js
  ```
## Acknowledgements

We extend our appreciation to the following dependencies and tools that played a crucial role in the development of this project:

- **Cloudinary**: [Cloudinary](https://cloudinary.com/)
- **React**: [React](https://reactjs.org/)
- **React Router Dom**: [React Router](https://reactrouter.com/)
- **Axios**: [Axios](https://axios-http.com/)
- **Howler.js**: [Howler.js](https://howlerjs.com/)
- **React Toastify**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- **Express**: [Express.js](https://expressjs.com/)
- **MongoDB**: [MongoDB](https://www.mongodb.com/)
- **Mongoose**: [Mongoose](https://mongoosejs.com/)
- **Passport**: [Passport.js](http://www.passportjs.org/)
- **JSON Web Token (JWT)**: [JWT](https://jwt.io/)
- **Bcrypt**: [bcrypt](https://github.com/kelektiv/node.bcrypt.js/)



## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)




## Connect With Me
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin)](https://www.linkedin.com/in/anshul101/)

