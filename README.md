# Abhishek Kar - Mechanical Engineer Portfolio

A rich, single-page portfolio built with HTML, CSS, and JavaScript. No build step, no dependencies.

## Files
- `index.html` - all content and sections
- `style.css` - styling, responsive layout, animations
- `script.js` - mobile nav, footer year, animated metric counters
- `images/` - real project figures and a linkage schematic
- `Abhishek_Kar_Resume.pdf` - resume linked from the site

## Sections
Hero, About, **Measured Impact** (animated metric counters), Experience,
Technical Expertise (with skill bars), **Featured Projects** (rocket-nozzle
linkage and CFD mixing chamber, with real figures), Case Studies, Education, Contact.

## Featured project images (from your own reports)
- `nozzle_concept.png` - variable-nozzle concept sketch
- `transmission_plot.png` - transmission angle through the precision positions
- `matlab_synthesis.png` - analytical loop-closure synthesis in MATLAB
- `prototype_render.png` - fabricated Stephenson III prototype
- `cfd_velocity.png` - mixing-chamber velocity contour
- `cfd_species.png` - mixing-chamber species-concentration contour

## How to view
Open `index.html` in a browser. (Images load best when served, e.g. via GitHub Pages
or a local server: `python3 -m http.server` then visit http://localhost:8000 .)

## Publish free with GitHub Pages
1. Create a public repo, e.g. `abhishek-portfolio`.
2. Upload every file AND the `images/` folder.
3. Settings > Pages > Deploy from a branch > `main` / `root` > Save.
4. GitHub gives you a public link.

## Before publishing - please review
- Read every project and case-study paragraph. It is written from your own reports,
  but you should be able to defend each sentence in an interview (e.g. why Stephenson III
  over Watt II, why WENO-5 for the species front, why Monte Carlo over RSS).
- Swap the `AK` initials card for a real headshot if you have one.
- Add your real CAD, drawing, or simulation images to `images/` and reference them
  inside any `.project-card` with a `<figure class="project-figure">` block.
- Confirm all metrics are accurate and non-confidential.

## To add more images later
Inside any project card, add:
```html
<figure class="project-figure">
  <img src="images/your_image.png" alt="Describe it">
  <figcaption>Your caption.</figcaption>
</figure>
```
For two side by side, use `<figure class="project-figure two-up">` with two `<div>` children.


## Theme & headshot
This is a dark, premium engineering theme with an animated hero graphic (gears, a
six-bar linkage, and tolerance rings) generated in SVG - no photo required.

To add your headshot later:
1. Save a square photo as `images/headshot.jpg`.
2. In `index.html`, find the `.hero-badge` block and the `.mono` div showing "AK".
   Replace `<div class="mono">AK</div>` with:
   `<img class="mono" src="images/headshot.jpg" alt="Abhishek Kar">`
   (the styling already makes it a rounded 46px avatar).
3. Optionally swap the whole hero graphic for a photo by replacing
   `images/hero_graphic.svg` in the `.hero-visual` block.
