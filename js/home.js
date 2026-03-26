// 1. 暗黑模式切换逻辑 (Toggle Dark Mode)
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    // 切换 body 的 data-theme 属性
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);

    // 更新按钮文字
    themeBtn.innerText = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

    // 记录日志 (供之后写 AI Log 参考)
    console.log(`UI Updated: Theme changed to ${newTheme}`);
});

// 2. 字号调节逻辑 (Adjust Font Size)
let currentFontSize = 16;
function adjustFontSize(delta) {
    currentFontSize += (delta * 2); // 每次点击增加或减少 2px

    // 限制字号范围 (12px - 30px) 防止 UI 崩溃
    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 30) currentFontSize = 30;

    // 应用到根元素
    document.documentElement.style.setProperty('--font-size-base', currentFontSize + 'px');
    console.log(`Accessibility: Font size set to ${currentFontSize}px`);
}

// 3. AI 模拟自动回复 (Simple AI Simulation)
// 在 Version 1 中，我们先做一个基础的交互反馈
const chatInput = document.querySelector('#ai-chat-widget input');
const chatBody = document.querySelector('#ai-chat-widget .chat-body');

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim() !== "") {
        const userMsg = chatInput.value;

        // 显示用户消息
        renderMessage('You', userMsg);
        chatInput.value = "";

        // 模拟 AI 思考并回复
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
    p.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBody.appendChild(p);
    chatBody.scrollTop = chatBody.scrollHeight; // 滚动到底部
}

// 4. 声音开关占位 (Sound Toggle Placeholder)
document.getElementById('audio-btn').addEventListener('click', () => {
    alert("Audio feedback enabled/disabled. (This feature will be fully implemented in Version 2)");
});