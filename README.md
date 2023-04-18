# Speed Clicker
This is a simple speed clicker app that tests how many times you can click within a 5-second period. It is built using React, Chart.js, and Bootstrap.

## Table of Contents
- Features
- Installation
- Usage
- Components

## Features
Countdown timer to let you prepare before starting the test
Clickable button to perform the speed clicking test
Progress bar that displays the time remaining
Results modal with the total number of clicks and a bar chart displaying the clicks per second

## Installation
To install and run this app locally, follow these steps:

Clone the repository:
```bash

git clone https://github.com/hafalxd/speed-clicker.git
```
Navigate to the project directory:
```bash

cd speed-clicker
```
Install dependencies:
```bash

npm install
```
Start the development server:
```bash

npm start
```
The app should now be running on http://localhost:3000.

## Usage
Click the "Start Clicking Speed Test" button to begin the test.
A 3-second countdown will start, allowing you to prepare.
Click the "Click me!" button as many times as you can within the 5-second test window.
Once the test is complete, a modal will appear with your score and a bar chart displaying the number of clicks per second.
Click the "Retry" button to restart the test.

## Components
The application is divided into the following components:
- App: The main component that houses the application logic and state management.
- CountdownProgressBar: A progress bar that displays the time remaining in the test.
- ResultsModal: A modal that appears once the test is finished, displaying the total number of clicks and a bar chart of clicks per second.