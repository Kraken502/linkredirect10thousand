// Получаем uid из URL
const uid = window.location.pathname.split('/').pop().replace('.html', '');

// ССЫЛКА ДЛЯ РЕДИРЕКТА — меняется только здесь!
const baseUrl = "https://achieveyourvictories.com/kG6KC1w5?param=tqv15_mejit&aff_sub=10sale";

window.location.href = baseUrl + encodeURIComponent(uid);
