document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const filterButtons = document.querySelectorAll('.filter-button');

    // Sample photo data
    const photos = [
        { src: 'images/nature1.jpg', category: 'nature', title: 'Beautiful Forest' },
        { src: 'images/nature2.jpeg', category: 'nature', title: 'Mountain View' },
        { src: 'images/animals1.jpg', category: 'animals', title: 'Cute Puppy' },
        { src: 'images/animals2.jpg', category: 'animals', title: 'Wild Tiger' },
        { src: 'images/architecture1.jpeg', category: 'architecture', title: 'Modern Building' },
        { src: 'images/architecture2.jpeg', category: 'architecture', title: 'Classic Architecture' },
    ];

    function createPhotoElement(photo) {
        const div = document.createElement('div');
        div.classList.add('photo');
        div.dataset.category = photo.category;

        div.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}">
            <div class="overlay">
                <div>${photo.title}</div>
            </div>
        `;

        return div;
    }

    function displayPhotos(category) {
        gallery.innerHTML = '';
        const filteredPhotos = category === 'all' ? photos : photos.filter(photo => photo.category === category);
        filteredPhotos.forEach(photo => {
            gallery.appendChild(createPhotoElement(photo));
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            displayPhotos(category);
        });
    });

    // Display all photos by default
    displayPhotos('all');
});
