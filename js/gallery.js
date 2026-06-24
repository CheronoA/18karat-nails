// =============================================
// FILTERABLE GALLERY - 18 Karat Nails
// Filters portfolio images by category
// =============================================

// Gallery data
const designs = [
    { id: 1, title: "Aurora Chrome Nails", category: "chrome", image: "Aurora Chrome Nails.jpg" },
    { id: 2, title: "Baby Blue Glitter", category: "glitter", image: "Baby Blue Glitter.jpg" },
    { id: 3, title: "Checkered Pattern Nails", category: "3dart", image: "Checkered Pattern Nails.jpg" },
    { id: 4, title: "Chrome Nails with Gold Accents", category: "chrome", image: "Chrome Nails with Gold Accents.jpg" },
    { id: 5, title: "Coffin Nails with Rhinestones", category: "3dart", image: "Coffin Nails with Rhinestones.jpg" },
    { id: 6, title: "French Tips Gel Extensions", category: "french", image: "French Tips Gel Extensions.jpg" },
    { id: 7, title: "Geometric Nail Art", category: "3dart", image: "Geometric Nail Art.jpg" },
    { id: 8, title: "Glitter Ombre Nails", category: "ombre", image: "Glitter Ombre Nails.jpg" },
    { id: 9, title: "Marble Nail Art", category: "3dart", image: "Marble Nail Art.jpg" },
    { id: 10, title: "Matte Black with Gold Foil", category: "matte", image: "Matte Black with Gold Foil.jpg" },
    { id: 11, title: "Neon Summer Nails", category: "ombre", image: "Neon Summer Nails.jpg" },
    { id: 12, title: "Ombre Pink & White", category: "ombre", image: "Ombre Pink & White.jpg" },
    { id: 13, title: "Pearl White Minimalist", category: "glitter", image: "Pearl White Minimalist.jpg" },
    { id: 14, title: "Rose Gold Chrome", category: "chrome", image: "Rose Gold Chrome.jpg" },
    { id: 15, title: "Velvet Matte Nails", category: "matte", image: "Velvet Matte Nails.jpg" }
];

// Image path helper
function getImagePath(filename) {
    return 'Images/' + filename;
}

// DOM references
const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.getElementById('filterButtons');

let currentCategory = 'all';

// Render gallery function
function renderGallery(category) {
    galleryGrid.innerHTML = '';

    let filtered = category === 'all' 
        ? designs 
        : designs.filter(d => d.category === category);

    if (filtered.length === 0) {
        galleryGrid.innerHTML = `
            <div class="col-12 text-center" style="padding: 60px 20px; color: #888;">
                <h3 style="color: #d4af37; font-size: 1.5rem;">No designs found</h3>
                <p>Try selecting a different category.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(d => {
        const col = document.createElement('div');
        col.className = 'col-md-4 gallery-item';
        col.innerHTML = `
            <img src="${getImagePath(d.image)}" 
                 alt="${d.title}" 
                 class="gallery-img" 
                 onerror="this.src='https://via.placeholder.com/400x400/1a1a1a/d4af37?text=Image+Not+Found'" />
            <p class="caption">${d.title}</p>
        `;
        galleryGrid.appendChild(col);
    });
}

// Filter button event listener
filterButtons.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-btn')) {
        filterButtons.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        renderGallery(currentCategory);
    }
});

// Initial render
renderGallery('all');