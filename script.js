// Image Data with Unsplash Placeholders
const images = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
        category: 'nature',
        title: 'Misty Mountains',
        description: 'Morning fog rolling over the mountain peaks.'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        category: 'technology',
        title: 'Circuit Board',
        description: 'Macro shot of advanced microchip architecture.'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
        category: 'people',
        title: 'Portrait in Light',
        description: 'Radiant smile captured in golden hour light.'
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
        category: 'nature',
        title: 'Green Valley',
        description: 'Lush green fields stretching to the horizon.'
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        category: 'technology',
        title: 'Coding Setup',
        description: 'Modern developer workspace with multiple screens.'
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        category: 'people',
        title: 'Urban Fashion',
        description: 'Stylish streetwear in a downtown setting.'
    },
    {
        id: 7,
        url: 'https://images.unsplash.com/photo-1501854140884-074cf2b2c3af?auto=format&fit=crop&w=800&q=80',
        category: 'nature',
        title: 'Coastal Waves',
        description: 'Powerful ocean waves crashing on the shore.'
    },
    {
        id: 8,
        url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        category: 'technology',
        title: 'Cyberpunk City',
        description: 'Futuristic city lights at night.'
    },
    {
        id: 9,
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
        category: 'people',
        title: 'Business Professional',
        description: 'Confident entrepreneur in an office environment.'
    },
    {
        id: 10,
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
        category: 'nature',
        title: 'Forest Path',
        description: 'Sunlight filtering through dense autumn trees.'
    },
    {
        id: 11,
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        category: 'technology',
        title: 'Virtual Reality',
        description: 'Immersive VR gaming experience.'
    },
    {
        id: 12,
        url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
        category: 'people',
        title: 'Joyful Moment',
        description: 'Candid laughter among friends.'
    }
];

// DOM Elements
const galleryContainer = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxDesc = document.getElementById('lightbox-desc');
const closeBtn = document.getElementById('close-lightbox');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentImageIndex = 0;
let currentFilteredImages = [];

// Initialize Gallery
function init() {
    renderGallery('all');
    setupEventListeners();
}

// Render Gallery Items
function renderGallery(filter) {
    galleryContainer.innerHTML = '';
    
    currentFilteredImages = filter === 'all' 
        ? images 
        : images.filter(img => img.category === filter);

    currentFilteredImages.forEach((img, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        // Add minimal delay for staggered animation
        item.style.animationDelay = `${index * 0.05}s`;
        
        item.innerHTML = `
            <img src="${img.url}" alt="${img.title}" loading="lazy">
            <div class="overlay">
                <h3>${img.title}</h3>
                <p>${img.description}</p>
            </div>
        `;
        
        item.addEventListener('click', () => openLightbox(index));
        galleryContainer.appendChild(item);
    });
}

// Filter Functionality
function setupEventListeners() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Filter images
            const filterValue = e.target.getAttribute('data-filter');
            renderGallery(filterValue);
        });
    });

    // Lightbox Controls
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
        if (e.target === document.querySelector('.lightbox-overlay') || e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('hidden')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });
}

// Lightbox Functions
function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxContent();
    
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const img = currentFilteredImages[currentImageIndex];
    
    lightboxImg.src = img.url;
    lightboxCategory.textContent = img.category;
    lightboxDesc.textContent = img.description;
    
    // Slight fade animation for image switch
    lightboxImg.style.opacity = '0.8';
    setTimeout(() => lightboxImg.style.opacity = '1', 150);
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentFilteredImages.length;
    updateLightboxContent();
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentFilteredImages.length) % currentFilteredImages.length;
    updateLightboxContent();
}

// Start app
document.addEventListener('DOMContentLoaded', init);
