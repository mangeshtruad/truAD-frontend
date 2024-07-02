
# TruAD Dashboard

This is the frontend for the TruAD dashboard.

## Technologies used

- HTML
- CSS
- ReactJS


## Installation

A little intro about the installation.

```bash
$ git clone https://github.com/mangeshtruad/truAD-frontend.git
$ cd /truAD-frontend
$ npm install
$ npm start
```


## Demo

### Sign Up / Sign In

The app opens with the Sign Up/Sign In page. On successful login, the user is redirected to the homepage.

![Screenshot (10)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/d71eac24-60e4-42b3-a4e3-c9580899ca47)

### Homepage

The homepage displays:

- Processed videos ready for object insertion.
- Videos currently being worked on by the editor.
- Videos ready to be sent to the editor.
- Data about tickets raised and clip advertisements (currently hardcoded).

![Screenshot (11)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/5b286d47-b785-45dc-baf2-a4240217d887)

### Resource Management

The Resource Management tab fetches movies from the [OMDb API]('https://www.omdbapi.com/'). 

![Screenshot (13)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/d69a8991-0bee-46bf-a5f0-a11f2bacab26)

Clicking on a movie card opens a dialog box showing associated videos, including processed videos and those ready for editing. 

![Screenshot (21)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/3f8ef86b-e1ca-4200-b9f1-cbc63d178b1b)

Clicking "Track Videoclip" redirects to the action page.

### Action Page

The action page displays the selected video along with materials available for insertion (3D objects and ad bands).

![Screenshot (19)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/3e089039-cd25-4eaa-ae64-3bea687d4726)

### Material Management

This page is for managing, operating, and uploading new materials. Clicking the "Operate" button below each material opens a dialog for choosing a processed video, redirecting to the action page.

![Screenshot (14)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/fe7b267c-f2b3-447d-b0bd-6a985ab8ed22)

### Invoices

This page demonstrates how invoices will be rendered (currently hardcoded).

![Screenshot (15)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/58f17acd-02af-4917-b03e-566d3832b71e)

### Place Promotion

Displays only media with clipped videos.

![Screenshot (16)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/3ce056a7-f78f-4208-827b-8f5fc3a1f142)

### Data Reports

Demonstrates the UI for data reports (currently hardcoded).

![Screenshot (17)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/80792f64-0a13-4970-8587-4188cfcf1037)

## Deployment

This app has been deployed on [Render](https://truad-frontend.onrender.com)
