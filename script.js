const protocols = [
    {
        title: 'TCP (Transmission Control Protocol)',
        description: 'Güvenilir, sıralı veri iletimi sağlayan bağlantı odaklı bir protokoldür. Web sayfaları, e-posta ve dosya transferi gibi uygulamalarda kullanılır.',
        icon: 'padlock.png',
        features: ['Güvenilir İletim', 'Sıralı Veri Akışı', 'Bağlantı Odaklı', 'Hata Kontrolü']
    },
    {
        title: 'UDP (User Datagram Protocol)',
        description: 'Hızlı, bağlantısız bir protokoldür. Canlı yayın, online oyunlar ve VoIP gibi gerçek zamanlı uygulamalarda kullanılır.',
        icon: 'thunder.png',
        features: ['Hızlı İletim', 'Bağlantısız', 'Düşük Gecikme', 'Basit Yapı']
    },
    {
        title: 'HTTP (Hypertext Transfer Protocol)',
        description: 'Web tarayıcıları ve sunucular arasında veri transferi sağlayan bir protokoldür. Web sayfalarının yüklenmesinde kullanılır.',
        icon: 'globe.png',
        features: ['İstemci-Sunucu Modeli', 'Durumsuz Protokol', 'GET/POST Metodları', 'Header Bilgileri']
    },
    {
        title: 'FTP (File Transfer Protocol)',
        description: 'Dosya transfer protokolüdür. Sunucular arasında büyük dosyaların güvenli transferini sağlar.',
        icon: 'folder.png',
        features: ['Dosya Transferi', 'Kimlik Doğrulama', 'İkili/ASCII Modu', 'Dizin İşlemleri']
    }
];

let currentIndex = 0;
const card = document.querySelector('.card');
const flipButton = document.querySelector('.flip-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const dotsContainer = document.querySelector('.dots');

function updateCard() {
    const protocol = protocols[currentIndex];
    
    document.querySelector('.icon-container').innerHTML = `<img src="${protocol.icon}" alt="${protocol.title}">`;
    document.querySelector('.card-front .card-title').textContent = protocol.title;
    document.querySelector('.card-description').textContent = protocol.description;
    
    const featureList = document.querySelector('.feature-list');
    featureList.innerHTML = protocol.features
        .map(feature => `
            <li class="feature-item">
                <span class="feature-dot"></span>
                ${feature}
            </li>
        `).join('');
    
    const dots = Array.from(document.querySelectorAll('.dot'));
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    
    card.classList.remove('flipped');
    flipButton.textContent = 'Özellikleri Göster';
}

function createDots() {
    dotsContainer.innerHTML = protocols
        .map((_, index) => `<div class="dot ${index === currentIndex ? 'active' : ''}"></div>`)
        .join('');
}

createDots();
updateCard();

flipButton.addEventListener('click', () => {
    card.classList.toggle('flipped');
    flipButton.textContent = card.classList.contains('flipped') 
        ? 'Açıklamayı Göster' 
        : 'Özellikleri Göster';
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + protocols.length) % protocols.length;
    updateCard();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % protocols.length;
    updateCard();
});
