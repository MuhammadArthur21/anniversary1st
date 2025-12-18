document.addEventListener('DOMContentLoaded', () => {

    // ———- DATA KONTEN CERITA ———- //
    // Ganti link gambar di bawah ini dengan path ke fotomu sendiri.
    // Contoh: 'assets/images/des2024_1.jpg'
    const storyData = [
        {
            month: "Desember 2024",
            subtitle: "Awal dari Musim Hujan dan Secangkir Kopi Pertama",
            story: "Semua masih terasa baru tapi hangat. Obrolan kecil dan kebersamaan sederhana bikin aku nyaman.",
            photos: [
                "assets/Desember2024_1.jpeg",
                "assets/Desember2024_2.jpeg",
                "assets/Desember2024_3.jpeg",
                "assets/Desember2024_4.jpeg"
            ]
        },
        {
            month: "Januari 2025",
            subtitle: "Masih sering salah tingkah",
            story: "Awal tahun bawa harapan kecil. Kita lagi nyocokin ritme masing-masing, nggak selalu mulus tapi terus coba jalan bareng.",
            photos: [
                "assets/Januari2025_1.jpeg",
                "assets/Januari2025_2.jpeg",
                "assets/Januari2025_3.jpeg",
                "assets/Januari2025_4.jpeg"
            ]
        },
        {
            month: "Februari 2025",
            subtitle: "Rutinitas kecil yang berarti",
            story: "Bulan ini penuh momen ringan: foto random, tawa garing, dan nonton tanpa rencana. Kebersamaan terasa natural dan gampang bikin senang.",
            photos: [
                "assets/Februari2025_1.jpeg",
                "assets/Februari2025_2.jpeg",
                "assets/Februari2025_3.jpeg",
                "assets/Februari2025_4.jpeg"
            ]
        },
        { month: "Maret 2025", subtitle: "Hari capek, tapi ada kamu", story: "Kerjaan numpuk dan aku capek, tapi Mayla selalu ingat buat ngecek kabar. Itu yang bikin aku tetap tenang.", photos: ["assets/Maret2025_1.jpeg","assets/Maret2025_2.jpeg","assets/Maret2025_3.jpeg","assets/Maret2025_4.jpeg"] },
        { month: "April 2025", subtitle: "Beda pendapat, ngobrol, selesai", story: "Pergi ke kebun binatang bareng jadi momen spontan yang nggak bakal lupa. Kita ketawa karena hal kecil dan pulang bawa cerita.", photos: ["assets/April2025_1.jpeg","assets/April2025_2.jpeg","assets/April2025_3.jpeg","assets/April2025_4.jpeg"] },
        { month: "Mei 2025", subtitle: "Nyaman di kebiasaan biasa", story: "Kedekatan terasa makin dalam tanpa acara besar. Mei jadi tempat aku ngerasa tenang tiap pulang ke dia.", photos: ["assets/Mei2025_1.jpeg","assets/Mei2025_2.jpeg","assets/Mei2025_3.jpeg","assets/Mei2025_4.jpeg"] },
        { month: "Juni 2025", subtitle: "Saling ngerti tanpa kata banyak", story: "Juni banyak perhatian kecil dan perayaan sederhana yang bikin hangat. Aku bangga sama Mayla dan usaha kita buat saling bikin senang.", photos: ["assets/Juni2025_1.jpeg","assets/Juni2025_2.jpeg","assets/Juni2025_3.jpeg","assets/Juni2025_4.jpeg"] },
        { month: "Juli 2025", subtitle: "Ketawa jadi lebih gampang", story: "Juli sibuk, kita jarang ketemu. Tapi voice note atau chat singkatnya cukup buat ngerasa dekat lagi.", photos: ["assets/Juli2025_1.jpeg","assets/Juli2025_2.jpeg","assets/Juli2025_3.jpeg","assets/Juli2025_4.jpeg"] },
        { month: "Agustus 2025", subtitle: "Perubahan dan rencana", story: "Banyak yang berubah tapi kita tetap nyocokin ritme. Aku senang kita masih milih jalanin bareng.", photos: ["assets/Agustus2025_1.jpeg","assets/Agustus2025_2.jpeg","assets/Agustus2025_3.jpeg","assets/Agustus2025_4.jpeg"] },
        { month: "September 2025", subtitle: "Waktu yang nggak sinkron", story: "September buat ngaca dan ngobrolin yang belum beres. Gak semua gampang dibicarain, tapi kita tetap coba ngerti satu sama lain.", photos: ["assets/September2025_1.jpeg","assets/September2025_2.jpeg","assets/September2025_3.jpeg","assets/September2025_4.jpeg"] },
        { month: "Oktober 2025", subtitle: "Usaha kecil yang diulang", story: "Bulan ini lebih tenang dan dewasa. Kita lebih sering ngerti daripada debat dan itu bikin aku lega.", photos: ["assets/Oktober2025_1.jpeg","assets/Oktober2025_2.jpeg","assets/Oktober2025_3.jpeg","assets/Oktober2025_4.jpeg"] },
        { month: "November 2025", subtitle: "Hampir setahun", story: "November tenang tapi bermakna. Perhatian kecil tiap hari, kayak chat pagi atau kirim foto, bikin semuanya terasa cukup.", photos: ["assets/November2025_1.jpeg","assets/November2025_2.jpeg","assets/November2025_3.jpeg","assets/November2025_4.jpeg"] },
        {
            month: "Desember 2025",
            subtitle: "Setahun dan tetap memilih kita",
            story: "Setahun berlalu dan jalannya nggak selalu mulus. Terima kasih sudah bertahan dan belajar bareng. Aku masih pilih kamu, Mayla.",
            photos: [
                "assets/Desember2025_1.jpeg",
                "assets/Desember2025_2.jpeg",
                "assets/Desember2025_3.jpeg",
                "assets/Desember2025_4.jpeg"
            ]
        },
    ];

    // ———- ELEMEN DOM ———- //
    const storyContainer = document.getElementById('story-container');
    const audio = document.getElementById('background-music');
    const audioControl = document.getElementById('audio-control');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const restartButton = document.getElementById('restart-button');
    const epiloguePhoto = document.getElementById('epilogue-photo');
    const scrollIndicatorNav = document.querySelector('.scroll-indicator ul');
    const overlay = document.getElementById('love-overlay');
    const btnYesBig = document.getElementById('btn-yes-big');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const teaseText = document.getElementById('tease-text');
    const openHope = document.getElementById('open-hope');
    const hopePanel = document.getElementById('hope-panel');
    const closeHope = document.getElementById('close-hope');
    const saveHope = document.getElementById('save-hope');
    const hopeInput = document.getElementById('hope-input');
    const cursorRoot = document.getElementById('cursor-heart-root');
    const floatingRoot = document.getElementById('floating-messages');
    const visualizerCanvas = document.getElementById('music-visualizer');
    const kissBtn = document.getElementById('kiss-btn');
    const kissCountEl = document.getElementById('kiss-count');
    const msgBtn = document.getElementById('msg-btn');
    const slideshowToggle = document.getElementById('slideshow-toggle');
    const emojiToggle = document.getElementById('emoji-toggle');
    const secretMsg = document.getElementById('secret-msg');
    const printBtn = document.getElementById('print-btn');
    const mbKiss = document.getElementById('mb-kiss');
    const mbMsg = document.getElementById('mb-msg');
    const mbLove = document.getElementById('mb-love-toggle');
    const mbHope = document.getElementById('mb-hope');


    // ———- GENERATE CONTENT & INDICATOR ———- //
    // build a flat array of images for lightbox navigation
    const imagesFlat = [];
    storyData.forEach((data, index) => {
        // Create Section
        const section = document.createElement('section');
        section.className = 'month-section';
        section.dataset.month = data.month.split(' ')[0].substring(0, 3);
        section.dataset.index = index;

        const photoGridHTML = data.photos.map((photo, i) => {
            const caption = `${data.month} — Foto ${i+1}`;
            const imgIndex = imagesFlat.length;
            imagesFlat.push({ src: photo, caption });
            const fetchPr = imgIndex === 0 ? 'high' : 'low';
            return `<figure><img loading="lazy" decoding="async" fetchpriority="${fetchPr}" data-image-index="${imgIndex}" src="${photo}" alt="${caption}" class="photo-${i+1}"><figcaption>${caption}</figcaption></figure>`;
        }).join('');

        section.innerHTML = `
            <div class="month-content">
                <h2 class="month-title">${data.month}</h2>
                <h3 class="month-subtitle">${data.subtitle}</h3>
                <p class="month-story">${data.story}</p>
                <div class="photo-grid">${photoGridHTML}</div>
            </div>
        `;
        storyContainer.appendChild(section);

        // Create Indicator Dot
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#section-${index}`;
        a.dataset.targetIndex = index;
        li.appendChild(a);
        scrollIndicatorNav.appendChild(li);
    });

    // Modal / Lightbox state
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    // add share button to modal (create if missing)
    let modalShare = document.getElementById('modal-share');
    if(!modalShare){
        modalShare = document.createElement('button');
        modalShare.id = 'modal-share';
        modalShare.className = 'btn';
        modalShare.textContent = 'Share';
        const modalInner = modal.querySelector('.modal-inner');
        if(modalInner) modalInner.appendChild(modalShare);
    }
    let modalExport = null;
    const modalPrev = document.querySelector('.modal-prev');
    const modalNext = document.querySelector('.modal-next');
    let currentIndex = -1;
    let lastFocusedElement = null;

    const openModalAt = (i) => {
        if (i < 0 || i >= imagesFlat.length) return;
        currentIndex = i;
        modalImg.src = imagesFlat[i].src;
        modalCaption.textContent = imagesFlat[i].caption;
        // don't set any download link (feature removed)
        modal.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
        // accessibility: hide main content from screen readers while modal open
        document.querySelector('main').setAttribute('aria-hidden', 'true');
        document.querySelector('.main-header').setAttribute('aria-hidden', 'true');
        lastFocusedElement = document.activeElement;
        // focus close button inside modal
        const modalClose = modal.querySelector('.close-modal');
        if(modalClose) modalClose.focus();
    };
    const closeModalFn = () => { modal.classList.remove('is-visible'); document.body.style.overflow = ''; };
    // restore accessibility and focus
    const restoreAfterClose = () => {
        if(document.querySelector('main')) document.querySelector('main').removeAttribute('aria-hidden');
        if(document.querySelector('.main-header')) document.querySelector('.main-header').removeAttribute('aria-hidden');
        if(lastFocusedElement) lastFocusedElement.focus();
    };

    // Click photo to open modal
    storyContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && e.target.dataset.imageIndex) {
            openModalAt(parseInt(e.target.dataset.imageIndex, 10));
        }
    });
    document.querySelectorAll('.close-modal').forEach(btn => btn.addEventListener('click', () => { closeModalFn(); restoreAfterClose(); }));
    modalPrev.addEventListener('click', () => openModalAt((currentIndex - 1 + imagesFlat.length) % imagesFlat.length));
    modalNext.addEventListener('click', () => openModalAt((currentIndex + 1) % imagesFlat.length));
    modalShare.addEventListener('click', async ()=>{
        // try Web Share API with current image
        try{
            if(navigator.share){
                await navigator.share({title: imagesFlat[currentIndex].caption, text: imagesFlat[currentIndex].caption, url: imagesFlat[currentIndex].src});
                showToast('Shared!');
            }else{
                // fallback: copy link
                await navigator.clipboard.writeText(imagesFlat[currentIndex].src);
                showToast('Link copied to clipboard');
            }
        }catch(e){ showToast('Gagal share'); }
    });
    // export/download feature removed by user request
    modal.addEventListener('click', (e) => { if (e.target === modal) { closeModalFn(); restoreAfterClose(); } });
    // keyboard nav
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('is-visible')) return;
        if (e.key === 'Escape') { closeModalFn(); restoreAfterClose(); }
        if (e.key === 'ArrowLeft') modalPrev.click();
        if (e.key === 'ArrowRight') modalNext.click();
        if (e.key === 'Tab') {
            // simple focus trap inside modal
            const focusables = modal.querySelectorAll('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusables.length === 0) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    });

    // Show saved hope if exists
    const showSavedHope = () => {
        const saved = localStorage.getItem('arthur_mayla_hope');
        if (!saved) return;
        const card = document.createElement('div');
        card.className = 'month-section';
        card.innerHTML = `<div class="month-content"><h2 class="month-title">Harapanmu</h2><p class="month-story">${saved}</p></div>`;
        storyContainer.insertBefore(card, storyContainer.firstChild);
    };
    showSavedHope();

    // Progressive image reveal: show skeleton until loaded
    const allImgs = document.querySelectorAll('.photo-grid img');
    allImgs.forEach(img => {
        const fig = img.closest('figure');
        if (fig) fig.classList.add('loading');
        img.addEventListener('load', () => {
            if (fig) fig.classList.remove('loading');
            img.style.opacity = '1';
            img.style.transform = 'translateY(0)';
        });
        img.addEventListener('error', () => {
            if (fig) fig.classList.remove('loading');
            img.style.opacity = '0.6';
        });
    });

    const indicatorLinks = document.querySelectorAll('.scroll-indicator a');
    const monthSections = document.querySelectorAll('.month-section');

    indicatorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetIndex = this.dataset.targetIndex;
            monthSections[targetIndex].scrollIntoView();
        });
    });


    // ———- ANIMATION ON SCROLL ———- //
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                section.classList.add('is-visible');

                // Stagger photo animations
                const photos = section.querySelectorAll('.photo-grid img');
                photos.forEach((photo, index) => {
                    setTimeout(() => {
                        photo.style.opacity = '1';
                        photo.style.transform = 'translateY(0)';
                        photo.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    }, (index + 1) * 200); // 200ms delay between photos
                });
                
                // Update active indicator
                const activeIndex = section.dataset.index;
                if(activeIndex) {
                    indicatorLinks.forEach(link => link.classList.remove('active'));
                    indicatorLinks[activeIndex].classList.add('active');
                }

                observer.unobserve(section); // Stop observing once visible
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.month-section').forEach(section => observer.observe(section));

    // Separate observer for epilogue for special effects
    const epilogueObserver = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting){
            setTimeout(() => epiloguePhoto.classList.add('is-visible'), 500); // Delay for photo
            setTimeout(() => restartButton.classList.add('is-visible'), 1500); // Delay for button
            epilogueObserver.unobserve(entries[0].target);
        }
    }, { threshold: 0.4 });
    
    epilogueObserver.observe(document.querySelector('.epilogue'));

    // Mobile-specific behavior: keep all month sections visible (no accordion)
    // Small-screen layout is handled in CSS; avoid JS toggling that hides content.

    // (old simple modal removed — using enhanced lightbox logic below)

    // ———- AUDIO CONTROLS ———- //
    // set default volume and try autoplay (may be blocked by browser)
    audio.volume = 0.6;
    const tryAutoplay = () => {
        audio.play().then(() => {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        }).catch(() => {
            // autoplay blocked — user can start manually via control
        });
    };
    tryAutoplay();

    audioControl.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            audio.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });

    // ———- LOVE CHALLENGE LOGIC ———- //
    // If overlay present, prevent scrolling until answered
    if (overlay) {
        document.body.style.overflow = 'hidden';

        // blur main story and epilogue while overlay active
        storyContainer.classList.add('blurred');
        const epilogueEl = document.querySelector('.epilogue');
        if (epilogueEl) epilogueEl.classList.add('blurred');

        // show overlay card with animation
        overlay.classList.add('show');

        const revealContent = () => {
            // play small click sound
            playClick();
            // spawn hearts
            spawnHearts(16);
            overlay.style.display = 'none';
            overlay.classList.remove('show');
            document.body.style.overflow = '';
            storyContainer.classList.remove('blurred');
            if (epilogueEl) epilogueEl.classList.remove('blurred');
            tryAutoplay();
                // small header celebration
                const header = document.querySelector('.main-header');
                if(header){
                    header.classList.add('celebrate');
                    setTimeout(()=> header.classList.remove('celebrate'), 2000);
                }
        };

        btnYesBig.addEventListener('click', revealContent);

        // shy buttons 'escape' when hovered or touched
        const escapeFunc = (btn) => {
            btn.addEventListener('mouseenter', () => {
                const x = (Math.random() * 120) - 60; // move left/right
                const y = (Math.random() * 40) - 20; // small vertical wiggle
                btn.style.transform = `translate(${x}px, ${y}px)`;
                teaseText.classList.remove('hidden');
                setTimeout(() => teaseText.classList.add('hidden'), 1200);
            });
            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                btn.style.transform = `translate(60px, -10px)`;
                teaseText.classList.remove('hidden');
                setTimeout(() => teaseText.classList.add('hidden'), 1200);
            }, {passive:false});
        };
        escapeFunc(btnYes);
        escapeFunc(btnNo);
    }

    // create hearts container dynamically
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'hearts-container';
    document.body.appendChild(heartsContainer);

    // confetti root
    const confettiRoot = document.getElementById('confetti-root');
    const isMobile = window.matchMedia && window.matchMedia('(max-width:720px)').matches;

    // spawn hearts with random positions and animations
    function spawnHearts(count = 10){
        const actual = isMobile ? Math.max(2, Math.floor(count/3)) : count;
        for(let i=0;i<actual;i++){
            const h = document.createElement('div');
            h.className = 'heart';
            const size = 12 + Math.random()*18;
            h.style.width = `${size}px`;
            h.style.height = `${size}px`;
            const left = (30 + Math.random()*60); // center-ish
            const startX = (50 + (Math.random()*40 - 20));
            h.style.left = `${startX}%`;
            h.style.bottom = `${10 + Math.random()*10}%`;
            const delay = Math.random()*0.3;
            const duration = 1.6 + Math.random()*1.2;
            h.style.animation = `floatUp ${duration}s cubic-bezier(.2,.9,.2,1) ${delay}s forwards`;
            h.style.background = `linear-gradient(180deg, var(--accent-2), var(--accent))`;
            heartsContainer.appendChild(h);
            h.addEventListener('animationend', () => h.remove());
        }
    }

    // small click sound using WebAudio
    let audioCtx;
    function playClick(){
        try{
            if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const o = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            o.type = 'sine';
            o.frequency.value = 880;
            g.gain.value = 0.0001;
            o.connect(g); g.connect(audioCtx.destination);
            const now = audioCtx.currentTime;
            g.gain.setValueAtTime(0.0001, now);
            g.gain.exponentialRampToValueAtTime(0.02, now + 0.01);
            o.start(now);
            g.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
            o.stop(now + 0.2);
        }catch(e){/* ignore */}
    }

    // ———- CONFETTI / PARTICLE BURST ———- //
    function spawnConfetti(count = 24){
        if(!confettiRoot) return;
        const actual = isMobile ? Math.max(4, Math.floor(count/4)) : count;
        const colors = ['#f5a3b7','#c76a8b','#ffd7e0','#ffb6cc','#ffe1ea'];
        for(let i=0;i<actual;i++){
            const el = document.createElement('div');
            el.className = 'confetti';
            const w = 6 + Math.random()*12;
            el.style.width = `${w}px`;
            el.style.height = `${Math.round(w*1.2)}px`;
            el.style.left = `${10 + Math.random()*80}%`;
            el.style.top = `${-10 - Math.random()*10}%`;
            el.style.background = colors[Math.floor(Math.random()*colors.length)];
            el.style.borderRadius = `${Math.random()*10}px`;
            const delay = Math.random()*0.25;
            const dur = 1.2 + Math.random()*1.4;
            el.style.animation = `confettiFall ${dur}s cubic-bezier(.2,.8,.2,1) ${delay}s forwards`;
            confettiRoot.appendChild(el);
            el.addEventListener('animationend', ()=> el.remove());
        }
    }

    // ———- CURSOR HEARTS ———- //
    function spawnCursorHeart(x,y){
        if(!cursorRoot) return;
        const h = document.createElement('div');
        h.className = 'cursor-heart';
        h.style.left = (x - 10) + 'px';
        h.style.top = (y - 10) + 'px';
        cursorRoot.appendChild(h);
        requestAnimationFrame(()=>{ h.style.transform = 'translateY(-34px) scale(1.2)'; h.style.opacity='0'; });
        setTimeout(()=> h.remove(), 700);
    }
    document.addEventListener('click', (e)=> spawnCursorHeart(e.clientX, e.clientY));

    // header toolbar toggle for mobile
    const toolbar = document.querySelector('.header-toolbar');
    const menuBtn = document.getElementById('toolbar-menu');
    if(menuBtn && toolbar){
        menuBtn.addEventListener('click', ()=> toolbar.classList.toggle('expanded'));
        // close when clicking outside
        document.addEventListener('click', (ev)=>{
            if(!toolbar.contains(ev.target) && toolbar.classList.contains('expanded')) toolbar.classList.remove('expanded');
        });
    }

    // Mobile bottom bar bindings
    if(mbKiss) mbKiss.addEventListener('click', ()=> kissBtn && kissBtn.click());
    if(mbMsg) mbMsg.addEventListener('click', ()=> msgBtn && msgBtn.click());
    if(mbLove) mbLove.addEventListener('click', ()=> { if(loveMeter) { loveMeter.focus(); loveMeter.value = 100; loveMeter.dispatchEvent(new Event('input')); setTimeout(()=> loveMeter.blur(), 800); } });
    if(mbHope) mbHope.addEventListener('click', ()=> openHope && openHope.click());

    // Mobile: add swipe support for modal navigation (touch)
    let touchStartX = 0, touchEndX = 0;
    modal.addEventListener('touchstart', (e)=>{ if(e.touches && e.touches[0]) touchStartX = e.touches[0].clientX; }, {passive:true});
    modal.addEventListener('touchmove', (e)=>{ if(e.touches && e.touches[0]) touchEndX = e.touches[0].clientX; }, {passive:true});
    modal.addEventListener('touchend', ()=>{
        const dx = touchEndX - touchStartX; if(Math.abs(dx) < 40) return; if(dx > 0) modalPrev.click(); else modalNext.click(); touchStartX = touchEndX = 0;
    });

    // Ensure modal opens full-screen on mobile (class handled in CSS)

    // ———- FLOATING MESSAGES ———- //
    const msgs = ['Aku sayang kamu 💖','Kamu selalu di pikiran','Makasih udah jadi kamu','Peluk? 🤗','Janji ya? ❤️'];
    function spawnFloatingMsg(text){
        if(!floatingRoot) return;
        const el = document.createElement('div'); el.className='float-msg'; el.textContent = text;
        floatingRoot.prepend(el);
        requestAnimationFrame(()=> el.classList.add('show'));
        setTimeout(()=>{ el.classList.remove('show'); setTimeout(()=> el.remove(), 500); }, 3800);
    }
    msgBtn.addEventListener('click', ()=> spawnFloatingMsg(msgs[Math.floor(Math.random()*msgs.length)]));

    // ———- KISS COUNTER ———- //
    function readKiss(){ return parseInt(localStorage.getItem('kiss_count')||'0',10); }
    function writeKiss(v){ localStorage.setItem('kiss_count', String(v)); kissCountEl.textContent = `x${v}`; }
    writeKiss(readKiss());
    kissBtn.addEventListener('click', ()=>{
        const v = readKiss()+1; writeKiss(v); spawnHearts(6); spawnConfetti(8); showToast('Mwah!');
    });

    // ———- SLIDESHOW AUTO PLAY ———- //
    let slideshowTimer = null; let slideshowIndex = 0; let slideshowOn = false;
    function startSlideshow(){ slideshowOn = true; slideshowToggle.classList.add('active'); slideshowTimer = setInterval(()=>{ openModalAt(slideshowIndex % imagesFlat.length); slideshowIndex++; }, 2800); showToast('Slideshow started'); }
    function stopSlideshow(){ slideshowOn = false; slideshowToggle.classList.remove('active'); clearInterval(slideshowTimer); showToast('Slideshow stopped'); }
    slideshowToggle.addEventListener('click', ()=>{ if(slideshowOn) stopSlideshow(); else startSlideshow(); });

    // ———- AUDIO VISUALIZER ———- //
    let analyser, dataArray, animViz;
    function startVisualizer(){
        if(!visualizerCanvas || !audio) return;
        try{
            if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const source = audioCtx.createMediaElementSource(audio);
            analyser = audioCtx.createAnalyser(); analyser.fftSize = 256;
            source.connect(analyser); analyser.connect(audioCtx.destination);
            const canvas = visualizerCanvas; const ctx = canvas.getContext('2d');
            const bufferLength = analyser.frequencyBinCount; dataArray = new Uint8Array(bufferLength);
            function draw(){
                animViz = requestAnimationFrame(draw);
                analyser.getByteFrequencyData(dataArray);
                ctx.clearRect(0,0,canvas.width,canvas.height);
                const barWidth = (canvas.width / bufferLength) * 1.5;
                let x = 0;
                for(let i=0;i<bufferLength;i++){
                    const v = dataArray[i]/255; const h = v * canvas.height;
                    ctx.fillStyle = `rgba(199,106,139,${0.9 - i/bufferLength})`;
                    ctx.fillRect(x, canvas.height - h, barWidth, h);
                    x += barWidth + 1;
                }
            }
            draw();
        }catch(e){/* ignore */}
    }
    audio.addEventListener('play', ()=> { if(!audioCtx) startVisualizer(); else if(audioCtx.state==='suspended') audioCtx.resume(); });
    audio.addEventListener('pause', ()=> { if(animViz) cancelAnimationFrame(animViz); });

    // ———- SECRET CODE (MAYLA) ———- //
    const secret = 'MAYLA'; let bufferKeys = '';
    document.addEventListener('keydown', (e)=>{
        bufferKeys += e.key.toUpperCase(); if(bufferKeys.length > secret.length) bufferKeys = bufferKeys.slice(-secret.length);
        if(bufferKeys === secret){ if(secretMsg){ secretMsg.classList.remove('hidden'); secretMsg.setAttribute('aria-hidden','false'); spawnConfetti(40); showToast('Secret unlocked ❤️'); setTimeout(()=>{ secretMsg.classList.add('hidden'); secretMsg.setAttribute('aria-hidden','true'); }, 5000); } bufferKeys=''; }
        // keyboard shortcuts
        if(e.key.toLowerCase() === 'c') spawnConfetti(20);
        if(e.key.toLowerCase() === 'l'){ loveMeter.focus(); }
    });

    // ———- EMOJI RAIN ———- //
    let emojiTimer = null;
    function startEmojiRain(){ emojiTimer = setInterval(()=>{
        const el = document.createElement('div'); el.className='emoji'; el.textContent = ['💖','💋','🌸','💌','🥰'][Math.floor(Math.random()*5)];
        el.style.left = Math.random()*100 + '%'; document.body.appendChild(el);
        const fall = 3000 + Math.random()*3000; el.animate([{transform:'translateY(0)'},{transform:`translateY(${window.innerHeight+100}px)`}], {duration:fall, easing:'linear'}).onfinish = ()=> el.remove();
    }, 220);
        showToast('Emoji rain on'); }
    function stopEmojiRain(){ clearInterval(emojiTimer); emojiTimer=null; showToast('Emoji rain off'); }
    emojiToggle.addEventListener('click', ()=>{ if(emojiTimer) stopEmojiRain(); else startEmojiRain(); });

    // Export feature removed per user request.

    // ———- TOAST / SNACKBAR ———- //
    function showToast(msg, timeout=1600){
        let t = document.querySelector('.toast');
        if(!t){ t = document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
        t.textContent = msg; t.classList.add('show'); setTimeout(()=> t.classList.remove('show'), timeout);
    }

    // ———- TYPEWRITER FOR MONTH STORY ———- //
    function typeWrite(el, text, speed = 18){
        if(el.dataset.typed) return;
        el.dataset.typed = '1';
        el.classList.add('typewriter');
        const caret = document.createElement('span'); caret.className = 'typing-caret';
        el.innerHTML = '';
        let i = 0;
        const t = setInterval(()=>{
            el.textContent += text.charAt(i) || '';
            i++;
            if(i > text.length){ clearInterval(t); caret.remove(); }
        }, speed);
        el.appendChild(caret);
    }

    // Hook into observer to start typing when section becomes visible
    const typeObserver = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const p = entry.target.querySelector('.month-story');
                if(p) typeWrite(p, p.textContent, 16);
                typeObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.35});
    document.querySelectorAll('.month-section').forEach(s=> typeObserver.observe(s));

    // ———- TIMELINE PROGRESS ———- //
    const timelineProgress = document.querySelector('.timeline-progress');
    const sections = Array.from(document.querySelectorAll('.month-section'));
    function updateTimeline(){
        const total = sections.length;
        const scrollTop = window.scrollY + window.innerHeight*0.5;
        let passed = sections.filter(s=> (s.offsetTop + s.offsetHeight*0.3) < scrollTop).length;
        const percent = Math.round((passed / total) * 100);
        if(timelineProgress) timelineProgress.style.width = `${percent}%`;
    }
    updateTimeline();
    window.addEventListener('scroll', throttle(updateTimeline, 120));

    // ———- LOVE METER ———- //
    const loveMeter = document.getElementById('love-meter');
    const loveIcon = document.querySelector('.love-icon');
    if(loveMeter){
        loveMeter.addEventListener('input', (e)=>{
            const v = parseInt(e.target.value,10);
            document.documentElement.style.setProperty('--love-level', v);
            if(loveIcon) loveIcon.style.transform = `scale(${1 + v/200}) translateY(${-(v/30)}px)`;
            if(v > 85){ spawnHearts(10); spawnConfetti(26); playClick(); }
        });
    }

    // ———- PARALLAX FOR HEADER DECOR ———- //
    const headerDecor = document.querySelector('.header-decor');
    if(headerDecor){
        window.addEventListener('scroll', throttle(()=>{
            const y = window.scrollY;
            headerDecor.style.transform = `translateY(${Math.min(20, y * 0.06)}px) translateX(${Math.sin(y/80)*6}px)`;
        }, 20));
    }

    // small throttle util
    function throttle(fn, wait){
        let time = Date.now();
        return function(){ if((time + wait - Date.now()) < 0){ fn(); time = Date.now(); }}
    }

    // ———- HOPE PANEL LOGIC ———- //
    openHope.addEventListener('click', () => {
        hopePanel.classList.remove('hidden');
        hopePanel.style.right = '18px';
    });
    closeHope.addEventListener('click', () => {
        hopePanel.classList.add('hidden');
    });
    saveHope.addEventListener('click', () => {
        const val = hopeInput.value.trim();
        if (!val) return;
        localStorage.setItem('arthur_mayla_hope', val);
        // show immediately
        const existing = document.querySelector('.month-section .month-title');
        showSavedHope();
        hopePanel.classList.add('hidden');
    });

    if(printBtn){
        printBtn.addEventListener('click', ()=>{
            // friendly hint to print as PDF
            window.print();
        });
    }

    // ———- RESTART BUTTON ———- //
    restartButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
