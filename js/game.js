// 1. 暗黑模式切换逻辑
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    themeBtn.innerText = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

    console.log(`UI Updated: Theme changed to ${newTheme}`);
});

// 2. 字号调节逻辑
let currentFontSize = 16;
function adjustFontSize(delta) {
    currentFontSize += delta * 2;

    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 30) currentFontSize = 30;

    document.documentElement.style.setProperty('--font-size-base', currentFontSize + 'px');
    console.log(`Accessibility: Font size set to ${currentFontSize}px`);
}

// 3. AI 模拟自动回复
const chatInput = document.querySelector('#ai-chat-widget input');
const chatBody = document.querySelector('#ai-chat-widget .chat-body');

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim() !== "") {
        const userMsg = chatInput.value;

        renderMessage('You', userMsg);
        chatInput.value = "";

        setTimeout(() => {
            let aiReply = "That's a great question! In circle geometry, remember that the angle in a semicircle is always 90 degrees. Would you like to try a game about this?";
            if (userMsg.toLowerCase().includes('contact')) {
                aiReply = "You can contact our team at support@circlemaster.edu or use the form in the footer!";
            }
            renderMessage('AI', aiReply);
        }, 1000);
    }
});

function renderMessage(sender, text) {
    const p = document.createElement('p');
    const strong = document.createElement('strong');

    strong.textContent = `${sender}:`;
    p.appendChild(strong);
    p.appendChild(document.createTextNode(` ${text}`));
    chatBody.appendChild(p);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// 4. 声音开关占位
document.getElementById('audio-btn').addEventListener('click', () => {
    alert("Audio feedback enabled/disabled. (This feature will be fully implemented in Version 2)");
});

// 5. 语言切换占位
function changeLanguage() {
    alert("Language switch will be fully implemented in Version 2.");
}

// 6. 游戏占位交互
const angleInput = document.getElementById('angle-input');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

submitBtn.addEventListener('click', () => {
    const angleValue = angleInput.value.trim();

    if (angleValue === '') {
        alert('Please enter an angle before submitting.');
        return;
    }

    alert(`Angle submitted successfully: ${angleValue}°`);
});

restartBtn.addEventListener('click', () => {
    const confirmed = confirm('Are you sure you want to restart?');

    if (confirmed) {
        angleInput.value = '';
    }
});
