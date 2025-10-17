
<div align="center">
  <img src="thumbnail.png" alt="Destin Strong Portfolio screenshot" width="600" />
</div>

# Destin Strong • Developer Portfolio

Live site: [https://dez10.github.io/DestinPortfolio/](https://dez10.github.io/DestinPortfolio/)

This repository contains the source for Destin Strong’s personal developer portfolio — a single-page experience featuring an interactive 3D hero, a Bento-style about section, and a looping project carousel with clickable previews. The site is optimized for desktop and mobile, integrates EmailJS for direct contact, and is deployed via GitHub Pages.

## Features
- Interactive Spline 3D scene in the hero header
- Bento-grid layout highlighting experience and skills
- Autoplaying desktop project slider and tap-to-preview videos on mobile
- EmailJS-powered contact form with inline success message and spam protection
- Responsive design tuned for large monitors through mobile devices
- Smooth AOS scroll animations and spotlight hover effects

## Tech Stack
- HTML5, modern CSS (Grid, Flexbox) and vanilla JavaScript
- [Spline](https://spline.design/) web viewer embeds for 3D assets
- [AOS](https://michalsnik.github.io/aos/) for scroll-triggered animation
- [EmailJS](https://www.emailjs.com/) for client-side form delivery
- GitHub Pages for static hosting

## Local Development
```bash
# clone the repo
git clone https://github.com/Dez10/DestinPortfolio.git
cd DestinPortfolio/3D-portfolio-website-main

# serve locally (use any static server)
npx serve .
# or with Python
python -m http.server 3000
```

Open `http://localhost:3000` (or the port selected by your server).

## EmailJS Configuration
1. Create an EmailJS account and set up a service + template.
2. Update the IDs in `app.js`:
   ```js
   emailjs.sendForm('service_id', 'template_id', formElement);
   emailjs.init('public_key');
   ```
3. The current repo uses `service_7b2x9wt`, `template_2lwbvgq`, and public key `1FrLFn3EZpxfclVYt`. Replace with your own if you fork this project.

## Deployment (GitHub Pages)
1. Push changes to `main` in the GitHub repo `Dez10/DestinPortfolio`.
2. In GitHub, go to **Settings → Pages**, select branch `main` and `/root`.
3. Wait for the build to complete; the site will update at the live URL above.

## Project Structure
```
3D-portfolio-website-main/
├── index.html        # Landing page markup
├── style.css         # Site-wide styles
├── app.js            # Interactions, EmailJS, video handling
├── assets/           # Videos, resume PDF, hero SVG
├── images/           # Supporting imagery for gradients and skills
└── video/            # Original tutorial video assets (archived)
```

## Customization Tips
- Swap hero or about-section visuals by updating image paths in `index.html` and the gradient assets in `images/`.
- Modify the project carousel entries by adjusting the `<a>` blocks in the “My Projects” section and supplying new MP4 files in `assets/`.
- Adjust animation timing or easing via the AOS data attributes and the CSS `@keyframes autoRun`.
- Update color palette and gradients in `style.css` to match your brand.

## QA Checklist
- Desktop hover interactions trigger video playback and pause correctly.
- Mobile devices show static video previews and still open project links on tap.
- Contact form delivers messages and shows confirmation UI.
- Scroll animations and 3D embeds load without blocking performance.

## Credits
- Design & development: **Destin Strong**
- 3D assets crafted in Spline
- Initial inspiration from a YouTube tutorial, fully customized for Destin’s branding and content

---

For questions or collaboration, reach out via the contact form on the site or email `destinastrong@gmail.com`.