// --- 1. 双语字典 (已修复逗号错误) ---
const translations = {
    'en': {
        'btn-lang': 'EN / 中', 'btn-contrast': '👁️ Contrast', 'btn-theme': '🌙 Dark Mode', 'btn-sound': 'Sound',
        'logo-text': 'CircleMaster', 'nav-home': 'Home', 'nav-game': 'Game', 'nav-quiz': 'Quiz',
        'bc-home': 'Home', 'bc-current': 'Homepage', 'bc-gallery': 'Gallery',
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
        'modal-title': 'Confirm Clear?', 'modal-desc': 'Delete all messages?', 'btn-confirm': 'Delete', 'btn-cancel': 'Cancel', // 此处补齐了逗号
        'hub-title': 'Interactive Theorem Gallery',
        'rule4-title': 'Alternate Segment',
        'rule4-desc': 'Angle between tangent and chord equals alternate segment angle.',
        'btn-tip': 'Pro Tip',
        'culture-title': 'The Quest for Pi: East Meets West',
        'culture-zh': 'Calculated π with extreme precision, leading the world for 1000 years.',
        'culture-gr': 'Used polygons to approximate π, laying the foundation for geometry.',
        'btn-learn': 'Explore Detail',
        'rule5-title': 'Same Arc Theorem',
        'rule5-desc': 'Angles subtended by the same arc at the circumference are equal.',
        'rule6-title': 'Semi-circle Angle',
        'rule6-desc': 'The angle in a semi-circle is always 90 degrees.',
        'pro-title': 'Upgrade to CircleMaster Pro',
        'pro-desc': 'Get unlimited interactive exercises and AI PDF summaries.',
        'pro-btn': 'Join Now',
        'culture-label': 'Great Mathematicians',
        'meta-nation': 'Nationality', 'meta-era': 'Era', 'meta-intro': 'Brief Intro',
        'val-cn': 'Ancient China', 'val-gr': 'Ancient Greece',
        'btn-back': 'Back to Gallery',
        'detail-explanation-title': 'Mathematical Explanation',
        'side-tips': 'Key Takeaways'
    },
    'zh': {
        'btn-lang': '中 / EN', 'btn-contrast': '👁️ 对比度', 'btn-theme': '🌙 黑夜模式', 'btn-sound': '声音',
        'logo-text': '圆几何大师', 'nav-home': '首页', 'nav-game': '数学游戏', 'nav-quiz': '互动测验',
        'bc-home': '首页', 'bc-current': '主页', 'bc-gallery': '定理库',
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
        'modal-title': '确认清空？', 'modal-desc': '确定删除记录吗？', 'btn-confirm': '删除', 'btn-cancel': '取消', // 此处补齐了逗号
        'hub-title': '互动几何定理库',
        'rule4-title': '弦切角定理',
        'rule4-desc': '弦切角等于它所夹的弧所对的圆周角。',
        'btn-tip': '学习要点',
        'culture-title': '追寻 π 的足迹：东西方文化的交汇',
        'culture-zh': '祖冲之将圆周率精确到小数点后七位，该纪录领先世界一千年。',
        'culture-gr': '阿基米德利用多边形逼近法研究 π，奠定了西方几何学基础。',
        'btn-learn': '查看详情',
        'rule5-title': '同弧圆周角定理',
        'rule5-desc': '同弧所对的圆周角相等。',
        'rule6-title': '直径所对圆周角',
        'rule6-desc': '直径（或半圆）所对的圆周角恒为 90 度。',
        'pro-title': '升级至 CircleMaster Pro',
        'pro-desc': '获取无限次互动练习和 AI 知识点总结。',
        'pro-btn': '立即加入',
        'culture-label': '数学家志',
        'meta-nation': '国籍', 'meta-era': '生卒/时代', 'meta-intro': '简介',
        'val-cn': '中国古代', 'val-gr': '古希腊',
        'btn-back': '返回画廊',
        'detail-explanation-title': '几何原理解析',
        'side-tips': '核心要点'
    }
};

let currentLang = 'en';

// --- 2. 定理内容数据库 ---
const theoremData = {
    'tangent': { titleEn: 'Tangent-Radius Theorem', titleZh: '切线-半径定理', url: 'https://www.geogebra.org/material/iframe/id/awh77z7v', descEn: 'Tangent is perpendicular to radius.', descZh: '圆的切线垂直于过切点的半径。', propsEn: ['90° at contact point'], propsZh: ['切点处角度为 90 度'] },
    'center-angle': { titleEn: 'Angle at Center', titleZh: '圆心角定理', url: 'https://www.geogebra.org/material/iframe/id/r3muezkv', descEn: 'Center angle is 2x circumference angle.', descZh: '同弧所对圆心角是圆周角的两倍。', propsEn: ['Must be same arc'], propsZh: ['必须对应同一段弧'] },
    'cyclic': { titleEn: 'Cyclic Quadrilaterals', titleZh: '圆内接四边形', url: 'https://www.geogebra.org/material/iframe/id/vms8ybdb', descEn: 'Opposite angles add to 180°.', descZh: '内接四边形对角互补。', propsEn: ['Sum = 180°'], propsZh: ['对角之和为 180 度'] },
    'alternate': { titleEn: 'Alternate Segment', titleZh: '弦切角定理', url: 'https://www.geogebra.org/material/iframe/id/mfq7z7yq', descEn: 'Angle between tangent and chord.', descZh: '弦切角等于圆周角。', propsEn: ['Tangent & Chord'], propsZh: ['涉及切线与弦'] },
    'same-arc': { titleEn: 'Same Arc Theorem', titleZh: '同弧圆周角', url: 'https://www.geogebra.org/material/iframe/id/fswy3uwy', descEn: 'Angles from same arc are equal.', descZh: '同弧所对圆周角相等。', propsEn: ['Bow-tie shape'], propsZh: ['视觉呈领结状'] },
    'semicircle': { titleEn: 'Semi-circle Angle', titleZh: '半圆圆周角', url: 'https://www.geogebra.org/material/iframe/id/vms8ybdb', descEn: 'Angle in semi-circle is 90°.', descZh: '直径所对圆周角为 90 度。', propsEn: ['Diameter as base'], propsZh: ['直径作为斜边'] }
};

// --- 3. 核心功能函数 ---

function changeLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });
    // 翻译输入框占位符
    document.getElementById('chat-input').placeholder = translations[currentLang]['chat-placeholder'];
}

function goToDetail(id) {
    const data = theoremData[id];
    if(!data) return;

    document.getElementById('main-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'block';

    const isEn = (currentLang === 'en');
    document.getElementById('breadcrumb-theorem').innerText = isEn ? data.titleEn : data.titleZh;
    document.getElementById('detail-title').innerText = isEn ? data.titleEn : data.titleZh;
    document.getElementById('detail-desc').innerText = isEn ? data.descEn : data.descZh;

    // 加载动画并插入iframe
    document.getElementById('iframe-loader').style.display = 'flex';
    document.getElementById('detail-frame-container').innerHTML =
        `<iframe src="${data.url}" allowfullscreen style="width:100%; height:100%; min-height:500px; border:none;" onload="document.getElementById('iframe-loader').style.display='none'"></iframe>`;

    // 填充列表
    const props = isEn ? data.propsEn : data.propsZh;
    document.getElementById('detail-properties').innerHTML = props.map(p => `<div class="property-item">✅ ${p}</div>`).join('');

    window.scrollTo(0, 0);
}

function hideDetail() {
    document.getElementById('main-view').style.display = 'block';
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('detail-frame-container').innerHTML = '';
}

function toggleContrast() {
    const isHigh = document.documentElement.getAttribute('data-a11y') === 'high-contrast';
    isHigh ? document.documentElement.removeAttribute('data-a11y') : document.documentElement.setAttribute('data-a11y', 'high-contrast');
}

function toggleSound() {
    const icon = document.getElementById('sound-icon');
    icon.innerText = (icon.innerText === "🔊") ? "🔇" : "🔊";
}

function toggleChat() {
    const chat = document.getElementById('ai-chat-widget');
    chat.style.display = (chat.style.display === 'none') ? 'block' : 'none';
}

// 暗黑模式切换
document.getElementById('theme-btn').onclick = function() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    this.innerText = newTheme === 'dark' ? "☀️ Light Mode" : translations[currentLang]['btn-theme'];
};

function adjustFontSize(d) {
    const root = document.documentElement;
    let size = parseInt(window.getComputedStyle(root).getPropertyValue('--font-size-base')) || 16;
    size = Math.min(Math.max(size + (d * 2), 12), 26);
    root.style.setProperty('--font-size-base', size + 'px');
}

function alertDataPolicy() {
    alert(currentLang === 'en' ? "Data Policy: No personal data collected." : "数据政策：不收集任何个人信息。");
}

function confirmClearChat() { document.getElementById('confirm-modal').style.display = 'flex'; }
function closeModal() { document.getElementById('confirm-modal').style.display = 'none'; }
function executeClear() { document.getElementById('chat-body').innerHTML = ""; closeModal(); }