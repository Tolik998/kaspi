'use strict';

const app = document.getElementById('app');
const state = {
  screen: 'home',
  idPhoto: null,
  idTab: 'doc',
};

const ic = {
  search:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  cart:      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.7L23 6H6"/></svg>`,
  home:      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h5v-5h4v5h5V9.5"/></svg>`,
  qr:        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="3" height="3"/><path d="M21 14h-3M21 21v-3h-4M17 21h-3"/></svg>`,
  msg:       `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  menu:      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  back:      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m15 18-6-6 6-6"/></svg>`,
  chev:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>`,
  share:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`,
  camera:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,

  shop:      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.7L23 6H6"/></svg>`,
  bank:      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 12h6M9 17h3"/></svg>`,
  payments:  `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg>`,
  transfers: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 7h12"/><path d="m15 3 4 4-4 4"/><path d="M17 17H5"/><path d="m9 13-4 4 4 4"/></svg>`,
  travel:    `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="7" width="14" height="11" rx="2"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/><path d="M8 12h8"/></svg>`,
  gov:       `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M4 21V10"/><path d="M20 21V10"/><path d="M12 3 4 10h16z"/><rect x="9" y="14" width="6" height="7"/></svg>`,
  jobs:      `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><circle cx="17" cy="15" r="2.5"/><path d="m19.5 17.5 2 2"/></svg>`,
  magnum:    `<svg width="36" height="36" viewBox="0 0 36 36"><rect x="2" y="2" width="32" height="32" rx="10" fill="#e91e8c"/><path d="M9 24V12l4.5 6.5L18 12l4.5 6.5L27 12v12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,

  cycle:     `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12a7 7 0 0 1 12-4"/><path d="M15 3v5h-5"/><path d="M21 12a7 7 0 0 1-12 4"/><path d="M9 21v-5h5"/></svg>`,
  userMoney: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h5"/><circle cx="19" cy="17" r="3"/><path d="M19 14v6M16 17h6"/></svg>`,
  cards:     `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="14" height="10" rx="2"/><rect x="8" y="8" width="14" height="10" rx="2"/><path d="M2 10h14"/></svg>`,
  globe:     `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>`,
  student:   `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="m3 9 9-4 9 4-9 4-9-4Z"/><path d="M7 11v4c0 1.5 2.3 3 5 3s5-1.5 5-3v-4"/><path d="M21 9v5"/></svg>`,
  docIcon:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  carIcon:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  licIcon:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M14 10h4M14 14h4"/></svg>`,
  babyIcon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a9 9 0 0 1 13 0"/></svg>`,
  moneyIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>`,
  bankIcon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M16 10v11M12 10v11"/></svg>`,
  bizIcon:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
  editIcon:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  personIcon:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
  healthIcon:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,

  signal:    `<svg width="17" height="12" viewBox="0 0 17 12"><rect x="0" y="6" width="3" height="6" rx="0.5" fill="currentColor"/><rect x="4.5" y="4" width="3" height="8" rx="0.5" fill="currentColor"/><rect x="9" y="1.5" width="3" height="10.5" rx="0.5" fill="currentColor" opacity="0.4"/><rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="currentColor" opacity="0.3"/></svg>`,
  wifi:      `<svg width="17" height="13" viewBox="0 0 17 13"><path d="M8.5 10.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor"/><path d="M5.3 7.8a4.5 4.5 0 0 1 6.4 0" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M2.5 5a8 8 0 0 1 12 0" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.5"/></svg>`,
  battery:   `<svg width="26" height="13" viewBox="0 0 26 13"><rect x="0" y="1" width="22" height="11" rx="2.5" stroke="currentColor" stroke-width="1.2" fill="none"/><rect x="1.5" y="2.5" width="16" height="8" rx="1.5" fill="currentColor"/><path d="M23.5 4.5v4a2 2 0 0 0 0-4z" fill="currentColor" opacity="0.5"/></svg>`,
};

function statusBar() {
  return `
    <div class="status-bar">
      <div class="status-left">04:45</div>
      <div class="island"></div>
      <div class="status-right">${ic.signal}${ic.wifi}${ic.battery}</div>
    </div>`;
}

function bottomNav(active = 'home') {
  const items = [
    { id: 'home', label: 'Главная',   icon: ic.home },
    { id: 'qr',   label: 'Kaspi QR', icon: ic.qr   },
    { id: 'msg',  label: 'Сообщения',icon: ic.msg  },
    { id: 'srv',  label: 'Сервисы',  icon: ic.menu },
  ];
  return `
    <div class="bottom-nav">
      <div class="nav-grid">
        ${items.map(i => `
          <button class="nav-item ${active === i.id ? 'active' : ''}" ${i.id === 'home' ? 'data-nav="home"' : ''}>
            ${i.icon}<span>${i.label}</span>
          </button>`).join('')}
      </div>
      <div class="home-bar"></div>
    </div>`;
}

/* HOME */
function homeScreen() {
  return `
    <div class="screen" style="background:#fff;overflow-y:auto;">
      ${statusBar()}

      <!-- ПОИСК -->
      <div style="padding:10px 14px 8px;background:#fff;">
        <div class="search-row">
          <div class="search-box">${ic.search}<span>Поиск по Kaspi.kz</span></div>
          <button class="cart-btn">${ic.cart}</button>
        </div>
      </div>

      <!-- БАННЕРЫ -->
      <div class="h-banners">
        <div class="h-banner h-banner-shop">
          <div class="h-banner-text">
            <div class="h-banner-title">Бытовая<br>техника<br>и электроника</div>
            <div class="h-banner-btn">Купить</div>
          </div>
          <div class="h-banner-label">Магазин на Kaspi.kz</div>
        </div>
        <div class="h-banner h-banner-travel">
          <div class="h-banner-text">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e74a3b" stroke-width="2"><rect x="5" y="7" width="14" height="11" rx="2"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg>
              <span style="font-weight:800;font-size:14px;color:#1a1a1a;">Kaspi Travel</span>
            </div>
            <div class="h-banner-title" style="color:#1a1a1a;">Авиа<br>и ЖД билеты</div>
            <div class="h-banner-btn" style="background:#e74a3b;">Купить</div>
          </div>
          <div class="h-banner-label" style="background:#e74a3b;">Kaspi Travel</div>
        </div>
      </div>

      <!-- СЕТКА МЕНЮ -->
      <div class="h-grid-menu">
        <!-- ряд 1 -->
        <button class="h-menu-item">
          <div class="h-menu-icon" style="color:#e74a3b;">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.7L23 6H6"/></svg>
          </div>
          <span>Магазин</span>
        </button>
        <button class="h-menu-item">
          <div class="h-menu-icon" style="color:#e74a3b;">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/><rect x="13" y="13" width="5" height="5" rx="1"/></svg>
          </div>
          <span>Мой Банк</span>
        </button>
        <button class="h-menu-item">
          <div class="h-menu-icon" style="color:#e74a3b;">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg>
          </div>
          <span>Платежи</span>
        </button>
        <button class="h-menu-item" data-nav="transfer">
          <div class="h-menu-icon" style="color:#e74a3b;">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 7h12"/><path d="m15 3 4 4-4 4"/><path d="M17 17H5"/><path d="m9 13-4 4 4 4"/></svg>
          </div>
          <span>Переводы</span>
        </button>

        <!-- ряд 2 -->
        <button class="h-menu-item">
          <div class="h-menu-icon">
            <div style="width:38px;height:38px;background:#d81b60;border-radius:12px;display:flex;align-items:center;justify-content:center;">
              <span style="color:#fff;font-weight:900;font-size:18px;font-style:italic;">m</span>
            </div>
          </div>
          <span>Magnum</span>
        </button>
        <button class="h-menu-item">
          <div class="h-menu-icon" style="color:#e74a3b;">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="7" width="14" height="11" rx="2"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/><path d="M8 12h8"/></svg>
          </div>
          <span>Travel</span>
        </button>
        <button class="h-menu-item" data-nav="gov">
          <div class="h-menu-icon" style="color:#e74a3b;">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M4 21V10M20 21V10M12 3 4 10h16z"/><rect x="9" y="14" width="6" height="7"/></svg>
          </div>
          <span>Госуслуги</span>
        </button>
        <button class="h-menu-item">
          <div class="h-menu-icon" style="color:#e74a3b;">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><circle cx="16" cy="14" r="2.5"/><path d="m18.5 16.5 2 2"/></svg>
          </div>
          <span>Работа</span>
        </button>
      </div>

      <!-- ПРОМО КАРТОЧКИ -->
      <div class="h-promo-wrap">
        <div class="h-promo-row">
          <div class="h-promo-card">
            <div class="h-promo-badge" style="background:#e74a3b;font-size:11px;font-weight:900;letter-spacing:-0.5px;">KREDIT</div>
            <div>
              <div class="h-promo-title">Кредит на Покупки</div>
              <div class="h-promo-sub">Кредит или Рассрочка 0%</div>
            </div>
          </div>
          <div class="h-promo-card">
            <div class="h-promo-badge" style="background:#f5c800;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><circle cx="12" cy="12" r="8"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <div>
              <div class="h-promo-title">Kaspi Депозит</div>
              <div class="h-promo-sub">до 21% годовых</div>
            </div>
          </div>
        </div>
        <div class="h-promo-row">
          <div class="h-promo-card">
            <div class="h-promo-badge" style="background:#e74a3b;font-size:10px;font-weight:900;">0·0·12</div>
            <div>
              <div class="h-promo-title">Рассрочка 0-0-12</div>
            </div>
          </div>
          <div class="h-promo-card">
            <div class="h-promo-badge" style="background:#4caf50;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M7 7h12"/><path d="m15 3 4 4-4 4"/><path d="M17 17H5"/><path d="m9 13-4 4 4 4"/></svg>
            </div>
            <div>
              <div class="h-promo-title">Кредиты</div>
              <div class="h-promo-sub">до 2,2 млн</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ФИЛЬТРЫ -->
      <div class="h-filters">
        <button class="h-filter active">Рекомендации</button>
        <button class="h-filter"><span>🏷</span> Скидки</button>
        <button class="h-filter"><span>🔥</span> Туры</button>
        <button class="h-filter"><span style="color:#d81b60;font-weight:900;font-style:italic;">m</span> Magnum</button>
      </div>

      <!-- ТОВАРЫ -->
      <div class="h-products">
        <div class="h-product-card">
          <div class="h-product-img" style="background:linear-gradient(135deg,#1a1a1a,#3a3a3a);">
            <div class="h-discount">-15%</div>
            <div class="h-heart">♡</div>
          </div>
          <div class="h-product-info">
            <div class="h-product-name">Планшет с клавиатурой</div>
            <div class="h-product-price">89 990 ₸</div>
            <div class="h-product-old">105 900 ₸</div>
          </div>
        </div>
        <div class="h-product-card">
          <div class="h-product-img" style="background:linear-gradient(135deg,#b8b8b8,#e0e0e0);">
            <div class="h-heart">♡</div>
          </div>
          <div class="h-product-info">
            <div class="h-product-name">Электрическая бритва Xiaomi</div>
            <div class="h-product-price">24 990 ₸</div>
          </div>
        </div>
        <div class="h-product-card">
          <div class="h-product-img" style="background:linear-gradient(135deg,#2196f3,#64b5f6);">
            <div class="h-heart">♡</div>
          </div>
          <div class="h-product-info">
            <div class="h-product-name">Наушники беспроводные</div>
            <div class="h-product-price">12 500 ₸</div>
          </div>
        </div>
        <div class="h-product-card">
          <div class="h-product-img" style="background:linear-gradient(135deg,#ff9800,#ffcc02);">
            <div class="h-heart">♡</div>
          </div>
          <div class="h-product-info">
            <div class="h-product-name">Умная колонка</div>
            <div class="h-product-price">8 990 ₸</div>
          </div>
        </div>
      </div>

      ${bottomNav('home')}
    </div>`;
}

/* TRANSFER */
function transferScreen() {
  const rows = [
    { title: 'Между своими счетами', sub: '', icon: 'cycle' },
    { title: 'Клиенту Kaspi', sub: 'На карту Kaspi Gold', icon: 'userMoney' },
    { title: 'Карта другого банка', sub: 'С карты на карту', icon: 'cards' },
    { title: 'Международные переводы', sub: 'По номеру карты или телефона', icon: 'globe' },
    { title: 'Kaspi QR', sub: 'Сканируйте и платите', icon: 'qr' },
  ];
  return `
    <div class="inner-screen">
      ${statusBar()}
      <div class="page-header">
        <button class="back-btn" data-nav="home">${ic.back}</button>
        <div class="page-title">Переводы</div>
      </div>
      <div class="seg-tabs">
        <button class="seg-tab active">Мои Переводы</button>
        <button class="seg-tab">История</button>
      </div>
      <div class="list-section">
        ${rows.map(r => `
          <button class="list-item">
            <div class="list-icon">${ic[r.icon]}</div>
            <div class="list-text">
              <div class="list-title">${r.title}</div>
              ${r.sub ? `<div class="list-subtitle">${r.sub}</div>` : ''}
            </div>
            <span class="list-chev">${ic.chev}</span>
          </button>`).join('')}
      </div>
      ${bottomNav('home')}
    </div>`;
}

/* GOV */
function govScreen() {
  const cats = [
    { label: 'Популярные', emoji: '📣', active: true },
    { label: 'Справки', emoji: '📋' },
    { label: 'Авто', emoji: '🚗' },
    { label: 'Жилье', emoji: '🏠' },
    { label: 'Семья', emoji: '🧸' },
  ];
  const services = [
    { title: 'Стать самозанятым', sub: 'Открыть счет и начать принимать оплату в Kaspi.kz' },
    { title: 'Изменение реквизитов и налогового режима ИП', sub: '' },
    { title: 'Замена техпаспорта', sub: 'При смене госномера, потере' },
  ];
  return `
    <div class="inner-screen">
      ${statusBar()}
      <div class="page-header">
        <button class="back-btn" data-nav="home">${ic.back}</button>
        <div class="page-title">Госуслуги</div>
      </div>
      <div class="seg-tabs">
        <button class="seg-tab active" data-nav="govservices">Все услуги</button>
        <button class="seg-tab">Мои заявки</button>
      </div>
      <div class="gov-search">
        <div class="search-box">${ic.search}<span>Поиск по Госуслугам</span></div>
      </div>
      <div class="docs-strip">
        <div class="docs-grid">
          <div class="doc-card" data-nav="idcard" style="cursor:pointer;">
            <div class="doc-illu"></div>
            <div class="doc-name">Удостоверение<br>личности</div>
          </div>
          <div class="doc-card">
            <div class="doc-illu blue">${ic.student}</div>
            <div class="doc-name">Студенческий<br>билет</div>
          </div>
        </div>
        <div class="docs-link">Все документы <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg></div>
      </div>
      <div class="cat-tabs">
        ${cats.map(c => `
          <button class="cat-item ${c.active ? 'active' : ''}">
            <div class="cat-emoji">${c.emoji}</div>
            <span>${c.label}</span>
          </button>`).join('')}
      </div>
      <div style="font-size:18px;font-weight:700;color:#1f1f24;padding:16px 16px 8px;background:#fff;">Популярные и новые</div>
      <div class="gov-list">
        ${services.map(s => `
          <button class="gov-item">
            <div class="list-icon">${ic.userMoney}</div>
            <div class="list-text">
              <div class="list-title">${s.title}</div>
              ${s.sub ? `<div class="list-subtitle">${s.sub}</div>` : ''}
            </div>
            <span class="new-badge">NEW</span>
            <span class="list-chev">${ic.chev}</span>
          </button>`).join('')}
      </div>
      ${bottomNav('home')}
    </div>`;
}

/* ID CARD */
function generateBarcode() {
  const pattern = [2,1,3,1,2,1,1,2,1,3,2,1,1,3,1,2,1,1,2,3,1,1,3,2,1,1,2,1,3,1,2,3,1,1,2,1,1,3,2,1,3,1,1,2,3,1,2,1];
  const bars = [];
  let x = 0;
  pattern.forEach((w, i) => {
    if (i % 2 === 0) bars.push(`<rect x="${x}" y="0" width="${w * 1.2}" height="30" fill="#111"/>`);
    x += w * 1.2;
  });
  const total = x;
  return `<svg viewBox="0 0 ${total} 30" style="width:100%;height:32px;">${bars.join('')}</svg>`;
}

function idCardScreen() {
  const photo = state.idPhoto;
  const isDoc = state.idTab === 'doc';

  const photoInner = photo
    ? `<img src="${photo}" style="width:100%;height:100%;object-fit:cover;display:block;" />`
    : `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:5px;color:#7a9a6a;background:#e8f0e0;">
        ${ic.camera}
        <span style="font-size:9px;font-weight:700;text-align:center;line-height:1.3;">ЗАГРУЗИТЬ<br>ФОТО</span>
       </div>`;

  return `
    <div class="inner-screen" style="background:#f0f0f3;">
      ${statusBar()}
      <div class="page-header" style="background:#f0f0f3;border-bottom:none;">
        <button class="back-btn" data-nav="gov">${ic.back}</button>
        <div class="page-title">Удостоверение личности</div>
      </div>

      <div class="seg-tabs" style="margin:8px 16px 16px;">
        <button class="seg-tab ${isDoc ? 'active' : ''}" id="tabDoc">Документ</button>
        <button class="seg-tab ${!isDoc ? 'active' : ''}" id="tabReq">Реквизиты</button>
      </div>

      <!-- ══ FRONT CARD ══ -->
      <div class="id-card id-front" style="margin:0 16px 10px;">
        <div class="id-header-row">
          <div class="id-header-kz">ҚАЗАҚСТАН РЕСПУБЛИКАСЫ<br>ЖЕКЕ КУӘЛІК</div>
          <div class="id-coat-arms">
            <svg viewBox="0 0 40 40" width="34" height="34">
              <circle cx="20" cy="20" r="18" fill="#c8a833" stroke="#a88820" stroke-width="1"/>
              <circle cx="20" cy="20" r="14" fill="#e8c84a" stroke="#c8a833" stroke-width="0.5"/>
              <text x="20" y="25" text-anchor="middle" font-size="16" fill="#1a5c1a">☀</text>
            </svg>
          </div>
          <div class="id-header-ru">РЕСПУБЛИКА КАЗАХСТАН<br>УДОСТОВЕРЕНИЕ ЛИЧНОСТИ</div>
        </div>

        <div class="id-body-row">
          <!-- Photo clickable -->
          <div class="id-photo-box" id="photoArea" style="cursor:pointer;">
            ${photoInner}
            <input type="file" id="photoInput" accept="image/*" capture="user" style="display:none;" />
          </div>

          <!-- Text fields -->
          <div class="id-fields-col">
            <div class="id-lbl">ТЕГ / ФАМИЛИЯ</div>
            <div class="id-val">ТӨЛЕГЕНҰЛЫ</div>

            <div class="id-lbl" style="margin-top:6px;">АТЫ / ИМЯ</div>
            <div class="id-val">ТЛЕГЕН</div>

            <div class="id-lbl" style="margin-top:6px;">ТУҒАН КУН / ДАТА РОЖДЕНИЯ</div>
            <div class="id-val">18.09.2006</div>
          </div>
        </div>

        <div class="id-iin-row">ЖСН/ИИН &nbsp;&nbsp; 060918551900</div>
      </div>

      <!-- ══ BACK CARD ══ -->
      <div class="id-card id-back" style="margin:0 16px 16px;">
        <div class="id-back-toprow">
          <div class="id-barcode-wrap">${generateBarcode()}</div>
          <div style="font-size:18px;line-height:1;">🇰🇿</div>
          <div class="id-backnum">053836136</div>
        </div>

        <div class="id-back-body">
          <!-- Chip -->
          <div class="id-chip">
            <div class="chip-h"></div>
            <div class="chip-row"><div></div><div></div><div></div></div>
            <div class="chip-h"></div>
          </div>

          <!-- Back fields -->
          <div class="id-back-fields">
            <div class="id-lbl">ТУҒАН ЖЕРІ / МЕСТО РОЖДЕНИЯ</div>
            <div class="id-val">АҚМОЛА ОБЛЫСЫ</div>
            <div class="id-lbl" style="margin-top:5px;">ҰЛТ / НАЦИОНАЛЬНОСТЬ</div>
            <div class="id-val">ҚАЗАҚ</div>
            <div class="id-lbl" style="margin-top:5px;">БЕРГЕН ОРГАН / ОРГАН ВЫДАЧИ</div>
            <div class="id-val" style="font-size:8.5px;">КР ІШКІ ІСТЕР МИНИСТРЛІГІ</div>
            <div class="id-lbl" style="margin-top:5px;">БЕРІЛГЕН КУН · ҚОЛДАНЫЛУ МЕРЗІМІ</div>
            <div class="id-val">26.09.2022 – 25.09.2032</div>
          </div>
        </div>

        <!-- MRZ -->
        <div class="id-mrz">
          <div>&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
          <div>TOLEGENULY&lt;&lt;TLEGEN&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
          <div>&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
        </div>
      </div>

      <!-- ACTIONS -->
      <div class="id-actions">
        <button class="id-btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="3" height="3"/><path d="M21 14h-3M21 21v-3h-4M17 21h-3"/></svg>
          Предъявить документ
        </button>
        <button class="id-btn-secondary">
          ${ic.share}
          Отправить документ
        </button>
      </div>

      ${bottomNav('home')}
    </div>`;
}

/* RENDER */
function render() {
  let content;
  switch (state.screen) {
    case 'transfer': content = transferScreen(); break;
    case 'gov':      content = govScreen();      break;
    case 'govservices': content = govServicesScreen(); break;
    case 'digitaldocs': content = digitalDocsScreen(); break;
    case 'idcard':   content = idCardScreen();   break;
    default:         content = homeScreen();
  }
  app.innerHTML = `<div class="shell"><div class="phone">${content}</div></div>`;
  bind();
}

function bind() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      state.screen = el.dataset.nav;
      render();
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  });

  const tabDoc = document.getElementById('tabDoc');
  const tabReq = document.getElementById('tabReq');
  if (tabDoc) {
    tabDoc.addEventListener('click', () => { state.idTab = 'doc'; render(); });
    tabReq.addEventListener('click', () => { state.idTab = 'req'; render(); });
  }

  const photoArea  = document.getElementById('photoArea');
  const photoInput = document.getElementById('photoInput');
  if (photoArea && photoInput) {
    photoArea.addEventListener('click', () => photoInput.click());
    photoInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => { state.idPhoto = ev.target.result; render(); };
      reader.readAsDataURL(file);
    });
  }
}

render();

/* ── GOV SERVICES LIST ───────────────────────────────────────── */
function govServicesScreen() {
  const menuOptions = [
    { title: 'Цифровые документы',                           icon: 'docIcon',    nav: 'digitaldocs' },
    { title: 'Переоформление автомобиля',                    icon: 'carIcon',    nav: null },
    { title: 'Замена водительских прав',                     icon: 'licIcon',    nav: null },
    { title: 'Получение свидетельства о рождении',           icon: 'babyIcon',   nav: null },
    { title: 'Пособия и выплаты',                            icon: 'moneyIcon',  nav: null },
    { title: 'Получать пособия на Социальный счет',          icon: 'bankIcon',   nav: null },
    { title: 'Зарегистрировать ИП',                          icon: 'bizIcon',    nav: null },
    { title: 'Изменить реквизиты ИП',                        icon: 'editIcon',   nav: null },
    { title: 'Социальный счёт',                              icon: 'personIcon', nav: null },
    { title: 'Статус ОСМС',                                  icon: 'healthIcon', nav: null },
  ];
  return `
    <div class="inner-screen">
      ${statusBar()}
      <div class="page-header">
        <button class="back-btn" data-nav="gov">${ic.back}</button>
        <div class="page-title">Госуслуги, штрафы, налоги</div>
      </div>
      <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #f0f0f0;">
        <div class="search-box" style="height:44px;border-radius:12px;background:#f0f0f2;">
          ${ic.search}<span style="color:#9a9aa0;font-size:16px;">Поиск по Госуслугам</span>
        </div>
      </div>
      <div style="background:#fff;">
        ${menuOptions.map(item => `
          <button class="gov-list-row" ${item.nav ? `data-nav="${item.nav}"` : ''}>
            <div class="gov-list-icon">${ic[item.icon]}</div>
            <div class="list-text"><div class="list-title">${item.title}</div></div>
            <span style="color:#c8c8ce;">${ic.chev}</span>
          </button>`).join('')}
      </div>
      ${bottomNav('home')}
    </div>`;
}

/* ── DIGITAL DOCS SCREEN ─────────────────────────────────────── */
function digitalDocsScreen() {
  const docs = [
    { title: 'Удостоверение личности', icon: 'licIcon',    nav: 'idcard' },
    { title: 'Паспорт гражданина РК',  icon: 'docIcon',    nav: null },
    { title: 'Справки',                icon: 'healthIcon', nav: null },
  ];
  return `
    <div class="inner-screen">
      ${statusBar()}
      <div class="page-header" style="box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <button class="back-btn" data-nav="govservices">${ic.back}</button>
        <div class="page-title">Цифровые документы</div>
      </div>
      <div style="background:#f5f5f7;padding:12px 16px 10px;">
        <span style="font-size:14px;color:#1f1f24;">Не нашли нужный документ? </span>
        <span style="font-size:14px;color:#1283c0;">Обновить документы</span>
      </div>
      <div style="background:#fff;padding:14px 16px 8px;font-size:18px;font-weight:700;color:#1f1f24;border-bottom:1px solid #f0f0f0;">
        Мои документы
      </div>
      <div style="background:#fff;">
        ${docs.map(d => `
          <button class="gov-list-row" ${d.nav ? `data-nav="${d.nav}"` : ''}>
            <div class="gov-list-icon">${ic[d.icon]}</div>
            <div class="list-text"><div class="list-title">${d.title}</div></div>
            <span style="color:#c8c8ce;">${ic.chev}</span>
          </button>`).join('')}
      </div>
      ${bottomNav('home')}
    </div>`;
}
