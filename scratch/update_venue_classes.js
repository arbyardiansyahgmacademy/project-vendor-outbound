const fs = require('fs');

const files = [
  'produk/outbound-perusahaan.html',
  'produk/family-gathering.html',
  'produk/outbound-sekolah.html',
  'produk/outbound-wisata.html'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(
    '<div style="margin-top:36px; background:#FFFFFF; border:1px solid var(--border-subtle); border-radius:var(--radius-xl); padding:28px 32px; display:grid; grid-template-columns:1fr 1fr; gap:32px;">',
    '<div class="detail-inclusions-strip">'
  );
  content = content.replace(
    '<div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:24px;">',
    '<div class="detail-venues-grid">'
  );
  content = content.replaceAll(
    '<div style="background:#FFFFFF; border:1px solid var(--border-subtle); border-radius:var(--radius-xl); overflow:hidden; box-shadow:var(--shadow-sm);">',
    '<div class="detail-venue-card">'
  );
  content = content.replaceAll(
    '<div style="height:190px; overflow:hidden;">',
    '<div class="detail-venue-img">'
  );
  content = content.replaceAll(
    '<div style="padding:22px 20px;">',
    '<div class="detail-venue-body">'
  );
  fs.writeFileSync(f, content, 'utf8');
  console.log('Successfully updated classes in ' + f);
});
