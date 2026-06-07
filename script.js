/* ============================================
   ROMANTIC WEBSITE - INTERACTIVE SCRIPTS
   ============================================ */

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeMusic();
    initializeHeartTrail();
    initializeParticles();
    initializeScrollAnimations();
    initializeHeroButton();
    initializeGallery();
    initializeProposal();
    initializeFloatingHearts();
    initializeFloatingQuotes();
    initializeNoteTypewriter();
    initializeEasterEggs();
    startCountdown();
});

// ===== MUSIC PLAYER =====
function initializeMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicInfo = document.querySelector('.music-info p');
    // upload UI removed — play background audio only

    musicInfo.textContent = '🎧 JVKE — her (tap to play)';
    audio.muted = false;
    audio.volume = 0.25;

    musicToggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(err => console.log('Play failed:', err));
            musicToggle.classList.add('playing');
            gsap.to(audio, { volume: 0.3, duration: 0.5 });
        } else {
            gsap.to(audio, {
                volume: 0,
                duration: 0.5,
                onComplete: () => {
                    audio.pause();
                    musicToggle.classList.remove('playing');
                }
            });
        }
    });

    musicToggle.classList.add('playing');

    // Try to auto-play background audio; if blocked, start on first user interaction
    audio.play().catch(() => {
        const resume = () => {
            audio.play().catch(() => {});
            document.removeEventListener('click', resume);
            document.removeEventListener('touchstart', resume);
        };
        document.addEventListener('click', resume);
        document.addEventListener('touchstart', resume);
    });
}


// ===== HEART CURSOR TRAIL =====
function initializeHeartTrail() {
    const canvas = document.getElementById('heartTrail');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts = [];
    const heartSymbol = '❤️';
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    document.addEventListener('mousemove', (e) => {
        // Create heart trails
        if (Math.random() > 0.7) {
            hearts.push({
                x: e.clientX,
                y: e.clientY,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                alpha: 1,
                life: 1
            });
        }
    });

    function drawHearts() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = hearts.length - 1; i >= 0; i--) {
            const heart = hearts[i];
            
            // Update position
            heart.x += heart.vx;
            heart.y += heart.vy;
            heart.vy += 0.1; // Gravity
            heart.life -= 0.02;
            
            if (heart.life <= 0) {
                hearts.splice(i, 1);
                continue;
            }

            // Draw heart
            ctx.globalAlpha = heart.life * 0.7;
            ctx.font = '16px Arial';
            ctx.fillText(heartSymbol, heart.x, heart.y);
        }
        ctx.globalAlpha = 1;
        
        if (hearts.length > 0) {
            requestAnimationFrame(drawHearts);
        }
    }

    // Start animation on first move
    document.addEventListener('mousemove', () => {
        if (hearts.length === 0) {
            drawHearts();
        }
    }, { once: true });
}

// ===== FLOATING PARTICLES BACKGROUND =====
function initializeParticles() {
    const container = document.querySelector('.floating-particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 10 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(particle);
    }
}

// ===== SCROLL ANIMATIONS WITH GSAP =====
function initializeScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Animate gallery items on scroll
    gsap.utils.toArray('.gallery-item').forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, y: 50, rotateZ: -5 },
            {
                opacity: 1,
                y: 0,
                rotateZ: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: false,
                    markers: false
                }
            }
        );
    });

    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title,
            { opacity: 0, y: -30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%'
                }
            }
        );
    });
}

// ===== HERO BUTTON CLICK =====
function initializeHeroButton() {
    const btn = document.getElementById('openHeartBtn');
    const noteSection = document.getElementById('noteSection');

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: noteSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
}

function initializeNoteTypewriter() {
    const noteText = document.getElementById('noteText');
    const text = noteText.textContent.trim();
    typewriterEffect(noteText, text, 25);
}


// ===== GALLERY WITH LIGHTBOX =====
function initializeGallery() {
    const polaroids = document.querySelectorAll('.polaroid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.querySelector('.lightbox-close');

    polaroids.forEach(polaroid => {
        polaroid.addEventListener('click', () => {
            const img = polaroid.querySelector('img');
            const caption = polaroid.querySelector('.polaroid-caption');
            
            lightboxImage.src = img.src;
            lightboxCaption.textContent = caption.textContent;
            lightbox.classList.add('active');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// ===== PROPOSAL INTERACTION - ESCAPING NO BUTTON =====
function initializeProposal() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const teasingMessages = document.getElementById('teasingMessages');
    const messages = [
        "Nice try, but I'm too cute to resist 😜",
        "You can't say no to destiny 💘",
        "Come on babyyy, this is our song 😂",
        "I'm faster than your heart racing 🏃‍♂️",
        "You know you want to say yes 😉",
        "I promise a silly dance if you do 💃"
    ];

    let noButtonEscapes = 0;

    // YES Button - Go to celebration
    yesBtn.addEventListener('click', () => {
        celebrateYes();
    });

    // NO Button - Escape animation
    noBtn.addEventListener('mouseenter', () => {
        if (noButtonEscapes < 10) { // Limit escapes
            escapeButton();
            noButtonEscapes++;
            
            // Show teasing message
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            teasingMessages.textContent = randomMsg;
            teasingMessages.style.opacity = '1';
            
            setTimeout(() => {
                teasingMessages.style.opacity = '0';
            }, 2000);
        }
    });

    // Mobile touch support for NO button
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (noButtonEscapes < 10) {
            escapeButton();
            noButtonEscapes++;
        }
    });

    function escapeButton() {
        const randomX = (Math.random() - 0.5) * window.innerWidth * 0.6;
        const randomY = (Math.random() - 0.5) * window.innerHeight * 0.6;
        
        gsap.to(noBtn, {
            x: randomX,
            y: randomY,
            duration: 0.5,
            ease: 'back.out',
            overwrite: 'auto'
        });
    }
}

// ===== CELEBRATION PAGE =====
function celebrateYes() {
    const proposalSection = document.getElementById('proposalSection');
    const celebrationSection = document.getElementById('celebrationSection');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Scroll to celebration section
    window.scrollTo({
        top: celebrationSection.offsetTop - 50,
        behavior: 'smooth'
    });

    // Activate celebration section
    setTimeout(() => {
        celebrationSection.classList.add('active');
        
        // Make music more upbeat (increase volume)
        gsap.to(backgroundMusic, { volume: 0.4, duration: 1 });
    }, 500);

    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        confetti({
            particleCount: 50,
            spread: 100,
            origin: { y: 0.6 }
        });
    }, 500);

    setTimeout(() => {
        bombBalloonBurst();
    }, 300);

    // Create floating hearts
    createCelebrationHearts();
}

function bombBalloonBurst() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight * 0.3;

    confetti({
        particleCount: 80,
        angle: 90,
        spread: 160,
        origin: { x: centerX / window.innerWidth, y: centerY / window.innerHeight },
        colors: ['#ff6eb4', '#ffd1dc', '#b537f2', '#ff8ecf']
    });
}

// ===== FLOATING HEARTS IN LOVE NOTE SECTION =====
function initializeFloatingHearts() {
    const noteSection = document.getElementById('noteSection');
    
    // Create floating hearts on scroll
    ScrollTrigger.create({
        trigger: noteSection,
        onEnter: () => {
            createFloatingPetals();
            createFloatingHeartsAroundNote();
        },
        once: true
    });
}

function createFloatingPetals() {
    const container = document.querySelector('.floating-petals');
    const petalCount = 8;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = '🌹';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.top = -50 + 'px';
        petal.style.animationDelay = Math.random() * 2 + 's';
        petal.style.animationDuration = (Math.random() * 3 + 6) + 's';
        container.appendChild(petal);
    }
}

function createFloatingHeartsAroundNote() {
    const container = document.querySelector('.floating-hearts-container');
    const heartCount = 12;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '💕';
        
        const angle = (i / heartCount) * Math.PI * 2;
        const radius = 200 + Math.random() * 100;
        
        heart.style.left = Math.cos(angle) * radius + 'px';
        heart.style.top = Math.sin(angle) * radius + 'px';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(heart);
    }
}

function createCelebrationHearts() {
    const container = document.querySelector('.celebration-hearts');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'celebration-heart';
        heart.textContent = '💕';
        
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        
        const duration = Math.random() * 1 + 2;
        heart.style.animationDuration = duration + 's';
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        
        container.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, (duration + 0.5) * 1000);
    }
}

// ===== FLOATING QUOTES =====
function initializeFloatingQuotes() {
    const quotes = Array.from(document.querySelectorAll('.quote'));
    let currentQuote = 0;

    function showRandomQuote() {
        // Hide previous
        quotes.forEach(q => q.classList.remove('show'));

        // Show new
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quotes[randomIndex].classList.add('show');

        setTimeout(showRandomQuote, 8000);
    }

    // Start after 5 seconds
    setTimeout(showRandomQuote, 5000);
}

// ===== COUNTDOWN TIMER =====
function startCountdown() {
    // Set countdown to June 8, 2026 at 8:00 PM
    const dateNight = new Date(2026, 5, 8, 20, 0, 0);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = dateNight.getTime() - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = "<p style='color: var(--deep-pink); font-weight: 700;'>It's time! ❤️</p>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
}

// ===== EASTER EGGS - HIDDEN MESSAGES =====
function initializeEasterEggs() {
    let heartClickCount = 0;
    const easterMessages = [
        "You make my heart skip a beat ❤️",
        "I think about you constantly 💭",
        "You're my favorite notification 📱",
        "Forever isn't long enough ✨",
        "You're stuck with me 🔒❤️",
        "My heart is yours 💕",
        "You're absolutely adorable 🥺",
        "I'd choose you in every timeline ⏰"
    ];

    document.addEventListener('click', (e) => {
        if (e.target.textContent.includes('❤️') || e.target.textContent.includes('💕')) {
            heartClickCount++;
            
            if (heartClickCount % 5 === 0) {
                showEasterEgg();
            }
        }
    });

    function showEasterEgg() {
        const message = easterMessages[Math.floor(Math.random() * easterMessages.length)];
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(255, 105, 180, 0.9), rgba(179, 55, 242, 0.9));
            color: white;
            padding: 20px 40px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 18px;
            z-index: 3000;
            animation: heartBeat 0.8s ease-out, fadeOut 0.5s ease-in 2.5s forwards;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.3);
            pointer-events: none;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// ===== TYPEWRITER EFFECT (FOR NOTE) =====
function typewriterEffect(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ===== SMOOTH PAGE TRANSITIONS =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===== UTILITY: FADE OUT ANIMATION =====
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

console.log('🎈 Made with love, regret, and too much overthinking ❤️');
