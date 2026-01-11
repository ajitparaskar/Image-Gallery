# Image Gallery Project Walkthrough

I have successfully built the **Premium Image Gallery**. The application is fully responsive, interactive, and features a modern aesthetic.

## Completed Features

### 1. Responsive Grid Layout
- Used **CSS Grid** with `auto-fill` and `minmax` to create a masonry-style layout that adapts to any screen size.
- Mobile: 1 column
- Tablet: 2-3 columns
- Desktop: 4+ columns

### 2. Smart Filtering
- Implemented category buttons: **All, Nature, Technology, People**.
- Clicking a filter smoothly updates the grid with relevant images.
- Added active state styling to buttons.

### 3. Interactive Lightbox
- **Full-screen view**: Clicking an image opens it in a large modal.
- **Backdrop Blur**: Used `backdrop-filter: blur(8px)` for a premium feel.
- **Controls**:
    - **Previous/Next** arrows to navigate within the current filter.
    - **Close (X)** button to exit.
    - **Keyboard Support**: `Escape` to close, `Left/Right Arrows` to navigate.

### 4. Aesthetics & Polish
- Used **Google Fonts (Outfit)** for modern typography.
- Added smooth **hover effects**: scaling images and sliding up overlay text.
- Implemented fade-in animations for gallery items.
