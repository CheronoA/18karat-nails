// =============================================
// FILTERABLE GALLERY - 18 Karat Nails
// =============================================

const designs = [
    { id: 1, title: "Aurora Chrome Nails", category: "chrome", badge: "Chrome", image: "Aurora Chrome Nails-1.jpg", description: "Mesmerizing iridescent chrome that shifts colors like the Northern Lights.", price: "KES 2,800 - 3,800", duration: "2 hours", skill: "Advanced", images: ["Aurora Chrome Nails-1.webp", "Aurora Chrome Nails-2.webp", "Aurora Chrome Nails-3.jpg", "Aurora Chrome Nails-4.jpg", "Aurora Chrome Nails-5.jpg", "Aurora Chrome Nails-6.webp"] },
    { id: 2, title: "3D Chrome Accents Nails", category: "chrome", badge: "Trending", image: "3D Chrome Accents Nails-1.jpg", description: "Molten chrome with 3D sculpted accents. Pure luxury.", price: "KES 3,000 - 4,500", duration: "2 - 2.5 hours", skill: "Expert", images: ["3D Chrome Accents Nails-1.webp", "3D Chrome Accents Nails-2.webp", "3D Chrome Accents Nails-3.jpg", "3D Chrome Accents Nails-4.jpg", "3D Chrome Accents Nails-5.webp", "3D Chrome Accents Nails-6.webp"] },
    { id: 3, title: "Rose Gold Abstract Chrome", category: "chrome", badge: "Chrome", image: "Rose Gold Abstract Chrome Nails-1.jpg", description: "Luxurious rose gold chrome with abstract swirl patterns.", price: "KES 2,500 - 3,500", duration: "1.5 - 2 hours", skill: "Advanced", images: ["Rose Gold Abstract Chrome Nails-1.jpg", "Rose Gold Abstract Chrome Nails-2.jpg", "Rose Gold Abstract Chrome Nails-3.jpg", "Rose Gold Abstract Chrome Nails-4.webp", "Rose Gold Abstract Chrome Nails-5.webp", "Rose Gold Abstract Chrome Nails-6.webp"] },
    { id: 4, title: "Textured & Embossed Matte/Gloss Contrast", category: "matte", badge: "Matte", image: "Gloss Contrast-1.jpg", description: "Striking contrast between matte and glossy textures with embossed patterns.", price: "KES 2,500 - 3,500", duration: "2 hours", skill: "Advanced", images: ["Gloss Contrast-1.webp", "Gloss Contrast-2.webp", "Gloss Contrast-3.jpg", "Gloss Contrast-4.webp", "Gloss Contrast-5.jpg", "Gloss Contrast-6.jpg"] },
    { id: 5, title: "Velvet & Velvet Cat-Eye Nails", category: "velvet", badge: "Velvet", image: "Velvet & Velvet Cat-Eye Nails-1.jpg", description: "Luxurious velvet texture with cat-eye magnetic effect.", price: "KES 2,500 - 3,500", duration: "1.5 - 2 hours", skill: "Intermediate", images: ["Velvet & Velvet Cat-Eye Nails-1.webp", "Velvet & Velvet Cat-Eye Nails-2.jpg", "Velvet & Velvet Cat-Eye Nails-3.jpg", "Velvet & Velvet Cat-Eye Nails-4.webp", "Velvet & Velvet Cat-Eye Nails-5.jpg", "Velvet & Velvet Cat-Eye Nails-6.webp"] },
    { id: 6, title: "Textured Nuance & Quartz Nails", category: "matte", badge: "Matte", image: "Textured Nuance & Quartz Nails-1.jpg", description: "Subtle textured nuance with quartz-like crystal details.", price: "KES 2,800 - 3,800", duration: "2 - 2.5 hours", skill: "Advanced", images: ["Textured Nuance & Quartz Nails-1.jpg", "Textured Nuance & Quartz Nails-2.jpg", "Textured Nuance & Quartz Nails-3.webp", "Textured Nuance & Quartz Nails-4.jpg", "Textured Nuance & Quartz Nails-5.webp", "Textured Nuance & Quartz Nails-6.jpg"] },
    { id: 7, title: "K-Beauty Blush Nails", category: "ombre", badge: "Trending", image: "K-Beauty Blush Nails-1.jpg", description: "Soft Korean-inspired blush gradient with dreamy aura effect.", price: "KES 2,300 - 3,200", duration: "1.5 - 2 hours", skill: "Intermediate", images: ["K-Beauty Blush Nails-1.webp", "K-Beauty Blush Nails-2.jpg", "K-Beauty Blush Nails-3.webp", "K-Beauty Blush Nails-4.webp", "K-Beauty Blush Nails-5.jpg", "K-Beauty Blush Nails-6.jpg"] },
    { id: 8, title: "Chunky Charms & Maximalist Pierced Art", category: "3dart", badge: "3D Art", image: "Chunky Charms & Maximalist Pierced Art-1.jpg", description: "Bold chunky charms with maximalist pierced details.", price: "KES 3,200 - 4,800", duration: "2.5 - 3 hours", skill: "Expert", images: ["Chunky Charms & Maximalist Pierced Art-1.webp", "Chunky Charms & Maximalist Pierced Art-2.jpg", "Chunky Charms & Maximalist Pierced Art-3.jpg", "Chunky Charms & Maximalist Pierced Art-4.jpg", "Chunky Charms & Maximalist Pierced Art-5.jpg", "Chunky Charms & Maximalist Pierced Art-6.jpg"] },
    { id: 9, title: "Reptile Print Texturing", category: "3dart", badge: "Trending", image: "Reptile Print Texturing-1.jpg", description: "Bold reptile print texturing with 3D scale effects.", price: "KES 2,800 - 4,000", duration: "2 - 2.5 hours", skill: "Advanced", images: ["Reptile Print Texturing-1.jpg", "Reptile Print Texturing-2.jpg", "Reptile Print Texturing-3.jpg", "Reptile Print Texturing-4.webp", "Reptile Print Texturing-5.webp", "Reptile Print Texturing-6.jpg"] },
    { id: 10, title: "Sculpted 3D Jelly Florals", category: "3dart", badge: "3D Art", image: "Sculpted 3D Jelly Florals-1.jpg", description: "Delicate 3D jelly-like floral sculptures on each nail.", price: "KES 3,500 - 5,000", duration: "2.5 - 3 hours", skill: "Expert", images: ["Sculpted 3D Jelly Florals-1.jpg", "Sculpted 3D Jelly Florals-2.jpg", "Sculpted 3D Jelly Florals-3.jpg", "Sculpted 3D Jelly Florals-4.jpg", "Sculpted 3D Jelly Florals-5.jpg", "Sculpted 3D Jelly Florals-6.webp"] },
    { id: 11, title: "Water Droplet & Bubble Art", category: "3dart", badge: "Trending", image: "Water Droplet & Bubble Art-1.jpg", description: "Whimsical water droplet and bubble designs with 3D effect.", price: "KES 2,500 - 3,500", duration: "2 hours", skill: "Intermediate", images: ["Water Droplet & Bubble Art-1.jpg", "Water Droplet & Bubble Art-2.jpg", "Water Droplet & Bubble Art-3.jpg", "Water Droplet & Bubble Art-4.jpg", "Water Droplet & Bubble Art-5.webp", "Water Droplet & Bubble Art-6.jpg"] },
    { id: 12, title: "Baroque & Tortoiseshell Frames", category: "french", badge: "Classic", image: "Baroque & Tortoiseshell Frames-1.jpg", description: "Elegant baroque frames with luxurious tortoiseshell details.", price: "KES 2,500 - 3,500", duration: "2 hours", skill: "Advanced", images: ["Baroque & Tortoiseshell Frames-1.jpg", "Baroque & Tortoiseshell Frames-2.jpg", "Baroque & Tortoiseshell Frames-3.webp", "Baroque & Tortoiseshell Frames-4.jpg", "Baroque & Tortoiseshell Frames-5.jpg", "Baroque & Tortoiseshell Frames-6.webp"] },
    { id: 13, title: "Glass & Jelly 'Ice' Nails", category: "french", badge: "Trending", image: "Glass & Jelly 'Ice' Nails-1.jpg", description: "Crystalline glass and jelly 'ice' effects with transparent layering.", price: "KES 3,000 - 4,500", duration: "2 - 2.5 hours", skill: "Advanced", images: ["Glass & Jelly 'Ice' Nails-1.jpg", "Glass & Jelly 'Ice' Nails-2.jpg", "Glass & Jelly 'Ice' Nails-3.webp", "Glass & Jelly 'Ice' Nails-4.jpg", "Glass & Jelly 'Ice' Nails-5.jpg", "Glass & Jelly 'Ice' Nails-6.jpg"] },
    { id: 14, title: "Airbrushed Comic & Pop-Art Illusion", category: "popart", badge: "Trending", image: "Airbrushed Comic & Pop-Art Illusion-1.jpg", description: "Airbrushed comic book and pop-art illusion designs.", price: "KES 2,800 - 4,000", duration: "2 - 2.5 hours", skill: "Advanced", images: ["Airbrushed Comic & Pop-Art Illusion-1.webp", "Airbrushed Comic & Pop-Art Illusion-2.webp", "Airbrushed Comic & Pop-Art Illusion-3.webp", "Airbrushed Comic & Pop-Art Illusion-4.webp", "Airbrushed Comic & Pop-Art Illusion-5.jpg", "Airbrushed Comic & Pop-Art Illusion-6.webp"] },
    { id: 15, title: "Abstract Negative Space & Swirls", category: "abstract", badge: "Artistic", image: "Abstract Negative Space & Swirls-1.jpg", description: "Modern abstract designs with negative space and flowing swirl patterns.", price: "KES 2,500 - 3,500", duration: "1.5 - 2 hours", skill: "Intermediate", images: ["Abstract Negative Space & Swirls-1.jpg", "Abstract Negative Space & Swirls-2.jpg", "Abstract Negative Space & Swirls-3.jpg", "Abstract Negative Space & Swirls-4.jpg", "Abstract Negative Space & Swirls-5.jpg", "Abstract Negative Space & Swirls-6.webp"] },
    { id: 16, title: "Fine-Line Metallic Foil Transfers", category: "abstract", badge: "Artistic", image: "Fine-Line Metallic Foil Transfers-1.jpg", description: "Fine-line metallic foil transfers with intricate detail.", price: "KES 2,800 - 3,800", duration: "2 - 2.5 hours", skill: "Advanced", images: ["Fine-Line Metallic Foil Transfers-1.jpg", "Fine-Line Metallic Foil Transfers-2.jpg", "Fine-Line Metallic Foil Transfers-3.jpg", "Fine-Line Metallic Foil Transfers-4.jpg", "Fine-Line Metallic Foil Transfers-5.jpg", "Fine-Line Metallic Foil Transfers-6.jpg"] }
];

function getImagePath(filename) {
    return 'Images/' + filename;
}

const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.getElementById('filterButtons');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalBadge = document.getElementById('modalBadge');
const modalDescription = document.getElementById('modalDescription');
const modalCategory = document.getElementById('modalCategory');
const modalPrice = document.getElementById('modalPrice');
const modalDuration = document.getElementById('modalDuration');
const modalSkill = document.getElementById('modalSkill');
const modalGallery = document.getElementById('modalGallery');
const relatedGrid = document.getElementById('relatedGrid');

let currentCategory = 'all';

function renderGallery(category) {
    galleryGrid.innerHTML = '';
    let filtered = category === 'all' ? designs : designs.filter(d => d.category === category);
    if (filtered.length === 0) {
        galleryGrid.innerHTML = `<div class="col-12 text-center" style="padding: 60px 20px; color: #888;"><h3 style="color: #d4af37; font-size: 1.5rem;">No designs found</h3><p>Try selecting a different category.</p></div>`;
        return;
    }
    filtered.forEach(d => {
        const col = document.createElement('div');
        col.className = 'col-md-3 gallery-item';
        col.innerHTML = `
            <img src="${getImagePath(d.image)}" 
                 alt="${d.title}" 
                 class="gallery-img" 
                 onclick="openModal(${d.id})"
                 style="cursor: pointer; height: 220px; width: 100%; object-fit: cover; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);"
                 onerror="this.src='https://via.placeholder.com/400x400/1a1a1a/d4af37?text=Image+Not+Found'" />
            <p class="caption">${d.title}</p>
        `;
        galleryGrid.appendChild(col);
    });
    setTimeout(triggerScrollAnimation, 200);
}

function triggerScrollAnimation() {
    const items = document.querySelectorAll('.gallery-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    items.forEach(item => observer.observe(item));
}

if (filterButtons) {
    filterButtons.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            filterButtons.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderGallery(currentCategory);
        }
    });
}

renderGallery('all');