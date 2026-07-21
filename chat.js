/**
 * Live chat widget (Crisp) — BUG-060.
 *
 * Chosen over click-to-text for this audience: the visitor is a wedding
 * videographer evaluating a MAC app, sitting at the machine they'd install it
 * on. A `sms:` link asks them to pick up a second device; a chat bubble is one
 * click in the window they are already in. It also sidesteps A2P/10DLC brand +
 * campaign registration entirely (carriers have blocked 100% of unregistered
 * A2P since Feb 2025), which automated SMS would require before a single send.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * SETUP — one value, one place.
 *
 *   1. Create a free workspace at https://crisp.chat (Free tier: 2 seats,
 *      unlimited conversations — enough for current volume).
 *   2. Settings → Website Settings → Setup instructions → copy the Website ID
 *      (a UUID that looks like `8e4f2a1b-....`).
 *   3. Paste it into CRISP_WEBSITE_ID below. That is the whole install.
 *
 * UNTIL THAT ID IS SET THIS FILE IS INERT: it loads nothing, renders nothing,
 * and contacts no third party. Deploying it before the account exists is safe
 * and changes the site not at all.
 * ─────────────────────────────────────────────────────────────────────────────
 */
(function () {
  var CRISP_WEBSITE_ID = '65c9e5f6-369c-42d4-9d4b-4c53060c3ab4';  // ← paste the Crisp Website ID here to switch chat on

  if (!CRISP_WEBSITE_ID) return;  // not configured — stay completely inert

  window.$crisp = [];
  window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

  var s = document.createElement('script');
  s.src = 'https://client.crisp.chat/l.js';
  s.async = true;
  document.head.appendChild(s);
})();
