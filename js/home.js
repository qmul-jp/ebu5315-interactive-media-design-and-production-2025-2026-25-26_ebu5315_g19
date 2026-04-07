const translations = {
    'en': {
        'btn-lang': 'EN / 中', 'btn-theme': '🌙 Dark Mode', 'btn-sound': 'Sound',
        'logo-text': 'CircleMaster', 'nav-home': 'Home', 'nav-game': 'Game', 'nav-quiz': 'Quiz',
        'bc-home': 'Home', 'bc-current': 'Homepage',
        'hero-title': 'Master Circle Geometry <br><span class="highlight">Powered by AI</span>',
        'hero-usp': 'Interactive animations, AI-guided tutoring, and GCSE-focused practice.',
        'rule1-title': 'Tangent Theorem', 'rule1-desc': 'Tangent is perpendicular to radius at contact point.',
        'rule2-title': 'Arc Rule', 'rule2-desc': 'Center angle is twice the circumference angle.',
        'rule3-title': 'Chord Rule', 'rule3-desc': 'Perpendicular from center bisects the chord.',
        'ads-text': 'Join <strong>CircleMaster Pro</strong> for advanced AI features!',
        'chat-header': 'Circle AI Tutor', 'ai-name': 'AI: ',
        'chat-welcome': 'Hi! Type "Contact" to message us!', 'chat-placeholder': 'Type here...',
        'footer-copy': '© 2026 Group 33. All rights reserved.',
        'footer-data': 'Data Policy', 'footer-access': 'Accessibility', 'footer-contact': 'Contact Us'
    },
    'zh': {
        'btn-lang': '中 / EN', 'btn-theme': '🌙 黑夜模式', 'btn-sound': '声音',
        'logo-text': '圆几何大师', 'nav-home': '首页', 'nav-game': '游戏', 'nav-quiz': '测验',
        'bc-home': '首页', 'bc-current': '主页',
        'hero-title': '精通圆几何 <br><span class="highlight">AI 驱动教学</span>',
        'hero-usp': '互动动画、AI 引导辅导以及针对 GCSE 的专项练习。',
        'rule1-title': '切线定理', 'rule1-desc': '切线在接触点垂直于半径。',
        'rule2-title': '圆弧定理', 'rule2-desc': '圆心角是圆周角的两倍。',
        'rule3-title': '弦定理', 'rule3-desc': '从圆心到弦的垂线平分该弦。',
        'ads-text': '加入 <strong>CircleMaster Pro</strong> 获取高级 AI 功能！',
        'chat-header': 'AI 几何导师', 'ai-name': '助理: ',
        'chat-welcome': '你好！输入“联系”来向我们发送消息！', 'chat-placeholder': '在此输入...',
        'footer-copy': '© 2026 第33组。保留所有权利。',
        'footer-data': '隐私政策', 'footer-access': '辅助功能', 'footer-contact': '联系我们'
    }
};

let currentLang = 'en';

function changeLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });
    document.getElementById('chat-input').placeholder = translations[currentLang]['chat-placeholder'];
}

// 暗黑模式
document.getElementById('theme-btn').addEventListener('click', function() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    this.innerText = isDark ? translations[currentLang]['btn-theme'] : "☀️ Light Mode";
});

// AI 聊天与表单模拟 (满足 Basics: Form via AI chatbot)
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');
let contactStep = 0; // 0: normal, 1: ask name, 2: ask msg

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim() !== "") {
        const val = chatInput.value;
        renderMsg('You', val);
        chatInput.value = "";

        setTimeout(() => {
            if (val.toLowerCase().includes('contact') || val.includes('联系')) {
                renderMsg('AI', currentLang === 'en' ? "Sure! What is your name?" : "没问题！请问您的名字是？");
                contactStep = 1;
            } else if (contactStep === 1) {
                renderMsg('AI', currentLang === 'en' ? `Nice to meet you, ${val}. What is your message?` : `${val}您好，请问您想对我们说什么？`);
                contactStep = 2;
            } else if (contactStep === 2) {
                renderMsg('AI', currentLang === 'en' ? "Thank you! Your message has been sent to Group 33." : "谢谢！您的信息已成功发送给第33组。");
                contactStep = 0;
            } else {
                renderMsg('AI', currentLang === 'en' ? "I can help with circle theorems! Try asking about 'Tangent'." : "我可以帮你学习圆定理！试着问问“切线”吧。");
            }
        }, 800);
    }
});

function renderMsg(sender, text) {
    const p = document.createElement('p');
    p.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBody.appendChild(p);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// 字号
let fs = 16;
function adjustFontSize(d) {
    fs = Math.min(Math.max(fs + (d * 2), 12), 26);
    document.documentElement.style.setProperty('--font-size-base', fs + 'px');
}

// 在文件末尾添加切换函数
function toggleChat() {
    const chatWidget = document.getElementById('ai-chat-widget');
    const toggleIcon = document.getElementById('toggle-icon');

    if (chatWidget.classList.contains('chat-hidden')) {
        chatWidget.classList.remove('chat-hidden');
        chatWidget.classList.add('chat-visible');
        toggleIcon.innerText = "✕"; // 切换图标
    } else {
        chatWidget.classList.remove('chat-visible');
        chatWidget.classList.add('chat-hidden');
        toggleIcon.innerText = "🤖";
    }
}