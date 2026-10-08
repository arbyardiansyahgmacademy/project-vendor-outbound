const fs = require('fs');

const pages = [
  'produk/outbound-perusahaan.html',
  'produk/family-gathering.html',
  'produk/outbound-sekolah.html',
  'produk/outbound-wisata.html'
];

pages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  console.log('=== ' + p + ' ===');
  console.log('Clean Page Header:', c.includes('<section class="page-header">') && !c.includes('detail-hero-specs'));
  console.log('Quick Specs Strip:', c.includes('service-specs-strip'));
  console.log('Media Showcase Image:', c.includes('detail-media-wrap'));
  console.log('Module Cards:', c.includes('detail-modules-grid'));
  console.log('Packages Grid:', c.includes('detail-packages-grid'));
  console.log('Facilities Grid:', c.includes('facilities-included-grid'));
  console.log('Inclusions vs Options:', c.includes('detail-inclusions-strip'));
  console.log('Rundown Timeline:', c.includes('detail-timeline-wrap'));
  console.log('Venue Grid:', c.includes('detail-venues-grid'));
  console.log('Direct Admin Consult Banner:', c.includes('detail-admin-consult-banner'));
  console.log('FAQ Accordions:', (c.match(/<details class="faq-item"/g) || []).length + ' FAQ items');
  console.log('Final CTA Banner:', c.includes('cta-section-wrap'));
  console.log('WhatsApp Official Links:', c.includes('https://wa.me/6282211221909'));
  console.log('');
});
