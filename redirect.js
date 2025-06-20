// Получаем uid из URL
const uid = window.location.pathname.split('/').pop().replace('.html', '');

// ССЫЛКА ДЛЯ РЕДИРЕКТА — меняется только здесь!
const baseUrl = "https://your-cpa-offer.com/?traffic_id=";

window.location.href = baseUrl + encodeURIComponent(uid);
