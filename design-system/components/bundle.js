/* @ds-bundle: {"format":4,"namespace":"Catedra","components":[{"name":"Button"},{"name":"Badge"},{"name":"Field"},{"name":"Feedback"},{"name":"Stat"}]} */
(function () {
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  var uid = 0;

  function Button(p) {
    p = p || {};
    var b = el(p.href ? 'a' : 'button', 'cat-btn cat-btn-' + (p.variant || 'primary'), p.label || '');
    if (p.href) b.href = p.href; else b.type = p.type || 'button';
    if (p.disabled) b.disabled = true;
    if (p.onClick) b.addEventListener('click', p.onClick);
    return b;
  }

  var BADGE_TONE = { correcta: 'correct', parcial: 'partial', incorrecta: 'incorrect' };
  function Badge(p) {
    p = p || {};
    var tone = p.tone || BADGE_TONE[(p.label || '').toLowerCase()] || 'neutral';
    return el('span', 'cat-badge' + (tone === 'neutral' ? '' : ' cat-badge-' + tone), p.label || '');
  }

  function Field(p) {
    p = p || {};
    var id = p.id || 'cat-field-' + (++uid);
    var w = el('div', 'cat-field' + (p.error ? ' cat-field-invalid' : ''));
    var l = el('label', 'cat-field-label', p.label || ''); l.htmlFor = id; w.appendChild(l);
    var multi = p.multiline || p.code;
    var i = el(multi ? 'textarea' : 'input', 'cat-input' + (p.code ? ' cat-input-code' : ''));
    i.id = id;
    if (p.placeholder) i.placeholder = p.placeholder;
    if (p.value != null) i.value = p.value;
    if (p.code) i.spellcheck = false;
    var desc = [];
    if (p.hint) { var h = el('span', 'cat-field-hint', p.hint); h.id = id + '-hint'; desc.push(h.id); w.appendChild(i); w.appendChild(h); }
    else w.appendChild(i);
    if (p.error) { var e = el('span', 'cat-field-error', p.error); e.id = id + '-err'; desc.push(e.id); i.setAttribute('aria-invalid', 'true'); w.appendChild(e); }
    if (desc.length) i.setAttribute('aria-describedby', desc.join(' '));
    return w;
  }

  var VERDICT = { correcta: ['correct', 'Correcta'], parcial: ['partial', 'Parcial'], incorrecta: ['incorrect', 'Incorrecta'] };
  function Feedback(p) {
    p = p || {};
    var tip = p.verdict === 'consejo';
    var v = VERDICT[p.verdict];
    var box = el('section', 'cat-feedback ' + (tip ? 'cat-feedback-tip' : v ? 'cat-feedback-' + v[0] : ''));
    var head = el('div', 'cat-feedback-head');
    head.appendChild(el('span', 'cat-feedback-kicker', tip ? 'Consejo' : (p.kicker || 'Feedback de corrección')));
    if (v) head.appendChild(Badge({ label: v[1], tone: v[0] }));
    box.appendChild(head);
    box.appendChild(el('p', 'cat-feedback-text', p.text || ''));
    if (p.meta) box.appendChild(el('span', 'cat-feedback-meta', p.meta));
    return box;
  }

  function Stat(p) {
    p = p || {};
    var w = el('div', 'cat-stat' + (p.alert ? ' cat-stat-alert' : ''));
    w.appendChild(el('span', 'cat-stat-label', p.label || ''));
    var v = el('span', 'cat-stat-value', p.value != null ? String(p.value) : '');
    if (p.of != null) v.appendChild(el('small', null, 'de ' + p.of));
    w.appendChild(v);
    if (p.note) w.appendChild(el('span', 'cat-stat-note', p.note));
    return w;
  }

  window.Catedra = Object.assign(window.Catedra || {}, { Button: Button, Badge: Badge, Field: Field, Feedback: Feedback, Stat: Stat });
})();
