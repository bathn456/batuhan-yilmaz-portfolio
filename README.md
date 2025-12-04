# Portfolio Website

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Features a stunning dark theme with glassmorphism effects, smooth animations, and Firebase deployment.

## ✨ Features

- 🎨 **Modern Design**: Dark theme with vibrant gradient accents and glassmorphism effects
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- ⚡ **Smooth Animations**: Scroll-triggered animations and interactive hover effects
- 🎯 **SEO Optimized**: Semantic HTML and proper meta tags
- 🚀 **Firebase Ready**: Pre-configured for easy deployment to Firebase Hosting

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Inter)
- **Icons**: Font Awesome 6
- **Hosting**: Firebase Hosting

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with design system
├── script.js           # Interactive functionality
├── firebase.json       # Firebase hosting configuration
├── .firebaserc         # Firebase project configuration
├── README.md           # This file
└── assets/             # Images and other assets (add your own)
```

## 🚀 Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it! No build process required.

For a local development server (optional):
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

Then visit `http://localhost:8000` in your browser.

### Customization

1. **Personal Information**: Update the following in `index.html`:
   - Name and title in the hero section
   - About section content
   - Skills and technologies
   - Project information
   - Contact details and social links

2. **Images**: Replace placeholder images with your own:
   - `profile-image.jpg` - Your profile photo
   - `project1.jpg`, `project2.jpg`, etc. - Project screenshots

3. **Colors**: Customize the color scheme in `styles.css`:
   - Edit CSS custom properties in the `:root` selector
   - Change `--color-primary`, `--color-secondary`, etc.

4. **Content**: Modify sections as needed:
   - Add/remove skills
   - Update project cards
   - Change social media links

## 🔥 Firebase Deployment

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Firebase CLI](https://firebase.google.com/docs/cli) installed
- A Firebase account

### Setup

1. **Install Firebase CLI** (if not already installed):
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**:
```bash
firebase login
```

3. **Create a new Firebase project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add Project"
   - Follow the setup wizard

4. **Initialize Firebase in your project**:
```bash
cd portfolio-website
firebase init hosting
```

When prompted:
- Select "Use an existing project" and choose your project
- Set public directory to `.` (current directory)
- Configure as single-page app: **No**
- Don't overwrite existing files

5. **Update `.firebaserc`**:
   - Replace `"your-project-id"` with your actual Firebase project ID

### Deploy

Deploy your website to Firebase Hosting:

```bash
firebase deploy
```

Your site will be live at: `https://your-project-id.web.app`

### Custom Domain (Optional)

To use a custom domain:
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the verification steps
4. Update DNS records as instructed

## 📝 Form Integration

The contact form currently shows an alert on submission. To make it functional:

### Option 1: EmailJS (Recommended for static sites)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add the EmailJS SDK to `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
4. Update the form handler in `script.js` with your service details

### Option 2: Firebase Functions

1. Set up Firebase Functions
2. Create a serverless function to handle form submissions
3. Update the form handler to POST to your function

### Option 3: Third-party form services

- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Google Forms](https://www.google.com/forms/)

## 🎨 Design Customization

### Changing Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
    --color-primary: hsl(260, 100%, 65%);     /* Main accent color */
    --color-secondary: hsl(180, 100%, 50%);   /* Secondary accent */
    --color-accent: hsl(320, 100%, 60%);      /* Tertiary accent */
    
    --color-bg-primary: hsl(230, 25%, 8%);    /* Main background */
    --color-bg-secondary: hsl(230, 20%, 12%); /* Section backgrounds */
}
```

### Adding More Sections

1. Add HTML in `index.html` after existing sections
2. Style in `styles.css`
3. Add navigation link if needed
4. Update smooth scroll handling in `script.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

If you need help or have questions:
- Create an issue in the repository
- Contact via email (update with your email)

## 🌟 Credits

- Design & Development: [Your Name]
- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ and lots of coffee**
