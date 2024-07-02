
# TruAD Dashboard

This is the frontend for the TruAD dashboard.

## Technologies used

- HTML
- CSS
- ReactJS


## Installation

A little intro about the installation.

```bash
$ git clone https://github.com/aniketmu/final-project-frontend.git
$ cd /app
$ npm install
$ npm start
```


## Demo

### Sign Up / Sign In

The app opens with the Sign Up/Sign In page. On successful login, the user is redirected to the homepage.

![Screenshot (10)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/6d00d2d5-9d59-4e7d-9899-b78156cfdc5d)

### Homepage

The homepage displays:

- Processed videos ready for object insertion.
- Videos currently being worked on by the editor.
- Videos ready to be sent to the editor.
- Data about tickets raised and clip advertisements (currently hardcoded).

![Screenshot (11)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/0bd48069-eda4-4a3f-bd41-02aaaf7626ec)


### Resource Management

The Resource Management tab fetches movies from the [OMDb API]('https://www.omdbapi.com/'). 

![Screenshot (13)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/29e5ef84-f9aa-444f-8129-4dad73d77459)

Clicking on a movie card opens a dialog box showing associated videos, including processed videos and those ready for editing. 

![Screenshot (21)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/eff979b7-6b86-4b23-836d-de95ee9f3230)

Clicking "Track Videoclip" redirects to the action page.

### Action Page

The action page displays the selected video along with materials available for insertion (3D objects and ad bands).

![Screenshot (19)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/8346f7b2-3cd8-4434-8a53-18895fe77006)

### Material Management

This page is for managing, operating, and uploading new materials. Clicking the "Operate" button below each material opens a dialog for choosing a processed video, redirecting to the action page.

![Screenshot (14)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/5a344f95-f5fd-482b-94e4-5307c29fae01)

### Invoices

This page demonstrates how invoices will be rendered (currently hardcoded).

![Screenshot (15)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/0d836e4e-aa3b-424c-9d76-0a8a4d85472c)

### Place Promotion

Displays only media with clipped videos.
![Screenshot (16)](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/0e258668-da23-4c5c-81e7-4a89fec7b41d)

### Data Reports

Demonstrates the UI for data reports (currently hardcoded).

![image](https://github.com/mangeshtruad/truAD-frontend/assets/173453541/29a66460-b649-47b8-a911-773f4fbaad32)

## Deployment

This app has been deployed on [Render](https://truad-frontend.onrender.com)
