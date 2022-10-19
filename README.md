## Project Name & Pitch

Adverts Dashborad

An Application used to create, edit and delete ads by an Autheniticated User in a dashboard. Built using React, Redux, Firebase, Material UI.

## Project Status

Project Completed successfully and deployed on Heroku using Git.

Admin Access info:

Username: admin@1234.com

Password: 123456

## Project Deployed

https://adverts-dashboard.herokuapp.com/

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/`

## Reflection

This was a 2 day project.

I set out to build an Admin-access only dashboard with multiple functions for displaying ads on a digital advertising screen where the admin is authenticated using Firebase. App Design is fully responsive using Material UI Library.

One of the main challenges I ran into was using Firebase as it was new to me and I had never worked on it before and I spent a few hours going through the documentation and implemented a successful Authenticated User to sign in via Email as well as using Captcha for Phone Sign in Verification.

I faced a huge obstacle during deployment due to CORS error caused by the API and was able to fix the issue using the following API (https://still-sea-20840.herokuapp.com/https://signal.creatbots.com/). This API enables cross-origin requests to anywhere.

At the end of the day, the technologies implemented in this project are React, React-Router, Redux Toolkit, Material UI, and languages VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup time.
