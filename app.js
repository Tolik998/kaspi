'use strict';

const app = document.getElementById('app');

const state = {
  screen: 'home',
  idPhoto: null,
  idTab: 'doc',
};

const ic = {
  back: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m15 18-6-6 6-6"/></svg>`,
};

/* STATUS BAR */
function statusBar() {
  return `<div style="height:44px;background:#fff;"></div>`;
}

/* HOME */
function homeScreen() {
  return `
    <div style="position:relative;width:100%;background:#fff;">
      <img src="${IMG_HOME}" style="width:100%;display:block;" />
      <button data-nav="transfer" style="position:absolute;top:26%;left:75%;width:25%;height:8%;background:transparent;border:none;"></button>
      <button data-nav="gov" style="position:absolute;top:34%;left:50%;width:25%;height:8%;background:transparent;border:none;"></button>
    </div>`;
}

/* TRANSFER */
function transferScreen() {
  return `
    <div style="position:relative;">
      <button data-nav="home" style="position:absolute;top:4%;left:2%;width:10%;height:4%;background:transparent;border:none;z-index:10;"></button>
      <img src="${IMG_TRANSFER}" style="width:100%;" />
    </div>`;
}

/* GOV */
function govScreen() {
  return `
    <div style="position:relative;background:#f5f5f7;">
      <button data-nav="home" style="position:absolute;top:4%;left:2%;width:10%;height:4%;background:transparent;border:none;z-index:10;"></button>
      <img src="${IMG_GOV}" style="width:100%;" />
      <button data-nav="idcard" style="position:absolute;top:26%;left:2%;width:46%;height:16%;background:transparent;border:none;"></button>
    </div>`;
}

/* ID CARD */
function idCardScreen() {
  const isDoc = state.idTab === 'doc';

  return `
    <div style="background:#fff;min-height:100vh;display:flex;flex-direction:column;">
      ${statusBar()}

      <div style="display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid #eee;">
        <button data-nav="gov">${ic.back}</button>
        <div style="margin-left:10px;font-weight:600;">Удостоверение личности</div>
      </div>

      <div style="display:flex;margin:10px;">
        <button id="tabDoc" style="flex:1;">Документ</button>
        <button id="tabReq" style="flex:1;">Реквизиты</button>
      </div>

      ${
        isDoc
          ? `
      <div style="padding:16px;">
        <div id="photoArea" style="width:100%;aspect-ratio:3/4;background:#ccc;border-radius:10px;display:flex;align-items:center;justify-content:center;">
          ${
            state.idPhoto
              ? `<img src="${state.idPhoto}" style="width:100%;height:100%;object-fit:cover;" />`
              : `<span>Загрузите удостоверение</span>`
          }
          <input type="file" id="photoInput" style="display:none;" />
        </div>
      </div>

      <div style="padding:16px;">
        <button id="presentBtn" style="width:100%;height:54px;background:#2c63d5;color:#fff;border:none;border-radius:14px;font-weight:600;margin-top:-6px;">
          Предъявить документ
        </button>
      </div>

      <!-- QR MODAL -->
      <div id="qrModal" style="display:none;position:fixed;inset:0;z-index:100;">
        <div id="qrOverlay" style="position:absolute;inset:0;background:rgba(0,0,0,0.4);"></div>

        <div style="
          position:absolute;
          bottom:0;
          left:50%;
          transform:translateX(-50%);
          width:min(100%,393px);
          background:#fff;
          border-radius:20px 20px 0 0;
          padding:20px;
          text-align:center;
        ">

          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div style="font-weight:600;">Удостоверение личности</div>
            <button id="closeQr" style="background:none;border:none;font-size:22px;">✕</button>
          </div>

          <div style="margin:10px 0;color:#555;">
            Покажите QR-код сотруднику
          </div>

          <img src="${IMG_QR}" style="width:180px;margin:0 auto;" />

          <div style="margin-top:10px;color:#666;">или скажите код</div>
          <div style="font-size:22px;font-weight:700;">998574</div>
        </div>
      </div>
      `
          : `<div style="padding:20px;">Реквизиты</div>`
      }
    </div>
  `;
}

/* RENDER */
function render() {
  let content;

  switch (state.screen) {
    case 'transfer':
      content = transferScreen();
      break;
    case 'gov':
      content = govScreen();
      break;
    case 'idcard':
      content = idCardScreen();
      break;
    default:
      content = homeScreen();
  }

  app.innerHTML = content;
  bind();
}

/* BIND */
function bind() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.onclick = () => {
      state.screen = el.dataset.nav;
      render();
    };
  });

  const presentBtn = document.getElementById('presentBtn');
  const qrModal = document.getElementById('qrModal');
  const qrOverlay = document.getElementById('qrOverlay');
  const closeQr = document.getElementById('closeQr');

  if (presentBtn) {
    presentBtn.onclick = () => {
      qrModal.style.display = 'block';
    };
  }

  if (qrOverlay) {
    qrOverlay.onclick = () => {
      qrModal.style.display = 'none';
    };
  }

  if (closeQr) {
    closeQr.onclick = () => {
      qrModal.style.display = 'none';
    };
  }

  const photoArea = document.getElementById('photoArea');
  const photoInput = document.getElementById('photoInput');

  if (photoArea && photoInput) {
    photoArea.onclick = () => photoInput.click();

    photoInput.onchange = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = ev => {
        state.idPhoto = ev.target.result;
        render();
      };
      reader.readAsDataURL(file);
    };
  }
}

render();
