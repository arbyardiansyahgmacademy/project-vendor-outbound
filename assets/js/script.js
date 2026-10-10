/**
 * VENDOROUTBOUND.ID — CORE INTERACTIVE JAVASCRIPT
 * Pure Vanilla JavaScript — Modular, Accessible, High Performance
 */

// 0. SPECULATION RULES API (INSTANT PRERENDERING & PREFETCH ENGINE)
try {
  if (HTMLScriptElement.supports && HTMLScriptElement.supports('speculationrules')) {
    if (!document.querySelector('script[type="speculationrules"]')) {
      const specScript = document.createElement('script');
      specScript.type = 'speculationrules';
      specScript.textContent = JSON.stringify({
        prefetch: [
          {
            source: 'document',
            where: {
              and: [
                { href_matches: '/*' },
                { not: { href_matches: '/*\\?*(^|&)action=*' } },
                { not: { selector_matches: '.no-prerender, [rel~=nofollow], a[target="_blank"], a[href^="mailto:"], a[href^="tel:"], a[href*="wa.me"], a[href*="whatsapp.com"]' } }
              ]
            },
            eagerness: 'eager'
          }
        ],
        prerender: [
          {
            source: 'document',
            where: {
              and: [
                { href_matches: '/*' },
                { not: { href_matches: '/*\\?*(^|&)action=*' } },
                { not: { selector_matches: '.no-prerender, [rel~=nofollow], a[target="_blank"], a[href^="mailto:"], a[href^="tel:"], a[href*="wa.me"], a[href*="whatsapp.com"]' } }
              ]
            },
            eagerness: 'moderate'
          }
        ]
      });
      document.head.appendChild(specScript);
    }
  }
} catch (e) {
  /* Progressive enhancement fallback handled by initPageTransitionsAndPrefetch */
}

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initActivityPlanner();
  initGalleryAndLightbox();
  initPackageConfigurator();
  initDynamicTOC();
  initShareAndCopy();
  initBackToTop();
  initScrollAnimations();
  initContactInquiryForm();
  initPdpGallery();
  initHeroMagazineSlider();
  initBlogFilter();
  initPageTransitionsAndPrefetch();
  initActiveNavSync();
});

/* ==========================================================================
   HELPER: CHECK IF ROUTE IS DETAIL PAGE (PAKET, BLOG, PRODUK)
   ========================================================================== */
function isDetailPage(pathname) {
  const p = pathname || window.location.pathname;
  return /^\/(paket|blog|produk)\/[^/]+/.test(p);
}

/* ==========================================================================
   1. STICKY GLASS HEADER ON SCROLL
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  // Detail pages (paket/* and blog/* and produk/*) are always solid from initial render
  if (isDetailPage(window.location.pathname)) {
    header.classList.add('header-solid');
    header.classList.remove('is-scrolled');
  }

  if (header.__stickyInitialized) return;
  header.__stickyInitialized = true;

  const handleScroll = () => {
    if (header.classList.contains('header-solid')) return;
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. ACCESSIBLE MOBILE DRAWER & ACCORDIONS
   ========================================================================== */
function initMobileDrawer() {
  const openBtn = document.querySelector('.hamburger-btn');
  const closeBtn = document.querySelector('.drawer-close-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');

  if (!drawer || !openBtn) return;
  if (drawer.__drawerInitialized) return;
  drawer.__drawerInitialized = true;

  const openDrawer = () => {
    drawer.classList.add('is-active');
    overlay?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    openBtn.setAttribute('aria-expanded', 'true');
    closeBtn?.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-active');
    overlay?.classList.remove('is-active');
    document.body.style.overflow = '';
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  };

  openBtn.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-active')) {
      closeDrawer();
    }
  });

  // Mobile Accordion Submenus
  const accordionTriggers = document.querySelectorAll('.mobile-nav-accordion-trigger');
  accordionTriggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.mobile-nav-item');
      const submenu = parent?.querySelector('.mobile-submenu');
      if (!submenu) return;

      const isOpen = submenu.classList.contains('is-open');
      submenu.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

/* ==========================================================================
   3. ACTIVITY PLANNER WIDGET (DYNAMIC WHATSAPP LEAD GENERATOR)
   ========================================================================== */
function initActivityPlanner() {
  const plannerForm = document.getElementById('activity-planner-form');
  if (!plannerForm) return;

  const tabButtons = plannerForm.querySelectorAll('.planner-tab-btn');
  const activityTypeSelect = document.getElementById('planner-activity-type');

  const tabDefaults = {
    perusahaan: ['Team Building', 'Fun Games', 'Leadership Camp', 'Corporate Gathering'],
    gathering: ['Family Gathering Hemat', 'Family Gathering Standard', 'Family Gathering Premium', 'Custom Gathering'],
    sekolah: ['Outbound Pelajar', 'Character Building', 'LDKS Leadership', 'Edukasi Alam'],
    wisata: ['Outbound Plus Wisata', 'Outbound Rafting', 'Outbound Offroad 4x4', 'Highland Camping']
  };

  tabButtons.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabButtons.forEach((b) => b.classList.remove('is-active'));
      tab.classList.add('is-active');

      const category = tab.getAttribute('data-tab');
      if (activityTypeSelect && tabDefaults[category]) {
        activityTypeSelect.innerHTML = '';
        tabDefaults[category].forEach((opt) => {
          const el = document.createElement('option');
          el.value = opt;
          el.textContent = opt;
          activityTypeSelect.appendChild(el);
        });
      }
    });
  });

  plannerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const activityType = activityTypeSelect?.value || 'Outbound';
    const participants = document.getElementById('planner-participants')?.value || 'Belum Ditentukan';
    const location = document.getElementById('planner-location')?.value || 'Batu Malang';
    const date = document.getElementById('planner-date')?.value || 'Menyesuaikan';
    const notes = document.getElementById('planner-notes')?.value || '-';

    const message = [
      'Halo Vendor Outbound,',
      '',
      'Saya ingin berkonsultasi mengenai rencana kegiatan:',
      `• Jenis Kegiatan: ${activityType}`,
      `• Jumlah Peserta: ${participants}`,
      `• Lokasi/Destinasi: ${location}`,
      `• Perkiraan Tanggal: ${date}`,
      notes && notes !== '-' ? `• Catatan/Kebutuhan Khusus: ${notes}` : '',
      '',
      'Mohon informasi rekomendasi program dan penawaran resminya.',
      'Terima kasih.'
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/6282211221909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
}

/* ==========================================================================
   4. EDITORIAL BENTO GALLERY, FILTERING & LIGHTBOX
   ========================================================================== */
function initGalleryAndLightbox() {
  const filterBtns = document.querySelectorAll('.gallery-filter-bar .filter-btn');
  const galleryItems = document.querySelectorAll('.bento-gallery-grid .bento-item');
  const dialog = document.getElementById('gallery-lightbox-dialog');
  const loadMoreBtn = document.getElementById('gallery-load-more-btn');

  // Filter items
  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const filterVal = btn.getAttribute('data-filter') || 'semua';
        galleryItems.forEach((item) => {
          const cat = item.getAttribute('data-category');
          const isExtra = item.classList.contains('is-hidden-extra');
          if (filterVal === 'semua') {
            item.style.display = isExtra ? 'none' : 'block';
          } else {
            if (cat === filterVal) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // Load More Button
  if (loadMoreBtn) {
    const extraItems = document.querySelectorAll('.bento-item.is-hidden-extra');
    loadMoreBtn.addEventListener('click', () => {
      const activeFilter = document.querySelector('.gallery-filter-bar .filter-btn.is-active')?.getAttribute('data-filter') || 'semua';
      extraItems.forEach((item) => {
        item.classList.remove('is-hidden-extra');
        item.classList.add('fade-in');
        const cat = item.getAttribute('data-category');
        if (activeFilter === 'semua' || cat === activeFilter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      loadMoreBtn.innerHTML = `<span>Semua Dokumentasi Ditampilkan</span> <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>`;
      loadMoreBtn.disabled = true;
      loadMoreBtn.classList.add('is-completed');
    });
  }

  // Lightbox Modal
  if (!dialog) return;

  const lightboxImg = dialog.querySelector('.lightbox-image');
  const lightboxCaption = dialog.querySelector('.lightbox-caption-text');
  const closeBtn = dialog.querySelector('.lightbox-close-btn');
  const prevBtn = dialog.querySelector('.lightbox-nav-prev');
  const nextBtn = dialog.querySelector('.lightbox-nav-next');

  let activeVisibleIndex = 0;

  const getVisibleItems = () => {
    return Array.from(galleryItems).filter((item) => {
      const isDisplayNone = item.style.display === 'none' || (window.getComputedStyle(item).display === 'none');
      return !isDisplayNone;
    });
  };

  const showImage = (index) => {
    const visibleItems = getVisibleItems();
    if (visibleItems.length === 0) return;
    activeVisibleIndex = (index + visibleItems.length) % visibleItems.length;
    const currentItem = visibleItems[activeVisibleIndex];
    const imgEl = currentItem.querySelector('img');
    const titleEl = currentItem.querySelector('.bento-title') || currentItem.querySelector('.bento-caption h4');
    const kickerEl = currentItem.querySelector('.bento-kicker') || currentItem.querySelector('.bento-caption p');

    if (imgEl && lightboxImg) {
      lightboxImg.src = imgEl.src;
      lightboxImg.alt = imgEl.alt || 'Dokumentasi Vendor Outbound';
    }
    if (lightboxCaption) {
      const titleText = titleEl ? titleEl.textContent : '';
      const kickerText = kickerEl ? kickerEl.textContent : '';
      lightboxCaption.innerHTML = `<strong>${titleText}</strong>${kickerText ? `<span style="display:block; font-size:0.85rem; opacity:0.8; margin-top:4px; color:var(--accent-warm);">${kickerText}</span>` : ''}`;
    }
  };

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const visibleItems = getVisibleItems();
      const idx = visibleItems.indexOf(item);
      if (idx !== -1) {
        showImage(idx);
        dialog.showModal();
      }
    });
  });

  closeBtn?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });

  prevBtn?.addEventListener('click', () => showImage(activeVisibleIndex - 1));
  nextBtn?.addEventListener('click', () => showImage(activeVisibleIndex + 1));

  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') showImage(activeVisibleIndex - 1);
    if (e.key === 'ArrowRight') showImage(activeVisibleIndex + 1);
  });
}

/* ==========================================================================
   5. PACKAGE CONFIGURATOR (FOR DETAIL PACKAGE PAGES)
   ========================================================================== */
function initPackageConfigurator() {
  const configurator = document.querySelector('.package-configurator');
  if (!configurator) return;

  const packageName = configurator.getAttribute('data-package-name') || 'Team Building';
  const durationSelect = document.getElementById('config-duration');
  const participantsSelect = document.getElementById('config-participants');
  const locationSelect = document.getElementById('config-location');
  const summaryEl = document.getElementById('config-summary-display');
  const consultBtn = document.getElementById('config-consult-btn');

  const updateSummary = () => {
    const dur = durationSelect?.value || '1 Day';
    const part = participantsSelect?.value || '50 Peserta';
    const loc = locationSelect?.value || 'Batu Malang';

    if (summaryEl) {
      summaryEl.innerHTML = `Paket: <strong>${packageName}</strong> • Durasi: <strong>${dur}</strong> • Kapasitas: <strong>${part}</strong> • Destinasi: <strong>${loc}</strong>`;
    }

    if (consultBtn) {
      const msg = [
        'Halo Vendor Outbound,',
        '',
        `Saya tertarik dengan detail paket berikut:`,
        `• Program: ${packageName}`,
        `• Durasi: ${dur}`,
        `• Estimasi Peserta: ${part}`,
        `• Lokasi: ${loc}`,
        '',
        'Mohon dikirimkan proposal rundown serta penawaran resminya.',
        'Terima kasih.'
      ].join('\n');

      consultBtn.href = `https://wa.me/6282211221909?text=${encodeURIComponent(msg)}`;
    }
  };

  [durationSelect, participantsSelect, locationSelect].forEach((el) => {
    el?.addEventListener('change', updateSummary);
  });

  updateSummary();

  // Package Tab Navigation (Sasaran, Modul, Fasilitas, Rundown)
  const tabBtns = document.querySelectorAll('.tab-nav .tab-btn');
  const tabPanes = document.querySelectorAll('.tab-content .tab-pane');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('is-active'));
      tabPanes.forEach((p) => p.classList.remove('is-active'));

      btn.classList.add('is-active');
      const targetId = btn.getAttribute('data-tab-target');
      const pane = document.getElementById(targetId);
      if (pane) pane.classList.add('is-active');
    });
  });
}

/* ==========================================================================
   6. DYNAMIC TABLE OF CONTENTS (TOC) FOR BLOG ARTICLES
   ========================================================================== */
function initDynamicTOC() {
  const articleContent = document.querySelector('.article-prose');
  const tocList = document.querySelector('.toc-list');
  if (!articleContent || !tocList) return;

  const headings = articleContent.querySelectorAll('h2, h3');
  if (headings.length === 0) return;

  tocList.innerHTML = '';

  headings.forEach((heading, idx) => {
    if (!heading.id) {
      heading.id = `heading-${idx + 1}`;
    }

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;
    a.className = 'toc-link';
    if (heading.tagName === 'H3') {
      a.style.paddingLeft = '12px';
      a.style.fontSize = '0.8125rem';
    }

    li.appendChild(a);
    tocList.appendChild(li);
  });

  // Active heading highlighting
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          document.querySelectorAll('.toc-link').forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '0px 0px -65% 0px', threshold: 0.1 }
  );

  headings.forEach((h) => observer.observe(h));
}

/* ==========================================================================
   7. SOCIAL SHARE & CLIPBOARD COPY URL
   ========================================================================== */
function initShareAndCopy() {
  const copyBtn = document.querySelector('.btn-copy-url');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span>Tersalin! ✓</span>';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2500);
      } catch {
        prompt('Salin link berikut:', window.location.href);
      }
    });
  }

  // Social Share links
  const shareWa = document.querySelector('.btn-share-wa');
  if (shareWa) {
    shareWa.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(document.title + ' ' + window.location.href)}`;
  }
}

/* ==========================================================================
   8. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (!backToTopBtn) return;
  if (backToTopBtn.__bttInitialized) return;
  backToTopBtn.__bttInitialized = true;

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    },
    { passive: true }
  );

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   9. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const animatables = document.querySelectorAll('.animate-fade-up');
  if (animatables.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatables.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   10. CONTACT INQUIRY FORM (URL-ENCODED WHATSAPP DISPATCH)
   ========================================================================== */
function initContactInquiryForm() {
  const form = document.getElementById('contact-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('inquiry-first-name')?.value?.trim() || '';
    const lastName = document.getElementById('inquiry-last-name')?.value?.trim() || '';
    const legacyName = document.getElementById('inquiry-name')?.value?.trim() || '';
    const fullName = [firstName, lastName].filter(Boolean).join(' ') || legacyName;

    const email = document.getElementById('inquiry-email')?.value?.trim() || '';
    const phone = document.getElementById('inquiry-phone')?.value?.trim() || '';
    const org = document.getElementById('inquiry-org')?.value?.trim() || lastName || '';
    const program = document.getElementById('inquiry-program')?.value || 'Konsultasi Outbound';
    const participants = document.getElementById('inquiry-participants')?.value || 'Belum Ditentukan';
    const location = document.getElementById('inquiry-location')?.value || '';
    const date = document.getElementById('inquiry-date')?.value?.trim() || '';
    const message = document.getElementById('inquiry-notes')?.value?.trim() || '-';

    if (!firstName && !fullName) {
      alert('Mohon masukkan nama Anda terlebih dahulu.');
      const fnInput = document.getElementById('inquiry-first-name') || document.getElementById('inquiry-name');
      fnInput?.focus();
      return;
    }

    if (!phone && document.getElementById('inquiry-phone')) {
      alert('Mohon masukkan nomor kontak / WhatsApp Anda agar kami dapat menghubungi Anda.');
      document.getElementById('inquiry-phone')?.focus();
      return;
    }

    let cleanPhone = phone;
    if (cleanPhone) {
      cleanPhone = cleanPhone.replace(/^(\+62|62|0)/, '');
      cleanPhone = '+62 ' + cleanPhone.trim();
    }

    const text = [
      'Halo Vendor Outbound,',
      '',
      'Saya ingin berkonsultasi mengenai rencana kegiatan outbound:',
      `• Nama: ${fullName}`,
      org && org !== fullName ? `• Instansi / Perusahaan: ${org}` : '',
      cleanPhone ? `• No. WhatsApp / HP: ${cleanPhone}` : '',
      email ? `• Email: ${email}` : '',
      `• Program Pilihan: ${program}`,
      `• Estimasi Peserta: ${participants}${location ? ' (' + location + ')' : ''}`,
      date ? `• Perkiraan Waktu: ${date}` : '',
      message && message !== '-' ? `• Catatan / Pertanyaan: ${message}` : '',
      '',
      'Mohon informasi ketersediaan jadwal, rekomendasi venue terbaik, dan draf penawarannya.',
      'Terima kasih.'
    ].filter(Boolean).join('\n');

    const waUrl = `https://wa.me/6282211221909?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}

/* ==========================================================================
   11. PDP INTERACTIVE GALLERY (IMAGE SWITCHER)
   ========================================================================== */
function initPdpGallery() {
  const thumbs = document.querySelectorAll('.pdp-thumb-item');
  const mainImg = document.getElementById('pdp-main-img');
  if (!thumbs.length || !mainImg) return;

  let currentLoadingSrc = '';

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const targetSrc = thumb.getAttribute('data-img');
      if (!targetSrc) return;

      // Update active state visuals & accessibility across all thumbnails
      thumbs.forEach(t => {
        t.classList.remove('active');
        t.removeAttribute('aria-current');
      });
      thumb.classList.add('active');
      thumb.setAttribute('aria-current', 'true');

      // If already displaying this image, skip reload
      if (mainImg.getAttribute('src') === targetSrc) {
        mainImg.style.opacity = '1';
        return;
      }

      // Sync alt description from caption or thumbnail
      const imgInside = thumb.querySelector('.pdp-thumb-img');
      const captionInside = thumb.querySelector('.pdp-thumb-caption');
      const targetAlt = (captionInside && captionInside.textContent.trim()) ||
                        (imgInside && imgInside.getAttribute('alt')) ||
                        thumb.getAttribute('aria-label') ||
                        mainImg.alt;

      currentLoadingSrc = targetSrc;

      // Subtle fade transition for modern feel
      mainImg.style.opacity = '0.35';

      const tempImg = new Image();
      tempImg.onload = () => {
        if (currentLoadingSrc === targetSrc) {
          mainImg.src = targetSrc;
          if (targetAlt) mainImg.alt = targetAlt;
          mainImg.style.opacity = '1';
        }
      };
      tempImg.onerror = () => {
        if (currentLoadingSrc === targetSrc) {
          mainImg.src = targetSrc;
          if (targetAlt) mainImg.alt = targetAlt;
          mainImg.style.opacity = '1';
        }
      };
      tempImg.src = targetSrc;
    });
  });
}

/* ==========================================================================
   12. CARINO MAGAZINE HERO SLIDER
   ========================================================================== */
function initHeroMagazineSlider() {
  const container = document.querySelector('.mag-hero-main-card');
  if (!container) return;

  const slides = container.querySelectorAll('.mag-hero-slide-item');
  const dots = container.querySelectorAll('.mag-dot');
  const prevBtn = container.querySelector('.mag-hero-prev');
  const nextBtn = container.querySelector('.mag-hero-next');

  if (slides.length <= 1) return;

  let currentIdx = 0;
  let autoplayTimer = null;

  const goToSlide = (idx) => {
    currentIdx = (idx + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === currentIdx);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === currentIdx);
    });
  };

  prevBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    goToSlide(currentIdx - 1);
    resetAutoplay();
  });

  nextBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    goToSlide(currentIdx + 1);
    resetAutoplay();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetAutoplay();
    });
  });

  const startAutoplay = () => {
    autoplayTimer = setInterval(() => {
      goToSlide(currentIdx + 1);
    }, 6000);
  };

  const resetAutoplay = () => {
    if (autoplayTimer) clearInterval(autoplayTimer);
    startAutoplay();
  };

  startAutoplay();
  container.addEventListener('mouseenter', () => {
    if (autoplayTimer) clearInterval(autoplayTimer);
  });
  container.addEventListener('mouseleave', () => {
    resetAutoplay();
  });
}

/* ==========================================================================
   13. BLOG ARTICLE CATEGORY FILTER
   ========================================================================== */
function initBlogFilter() {
  const filterBar = document.querySelector('.blog-filter-bar');
  if (!filterBar) return;

  const filterBtns = filterBar.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.mag-card-box, .mag-mini-item');
  const heroSlider = document.querySelector('.mag-hero-main-card');
  const heroSlides = document.querySelectorAll('.mag-hero-slide-item');
  const heroDots = document.querySelectorAll('.mag-dot');

  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filterVal = btn.getAttribute('data-filter') || 'all';

      // 1. Filter Grid Article Cards & Sidebar Mini Items
      cards.forEach((card) => {
        const catAttr = card.getAttribute('data-category') || '';
        const cats = catAttr.split(/\s+/).filter(Boolean);

        if (filterVal === 'all' || cats.includes(filterVal)) {
          card.style.display = '';
          card.classList.remove('fade-in');
          void card.offsetWidth; // trigger reflow for smooth animation
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
          card.classList.remove('fade-in');
        }
      });

      // 2. Synchronize Hero Slider to matching category slide
      if (heroSlider && heroSlides.length && filterVal !== 'all') {
        let matchingIndex = -1;
        heroSlides.forEach((slide, idx) => {
          const slideCats = (slide.getAttribute('data-category') || '').split(/\s+/).filter(Boolean);
          if (matchingIndex === -1 && slideCats.includes(filterVal)) {
            matchingIndex = idx;
          }
        });

        if (matchingIndex !== -1) {
          heroSlides.forEach((s) => s.classList.remove('is-active'));
          heroDots.forEach((d) => d.classList.remove('is-active'));
          heroSlides[matchingIndex]?.classList.add('is-active');
          heroDots[matchingIndex]?.classList.add('is-active');
        }
      }
    });
  });
}

/* ==========================================================================
   14. ULTRA-FAST PAGE TRANSITIONS & INSTANT PREFETCH ENGINE (< 200ms)
   ========================================================================== */
function initPageTransitionsAndPrefetch() {
  // 1. Create top progress bar if not exists
  let progressBar = document.getElementById('page-nav-progress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'page-nav-progress';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.prepend(progressBar);
  }

  const startProgress = () => {
    if (!progressBar) return;
    progressBar.classList.remove('is-done');
    progressBar.classList.add('is-active');
    progressBar.style.width = '45%';
  };

  const finishProgress = () => {
    if (!progressBar) return;
    progressBar.classList.add('is-done');
    setTimeout(() => {
      progressBar.classList.remove('is-active', 'is-done');
      progressBar.style.width = '0%';
    }, 280);
  };

  window.addEventListener('pageshow', finishProgress);

  // 2. High-speed in-memory HTML page cache
  const pageCache = new Map();
  const isSaveData = navigator.connection && navigator.connection.saveData;

  const isInternalHtmlLink = (anchor) => {
    if (!anchor || !anchor.href) return false;
    if (anchor.target && anchor.target !== '_self') return false;
    if (anchor.hasAttribute('download')) return false;
    if (anchor.getAttribute('rel')?.includes('external')) return false;

    try {
      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin) return false;
      // Exclude asset files
      if (/\.(webp|png|jpe?g|svg|pdf|zip|mp4|json|xml|txt|css|js)$/i.test(url.pathname)) return false;
      return true;
    } catch {
      return false;
    }
  };

  // Prefetch a URL into memory cache & browser link cache
  const prefetchPage = async (urlStr) => {
    if (isSaveData) return;
    try {
      const parsed = new URL(urlStr, window.location.origin);
      const cleanKey = parsed.pathname;
      if (pageCache.has(cleanKey)) return;

      // Add prefetch link for HTTP cache
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = cleanKey;
      link.as = 'document';
      document.head.appendChild(link);

      // Fetch into memory cache
      fetch(cleanKey, { priority: 'low' })
        .then((res) => {
          if (res.ok) return res.text();
          throw new Error('Failed to prefetch');
        })
        .then((html) => {
          pageCache.set(cleanKey, html);
        })
        .catch(() => {});
    } catch (e) {}
  };

  // 3. Eagerly prefetch core navigation pages after idle
  const corePages = ['/', '/tentang-kami', '/produk', '/paket', '/galeri', '/blog', '/kontak'];
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 250));
  idleCallback(() => {
    corePages.forEach((p) => {
      if (p !== window.location.pathname) {
        prefetchPage(p);
      }
    });
  });

  // 4. Viewport IntersectionObserver: prefetch links as user scrolls
  if ('IntersectionObserver' in window && !isSaveData) {
    const linkObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const a = entry.target;
            if (isInternalHtmlLink(a)) {
              prefetchPage(a.href);
            }
            obs.unobserve(a);
          }
        });
      },
      { rootMargin: '250px 0px' }
    );

    const observeLinks = () => {
      document.querySelectorAll('a[href^="/"]').forEach((a) => {
        if (isInternalHtmlLink(a)) linkObserver.observe(a);
      });
    };
    observeLinks();
    window.__observeLinks = observeLinks;
  }

  // 5. Pointerdown & Touchstart (instant prefetch ~100ms before click)
  document.addEventListener(
    'pointerdown',
    (e) => {
      const anchor = e.target.closest('a');
      if (!anchor || !isInternalHtmlLink(anchor)) return;
      prefetchPage(anchor.href);
    },
    { capture: true, passive: true }
  );

  document.addEventListener(
    'pointerenter',
    (e) => {
      const anchor = e.target.closest('a');
      if (!anchor || !isInternalHtmlLink(anchor)) return;
      prefetchPage(anchor.href);
    },
    { capture: true, passive: true }
  );

  // 6. Master function to re-initialize all page components after navigation
  const reinitPage = () => {
    initStickyHeader();
    initMobileDrawer();
    initActivityPlanner();
    initGalleryAndLightbox();
    initPackageConfigurator();
    initDynamicTOC();
    initShareAndCopy();
    initBackToTop();
    initScrollAnimations();
    initContactInquiryForm();
    initPdpGallery();
    initHeroMagazineSlider();
    initBlogFilter();
    initActiveNavSync();
    if (window.__observeLinks) window.__observeLinks();
  };

  // 7. Instant Page Swapper Engine (Sub-200ms duration)
  let isNavigating = false;

  const navigateTo = async (destinationUrl, pushToHistory = true) => {
    if (isNavigating) return;
    const target = new URL(destinationUrl, window.location.origin);
    const cleanPath = target.pathname;

    // Same page hash navigation
    if (cleanPath === window.location.pathname) {
      if (target.hash) {
        const el = document.querySelector(target.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          if (pushToHistory) window.history.pushState({ path: destinationUrl }, '', destinationUrl);
          return;
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }

    isNavigating = true;
    startProgress();

    try {
      // 1. Get HTML from memory cache or fetch with 1.8s timeout
      let html = pageCache.get(cleanPath);
      if (!html) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1800);
        const res = await fetch(cleanPath, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        html = await res.text();
        pageCache.set(cleanPath, html);
      }

      // 2. Parse new document
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(html, 'text/html');
      const newMain = newDoc.querySelector('#main-content') || newDoc.querySelector('main');
      const currentMain = document.querySelector('#main-content') || document.querySelector('main');

      if (!newMain || !currentMain) {
        window.location.href = destinationUrl;
        return;
      }

      // 3. Close mobile drawer if open
      const drawer = document.querySelector('.mobile-drawer');
      const overlay = document.querySelector('.mobile-drawer-overlay');
      if (drawer?.classList.contains('is-active')) {
        drawer.classList.remove('is-active');
        overlay?.classList.remove('is-active');
        document.body.style.overflow = '';
      }

      // 4. Swap Content with View Transition API or snappy CSS fallback
      const applySwap = () => {
        document.title = newDoc.title;
        currentMain.innerHTML = newMain.innerHTML;

        if (newMain.className) currentMain.className = newMain.className;

        // Synchronize site header state: Solid immediately on detail pages
        const header = document.querySelector('.site-header');
        if (header) {
          if (isDetailPage(cleanPath)) {
            header.classList.add('header-solid');
            header.classList.remove('is-scrolled');
          } else {
            header.classList.remove('header-solid');
            if (window.scrollY > 30) {
              header.classList.add('is-scrolled');
            } else {
              header.classList.remove('is-scrolled');
            }
          }
        }

        if (pushToHistory) {
          window.history.pushState({ path: destinationUrl }, '', destinationUrl);
        }

        if (target.hash) {
          const el = document.querySelector(target.hash);
          if (el) el.scrollIntoView({ behavior: 'instant' });
          else window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }

        reinitPage();
      };

      if (document.startViewTransition) {
        const transition = document.startViewTransition(applySwap);
        await transition.finished;
      } else {
        // Fallback: 80ms fade out, swap, 100ms fade in
        currentMain.style.transition = 'opacity 80ms ease';
        currentMain.style.opacity = '0';
        await new Promise((r) => setTimeout(r, 80));

        applySwap();

        currentMain.style.opacity = '0';
        requestAnimationFrame(() => {
          currentMain.style.transition = 'opacity 100ms ease';
          currentMain.style.opacity = '1';
        });
      }
    } catch (err) {
      console.warn('Instant navigation fallback to standard load:', err);
      window.location.href = destinationUrl;
    } finally {
      isNavigating = false;
      finishProgress();
    }
  };

  // 8. Intercept clicks on internal clean links
  document.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    const anchor = e.target.closest('a');
    if (!anchor || !isInternalHtmlLink(anchor)) return;

    const targetUrl = anchor.href;
    const currentUrl = window.location.href;

    if (targetUrl === currentUrl) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    navigateTo(targetUrl, true);
  });

  // 9. Handle Browser Back & Forward buttons
  window.addEventListener('popstate', () => {
    navigateTo(window.location.href, false);
  });
}

/* ==========================================================================
   15. DYNAMIC CLEAN URL ACTIVE NAVIGATION SYNCHRONIZATION
   ========================================================================== */
function initActiveNavSync() {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '') || '/';
  const navLinks = document.querySelectorAll(
    '.desktop-nav .nav-link, .mobile-nav-list .mobile-nav-link, .mobile-submenu-link, .mega-link'
  );

  navLinks.forEach((link) => {
    const rawHref = link.getAttribute('href');
    if (!rawHref) return;

    const cleanHref = rawHref.split('#')[0].split('?')[0].replace(/\/index\.html$/, '/').replace(/\.html$/, '') || '/';

    const isExactMatch = cleanHref === currentPath;
    const isParentMatch = cleanHref !== '/' && currentPath.startsWith(cleanHref + '/');

    if (link.classList.contains('nav-link') || link.classList.contains('mobile-nav-link')) {
      if (isExactMatch || isParentMatch) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } else if (link.classList.contains('mega-link') || link.classList.contains('mobile-submenu-link')) {
      if (isExactMatch) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}




