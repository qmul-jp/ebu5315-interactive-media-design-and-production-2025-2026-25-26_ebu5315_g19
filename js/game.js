const translations = {
    en: {
        'btn-lang': 'EN / 中',
        'theme-dark': 'Dark Mode',
        'theme-light': 'Light Mode',
        'audio-on': 'Sound On',
        'audio-off': 'Sound Off',
        'logo-text': 'CircleMaster',
        'nav-home': 'Home',
        'nav-game': 'Game',
        'nav-quiz': 'Quiz',
        'bc-home': 'Home',
        'bc-current': 'Game: Neon Tangent Striker',
        'stage-title': 'Neon Tangent Striker',
        'stage-intro': 'CircleMaster now turns the tangent theorem into a timing challenge. Watch the rotating contact point, read the tangent line, and fire when it slices through the target.',
        'mission-title': 'Prototype Goal',
        'mission-desc': 'This game page keeps the same CircleMaster shell, but replaces the old theorem-chain chamber with a more active shooting loop.',
        'mission-step-1': 'The cyan radius and the pink tangent always meet at a right angle.',
        'mission-step-2': 'Fire when the tangent beam passes through the outer target ring.',
        'mission-step-3': 'Build combo, protect stability, and survive as the orbit speeds up.',
        'target-title': 'Rule Focus',
        'target-note': 'A tangent is perpendicular to the radius at the contact point.',
        'hud-score': 'Score',
        'hud-combo': 'Combo',
        'hud-lives': 'Lives',
        'hud-alignment': 'Alignment',
        'btn-start': 'Start Session',
        'btn-fire': 'Fire Tangent',
        'btn-pause': 'Pause',
        'btn-resume': 'Resume',
        'btn-restart': 'Restart',
        'panel-session': 'Session Status',
        'panel-phase': 'Phase:',
        'panel-score': 'Score:',
        'panel-combo': 'Combo:',
        'panel-lives': 'Lives:',
        'panel-alignment': 'Alignment:',
        'panel-controls': 'Tangent Controls',
        'controls-helper': 'Desktop: press Space to fire and P to pause. Mobile: tap the arena or the Fire Tangent button.',
        'panel-theorem': 'Tangent Theorem',
        'theorem-body': 'The cannon rotates around the circle. Each shot travels along the tangent at the contact point, while the cyan guide shows the matching radius.',
        'play-tip-label': 'Play tip:',
        'play-tip-body': 'Do not aim at the centre of the target. Wait until the beam just grazes the circle and passes through the outer lock.',
        'panel-log': 'Combat Log',
        'log-empty': 'No rounds played yet.',
        'chat-header': 'Circle AI Tutor',
        'chat-ai': 'AI:',
        'chat-welcome': 'Welcome to Neon Tangent Striker. Ask for a hint, the tangent rule, or contact help.',
        'chat-placeholder': 'Ask about tangent timing...',
        'chat-you': 'You:',
        'footer-copy': '© 2026 Group 33. All rights reserved.',
        'footer-data': 'Data Policy',
        'footer-access': 'Accessibility',
        'footer-contact': 'Contact Us',
        'arena-aria-label': 'Neon Tangent Striker arena',
        'msg-ready': 'Press Start Session, then fire when the tangent beam slices through the target.',
        'msg-running': 'Session live. Time the tangent beam so it cuts through the target ring.',
        'msg-paused': 'Session paused. Resume when you are ready to continue the timing challenge.',
        'msg-hit': 'Perfect strike. The tangent line clipped the target cleanly.',
        'msg-miss': 'Missed timing. The beam fired outside the tangent window.',
        'msg-timeout': 'Target window collapsed. Stability lost.',
        'msg-over': 'Session unstable. Restart to continue testing the prototype.',
        'msg-cleared': 'Phase cleared. The next target speeds up the orbit.',
        'log-start-title': 'Session started',
        'log-start-body': 'The turret is rotating. Watch the tangent line rather than the target centre.',
        'log-hit-title': 'Direct tangent hit',
        'log-hit-body': 'Alignment {alignment}%. Combo x{combo}. Score +{scoreGain}.',
        'log-miss-title': 'Shot drifted wide',
        'log-miss-body': 'Alignment only reached {alignment}%. Stability dropped to {lives}.',
        'log-time-title': 'Target expired',
        'log-time-body': 'The countdown ended before the tangent beam connected.',
        'log-phase-title': 'Phase advanced',
        'log-phase-body': 'Orbit speed increased and the target window tightened for phase {phase}.',
        'log-restart-title': 'Prototype reset',
        'log-restart-body': 'Score, combo and lives returned to the initial tuning values.',
        'chat-reply-contact': 'You can contact our team with the footer links or ask here for a tangent tip.',
        'chat-reply-hint': 'Do not aim at the target centre. Fire when the pink beam just grazes the circle and crosses the target ring.',
        'chat-reply-tangent': 'The tangent is perpendicular to the radius exactly at the contact point. That is the key to timing each shot.',
        'chat-reply-default': 'Watch the radius first, then remember the tangent always leaves the circle at 90 degrees.',
        'phase-label': 'Phase {phase}',
        'timer-unit': '{time}s'
    },
    zh: {
        'btn-lang': '中 / EN',
        'theme-dark': '黑夜模式',
        'theme-light': '明亮模式',
        'audio-on': '声音开启',
        'audio-off': '声音关闭',
        'logo-text': '圆几何大师',
        'nav-home': '首页',
        'nav-game': '游戏',
        'nav-quiz': '测验',
        'bc-home': '首页',
        'bc-current': '游戏：霓虹切线射击',
        'stage-title': '霓虹切线射击',
        'stage-intro': 'CircleMaster 现在把切线定理变成了一个时机挑战。观察旋转的接触点，判断切线方向，并在它切过目标的瞬间发射。',
        'mission-title': '玩法目标',
        'mission-desc': '这个游戏页面保留了 CircleMaster 原有页面外壳，但把旧的定理链机关改成了更主动的射击循环。',
        'mission-step-1': '青色半径与粉色切线会始终在接触点形成直角。',
        'mission-step-2': '当切线光束穿过外侧目标环时发射。',
        'mission-step-3': '累积连击、保护稳定值，并在轨道加速后继续生存。',
        'target-title': '规则聚焦',
        'target-note': '切线在接触点处垂直于半径。',
        'hud-score': '分数',
        'hud-combo': '连击',
        'hud-lives': '生命',
        'hud-alignment': '对准度',
        'btn-start': '开始挑战',
        'btn-fire': '发射切线',
        'btn-pause': '暂停',
        'btn-resume': '继续',
        'btn-restart': '重新开始',
        'panel-session': '战局状态',
        'panel-phase': '阶段：',
        'panel-score': '分数：',
        'panel-combo': '连击：',
        'panel-lives': '生命：',
        'panel-alignment': '对准度：',
        'panel-controls': '切线操作',
        'controls-helper': '桌面端按空格发射，按 P 暂停。移动端可点击舞台或“发射切线”按钮。',
        'panel-theorem': '切线定理',
        'theorem-body': '炮台沿圆周旋转。每次发射都会沿接触点处的切线前进，青色引导线则显示对应的半径。',
        'play-tip-label': '游玩提示：',
        'play-tip-body': '不要瞄准目标中心，要等光束刚好擦着圆边并穿过外侧锁环。',
        'panel-log': '战斗日志',
        'log-empty': '还没有开始任何回合。',
        'chat-header': 'AI 几何导师',
        'chat-ai': 'AI：',
        'chat-welcome': '欢迎来到霓虹切线射击。你可以询问提示、切线定理，或联系我们。',
        'chat-placeholder': '询问切线时机...',
        'chat-you': '你：',
        'footer-copy': '© 2026 第33组。保留所有权利。',
        'footer-data': '数据政策',
        'footer-access': '无障碍声明',
        'footer-contact': '联系我们',
        'arena-aria-label': '霓虹切线射击游戏场',
        'msg-ready': '点击“开始挑战”，然后在切线光束切过目标时发射。',
        'msg-running': '挑战进行中。把握切线穿过目标环的时机。',
        'msg-paused': '挑战已暂停，准备好后继续这个时机挑战。',
        'msg-hit': '完美命中，切线精准穿过目标。',
        'msg-miss': '时机失误，光束在切线窗口外发射。',
        'msg-timeout': '目标窗口关闭，稳定值下降。',
        'msg-over': '系统失稳。重新开始以继续测试这个原型。',
        'msg-cleared': '阶段通过。下一个目标会让轨道转得更快。',
        'log-start-title': '挑战开始',
        'log-start-body': '炮台开始旋转了。请观察切线，而不是只盯着目标中心。',
        'log-hit-title': '切线命中',
        'log-hit-body': '对准度 {alignment}%。连击 x{combo}。分数 +{scoreGain}。',
        'log-miss-title': '射线偏离',
        'log-miss-body': '对准度只有 {alignment}%。稳定值降到 {lives}。',
        'log-time-title': '目标超时',
        'log-time-body': '倒计时结束前，切线光束没有成功连接目标。',
        'log-phase-title': '阶段提升',
        'log-phase-body': '轨道速度提升，阶段 {phase} 的目标窗口更紧了。',
        'log-restart-title': '原型重置',
        'log-restart-body': '分数、连击和生命值都已恢复到初始调校值。',
        'chat-reply-contact': '你可以使用页脚链接联系我们，或者在这里继续询问切线提示。',
        'chat-reply-hint': '不要瞄准目标中心，要等粉色光束刚好擦着圆并穿过目标环时再发射。',
        'chat-reply-tangent': '切线在接触点处与半径垂直，这正是每次发射定时的关键。',
        'chat-reply-default': '先观察半径，再记住切线离开圆时总是形成 90 度。',
        'phase-label': '阶段 {phase}',
        'timer-unit': '{time}秒'
    }
};

let currentLang = 'en';
let currentFontSize = 16;
let soundEnabled = true;

function t(key, vars = {}) {
    const table = translations[currentLang] || translations.en;
    let output = table[key] || translations.en[key] || key;
    Object.keys(vars).forEach((name) => {
        output = output.replace(`{${name}}`, vars[name]);
    });
    return output;
}

function updateThemeButton() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const themeIcon = document.getElementById('theme-icon');
    const themeLabel = document.getElementById('theme-label');
    if (themeIcon) {
        themeIcon.textContent = isDark ? '☀️' : '🌙';
    }
    if (themeLabel) {
        themeLabel.textContent = isDark ? t('theme-light') : t('theme-dark');
    }
}

function updateAudioButton() {
    const audioIcon = document.getElementById('audio-icon');
    const audioLabel = document.getElementById('audio-label');
    if (audioIcon) {
        audioIcon.textContent = soundEnabled ? '🔊' : '🔇';
    }
    if (audioLabel) {
        audioLabel.textContent = soundEnabled ? t('audio-on') : t('audio-off');
    }
}

function updateTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.getAttribute('data-i18n');
        const value = t(key);
        node.textContent = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
        const key = node.getAttribute('data-i18n-placeholder');
        node.placeholder = t(key);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
        const key = node.getAttribute('data-i18n-aria-label');
        node.setAttribute('aria-label', t(key));
    });

    updateThemeButton();
    updateAudioButton();
    updatePauseLabels();
    updateHud();
    updateStatus(currentStatus.type, currentStatus.key);
    renderTargetTimer();
    refreshChatWelcome();
    relocalizeLogEntries();
}

const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateThemeButton();
    });
}

function adjustFontSize(delta) {
    currentFontSize += delta * 2;

    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 30) currentFontSize = 30;

    document.documentElement.style.setProperty('--font-size-base', currentFontSize + 'px');
}

function changeLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateTranslations();
}

const audioBtn = document.getElementById('audio-btn');
if (audioBtn) {
    audioBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        updateAudioButton();
    });
}

// AI chat widget
const chatInput = document.querySelector('#ai-chat-widget input');
const chatBody = document.querySelector('#ai-chat-widget .chat-body');

function refreshChatWelcome() {
    if (!chatBody) return;
    const firstMessage = chatBody.querySelector('[data-chat-welcome]');
    if (firstMessage) {
        const strong = firstMessage.querySelector('strong');
        const span = firstMessage.querySelector('span');
        if (strong) strong.textContent = t('chat-ai');
        if (span) span.textContent = t('chat-welcome');
    }
}

function renderMessage(senderKey, text) {
    if (!chatBody) return;

    const p = document.createElement('p');
    const strong = document.createElement('strong');
    const sender = senderKey === 'chat-you' ? t('chat-you') : t('chat-ai');

    strong.textContent = sender;
    p.appendChild(strong);
    p.appendChild(document.createTextNode(` ${text}`));
    chatBody.appendChild(p);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getChatReply(message) {
    const normalized = message.toLowerCase();
    if (normalized.includes('contact') || message.includes('联系')) {
        return t('chat-reply-contact');
    }
    if (normalized.includes('hint') || message.includes('提示')) {
        return t('chat-reply-hint');
    }
    if (normalized.includes('tangent') || message.includes('切线') || normalized.includes('90')) {
        return t('chat-reply-tangent');
    }
    return t('chat-reply-default');
}

if (chatInput) {
    chatInput.addEventListener('keypress', (event) => {
        if (event.key !== 'Enter' || chatInput.value.trim() === '') {
            return;
        }

        const userMsg = chatInput.value.trim();
        renderMessage('chat-you', userMsg);
        chatInput.value = '';

        setTimeout(() => {
            renderMessage('chat-ai', getChatReply(userMsg));
        }, 800);
    });
}

// Neon Tangent Striker gameplay
const gameState = {
    running: false,
    paused: false,
    phase: 1,
    score: 0,
    combo: 0,
    lives: 3,
    alignment: 0,
    orbitAngle: -Math.PI / 2,
    orbitSpeed: 0.88,
    timeLimit: 4.5,
    timeRemaining: 4.5,
    targetContactAngle: -0.42,
    targetDistance: 210,
    targetWindow: 0.22,
    lastTimestamp: 0,
    beamVisible: false,
    beamTimer: 0,
    blastTimer: 0
};

const currentStatus = {
    type: 'info',
    key: 'msg-ready'
};

const geometry = {
    cx: 320,
    cy: 260,
    coreRadius: 118,
    tangentLength: 330,
    markerSize: 22
};

const fields = Array.from(document.querySelectorAll('[data-field]'));
const stageBadge = document.getElementById('stage-badge');
const arenaMessage = document.getElementById('arena-message');
const logBox = document.getElementById('log-box');
const pauseLabels = Array.from(document.querySelectorAll('[data-role="pause-label"]'));
const arenaSvg = document.getElementById('arena-svg');
const radiusLine = document.getElementById('radius-line');
const tangentPreview = document.getElementById('tangent-preview');
const laserBeam = document.getElementById('laser-beam');
const rightAngleMarker = document.getElementById('right-angle-marker');
const contactPoint = document.getElementById('contact-point');
const contactGlow = document.getElementById('contact-glow');
const targetWarning = document.getElementById('target-warning');
const countdownRing = document.getElementById('countdown-ring');
const targetRing = document.getElementById('target-ring');
const targetBody = document.getElementById('target-body');
const targetTimer = document.getElementById('target-timer');
const blastRing = document.getElementById('blast-ring');
const blastCore = document.getElementById('blast-core');
const actionButtons = Array.from(document.querySelectorAll('[data-action]'));

function setField(name, value) {
    fields.filter((node) => node.dataset.field === name).forEach((node) => {
        node.textContent = value;
    });
}

function updateHud() {
    setField('score', gameState.score);
    setField('combo', gameState.combo);
    setField('lives', gameState.lives);
    setField('alignment', `${gameState.alignment}%`);
    setField('phase', gameState.phase);
    if (stageBadge) {
        stageBadge.textContent = t('phase-label', { phase: gameState.phase });
    }
}

function updatePauseLabels() {
    const label = gameState.paused ? t('btn-resume') : t('btn-pause');
    pauseLabels.forEach((node) => {
        node.textContent = label;
    });
}

function updateStatus(type, key) {
    if (!arenaMessage) return;
    currentStatus.type = type;
    currentStatus.key = key;
    arenaMessage.className = `status-banner ${type} arena-message`;
    arenaMessage.textContent = t(key);
}

function logMessage(titleKey, bodyKey, vars = {}) {
    if (!logBox) return;

    if (logBox.querySelector('.log-empty')) {
        logBox.innerHTML = '';
    }

    const item = document.createElement('div');
    item.className = 'log-entry';
    item.dataset.titleKey = titleKey;
    item.dataset.bodyKey = bodyKey;
    item.dataset.vars = JSON.stringify(vars);
    item.innerHTML = `<div class="log-title">${t(titleKey, vars)}</div><div class="log-text">${t(bodyKey, vars)}</div>`;
    logBox.prepend(item);
}

function relocalizeLogEntries() {
    if (!logBox) return;

    const entries = Array.from(logBox.querySelectorAll('.log-entry'));
    entries.forEach((entry) => {
        const vars = entry.dataset.vars ? JSON.parse(entry.dataset.vars) : {};
        const title = entry.querySelector('.log-title');
        const body = entry.querySelector('.log-text');
        if (title && entry.dataset.titleKey) {
            title.textContent = t(entry.dataset.titleKey, vars);
        }
        if (body && entry.dataset.bodyKey) {
            body.textContent = t(entry.dataset.bodyKey, vars);
        }
    });

    const empty = logBox.querySelector('.log-empty');
    if (empty) {
        empty.textContent = t('log-empty');
    }
}

function pointOnCircle(angle, radius) {
    return {
        x: geometry.cx + Math.cos(angle) * radius,
        y: geometry.cy + Math.sin(angle) * radius
    };
}

function tangentDirection(angle) {
    return {
        x: -Math.sin(angle),
        y: Math.cos(angle)
    };
}

function updateMarkerGeometry() {
    if (!contactPoint || !contactGlow || !radiusLine || !tangentPreview || !laserBeam || !rightAngleMarker) {
        return;
    }

    const contact = pointOnCircle(gameState.orbitAngle, geometry.coreRadius);
    const direction = tangentDirection(gameState.orbitAngle);
    const tangentStart = {
        x: contact.x - direction.x * geometry.tangentLength,
        y: contact.y - direction.y * geometry.tangentLength
    };
    const tangentEnd = {
        x: contact.x + direction.x * geometry.tangentLength,
        y: contact.y + direction.y * geometry.tangentLength
    };

    contactPoint.setAttribute('cx', contact.x);
    contactPoint.setAttribute('cy', contact.y);
    contactGlow.setAttribute('cx', contact.x);
    contactGlow.setAttribute('cy', contact.y);
    radiusLine.setAttribute('x2', contact.x);
    radiusLine.setAttribute('y2', contact.y);
    tangentPreview.setAttribute('x1', tangentStart.x);
    tangentPreview.setAttribute('y1', tangentStart.y);
    tangentPreview.setAttribute('x2', tangentEnd.x);
    tangentPreview.setAttribute('y2', tangentEnd.y);

    const marker = geometry.markerSize;
    const radial = {
        x: Math.cos(gameState.orbitAngle),
        y: Math.sin(gameState.orbitAngle)
    };
    const markerA = {
        x: contact.x - radial.x * marker,
        y: contact.y - radial.y * marker
    };
    const markerB = {
        x: markerA.x - direction.x * marker,
        y: markerA.y - direction.y * marker
    };
    rightAngleMarker.setAttribute('d', `M ${contact.x} ${contact.y} L ${markerA.x} ${markerA.y} L ${markerB.x} ${markerB.y}`);

    if (gameState.beamVisible) {
        laserBeam.setAttribute('x1', contact.x);
        laserBeam.setAttribute('y1', contact.y);
        laserBeam.setAttribute('x2', tangentEnd.x);
        laserBeam.setAttribute('y2', tangentEnd.y);
    } else {
        laserBeam.setAttribute('x1', contact.x);
        laserBeam.setAttribute('y1', contact.y);
        laserBeam.setAttribute('x2', contact.x);
        laserBeam.setAttribute('y2', contact.y);
    }
}

function updateTargetGeometry() {
    if (!targetWarning || !countdownRing || !targetRing || !targetBody || !targetTimer || !blastRing || !blastCore) {
        return;
    }

    const contact = pointOnCircle(gameState.targetContactAngle, geometry.coreRadius);
    const direction = tangentDirection(gameState.targetContactAngle);
    const target = {
        x: contact.x + direction.x * gameState.targetDistance,
        y: contact.y + direction.y * gameState.targetDistance
    };

    targetWarning.setAttribute('cx', target.x);
    targetWarning.setAttribute('cy', target.y);
    countdownRing.setAttribute('cx', target.x);
    countdownRing.setAttribute('cy', target.y);
    targetRing.setAttribute('cx', target.x);
    targetRing.setAttribute('cy', target.y);
    targetBody.setAttribute('cx', target.x);
    targetBody.setAttribute('cy', target.y);
    targetTimer.setAttribute('x', target.x);
    targetTimer.setAttribute('y', target.y - 40);
    blastRing.setAttribute('cx', target.x);
    blastRing.setAttribute('cy', target.y);
    blastCore.setAttribute('cx', target.x);
    blastCore.setAttribute('cy', target.y);
}

function renderTargetTimer() {
    if (!countdownRing || !targetTimer) return;

    const ratio = Math.max(gameState.timeRemaining / gameState.timeLimit, 0);
    const circumference = 2 * Math.PI * 28;
    countdownRing.style.strokeDasharray = `${circumference}`;
    countdownRing.style.strokeDashoffset = `${circumference * (1 - ratio)}`;
    targetTimer.textContent = t('timer-unit', { time: gameState.timeRemaining.toFixed(1) });
}

function showBlast() {
    if (!blastRing || !blastCore) return;
    gameState.blastTimer = 0.35;
    blastRing.style.opacity = '1';
    blastCore.style.opacity = '1';
}

function resetRound(keepRunning = true) {
    gameState.timeLimit = Math.max(2.4, 4.5 - (gameState.phase - 1) * 0.35);
    gameState.timeRemaining = gameState.timeLimit;
    gameState.targetWindow = Math.max(0.1, 0.22 - (gameState.phase - 1) * 0.01);
    gameState.targetContactAngle = Math.random() * Math.PI * 2;
    gameState.targetDistance = Math.max(180, 210 - (gameState.phase - 1) * 6);
    gameState.beamVisible = false;
    if (laserBeam) {
        laserBeam.style.opacity = '0';
    }
    renderTargetTimer();
    updateTargetGeometry();
    if (!keepRunning) {
        gameState.running = false;
        gameState.paused = false;
        updatePauseLabels();
    }
}

function startSession() {
    if (gameState.running && !gameState.paused) {
        return;
    }

    gameState.running = true;
    gameState.paused = false;
    updatePauseLabels();
    updateStatus('info', 'msg-running');
    logMessage('log-start-title', 'log-start-body');
}

function endSession() {
    gameState.running = false;
    gameState.paused = false;
    updatePauseLabels();
    updateStatus('error', 'msg-over');
}

function restartSession() {
    gameState.running = false;
    gameState.paused = false;
    gameState.phase = 1;
    gameState.score = 0;
    gameState.combo = 0;
    gameState.lives = 3;
    gameState.alignment = 0;
    gameState.orbitSpeed = 0.88;
    gameState.orbitAngle = -Math.PI / 2;
    gameState.beamTimer = 0;
    gameState.blastTimer = 0;
    gameState.lastTimestamp = 0;

    resetRound(false);
    updatePauseLabels();
    updateHud();
    updateStatus('info', 'msg-ready');
    if (logBox) {
        logBox.innerHTML = `<div class="log-empty">${t('log-empty')}</div>`;
    }
    logMessage('log-restart-title', 'log-restart-body');
}

function togglePause() {
    if (!gameState.running && gameState.lives > 0) {
        startSession();
        return;
    }
    if (!gameState.running) {
        return;
    }

    gameState.paused = !gameState.paused;
    updatePauseLabels();
    updateStatus('info', gameState.paused ? 'msg-paused' : 'msg-running');
}

function handleTimeout() {
    gameState.combo = 0;
    gameState.lives = Math.max(0, gameState.lives - 1);
    gameState.alignment = 0;
    updateHud();
    logMessage('log-time-title', 'log-time-body');

    if (gameState.lives === 0) {
        endSession();
        return;
    }

    updateStatus('error', 'msg-timeout');
    resetRound(true);
}

function clearPhase() {
    gameState.phase += 1;
    gameState.orbitSpeed += 0.16;
    logMessage('log-phase-title', 'log-phase-body', { phase: gameState.phase });
    updateStatus('success', 'msg-cleared');
    updateHud();
    resetRound(true);
}

function fireShot() {
    if (!gameState.running || gameState.paused || gameState.lives === 0) {
        return;
    }

    gameState.beamVisible = true;
    gameState.beamTimer = 0.18;
    if (laserBeam) {
        laserBeam.style.opacity = '1';
    }

    let angleDiff = Math.abs(gameState.orbitAngle - gameState.targetContactAngle);
    angleDiff = Math.min(angleDiff, Math.PI * 2 - angleDiff);
    const alignment = Math.max(0, 1 - angleDiff / gameState.targetWindow);
    const alignmentPct = Math.round(alignment * 100);
    gameState.alignment = alignmentPct;

    if (alignment > 0) {
        gameState.combo += 1;
        const scoreGain = Math.round(120 + alignmentPct + gameState.combo * 25);
        gameState.score += scoreGain;
        updateHud();
        showBlast();
        updateStatus('success', 'msg-hit');
        logMessage('log-hit-title', 'log-hit-body', { alignment: alignmentPct, combo: gameState.combo, scoreGain });

        if (gameState.combo % 4 === 0) {
            clearPhase();
        } else {
            resetRound(true);
        }
        return;
    }

    gameState.combo = 0;
    gameState.lives = Math.max(0, gameState.lives - 1);
    updateHud();
    updateStatus('error', 'msg-miss');
    logMessage('log-miss-title', 'log-miss-body', { alignment: alignmentPct, lives: gameState.lives });

    if (gameState.lives === 0) {
        endSession();
        return;
    }

    resetRound(true);
}

function animate(timestamp) {
    if (!arenaSvg) return;

    if (!gameState.lastTimestamp) {
        gameState.lastTimestamp = timestamp;
    }
    const delta = Math.min((timestamp - gameState.lastTimestamp) / 1000, 0.04);
    gameState.lastTimestamp = timestamp;

    if (gameState.running && !gameState.paused && gameState.lives > 0) {
        gameState.orbitAngle += gameState.orbitSpeed * delta;
        gameState.timeRemaining = Math.max(0, gameState.timeRemaining - delta);
        if (gameState.timeRemaining === 0) {
            handleTimeout();
        }
    }

    if (gameState.beamTimer > 0) {
        gameState.beamTimer = Math.max(0, gameState.beamTimer - delta);
        if (gameState.beamTimer === 0) {
            gameState.beamVisible = false;
            if (laserBeam) {
                laserBeam.style.opacity = '0';
            }
        }
    }

    if (gameState.blastTimer > 0 && blastRing && blastCore) {
        gameState.blastTimer = Math.max(0, gameState.blastTimer - delta);
        const progress = 1 - gameState.blastTimer / 0.35;
        blastRing.style.opacity = `${1 - progress}`;
        blastRing.setAttribute('r', `${8 + progress * 36}`);
        blastCore.style.opacity = `${1 - progress}`;
        blastCore.setAttribute('r', `${5 + progress * 10}`);
    } else if (blastRing && blastCore) {
        blastRing.style.opacity = '0';
        blastCore.style.opacity = '0';
    }

    updateMarkerGeometry();
    updateTargetGeometry();
    renderTargetTimer();

    requestAnimationFrame(animate);
}

actionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        if (action === 'start') startSession();
        if (action === 'fire') fireShot();
        if (action === 'pause') togglePause();
        if (action === 'restart') restartSession();
    });
});

if (arenaSvg) {
    arenaSvg.addEventListener('click', () => {
        if (!gameState.running) {
            startSession();
            return;
        }
        fireShot();
    });

    requestAnimationFrame(animate);
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        if (!gameState.running) {
            startSession();
            return;
        }
        fireShot();
    }

    if (event.key.toLowerCase() === 'p') {
        togglePause();
    }
});

restartSession();
updateTranslations();
