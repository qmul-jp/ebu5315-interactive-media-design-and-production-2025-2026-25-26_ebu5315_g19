// Accessibility and shared UI controls
const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        themeBtn.innerText = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
}

let currentFontSize = 16;
function adjustFontSize(delta) {
    currentFontSize += delta * 2;

    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 30) currentFontSize = 30;

    document.documentElement.style.setProperty('--font-size-base', currentFontSize + 'px');
}

function changeLanguage() {
    alert('Language switch will be expanded in the full bilingual release.');
}

const audioBtn = document.getElementById('audio-btn');
if (audioBtn) {
    audioBtn.addEventListener('click', () => {
        alert('Sound toggle state changed. Full audio assets can be added in the next iteration.');
    });
}

// AI chat widget
const chatInput = document.querySelector('#ai-chat-widget input');
const chatBody = document.querySelector('#ai-chat-widget .chat-body');

function renderMessage(sender, text) {
    if (!chatBody) return;

    const p = document.createElement('p');
    const strong = document.createElement('strong');

    strong.textContent = `${sender}:`;
    p.appendChild(strong);
    p.appendChild(document.createTextNode(` ${text}`));
    chatBody.appendChild(p);
    chatBody.scrollTop = chatBody.scrollHeight;
}

if (chatInput) {
    chatInput.addEventListener('keypress', (event) => {
        if (event.key !== 'Enter' || chatInput.value.trim() === '') {
            return;
        }

        const userMsg = chatInput.value.trim();
        renderMessage('You', userMsg);
        chatInput.value = '';

        setTimeout(() => {
            let aiReply = 'Watch the radius first, then remember the tangent always leaves the circle at 90 degrees.';
            if (userMsg.toLowerCase().includes('contact')) {
                aiReply = 'You can contact our team with the footer links or ask here for a tangent tip.';
            } else if (userMsg.toLowerCase().includes('hint')) {
                aiReply = 'Do not aim at the target centre. Fire when the pink beam just grazes the circle and crosses the target ring.';
            } else if (userMsg.toLowerCase().includes('tangent')) {
                aiReply = 'The tangent is perpendicular to the radius exactly at the contact point. That is the key to timing each shot.';
            }
            renderMessage('AI', aiReply);
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
        stageBadge.textContent = `Phase ${gameState.phase}`;
    }
}

function updatePauseLabels() {
    const label = gameState.paused ? 'Resume' : 'Pause';
    pauseLabels.forEach((node) => {
        node.textContent = label;
    });
}

function updateStatus(type, text) {
    if (!arenaMessage) return;
    arenaMessage.className = `status-banner ${type} arena-message`;
    arenaMessage.textContent = text;
}

function logMessage(title, text) {
    if (!logBox) return;

    if (logBox.querySelector('.log-empty')) {
        logBox.innerHTML = '';
    }

    const item = document.createElement('div');
    item.className = 'log-entry';
    item.innerHTML = `<div class="log-title">${title}</div><div class="log-text">${text}</div>`;
    logBox.prepend(item);
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
    targetTimer.textContent = `${gameState.timeRemaining.toFixed(1)}s`;
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
    updateStatus('info', 'Session live. Time the tangent beam so it cuts through the target ring.');
    logMessage('Session started', 'The turret is rotating. Watch the tangent line rather than the target centre.');
}

function endSession() {
    gameState.running = false;
    gameState.paused = false;
    updatePauseLabels();
    updateStatus('error', 'Session unstable. Restart to continue testing the prototype.');
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
    updateStatus('info', 'Press Start Session, then fire when the tangent beam slices through the target.');
    if (logBox) {
        logBox.innerHTML = '<div class="log-empty">No rounds played yet.</div>';
    }
    logMessage('Prototype reset', 'Score, combo and lives returned to the initial tuning values.');
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
    updateStatus('info', gameState.paused ? 'Session paused. Resume when you are ready to continue the timing challenge.' : 'Session live. Time the tangent beam so it cuts through the target ring.');
}

function handleTimeout() {
    gameState.combo = 0;
    gameState.lives = Math.max(0, gameState.lives - 1);
    gameState.alignment = 0;
    updateHud();
    logMessage('Target expired', 'The countdown ended before the tangent beam connected.');

    if (gameState.lives === 0) {
        endSession();
        return;
    }

    updateStatus('error', 'Target window collapsed. Stability lost.');
    resetRound(true);
}

function clearPhase() {
    gameState.phase += 1;
    gameState.orbitSpeed += 0.16;
    logMessage('Phase advanced', `Orbit speed increased and the target window tightened for phase ${gameState.phase}.`);
    updateStatus('success', 'Phase cleared. The next target speeds up the orbit.');
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
        updateStatus('success', 'Perfect strike. The tangent line clipped the target cleanly.');
        logMessage('Direct tangent hit', `Alignment ${alignmentPct}%. Combo x${gameState.combo}. Score +${scoreGain}.`);

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
    updateStatus('error', 'Missed timing. The beam fired outside the tangent window.');
    logMessage('Shot drifted wide', `Alignment only reached ${alignmentPct}%. Stability dropped to ${gameState.lives}.`);

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
