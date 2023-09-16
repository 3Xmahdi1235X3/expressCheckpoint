# Travel Website

This is a simple travel website project showcasing travel destinations, services, and a contact form.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Usage](#usage)
- [Backend Server](#backend-server)


## About

This project is a basic travel website designed to provide information about travel destinations, services, and allow users to contact the website for inquiries.

## Features

- Home Page with Featured Destinations
- Services Page with Information About Our Services
- Contact Us Page with a Contact Form

## Usage

1. **Home Page**: Explore the featured travel destinations by clicking on the cards.

2. **Services Page**: Learn more about our travel services and offerings.

3. **Contact Us Page**: Feel free to contact us using the provided form for any questions or assistance.

## Project Structure

- `home.html`: Home page HTML.
- `services.html`: Services page HTML.
- `contact.html`: Contact Us page HTML.
- `main.css`: CSS styles for the entire website.



## Backend Server

The backend of this project is built with Express.js, a Node.js web application framework. It handles routing, serves static files, and ensures the website functions correctly. Below are some details about the backend server:

- **Server Setup**: The Express server is set up in the `server.js` file.

- **Routing**: Routes for different pages (home, services, contact) are defined in the server file.

- **Static Files**: The server serves static files (HTML, CSS, images) from the `public` directory.

- **Middleware**: Middleware is used for various purposes, such as checking working hours and handling form submissions.

- **Port**: The server listens on port 3000 by default.

You can start the server using the following command:

```bash
node server.js
Make sure to configure any necessary environment variables, database connections, or additional server settings as required for your project.

Project Structure
public/: Directory containing static files (HTML, CSS, images).
server.js: Express.js server configuration.
README.md: This README file.