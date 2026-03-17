'use strict';

const app = document.getElementById('app');
const state = {
  screen: 'home',
  idPhoto: null,
  idTab: 'doc',
};

const ic = {
  search:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  home:      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h5v-5h4v5h5V9.5"/></svg>`,
  qr:        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="3" height="3"/><path d="M21 14h-3M21 21v-3h-4M17 21h-3"/></svg>`,
  msg:       `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  menu:      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  back:      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m15 18-6-6 6-6"/></svg>`,
  chev:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>`,
  share:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`,
  camera:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  cycle:     `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12a7 7 0 0 1 12-4"/><path d="M15 3v5h-5"/><path d="M21 12a7 7 0 0 1-12 4"/><path d="M9 21v-5h5"/></svg>`,
  userMoney: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h5"/><circle cx="19" cy="17" r="3"/><path d="M19 14v6M16 17h6"/></svg>`,
  cards:     `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="14" height="10" rx="2"/><rect x="8" y="8" width="14" height="10" rx="2"/><path d="M2 10h14"/></svg>`,
  globe:     `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>`,
};

function statusBar() {
  return `<div style="height:44px;background:#fff;"></div>`;
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
    <div style="position:relative;width:100%;background:#fff;">
      <img src="${IMG_HOME}" style="width:100%;display:block;" />
      <button data-nav="transfer" style="position:absolute;top:28%;left:75%;width:25%;height:8%;background:transparent;border:none;cursor:pointer;"></button>
      <button data-nav="gov" style="position:absolute;top:36%;left:50%;width:25%;height:8%;background:transparent;border:none;cursor:pointer;"></button>
    </div>`;
}

/* TRANSFER */
function transferScreen() {
  return `
    <div style="position:relative;width:100%;background:#fff;">
      <button data-nav="home" style="position:absolute;top:4%;left:2%;width:10%;height:4%;background:transparent;border:none;cursor:pointer;z-index:10;"></button>
      <img src="${IMG_TRANSFER}" style="width:100%;display:block;" />
    </div>`;
}

/* GOV */
function govScreen() {
  return `
    <div style="position:relative;width:100%;background:#f5f5f7;">
      <button data-nav="home" style="position:absolute;top:4%;left:2%;width:10%;height:4%;background:transparent;border:none;cursor:pointer;z-index:10;"></button>
      <img src="${IMG_GOV}" style="width:100%;display:block;" />
      <button data-nav="idcard" style="position:absolute;top:28%;left:2%;width:46%;height:16%;background:transparent;border:none;cursor:pointer;"></button>
    </div>`;
}

/* ID CARD */
function idCardScreen() {
  const isDoc = state.idTab === 'doc';
  const photo = state.idPhoto;

  const photoContent = photo
    ? `<img id="zoomImg" src="${photo}" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;transform-origin:center center;" />`
    : `<div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
        <span style="font-size:15px;color:#999;text-align:center;line-height:1.6;">Загрузите<br>удостоверение</span>
       </div>`;

  const fields = [
    { label: 'ФИО',             key: 'fio',  placeholder: 'Введите ФИО' },
    { label: 'ИИН',             key: 'iin',  placeholder: 'Введите ИИН' },
    { label: 'Дата рождения',   key: 'dob',  placeholder: 'Введите Др' },
    { label: 'Номер документа', key: 'docn', placeholder: 'Введите Нд' },
    { label: 'Дата выдачи',     key: 'dov',  placeholder: 'Введите Дв' },
    { label: 'Срок действия',   key: 'exp',  placeholder: 'Введите Сд' },
  ];

  const docTab = `
    <div style="flex:1;padding:0 16px;display:flex;flex-direction:column;justify-content:center;">
      <div id="photoArea" style="width:100%;aspect-ratio:3/4;background:#c8c8cc;position:relative;overflow:hidden;cursor:pointer;touch-action:none;border-radius:8px;">
        ${photoContent}
        <input type="file" id="photoInput" accept="image/*" capture="user" style="display:none;" />
      </div>
    </div>
    <div style="padding:14px 16px 28px;background:#fff;flex:0 0 auto;display:flex;flex-direction:column;gap:10px;">
      <button class="id-btn-primary" id="presentBtn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="3" height="3"/><path d="M21 14h-3M21 21v-3h-4M17 21h-3"/></svg>
        Предъявить документ
      </button>
      <button class="id-btn-secondary">${ic.share} Отправить документ</button>
    </div>

    <!-- QR MODAL -->
    <div id="qrModal" style="display:none;position:fixed;bottom:0;left:0;right:0;top:0;z-index:100;">
      <div id="qrOverlay" style="position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.4);"></div>
      <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:min(100%,393px);border-radius:20px 20px 0 0;overflow:hidden;">
        <img src="${IMG_QR}" style="width:100%;display:block;" />
      </div>
    </div>`;

  const reqTab = `
    <div style="flex:1;padding:0 16px;overflow-y:auto;">
      ${fields.map(f => `
        <div style="padding:14px 0;border-bottom:1px solid #ebebeb;">
          <div style="font-size:12px;color:#aaa;margin-bottom:4px;">${f.label}</div>
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <input type="text" id="req_${f.key}" placeholder="${f.placeholder}"
              style="flex:1;border:none;background:transparent;font-size:17px;color:#1f1f24;outline:none;font-family:inherit;" />
            <button onclick="navigator.clipboard&&navigator.clipboard.writeText(document.getElementById('req_${f.key}').value)"
              style="background:transparent;border:none;padding:4px;color:#bbb;cursor:pointer;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
          </div>
        </div>`).join('')}
    </div>
    <div style="padding:14px 16px 28px;background:#fff;flex:0 0 auto;">
      <button class="id-btn-secondary" style="width:100%;height:54px;border-radius:14px;border:1.5px solid #2c63d5;color:#2c63d5;font-size:17px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:10px;background:#fff;">
        ${ic.share} Отправить реквизиты
      </button>
    </div>`;

  return `
    <div style="background:#fff;min-height:100vh;display:flex;flex-direction:column;">
      ${statusBar()}
      <div class="page-header" style="background:#fff;border-bottom:1px solid #f0f0f0;flex:0 0 auto;">
        <button class="back-btn" data-nav="gov">${ic.back}</button>
        <div class="page-title">Удостоверение личности</div>
      </div>
      <div class="seg-tabs" style="margin:10px 16px;flex:0 0 auto;">
        <button class="seg-tab ${isDoc ? 'active' : ''}" id="tabDoc">Документ</button>
        <button class="seg-tab ${!isDoc ? 'active' : ''}" id="tabReq">Реквизиты</button>
      </div>
      ${isDoc ? docTab : reqTab}
    </div>`;
}

/* RENDER */
function render() {
  let content;
  switch (state.screen) {
    case 'transfer': content = transferScreen(); break;
    case 'gov':      content = govScreen();      break;
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

  // Фото
  const photoArea  = document.getElementById('photoArea');
  const photoInput = document.getElementById('photoInput');
  if (photoArea && photoInput) {
    photoArea.addEventListener('click', () => { if (!state.idPhoto) photoInput.click(); });
    photoInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => { state.idPhoto = ev.target.result; render(); };
      reader.readAsDataURL(file);
    });
  }

  // QR модалка
  const presentBtn = document.getElementById('presentBtn');
  const qrModal    = document.getElementById('qrModal');
  const qrOverlay  = document.getElementById('qrOverlay');
  if (presentBtn && qrModal) {
    presentBtn.addEventListener('click', () => {
      qrModal.style.display = 'block';
    });
    const closeModal = () => { qrModal.style.display = 'none'; };
    qrOverlay.addEventListener('click', closeModal);
  }

  // Pinch-to-zoom
  const zoomImg  = document.getElementById('zoomImg');
  const pArea    = document.getElementById('photoArea');
  if (zoomImg && pArea) {
    let scale = 1, lastScale = 1, startDist = 0;
    pArea.addEventListener('touchstart', e => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        startDist = Math.hypot(dx, dy);
        lastScale = scale;
      }
    }, { passive: false });
    pArea.addEventListener('touchmove', e => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        scale = Math.min(Math.max(lastScale * (Math.hypot(dx, dy) / startDist), 1), 5);
        zoomImg.style.transform = `scale(${scale})`;
      }
    }, { passive: false });
    pArea.addEventListener('touchend', () => {
      lastScale = scale;
      if (scale < 1.05) { scale = 1; zoomImg.style.transform = 'scale(1)'; }
    });
    let lastTap = 0;
    pArea.addEventListener('touchend', () => {
      const now = Date.now();
      if (now - lastTap < 300) {
        scale = 1;
        zoomImg.style.transform = 'scale(1)';
        zoomImg.style.transition = 'transform 0.2s';
        setTimeout(() => zoomImg.style.transition = '', 200);
      }
      lastTap = now;
    });
  }
}

render();
