// --- 1. 双语字典 ---
const translations = {
    'en': {
        'btn-lang': 'EN / 中', 'btn-contrast': '👁️ Contrast', 'btn-theme': '🌙 Dark Mode', 'btn-sound': 'Sound',
        'logo-text': 'CircleMaster', 'nav-home': 'Home', 'nav-game': 'Game', 'nav-quiz': 'Quiz',
        'bc-home': 'Home', 'bc-current': 'Homepage',
        'hero-title': 'Master Circle Geometry <br><span class="highlight">Powered by AI</span>',
        'hero-usp': 'Interactive animations, AI-guided tutoring, and practice.',
        'rule1-title': 'Tangent Theorem', 'rule1-desc': 'Tangent is perpendicular to radius at contact point.',
        'rule2-title': 'Arc Rule', 'rule2-desc': 'Center angle is twice the circumference angle.',
        'rule3-title': 'Chord Rule', 'rule3-desc': 'Perpendicular from center bisects the chord.',
        'ads-text': 'Unlock Premium Features: Join CircleMaster Pro today!',
        'chat-header': 'Circle AI Tutor', 'ai-name': 'AI: ',
        'chat-welcome': 'Hi! Type "Contact" to message us!', 'chat-placeholder': 'Type here...',
        'footer-copy': '© 2026 Group 33. All rights reserved.',
        'footer-data': 'Data Policy', 'footer-access': 'Accessibility', 'footer-contact': 'Contact Us',
        'modal-title': 'Confirm Clear?', 'modal-desc': 'Delete all messages?', 'btn-confirm': 'Delete', 'btn-cancel': 'Cancel'
    },
    'zh': {
        'btn-lang': '中 / EN', 'btn-contrast': '👁️ 对比度', 'btn-theme': '🌙 黑夜模式', 'btn-sound': '声音',
        'logo-text': '圆几何大师', 'nav-home': '首页', 'nav-game': '数学游戏', 'nav-quiz': '互动测验',
        'bc-home': '首页', 'bc-current': '主页',
        'hero-title': '精通圆几何 <br><span class="highlight">由 AI 驱动教学</span>',
        'hero-usp': '互动动画、AI 引导辅导以及针对 GCSE 的练习。',
        'rule1-title': '切线定理', 'rule1-desc': '切线在接触点垂直于半径。',
        'rule2-title': '圆弧定理', 'rule2-desc': '圆心角是圆周角的两倍。',
        'rule3-title': '弦定理', 'rule3-desc': '从圆心到弦的垂线平分该弦。',
        'ads-text': '解锁高级功能：立即加入 CircleMaster Pro！',
        'chat-header': 'AI 几何导师', 'ai-name': '助理: ',
        'chat-welcome': '你好！输入“联系”向我们发消息！', 'chat-placeholder': '在此输入...',
        'footer-copy': '© 2026 第33组。保留所有权利。',
        'footer-data': '隐私政策', 'footer-access': '无障碍辅助', 'footer-contact': '联系我们',
        'modal-title': '确认清空？', 'modal-desc': '确定删除记录吗？', 'btn-confirm': '删除', 'btn-cancel': '取消'
    }
};

let currentLang = 'en';

// 双语切换
function changeLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });
    document.getElementById('chat-input').placeholder = translations[currentLang]['chat-placeholder'];
}

// 暗黑模式
document.getElementById('theme-btn').addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('theme-btn').innerText = isDark ? translations[currentLang]['btn-theme'] : "☀️ Light Mode";
});

// 对比度切换
function toggleContrast() {
    const isHigh = document.documentElement.getAttribute('data-a11y') === 'high-contrast';
    isHigh ? document.documentElement.removeAttribute('data-a11y') : document.documentElement.setAttribute('data-a11y', 'high-contrast');
}

// --- 声音切换逻辑 (新增) ---
let isMuted = false;
function toggleSound() {
    isMuted = !isMuted;
    const icon = document.getElementById('sound-icon');
    // 切换图标：🔊 表示有声，🔇 表示静音（带斜线/叉号的喇叭）
    icon.innerText = isMuted ? "🔇" : "🔊";
}

// 聊天框开关
function toggleChat() {
    const chat = document.getElementById('ai-chat-widget');
    chat.style.display = (chat.style.display === 'none') ? 'block' : 'none';
}

// AI 模拟对话
let step = 0;
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim() !== "") {
        const val = chatInput.value;
        renderMessage('You', val);
        chatInput.value = "";
        setTimeout(() => {
            if (val.toLowerCase().includes('contact') || val.includes('联系')) {
                renderMessage('AI', currentLang === 'en' ? "Sure! What's your name?" : "好的，请问您的名字是？");
                step = 1;
            } else if (step === 1) {
                renderMessage('AI', currentLang === 'en' ? `Hello ${val}, what's your message?` : `${val} 您好，想对我们说什么？`);
                step = 2;
            } else if (step === 2) {
                renderMessage('AI', currentLang === 'en' ? "Thanks! Message sent." : "谢谢！消息已发送给团队。");
                step = 0;
            } else {
                renderMessage('AI', currentLang === 'en' ? "I'm a geometry AI!" : "我是你的几何助教！");
            }
        }, 800);
    }
});

function renderMessage(sender, text) {
    const p = document.createElement('p');
    p.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBody.appendChild(p);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// 确认弹窗
function confirmClearChat() { document.getElementById('confirm-modal').style.display = 'flex'; }
function closeModal() { document.getElementById('confirm-modal').style.display = 'none'; }
function executeClear() { chatBody.innerHTML = ""; closeModal(); }

// 字号调节
let fs = 16;
function adjustFontSize(d) {
    fs = Math.min(Math.max(fs + (d * 2), 12), 30);
    document.documentElement.style.setProperty('--font-size-base', fs + 'px');
}