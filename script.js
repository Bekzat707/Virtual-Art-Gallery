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

    document.addEventListener('DOMContentLoaded', function() {
        var audio = document.getElementById('background-music');
        audio.play().catch(function(error) {
            console.log('Autoplay was prevented:', error);
        });
    });
    const audio = document.getElementById('myAudio');
    const header = document.querySelector('header');

    function toggleAudioAndChangeColor() {
        if (audio.paused) {
            audio.play();
            changeColor();
        } else {
            audio.pause();
            header.style.backgroundColor = '#333'; // Возвращаем обычный цвет фона
        }
    }

    function changeColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        header.style.backgroundColor = color;
    }

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
);
