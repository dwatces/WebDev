# WebDev: early front-end projects (2020)

Four small front-end exercises in HTML, CSS and JavaScript. They are early learning projects, uploaded to GitHub in November 2020 (the Coffee Junkie footer says 2018, so some of it may be older). They are kept here as a record of where I started, not as current work.

## Projects

### Coffee Junkie (`CofeeJunkie/`)

A practice single-page landing site for a café called Coffee Junkie, built with Bootstrap 4.0. It has a fixed transparent navbar, a full-height hero image, a three-card "Skills" section with Font Awesome icons, an About section, a contact form and a footer with social icons. The copy is placeholder text and the form is not connected to anything.

Stack: HTML, CSS, Bootstrap 4.0, jQuery, Font Awesome 4.7, Google Fonts (Indie Flower), all loaded from CDNs.

### PataCircle (`PataCircle/`)

A Patatap-style keyboard toy. Pressing a letter key drops a coloured circle at a random point on a black canvas and plays a sound; each circle then shrinks and shifts hue every frame.

Stack: [Paper.js](https://github.com/paperjs/paper.js) 0.11.5 (included as `paper-full.js`, MIT licence) using PaperScript, and Howler.js 1.1.28 from cdnjs for audio. The sound files come from jonobr1's Neuronal Synchrony project (MIT licence); see `PataCircle/sounds/README.md`.

### Portfolio one-pager (`PortfolioOnePage/`)

A one-page portfolio template built with Bootstrap 4.1. Four coloured tiles in the header (Home, Resume, Work, Contact) open and close the matching content panels using Bootstrap's collapse component. It includes skill progress bars, an image grid and a contact form. Apart from my name in the header, the content is placeholder: the tagline, skill levels and the resume section's job titles, employers, dates and phone numbers are all made up. The image lightbox was never finished.

Stack: HTML, CSS, Bootstrap 4.1, jQuery, Font Awesome 5, Lightbox2 (CDN).

### Weather App (`WeatherApp/`)

Uses the browser's geolocation to request the local forecast from the Dark Sky API, then shows the timezone, temperature, a summary and an animated [Skycons](https://github.com/darkskyapp/skycons) icon (included as `skycons.js`). Clicking the temperature switches between Fahrenheit and Celsius.

Dark Sky has since shut down its API, and the public CORS proxy the app routes requests through (`cors-anywhere.herokuapp.com`) is now restricted, so the app no longer loads live data.

Stack: vanilla JavaScript (Fetch API, Geolocation API), HTML, CSS.

## Running locally

There is no build step or package manager. Each project is a folder of static files: open its HTML file (`index.html`, or `circles.html` for PataCircle) in a browser.

Browsers can block audio loading and geolocation on `file://` pages, so serving the repository is the more reliable option:

```bash
python3 -m http.server 8000
# then open, for example, http://localhost:8000/PataCircle/circles.html
```

## Author

Built by Daniel Olliver. More of my work: [danielolliver.com/dev](https://danielolliver.com/dev/).

I also run [Olliver Web](https://olliverweb.co.nz), a web design and development studio in Auckland.
