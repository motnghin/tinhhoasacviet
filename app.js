// ===== SỬA Ở ĐÂY =====
const BUY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe9wRkSzKJyPt41v9Zq3AaoHWqGXddYtvIsMO1FJvvGNyy8nw/viewform?usp=header'
const PHONE = '0359842546'
const EMAIL = 'thienxhe186264@fpt.edu.vn'
const FB_URL = 'https://www.facebook.com/profile.php?id=61594325117626'
const PRODUCTS = [
  { id: 'nguoi-giu-nep', price: 300000, images: ['images/nguoi-giu-nep.png'],
    vi: { name: 'Người giữ nếp', accent: 'Áo dài ngũ thân', tagline: 'Tà áo giữ dáng người, còn lễ nghĩa giữ nếp nhà.',
      story: ['Trong những ngày lễ trọng, chàng trai khoác lên mình chiếc áo dài xanh thẫm, chỉnh lại cổ áo rồi bước qua sân đình.',
        'Với người Việt xưa, trang phục đẹp không chỉ để làm đẹp cho bản thân, mà còn thể hiện sự kính trọng với gia đình, tổ tiên và cộng đồng. Dáng áo kín đáo, tay rộng và sắc xanh trầm gợi nên vẻ điềm đạm của người quân tử.',
        'Tà áo giữ dáng người, còn lễ nghĩa giữ nếp nhà.'] },
    en: { name: 'Keeper of Tradition', accent: 'Five-panel áo dài', tagline: 'The robe keeps his posture; courtesy keeps the family’s ways.',
      story: ['On important festival days, the young man puts on his deep blue áo dài, straightens the collar and walks across the village communal yard.',
        'For Vietnamese people of the past, fine clothing was not only about looking good — it expressed respect for family, ancestors and community. The modest cut, wide sleeves and deep blue tone evoke the calm composure of a gentleman.',
        'The robe keeps his posture; courtesy keeps the family’s ways.'] } },
  { id: 'duyen-hoi-kinh-bac', price: 350000, images: ['images/duyen-hoi-kinh-bac.png'],
    vi: { name: 'Duyên hội Kinh Bắc', accent: 'Áo tứ thân & nón quai thao', tagline: 'Một vành nón nghiêng, một câu hát trao — duyên Việt còn mãi sau ngày hội.',
      story: ['Ngày hội mở, cô gái khoác áo đỏ, nhẹ nâng vành nón quai thao giữa tiếng hát vang từ sân đình.',
        'Ở vùng Kinh Bắc, mùa xuân không chỉ có hội làng mà còn có những câu hát giao duyên. Người gặp người bằng lời ca, bằng ánh mắt và bằng cái nghiêng nhẹ của vành nón. Chiếc nón quai thao từ đó trở thành hình ảnh gợi nhớ đến vẻ duyên dáng, nền nã của người con gái Bắc Bộ.',
        'Một vành nón nghiêng, một câu hát trao — duyên Việt còn mãi sau ngày hội.'] },
    en: { name: 'Kinh Bắc Festival Charm', accent: 'Áo tứ thân & quai thao hat', tagline: 'A tilted hat brim, a song exchanged — Vietnamese charm lingers long after the festival.',
      story: ['As the festival opens, a young woman in a red dress gently lifts the brim of her quai thao hat amid songs echoing from the village yard.',
        'In the Kinh Bắc region, spring brings not only village festivals but also call-and-response love songs. People meet through melody, glances and the slight tilt of a hat brim. The quai thao hat has since become a symbol of the graceful, gentle women of northern Vietnam.',
        'A tilted hat brim, a song exchanged — Vietnamese charm lingers long after the festival.'] } },
]
const L = {
  vi: { nav: ['Trang chủ', 'Sản phẩm', 'Giới thiệu'], manE: 'Từ đôi bàn tay Việt', manT: 'Di sản không nằm yên trong quá khứ.', manP: 'Nó sống trong từng đường kim, nếp áo và câu chuyện được truyền lại bằng sự trân trọng.', heroE: 'Bộ sưu tập thủ công 2026', heroT: 'Mô hình trang phục truyền thống',
    heroP: 'Khám phá vẻ đẹp trang phục truyền thống Việt Nam qua những mô hình búp bê tinh xảo, hiện đại và gần gũi.',
    cta: 'Khám phá Bộ sưu tập ›', valT: 'Giá trị cốt lõi',
    vals: [['Bảo tồn & hiện đại hóa', 'Đưa di sản vào đời sống bằng một ngôn ngữ thủ công thân thuộc.'], ['Gắn kết văn hóa', 'Mỗi mô hình là nhịp cầu nhỏ nối hôm nay với ký ức dân tộc.'], ['Một trang phục · Một câu chuyện', 'Không chỉ để ngắm nhìn, mỗi nhân vật còn kể một tích văn hóa riêng.']],
    colT: 'Bộ sưu tập', eyebrow: 'Những dáng hình xưa', lead: 'Mỗi nhân vật được đan thủ công, mang theo một lát cắt văn hóa và tinh thần của người Việt.', order: 'Đặt mua', read: 'Xem câu chuyện', buy: 'Mua sản phẩm', view: 'Xem chi tiết', storyH: 'Câu chuyện văn hóa', other: 'Xem sản phẩm khác', unit: 'vnđ',
    aboutT: 'Giới thiệu dự án', about: [['Ý tưởng', 'Chúng tôi kết hợp nghề đan len thủ công. Mỗi nhân vật được đan tay tỉ mỉ trong trang phục truyền thống Việt Nam, từ áo dài đến áo tứ thân, và mang theo một câu chuyện văn hóa riêng để người nhận khám phá.'], ['Sứ mệnh', 'Lan tỏa văn hóa Việt đến thế hệ trẻ và bạn bè quốc tế bằng một món đồ nhỏ xinh, gần gũi, có thể sưu tầm và trao tặng.'], ['Đối tượng khách hàng', 'Người trẻ yêu đồ sưu tầm và blind box, người Việt xa quê muốn giữ một mảnh quê hương, du khách tìm quà lưu niệm mang bản sắc, và những ai cần một món quà ý nghĩa.']],
    aboutE: 'Về Tinh Hoa Sắc Việt', aboutLead: 'Tinh Hoa Sắc Việt là dòng búp bê len thủ công mặc áo dài và trang phục các dân tộc Việt Nam, được đóng gói dưới dạng blind box — mỗi hộp là một bất ngờ văn hóa.',
    aVals: [['Thiết kế độc quyền', 'Tạo hình và họa tiết do đội ngũ Tinh Hoa Sắc Việt tự thiết kế.'], ['Chất liệu cao cấp', 'Len mềm, an toàn, đan tay tỉ mỉ và bền đẹp theo thời gian.'], ['Quà tặng ý nghĩa', 'Hộp quà trang nhã, phù hợp dịp lễ, sinh nhật hay quà gửi bạn bè quốc tế.']],
    footCol: 'Bộ sưu tập', footAbout: 'Giới thiệu', contact: 'Liên hệ', explore: 'Khám phá', follow: 'Theo dõi' },
  en: { nav: ['Home', 'Products', 'About'], manE: 'From Vietnamese hands', manT: 'Heritage does not rest in the past.', manP: 'It lives in every stitch, every fold of fabric and every story passed on with care.', heroE: 'Handcrafted collection 2026', heroT: 'Traditional costume figures',
    heroP: 'Discover the beauty of traditional Vietnamese dress through finely crafted, modern and approachable doll figures.',
    cta: 'Explore the Collection ›', valT: 'Core values',
    vals: [['Preserve & modernize', 'Bringing heritage into everyday life through a familiar handcrafted language.'], ['Cultural connection', 'Each figure is a small bridge linking today with our shared memory.'], ['One costume · One story', 'More than decoration, every character tells its own cultural tale.']],
    colT: 'Collection', eyebrow: 'Forms of old', lead: 'Each character is knitted by hand, carrying a slice of Vietnamese culture and spirit.', order: 'Buy Now', read: 'Read the story', buy: 'Buy Now', view: 'View details', storyH: 'Cultural story', other: 'See other products', unit: 'VND',
    aboutT: 'About the Project', about: [['The idea', 'We pair hand-knitting craft with the joy of opening a mystery box. Each character is carefully knitted by hand in traditional Vietnamese dress, from áo dài to áo tứ thân, and carries its own cultural story for you to discover.'], ['Our mission', 'To share Vietnamese culture with younger generations and friends around the world through a small, lovable piece that can be collected and gifted.'], ['Who it’s for', 'Young collectors and blind box fans, Vietnamese living abroad who want a piece of home, travelers looking for meaningful souvenirs, and anyone searching for a thoughtful gift.']],
    aboutE: 'About Tinh Hoa Sắc Việt', aboutLead: 'Tinh Hoa Sắc Việt is a line of handmade knitted dolls dressed in áo dài and the traditional costumes of Vietnam’s ethnic groups, packaged as blind boxes — every box is a cultural surprise.',
    aVals: [['Exclusive design', 'Shapes and patterns are designed in-house by the Tinh Hoa Sắc Việt team.'], ['Premium materials', 'Soft, safe yarn, carefully hand-knitted to last.'], ['Meaningful gifts', 'Elegant packaging, perfect for holidays, birthdays or friends abroad.']],
    footCol: 'Collection', footAbout: 'About', contact: 'Contact', explore: 'Explore', follow: 'Follow' },
}
// ======================

let lang = 'vi'
try { const s = localStorage.getItem('thsv-lang'); if (s === 'vi' || s === 'en') lang = s } catch (e) {}
const t = () => L[lang]
const fmt = (n) => n.toLocaleString('vi-VN') + ' ' + t().unit
const buy = (cls = 'btn') => `<a class="${cls}" href="${BUY_URL}" target="_blank" rel="noopener">${t().buy}</a>`
const ic = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`
const ICONS = [
  '<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>',
  '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>']
const AICONS = [
  '<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/><path d="m2.3 2.3 7.286 7.286"/><circle cx="11" cy="11" r="2"/>',
  '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
  '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>']
const ZALO = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="#0068FF"/><text x="12" y="15.5" font-size="8" font-weight="700" fill="#fff" text-anchor="middle" font-family="Arial,sans-serif">Zalo</text></svg>'
const FB = '<svg class="mail" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>'
const MAIL = '<svg class="mail" viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'

function setLang(l) { lang = l; try { localStorage.setItem('thsv-lang', l) } catch (e) {} render(false) }

function home() {
  const v = t().vals.map(([h, d], i) => `<div class="val">${ic(ICONS[i])}<div><h3>${h}</h3><p>${d}</p></div></div>`).join('')
  return `<section class="hero"><div class="wrap"><p class="eyebrow">${t().heroE}</p><h1>${t().heroT}</h1><p>${t().heroP}</p><a class="btn white" href="#/san-pham">${t().cta}</a></div></section>
<section class="section wrap"><h2>${t().valT}</h2><div class="vals">${v}</div></section>
<section class="manifesto"><div class="mwrap"><div><p class="pacc">${t().manE}</p><h2>${t().manT}</h2></div><p class="mt">${t().manP}</p></div></section>`
}

function collection() {
  const arrow = ic('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>')
  const bag = ic('<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>')
  const cards = PRODUCTS.map((x, i) => { const p = x[lang], href = `#/san-pham/${x.id}`; return `<article class="pcard"><span class="pno">0${i + 1}</span>
<a href="${href}" class="pimg"><img src="${x.images[0]}" alt="${p.name}"></a>
<div class="pcopy"><p class="pacc">${p.accent}</p><h2>${p.name}</h2><blockquote class="pquote" style="margin-left:0;margin-right:0">“${p.tagline}”</blockquote>
<div class="pact"><a href="${href}" class="tl">${t().read} ${arrow}</a><a href="${BUY_URL}" target="_blank" rel="noopener" class="tl">${t().order} ${bag}</a></div></div></article>` }).join('')
  return `<section class="section wrap wide"><div class="chead"><div><p class="pacc">${t().eyebrow}</p><h1>${t().colT}</h1></div><p class="clead">${t().lead}</p></div><div class="pgrid">${cards}</div></section>`
}

function detail(id) {
  const x = PRODUCTS.find((q) => q.id === id)
  if (!x) return collection()
  const p = x[lang]
  return `<section class="section wrap"><h1>${p.name}</h1><div class="detail"><div><h3>${t().storyH}</h3>${p.story.map((s, i) => `<p${i === p.story.length - 1 ? ' style="color:var(--red)"' : ''}>${s}</p>`).join('')}</div>
<div style="text-align:center"><img id="pimg" src="${x.images[0]}" alt="${p.name}" style="max-height:380px"></div></div>
<div class="actions"><a class="btn line" href="#/san-pham">${t().other}</a>${buy()}</div></section>`
}

function about() {
  const c = t().about.map(([h, d], i) => `<article class="acard"><span>0${i + 1}</span><h2>${h}</h2><p>${d}</p></article>`).join('')
  const v = t().aVals.map(([h, d], i) => `<div class="val">${ic(AICONS[i])}<div><h3>${h}</h3><p>${d}</p></div></div>`).join('')
  return `<section class="section wrap wide"><div class="chead"><div><p class="pacc">${t().aboutE}</p><h1>${t().aboutT}</h1></div><p class="clead">${t().aboutLead}</p></div><div class="agrid">${c}</div></section>
<section class="section wrap wide"><h2 class="vtitle">${t().valT}</h2><div class="vals">${v}</div></section>`
}

function shell(body, cur) {
  const n = t().nav, a = (h, l) => `<a href="#/${h}" class="${cur === h ? 'on' : ''}">${l}</a>`
  const logo = `<a class="logo" href="#/"><span>Tinh Hoa<br>Sắc Việt</span><span aria-hidden="true">❀</span></a>`
  const sw = ['vi', 'en'].map((c) => `<button type="button" class="${lang === c ? 'on' : ''}" onclick="setLang('${c}')">${c.toUpperCase()}</button>`).join('')
  return `<header>${logo}<nav>${a('', n[0])}${a('san-pham', n[1])}${a('gioi-thieu', n[2])}<span class="lang">${sw}</span></nav></header><main>${body}</main>
<footer><div class="foot">${logo}<div class="col"><b>${t().explore}</b><a href="#/">${n[0]}</a><a href="#/san-pham">${t().footCol}</a><a href="#/gioi-thieu">${t().footAbout}</a></div>
<div class="col"><b>${t().contact}</b><a href="https://zalo.me/${PHONE}" target="_blank" rel="noopener">${ZALO}${PHONE}</a><a href="mailto:${EMAIL}">${MAIL}${EMAIL}</a></div><div class="col"><b>${t().follow}</b><a href="${FB_URL}" target="_blank" rel="noopener">${FB}Facebook</a></div></div><p class="copy">© 2026 Tinh Hoa Sắc Việt · Gìn giữ hồn Việt trong từng mũi len</p></footer>`
}

function render(scroll = true) {
  const [r, id] = location.hash.replace(/^#\/?/, '').split('/')
  const [body, cur] = r === 'san-pham' ? [id ? detail(id) : collection(), 'san-pham'] : r === 'gioi-thieu' ? [about(), 'gioi-thieu'] : [home(), '']
  document.getElementById('app').innerHTML = shell(body, cur)
  document.documentElement.lang = lang
  if (scroll) window.scrollTo(0, 0)
}
window.addEventListener('hashchange', () => render(true))
render(false)