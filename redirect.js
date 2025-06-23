// Получаем uid из URL
const uid = window.location.pathname.split('/').pop().replace('.html', '');

// Ссылка для редиректа
const baseUrl = "https://platinumcapitalmy.com/kG6KC1w5?param=" + uid + "&aff_sub=10sale";

// Редирект
window.location.href = baseUrl;
