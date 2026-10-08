/**
 * VENDOROUTBOUND.ID — CORE INTERACTIVE JAVASCRIPT
 * Pure Vanilla JavaScript — Modular, Accessible, High Performance
 */

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
});

/* ==========================================================================
   1. STICKY GLASS HEADER ON SCROLL
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
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

  // Filter items
  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const filterVal = btn.getAttribute('data-filter') || 'semua';
        galleryItems.forEach((item) => {
          const cat = item.getAttribute('data-category');
          if (filterVal === 'semua' || cat === filterVal) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Lightbox Modal
  if (!dialog) return;

  const lightboxImg = dialog.querySelector('.lightbox-image');
  const lightboxCaption = dialog.querySelector('.lightbox-caption-text');
  const closeBtn = dialog.querySelector('.lightbox-close-btn');
  const prevBtn = dialog.querySelector('.lightbox-nav-prev');
  const nextBtn = dialog.querySelector('.lightbox-nav-next');

  let activeIndex = 0;
  const itemsArray = Array.from(galleryItems);

  const showImage = (index) => {
    if (itemsArray.length === 0) return;
    activeIndex = (index + itemsArray.length) % itemsArray.length;
    const currentItem = itemsArray[activeIndex];
    const imgEl = currentItem.querySelector('img');
    const titleEl = currentItem.querySelector('.bento-caption h4');

    if (imgEl && lightboxImg) {
      lightboxImg.src = imgEl.src;
      lightboxImg.alt = imgEl.alt || 'Dokumentasi Vendor Outbound';
    }
    if (titleEl && lightboxCaption) {
      lightboxCaption.textContent = titleEl.textContent;
    }
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      showImage(index);
      dialog.showModal();
    });
  });

  closeBtn?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });

  prevBtn?.addEventListener('click', () => showImage(activeIndex - 1));
  nextBtn?.addEventListener('click', () => showImage(activeIndex + 1));

  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') showImage(activeIndex - 1);
    if (e.key === 'ArrowRight') showImage(activeIndex + 1);
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

    const name = document.getElementById('inquiry-name')?.value?.trim() || '';
    const org = document.getElementById('inquiry-org')?.value?.trim() || 'Perorangan / Komunitas';
    const program = document.getElementById('inquiry-program')?.value || 'Konsultasi Outbound Umum';
    const participants = document.getElementById('inquiry-participants')?.value || 'Belum Ditentukan';
    const location = document.getElementById('inquiry-location')?.value || 'Rekomendasi Vendor';
    const date = document.getElementById('inquiry-date')?.value?.trim() || 'Menyesuaikan';
    const message = document.getElementById('inquiry-notes')?.value?.trim() || '-';

    if (!name) {
      alert('Mohon isi nama lengkap Anda.');
      return;
    }

    const text = [
      'Halo Vendor Outbound,',
      '',
      'Saya ingin berkonsultasi mengenai rencana kegiatan:',
      `• Nama: ${name}`,
      `• Instansi / Perusahaan: ${org}`,
      `• Jenis Kegiatan: ${program}`,
      `• Estimasi Peserta: ${participants}`,
      `• Rencana Lokasi: ${location}`,
      `• Perkiraan Tanggal: ${date}`,
      message && message !== '-' ? `• Catatan / Pertanyaan: ${message}` : '',
      '',
      'Mohon informasi ketersediaan jadwal dan rekomendasi programnya.',
      'Terima kasih.'
    ].filter(Boolean).join('\n');

    const waUrl = `https://wa.me/6282211221909?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}

