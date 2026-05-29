# 💕 Romantic Website - Setup & Customization Guide

## Overview
This is a stunning, fully-featured romantic single-page website designed to win your girlfriend back (or forward!). It features glassmorphism design, smooth animations, interactive elements, and emotional personal touches.

---

## 📁 Project Structure

```
romantic-website/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

---

## 🚀 Getting Started

### Method 1: Local File (Fastest)
1. Place all three files in a single folder
2. Open `index.html` in your browser (double-click it)
3. The website will load immediately

### Method 2: Using Python Server (Recommended for Music)
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Method 3: Open on Your Phone via Local Network
1. Run the Python server above.
2. On your phone, open this address in the browser:
   `http://192.168.1.4:8000/`
3. Make sure the phone is on the same Wi-Fi network as this computer.

### Method 4: Public Demo Link (Temporary Tunnel)
- Open the public demo URL:
  `https://silver-mice-stare.loca.lt`
- This URL is publicly accessible, but it only works while the local server is running.
- Keep the terminal open and do not close the Python server.

### Method 5: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

---

## 🖼️ CUSTOMIZATION 1: Add Your Photos

### Current Placeholder Images
The website uses free Unsplash images. Replace them with your actual photos:

**Location in `index.html`:**

#### 1. Hero Section Background (Line ~26)
```html
<div class="hero-background" style="background-image: url('YOUR_CUTE_PHOTO_URL_HERE');">
```
Replace `YOUR_CUTE_PHOTO_URL_HERE` with:
- Direct image URL, OR
- Local file path: `url('photos/hero.jpg')`

**Recommended Photo**: A cute couple photo or her solo photo

#### 2. Memory Gallery Photos (Lines ~115-139)
Replace these image URLs:
```html
<img src="https://images.unsplash.com/photo-..." alt="...">
```

Four placeholder images to replace:
1. **Gallery Item 1** - "Our happiest moment"
   - `src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop"`

2. **Gallery Item 2** - "You + Me = Home"
   - `src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop"`

3. **Gallery Item 3** - "Still my favorite person"
   - `src="https://images.unsplash.com/photo-1537838369965-39c6a48ae024?w=400&h=400&fit=crop"`

4. **Gallery Item 4** - "Forever with you"
   - `src="https://images.unsplash.com/photo-1510895613441-ca9535b934aa?w=400&h=400&fit=crop"`

#### 3. Celebration Photo (Line ~215)
```html
<img src="https://images.unsplash.com/photo-1516599912759-c6cc40b58d33?w=500&h=500&fit=crop" alt="Our best moment">
```

### How to Add Local Photos
If using local files:
1. Create a `photos/` folder next to your HTML file
2. Place your images there (jpg, png, webp supported)
3. Use: `src="photos/image-name.jpg"`

### Photo URLs from Different Sources:
- **Unsplash**: Direct URLs work great
- **Imgur**: Get direct image link, add `.jpg` at end
- **Google Photos**: Right-click → Copy Image Link
- **Local Files**: Use relative path `photos/filename.jpg`

---

## 🎵 CUSTOMIZATION 2: Add Your Music

### Current Placeholder Music
The website has a placeholder at Line ~225 in `index.html`:
```html
<audio id="backgroundMusic" loop>
    <source src="YOUR_MUSIC_URL_HERE" type="audio/mpeg">
</audio>
```

### Option 1: Use a Direct Music URL (Easiest)
Replace `YOUR_MUSIC_URL_HERE` with any valid music URL:

#### Recommended Free Romantic Background Music Sources:

1. **YouTube Audio Library** (Best)
   - Free, copyright-free
   - Go to YouTube.com → YouTube Studio → Create → Music library
   - Download MP3 → Upload to a hosting service

2. **Free Music by Bensound**
   - Website: https://www.bensound.com
   - Recommended tracks:
     - Romantic: `https://www.bensound.com/bensound-music/bensound-romantic.mp3`
     - Sunny: `https://www.bensound.com/bensound-music/bensound-sunny.mp3`
     - Emotive: `https://www.bensound.com/bensound-music/bensound-emotive.mp3`

3. **Free Music Archive**
   - Website: https://freemusicarchive.org
   - Search: "Romantic", "Soft", "Love"

4. **Pixabay Music**
   - Website: https://pixabay.com/music/
   - Free downloads, search "romantic"

5. **Epidemic Sound Free Trials**
   - Often gives 2-4 weeks free
   - Huge library of romantic tracks

6. **Apple Music/Spotify API**
   - Log in and get direct track links (if available in your region)

### Option 2: Host Music Locally
1. Download an MP3 file
2. Create a `music/` folder next to HTML
3. Place your MP3 there
4. Use: `<source src="music/song.mp3" type="audio/mpeg">`

### Music URL Example (Working)
```html
<source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mpeg">
```

### Recommended Songs for This Website:
- Bensound - Romantic
- Bensound - Sunny
- Bensound - Emotive  
- Bensound - Dreams
- Bensound - Memories
- Bensound - Ukulele

---

## ✏️ CUSTOMIZATION 3: Edit Text Content

### Hero Section Message (Line ~98)
Change the main message:
```html
<span class="title-word">I know you're angry…</span>
<span class="title-word">but please hear me out</span>
```

### Love Note Content (Lines ~110-125)
Edit the heartfelt letter:
```html
<p class="note-text" id="noteText">
    I know I messed up...
    [Edit your message here]
    Forever yours,<br>
    <span class="signature">Your Boy</span> 💕
</p>
```

### Image Captions (Lines ~116-139)
Edit polaroid captions:
```html
<p class="polaroid-caption">Our happiest moment 💕</p>
```

### Proposal Question (Line ~188)
```html
<h2 class="proposal-question">Will you go on a date with me again?</h2>
```

### Date Confirmation (After YES clicked) (Line ~212)
Currently shows 7 days countdown. Edit in `script.js` Line ~349:
```javascript
const dateNight = new Date();
dateNight.setDate(dateNight.getDate() + 7);  // Change 7 to any number
```

### Floating Quotes (Lines ~230-238)
Edit the quotes that float on screen:
```html
<div class="quote">You are my greatest adventure</div>
```

### Footer Text (Line ~227)
```html
<p>Made with love, regret, and too much overthinking ❤️</p>
```

---

## 🌐 GitHub Pages Deployment
This repository is ready for GitHub Pages. The site is already committed on the `main` branch.

### To publish it:
1. Create a GitHub repo (for example: `romantic-website`).
2. Add the repository as a remote:
```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
```
3. Push the site to GitHub:
```bash
git push -u origin main
```
4. In GitHub, go to Settings → Pages and choose:
   - Source: `main` branch
   - Folder: `/ (root)`

### If you want the repository created for you:
- Send me your GitHub repo URL or create the empty repo first.
- I can then push this `main` branch directly to GitHub.

### When published
Your public site URL will be:
```text
https://<your-username>.github.io/<repo-name>/
```

## 🎨 CUSTOMIZATION 4: Change Colors

All colors are defined as CSS variables in `styles.css` (Lines 10-20):

```css
:root {
    --primary-pink: #ffc0cb;        /* Main pink */
    --deep-pink: #ff69b4;           /* Darker pink */
    --lavender: #e6d5ff;            /* Lavender purple */
    --soft-lavender: #f0e6ff;       /* Light purple */
    --cream: #fffaf0;               /* Background cream */
    --warm-gold: #ffd700;           /* Gold accents */
    --soft-gold: #ffed4e;           /* Soft gold */
    --light-gold: #fff9e6;          /* Very light gold */
    --white: #ffffff;               /* White */
    --dark: #2d1b4e;                /* Dark purple text */
}
```

### Alternative Color Palettes:

**Romantic Red:**
```css
--primary-pink: #ff1744;
--deep-pink: #c41c3b;
--lavender: #ffebee;
```

**Ocean Blue:**
```css
--primary-pink: #00acc1;
--deep-pink: #0097a7;
--lavender: #b3e5fc;
```

**Sunset Orange:**
```css
--primary-pink: #ff7043;
--deep-pink: #d84315;
--lavender: #ffccbc;
```

---

## 🎬 CUSTOMIZATION 5: Fine-tune Animations

### Speed of Animations
Edit in `styles.css`:
- Line 164: `animation: gradientShift 15s ease infinite;` → Change `15s` for speed
- Line 217: `animation: float 20s infinite;` → Change `20s`
- Line 330: `padding: 12px 20px;` → Scaling

### Button Hover Effects
Edit in `styles.css` Line ~540:
```css
.cta-button:hover {
    transform: translateY(-3px);  /* Try: -5px, -10px */
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.4);
}
```

### Music Player Position
Edit in `styles.css` Line ~285:
```css
.music-player {
    position: fixed;
    bottom: 30px;    /* Distance from bottom */
    right: 30px;     /* Distance from right */
}
```

---

## 🔊 Testing

### Before Sending:
1. ✅ Check all images load
2. ✅ Read through all text carefully
3. ✅ Test music plays
4. ✅ Test the escaping NO button
5. ✅ Click YES and verify celebration page
6. ✅ Test on mobile (responsive design)
7. ✅ Check lightbox gallery works
8. ✅ Verify smooth scrolling

### Mobile Testing:
Open developer tools (F12) → Click device toggle → Test on various sizes

---

## 💡 Pro Tips

1. **Auto-play Audio**: Most browsers require user interaction. The website plays music after scroll, which usually works.

2. **Photo Size**: Keep images under 500KB for fast loading. Optimize at https://tinypng.com

3. **High-Quality Photos**: Use at least 1200x800px for sharp display

4. **Test Thoroughly**: Before sending to her, test everything!

5. **Backup Music**: Have a backup URL in case first one fails

6. **Custom Domain** (Optional): Deploy to Netlify free at https://netlify.com/drop (just drag & drop folder)

---

## 🚀 Deployment Options (Optional)

### Option 1: Netlify (Easiest, FREE)
1. Go to https://netlify.com
2. Drag & drop your project folder
3. Get instant live URL
4. Share link with her

### Option 2: GitHub Pages
1. Create repository
2. Push files
3. Enable GitHub Pages
4. Get `username.github.io/repo` URL

### Option 3: Firebase Hosting
1. Go to https://firebase.google.com
2. Create project
3. Deploy with Firebase CLI
4. Get instant URL

---

## 🎯 Final Checklist

- [ ] Replace all placeholder images
- [ ] Add your romantic background music
- [ ] Customize text/messages
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Verify music plays
- [ ] Test all buttons work
- [ ] Check gallery lightbox
- [ ] Verify celebration page works
- [ ] Share with your girlfriend 💕

---

## 📞 Troubleshooting

### Music Not Playing?
- Click the music player button (🎵) to unmute
- Check browser console (F12 → Console)
- Verify music URL is correct and HTTPS
- Try a different music URL

### Images Not Loading?
- Check image URLs are correct
- Verify files exist in photos/ folder
- Try absolute URLs (http://...) instead of relative
- Open browser console to see errors

### Animations Not Smooth?
- Disable browser extensions
- Clear cache (Ctrl+Shift+Delete)
- Try in Chrome or Firefox
- Check GPU acceleration is enabled

### Scrolling Issues?
- Check ScrollTrigger plugin loaded
- Verify GSAP library is working
- Check browser console for errors
- Try on different browser

---

## 💌 Final Words

This website is built with pure HTML, CSS, and JavaScript. It's:
- ✨ Fully responsive (mobile + desktop)
- 🎬 Smooth 60fps animations
- 🎵 Auto-playing music with controls
- 💕 Interactive and playful
- ⚡ Fast loading
- 🔒 No tracking or analytics

**Make it personal. Make it genuine. Make her smile.** ❤️

---

*Made with love, regret, and too much overthinking ❤️*
# akshaythe-coder
