// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('info-modal');
    const modalContent = document.getElementById('art-info');
    const closeButton = document.querySelector('.close-button');

    document.querySelectorAll('.art-piece').forEach(piece => {
        piece.addEventListener('click', () => {
            const infoId = piece.dataset.info;
            showArtInfo(infoId);
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function showArtInfo(id) {
        const artInfo = {
            info1: {
                title: "Starry Night",
                description: "Starry Night is one of Vincent van Gogh's most famous paintings.",
                artist: "Vincent van Gogh",
                year: "1889",
                image: "starry_night.jpg"
            },
            info2: {
                title: "Mona Lisa",
                description: "The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci.",
                artist: "Leonardo da Vinci",
                year: "1503",
                image: "mona_lisa.jpg"
            },
            info3: {
                title: "The Persistence of Memory",
                description: "The Persistence of Memory is a 1931 painting by artist Salvador Dalí.",
                artist: "Salvador Dalí",
                year: "1931",
                image: "persistence_of_memory.jpg"
            },
            info4: {
                title: "The Scream",
                description: "The Scream is a composition created by Norwegian artist Edvard Munch.",
                artist: "Edvard Munch",
                year: "1893",
                image: "the_scream.jpg"
            },
            info5: {
                title: "Girl with a Pearl Earring",
                description: "Girl with a Pearl Earring is an oil painting by Dutch Golden Age painter Johannes Vermeer.",
                artist: "Johannes Vermeer",
                year: "1665",
                image: "girl_with_pearl_earring.jpg"
            },
            info6: {
                title: "The Night Watch",
                description: "The Night Watch is a 1642 painting by Rembrandt van Rijn.",
                artist: "Rembrandt",
                year: "1642",
                image: "the_night_watch.jpg"
            },
            info7: {
                title: "American Gothic",
                description: "American Gothic is a painting by Grant Wood in the collection of the Art Institute of Chicago.",
                artist: "Grant Wood",
                year: "1930",
                image: "american_gothic.jpg"
            },
            info8: {
                title: "The Birth of Venus",
                description: "The Birth of Venus is a painting by the Italian artist Sandro Botticelli.",
                artist: "Sandro Botticelli",
                year: "1486",
                image: "birth_of_venus.jpg"
            },
            info9: {
                title: "Water Lilies",
                description: "Water Lilies is a series of approximately 250 oil paintings by French Impressionist Claude Monet.",
                artist: "Claude Monet",
                year: "1920",
                image: "water_lilies.jpg"
            },
            info10: {
                title: "The Last Supper",
                description: "The Last Supper is a late 15th-century mural painting by Italian artist Leonardo da Vinci.",
                artist: "Leonardo da Vinci",
                year: "1498",
                image: "the_last_supper.jpg"
            }
        };

        const info = artInfo[id];
        if (info) {
            modalContent.innerHTML = `
                <h2>${info.title}</h2>
                <p><strong>Artist:</strong> ${info.artist}</p>
                <p><strong>Year:</strong> ${info.year}</p>
                <p>${info.description}</p>
                <img src="${info.image}" alt="${info.title}" style="width:100%;">
            `;
            modal.style.display = 'block';
        }
    }
});
