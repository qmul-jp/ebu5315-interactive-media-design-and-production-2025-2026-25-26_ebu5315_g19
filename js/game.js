// 1. Accessibility and shared UI controls
const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        themeBtn.innerText = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

        console.log(`UI Updated: Theme changed to ${newTheme}`);
    });
}

let currentFontSize = 16;
function adjustFontSize(delta) {
    currentFontSize += delta * 2;

    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 30) currentFontSize = 30;

    document.documentElement.style.setProperty('--font-size-base', currentFontSize + 'px');
    console.log(`Accessibility: Font size set to ${currentFontSize}px`);
}

function changeLanguage() {
    alert('Language switch will be fully implemented in Version 2.');
}

const audioBtn = document.getElementById('audio-btn');
if (audioBtn) {
    audioBtn.addEventListener('click', () => {
        alert('Audio feedback enabled/disabled. (This feature will be fully implemented in Version 2)');
    });
}

// 2. AI chat widget
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
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && chatInput.value.trim() !== '') {
            const userMsg = chatInput.value.trim();

            renderMessage('You', userMsg);
            chatInput.value = '';

            setTimeout(() => {
                let aiReply = 'That is a great geometry question. Remember: an inscribed angle on the same arc is half the central angle. Want a hint for the current chamber?';
                if (userMsg.toLowerCase().includes('contact')) {
                    aiReply = 'You can contact our team at support@circlemaster.edu or use the form in the footer!';
                } else if (userMsg.toLowerCase().includes('hint')) {
                    aiReply = 'Try checking what kind of angle the chamber starts with, then choose a theorem module that accepts that input type.';
                }
                renderMessage('AI', aiReply);
            }, 1000);
        }
    });
}

// 3. Chamber puzzle gameplay
const modules = {
    halfCentral: {
        id: 'halfCentral',
        name: 'Half of central angle',
        desc: 'Convert a central angle into an inscribed angle on the same arc.',
        chip: 'Angle transfer',
        color: 'linear-gradient(135deg, #1a73e8 0%, #4ea3ff 100%)',
        apply(currentState) {
            if (currentState.type !== 'central') {
                return { ok: false, reason: 'This module only works when the current input is a central angle.' };
            }

            return {
                ok: true,
                next: {
                    value: currentState.value / 2,
                    type: 'inscribed',
                    label: 'Inscribed angle on the same arc'
                },
                explain: currentState.value + '° at the centre becomes ' + (currentState.value / 2) + '° at the circumference.'
            };
        }
    },
    cyclicOpposite: {
        id: 'cyclicOpposite',
        name: 'Opposite angles sum to 180°',
        desc: 'Use the cyclic quadrilateral rule to derive the opposite angle.',
        chip: 'Cyclic rule',
        color: 'linear-gradient(135deg, #6f42c1 0%, #9575de 100%)',
        apply(currentState) {
            if (!['cyclic', 'inscribed'].includes(currentState.type)) {
                return { ok: false, reason: 'This module needs an angle from a cyclic quadrilateral situation.' };
            }

            const result = 180 - currentState.value;
            return {
                ok: true,
                next: {
                    value: result,
                    type: 'cyclic',
                    label: 'Opposite angle in the same cyclic quadrilateral'
                },
                explain: 'Opposite angles in a cyclic quadrilateral add to 180°, so the result is ' + result + '°.'
            };
        }
    },
    sameArcEqual: {
        id: 'sameArcEqual',
        name: 'Same arc gives equal angle',
        desc: 'Transfer an inscribed angle to another point on the same arc.',
        chip: 'Equality rule',
        color: 'linear-gradient(135deg, #198754 0%, #41b883 100%)',
        apply(currentState) {
            if (currentState.type !== 'inscribed') {
                return { ok: false, reason: 'Equal angles on the same arc require an inscribed angle first.' };
            }

            return {
                ok: true,
                next: {
                    value: currentState.value,
                    type: 'inscribed',
                    label: 'Another inscribed angle on the same arc'
                },
                explain: 'Angles standing on the same arc are equal, so the value stays ' + currentState.value + '°.'
            };
        }
    },
    diameter90: {
        id: 'diameter90',
        name: 'Angle in a semicircle is 90°',
        desc: 'Turn a diameter-based setup into a right angle instantly.',
        chip: 'Diameter rule',
        color: 'linear-gradient(135deg, #fd7e14 0%, #ffb347 100%)',
        apply(currentState) {
            if (currentState.type !== 'diameter') {
                return { ok: false, reason: 'This module only works for a diameter-based source.' };
            }

            return {
                ok: true,
                next: {
                    value: 90,
                    type: 'inscribed',
                    label: 'Angle subtended by a diameter'
                },
                explain: 'The angle in a semicircle is always 90°.'
            };
        }
    },
    supplementary: {
        id: 'supplementary',
        name: 'Supplementary angle',
        desc: 'Turn the current angle into its supplement.',
        chip: 'Support rule',
        color: 'linear-gradient(135deg, #dc3545 0%, #f07f8e 100%)',
        apply(currentState) {
            return {
                ok: true,
                next: {
                    value: 180 - currentState.value,
                    type: 'general',
                    label: 'Supplementary angle'
                },
                explain: 'A supplementary angle totals 180°, so the result becomes ' + (180 - currentState.value) + '°.'
            };
        }
    }
};

const levels = [
    {
        id: 1,
        name: 'Gate of Reflection',
        story: 'A clean entry chamber that introduces the idea of installing one theorem module into the lock path.',
        objective: 'Transform the central angle into the unlock angle at the edge of the circle.',
        source: { value: 120, type: 'central', label: 'Central angle' },
        target: { value: 60, note: 'One correct theorem is enough to open this chamber.' },
        slotCount: 1,
        cards: ['halfCentral', 'cyclicOpposite', 'diameter90', 'supplementary']
    },
    {
        id: 2,
        name: 'Quadrilateral Vault',
        story: 'The lock sits across a cyclic quadrilateral, so the source angle is not the one you actually need.',
        objective: 'Derive the opposite angle inside the same cyclic figure.',
        source: { value: 110, type: 'cyclic', label: 'Known angle in cyclic quadrilateral' },
        target: { value: 70, note: 'The correct rule reveals the angle at the opposite corner.' },
        slotCount: 1,
        cards: ['sameArcEqual', 'cyclicOpposite', 'halfCentral', 'supplementary']
    },
    {
        id: 3,
        name: 'Chain Reactor',
        story: 'The final chamber needs a multi-step transformation chain, so it feels less like a quiz and more like system configuration.',
        objective: 'Build a three-step sequence that produces the final chamber output.',
        source: { value: 140, type: 'central', label: 'Central angle feeding the reactor' },
        target: { value: 110, note: 'Only the right sequence of rules produces the final output.' },
        slotCount: 3,
        cards: ['halfCentral', 'sameArcEqual', 'cyclicOpposite', 'diameter90', 'supplementary']
    }
];

const state = {
    levelIndex: 0,
    score: 0,
    energy: 3,
    placements: [null, null, null],
    selectedCard: null,
    clearedLevels: new Set(),
    logSeed: 0
};

const levelDisplay = document.getElementById('level-display');
const scoreDisplay = document.getElementById('score-display');
const energyDisplay = document.getElementById('energy-display');
const stageBadge = document.getElementById('stage-badge');
const missionTitle = document.getElementById('mission-title');
const missionStory = document.getElementById('mission-story');
const missionObjective = document.getElementById('mission-objective');
const targetValue = document.getElementById('target-value');
const targetNote = document.getElementById('target-note');
const sourceValue = document.getElementById('source-value');
const sourceLabel = document.getElementById('source-label');
const lockValue = document.getElementById('lock-value');
const lockLabel = document.getElementById('lock-label');
const lockCard = document.getElementById('lock-card');
const moduleList = document.getElementById('module-list');
const logBox = document.getElementById('log-box');
const statusBanner = document.getElementById('status-banner');
const activateBtn = document.getElementById('activate-btn');
const resetBtn = document.getElementById('reset-btn');
const nextBtn = document.getElementById('next-btn');
const slots = Array.from(document.querySelectorAll('.drop-slot'));

function getLevel() {
    return levels[state.levelIndex];
}

function updateStatus(type, text) {
    if (!statusBanner) return;
    statusBanner.className = 'status-banner ' + type;
    statusBanner.textContent = text;
}

function logMessage(title, text) {
    if (!logBox) return;

    if (logBox.querySelector('.log-empty')) {
        logBox.innerHTML = '';
    }

    state.logSeed += 1;
    const item = document.createElement('div');
    item.className = 'log-entry';
    item.innerHTML = '<div class="log-title">' + title + '</div><div class="log-text">' + text + '</div>';
    logBox.prepend(item);
}

function renderModules() {
    const level = getLevel();
    if (!moduleList) return;

    moduleList.innerHTML = '';

    level.cards.forEach((id) => {
        const module = modules[id];
        const card = document.createElement('div');
        card.className = 'module-card' + (state.selectedCard === id ? ' selected' : '');
        card.draggable = true;
        card.dataset.cardId = id;
        card.style.background = module.color;
        card.innerHTML = '<div class="rule-chip">' + module.chip + '</div><h4>' + module.name + '</h4><p class="rule-card-desc">' + module.desc + '</p>';

        card.addEventListener('click', () => {
            state.selectedCard = state.selectedCard === id ? null : id;
            renderModules();
        });

        card.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', id);
            state.selectedCard = id;
            renderModules();
        });

        moduleList.appendChild(card);
    });
}

function renderSlots() {
    const level = getLevel();

    slots.forEach((slot, index) => {
        slot.classList.remove('invalid', 'over', 'active');

        if (index >= level.slotCount) {
            slot.style.display = 'none';
            return;
        }

        slot.style.display = 'flex';
        slot.innerHTML = '<div class="slot-label">Slot ' + (index + 1) + '</div>';

        const placedId = state.placements[index];
        if (!placedId) {
            slot.innerHTML += '<div class="slot-hint">Drop a theorem module here</div>';
            return;
        }

        const module = modules[placedId];
        slot.innerHTML += '<div class="slot-card" style="background:' + module.color + '">' + module.name + '</div>';
        slot.innerHTML += '<div class="slot-result">--</div>';
        slot.innerHTML += '<div class="slot-caption">Click slot to remove</div>';
    });
}

function renderLevel() {
    const level = getLevel();

    if (levelDisplay) levelDisplay.textContent = level.id;
    if (scoreDisplay) scoreDisplay.textContent = state.score;
    if (energyDisplay) energyDisplay.textContent = state.energy;
    if (stageBadge) stageBadge.textContent = 'Chamber ' + level.id;
    if (missionTitle) missionTitle.textContent = 'Chamber ' + level.id + ': ' + level.name;
    if (missionStory) missionStory.textContent = level.story;
    if (missionObjective) missionObjective.textContent = level.objective;
    if (targetValue) targetValue.textContent = level.target.value + '°';
    if (targetNote) targetNote.textContent = level.target.note;
    if (sourceValue) sourceValue.textContent = level.source.value + '°';
    if (sourceLabel) sourceLabel.textContent = level.source.label;
    if (lockValue) lockValue.textContent = '--';
    if (lockLabel) lockLabel.textContent = 'Expected output: ' + level.target.value + '°';
    if (lockCard) lockCard.className = 'board-lock';
    if (nextBtn) nextBtn.disabled = !state.clearedLevels.has(level.id) || state.levelIndex === levels.length - 1;

    updateStatus('info', 'Drag a theorem module into each visible slot, then activate the mechanism.');
    renderModules();
    renderSlots();
    logMessage('Loaded chamber ' + level.id, level.name + ' is ready for testing.');
}

function placeModule(cardId, slotIndex) {
    const level = getLevel();

    if (!modules[cardId] || slotIndex >= level.slotCount) {
        return;
    }

    state.placements[slotIndex] = cardId;
    state.selectedCard = null;
    renderModules();
    renderSlots();
    logMessage('Module installed', modules[cardId].name + ' placed into Slot ' + (slotIndex + 1) + '.');
}

function resetChamber(showMessage = true) {
    state.placements = [null, null, null];
    state.selectedCard = null;
    renderModules();
    renderSlots();

    if (lockValue) lockValue.textContent = '--';
    if (lockLabel) lockLabel.textContent = 'Expected output: ' + getLevel().target.value + '°';
    if (lockCard) lockCard.className = 'board-lock';

    if (showMessage) {
        updateStatus('info', 'Chamber reset. Rebuild the theorem chain.');
        logMessage('Chamber reset', 'All installed modules were removed.');
    }
}

function markInvalidSlot(index, reason) {
    const slot = slots[index];
    if (!slot) return;

    slot.classList.add('invalid');
    setTimeout(() => slot.classList.remove('invalid'), 300);
    updateStatus('error', reason);
}

function activateMechanism() {
    const level = getLevel();
    const activeSlots = state.placements.slice(0, level.slotCount);

    if (activeSlots.some((slot) => !slot)) {
        updateStatus('error', 'The mechanism is incomplete. Every visible slot must contain one module.');
        return;
    }

    let current = { ...level.source };

    for (let index = 0; index < activeSlots.length; index += 1) {
        const moduleId = activeSlots[index];
        const slot = slots[index];
        const module = modules[moduleId];
        const outcome = module.apply(current);

        if (slot) {
            slot.classList.add('active');
        }

        if (!outcome.ok) {
            if (slot) {
                slot.classList.remove('active');
            }
            markInvalidSlot(index, outcome.reason);
            logMessage('Activation failed at Slot ' + (index + 1), module.name + ' could not process a ' + current.type + ' input.');
            state.energy = Math.max(0, state.energy - 1);
            if (energyDisplay) energyDisplay.textContent = state.energy;
            slots.forEach((slotItem) => slotItem.classList.remove('active'));
            return;
        }

        current = outcome.next;

        if (slot) {
            const resultNode = slot.querySelector('.slot-result');
            const captionNode = slot.querySelector('.slot-caption');
            if (resultNode) resultNode.textContent = current.value + '°';
            if (captionNode) captionNode.textContent = current.label;
            slot.classList.remove('active');
        }

        logMessage('Slot ' + (index + 1) + ' succeeded', outcome.explain);
    }

    if (lockValue) lockValue.textContent = current.value + '°';
    if (lockLabel) lockLabel.textContent = current.label;

    if (current.value === level.target.value) {
        if (lockCard) lockCard.className = 'board-lock unlocked';
        state.score += 100 + level.slotCount * 20;
        if (scoreDisplay) scoreDisplay.textContent = state.score;
        state.clearedLevels.add(level.id);
        if (nextBtn) nextBtn.disabled = state.levelIndex === levels.length - 1;
        updateStatus('success', 'Chamber unlocked. Configure the next path when you are ready.');
        logMessage('Chamber unlocked', 'Final output matched ' + level.target.value + '° exactly.');
    } else {
        state.energy = Math.max(0, state.energy - 1);
        if (energyDisplay) energyDisplay.textContent = state.energy;
        updateStatus('error', 'The mechanism ran, but the final output was incorrect. Try another rule chain.');
        logMessage('Incorrect output', 'Expected ' + level.target.value + '° but received ' + current.value + '°.');
    }
}

slots.forEach((slot) => {
    slot.addEventListener('dragover', (event) => {
        event.preventDefault();
        slot.classList.add('over');
    });

    slot.addEventListener('dragleave', () => {
        slot.classList.remove('over');
    });

    slot.addEventListener('drop', (event) => {
        event.preventDefault();
        slot.classList.remove('over');
        const cardId = event.dataTransfer.getData('text/plain');
        placeModule(cardId, Number(slot.dataset.slotIndex));
    });

    slot.addEventListener('click', () => {
        const index = Number(slot.dataset.slotIndex);

        if (state.selectedCard) {
            placeModule(state.selectedCard, index);
            return;
        }

        if (state.placements[index]) {
            logMessage('Module removed', modules[state.placements[index]].name + ' removed from Slot ' + (index + 1) + '.');
            state.placements[index] = null;
            renderSlots();
        }
    });
});

if (activateBtn) {
    activateBtn.addEventListener('click', activateMechanism);
}

if (resetBtn) {
    resetBtn.addEventListener('click', () => resetChamber());
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (state.levelIndex < levels.length - 1) {
            state.levelIndex += 1;
            resetChamber(false);
            renderLevel();
        }
    });
}

if (
    levelDisplay &&
    scoreDisplay &&
    energyDisplay &&
    stageBadge &&
    missionTitle &&
    missionStory &&
    missionObjective &&
    targetValue &&
    targetNote &&
    sourceValue &&
    sourceLabel &&
    lockValue &&
    lockLabel &&
    lockCard &&
    moduleList &&
    logBox &&
    statusBanner
) {
    renderLevel();
}
