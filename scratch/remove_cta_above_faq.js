const fs = require('fs');

const files = [
  'produk/outbound-perusahaan.html',
  'produk/family-gathering.html',
  'produk/outbound-sekolah.html',
  'produk/outbound-wisata.html'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Regex to remove the entire section containing detail-admin-consult-banner right before FAQ
  const regex = /\s*<!-- SECTION 7: DIRECT CONSULTATION BANNER WITH ADMIN -->\s*<section class="section" style="padding-top:20px; padding-bottom:20px;">[\s\S]*?<\/section>\s*(?=\s*<!-- SECTION 8: FAQ)/;

  if (regex.test(content)) {
    content = content.replace(regex, '\n\n    ');
    content = content.replace('<!-- SECTION 8: FAQ', '<!-- SECTION 7: FAQ');
    content = content.replace('<!-- SECTION 9: FINAL LUXURY CTA BANNER -->', '<!-- SECTION 8: FINAL LUXURY CTA BANNER -->');
    fs.writeFileSync(f, content, 'utf8');
    console.log('Successfully removed CTA above FAQ in ' + f);
  } else {
    console.log('Pattern not matched in ' + f);
  }
});
