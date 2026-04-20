// --- 1. 双语字典 (已全面完善以适配新功能) ---
const translations = {
    'en': {
        // 顶部与无障碍
        'btn-lang': 'EN / 中', 'btn-contrast': '👁️ Contrast', 'btn-theme': '🌙 Dark Mode', 'btn-sound': 'Sound',
        // 导航
        'logo-text': 'CircleMaster', 'nav-home': 'Home', 'nav-game': 'Game', 'nav-quiz': 'Quiz',
        'bc-home': 'Home', 'bc-gallery': 'Gallery',
        // 主页 Hero
        'hero-title': 'Master Circle Geometry <br><span class="highlight">Powered by AI</span>',
        'hero-usp': 'Interactive animations, AI-guided tutoring, and practice.',
        // 学习中心卡片
        'hub-title': 'Interactive Theorem Gallery',
        'rule1-title': 'Tangent-Radius', 'rule1-desc': 'Tangent is perpendicular to radius at contact point.',
        'rule2-title': 'Angle at Center', 'rule2-desc': 'Center angle is twice the angle at circumference.',
        'rule3-title': 'Cyclic Quads', 'rule3-desc': 'Opposite angles sum to 180 degrees.',
        'rule4-title': 'Alternate Segment', 'rule4-desc': 'Angle between tangent and chord equals alternate segment angle.',
        'rule5-title': 'Same Arc Theorem', 'rule5-desc': 'Angles subtended by the same arc are equal.',
        'rule6-title': 'Semi-circle Angle', 'rule6-desc': 'The angle in a semi-circle is always 90 degrees.',
        'btn-learn': 'Explore Detail',
        // 详情页/手风琴内部
        'detail-explanation-title': 'Mathematical Explanation',
        'side-tips': 'Key Takeaways',
        'btn-back': 'Back to Home',
        // 文化板块
        'culture-label': 'Great Mathematicians',
        'meta-nation': 'Nationality', 'meta-era': 'Era', 'meta-intro': 'Brief Intro',
        'val-cn': 'Ancient China', 'val-gr': 'Ancient Greece',
        'culture-zh': 'Calculated π with extreme precision, leading the world for 1000 years.',
        'culture-gr': 'Used the method of exhaustion to approximate π, laying foundations of geometry.',
        // 广告与 Pro
        'pro-title': 'Upgrade to CircleMaster Pro',
        'pro-desc': 'Get unlimited exercises and AI PDF summaries.',
        'pro-btn': 'Join Now',
        // AI 聊天与弹窗
        'chat-header': 'Circle AI Tutor', 'ai-name': 'AI: ',
        'chat-welcome': 'Hi! Type "Contact" to message us!', 'chat-placeholder': 'Type here...',
        'modal-title': 'Confirm?', 'modal-desc': 'Clear all messages?', 'btn-confirm': 'Delete', 'btn-cancel': 'Cancel',
        'footer-copy': '© 2026 Group 33. All rights reserved.',
        'footer-data': 'Data Policy', 'footer-access': 'Accessibility', 'footer-contact': 'Contact Us',
        'zu-name': 'Zu Chongzhi',
        'arch-name': 'Archimedes',
    },
    'zh': {
        // 顶部与无障碍
        'btn-lang': '中 / EN', 'btn-contrast': '👁️ 对比度', 'btn-theme': '🌙 黑夜模式', 'btn-sound': '声音',
        // 导航
        'logo-text': '圆几何大师', 'nav-home': '首页', 'nav-game': '数学游戏', 'nav-quiz': '互动测验',
        'bc-home': '首页', 'bc-gallery': '定理库',
        // 主页 Hero
        'hero-title': '精通圆几何 <br><span class="highlight">由 AI 驱动教学</span>',
        'hero-usp': '互动动画、AI 引导辅导以及针对 GCSE 的练习。',
        // 学习中心卡片
        'hub-title': '互动几何定理库',
        'rule1-title': '切线-半径定理', 'rule1-desc': '切线在接触点垂直于圆的半径。',
        'rule2-title': '圆心角定理', 'rule2-desc': '圆心角是同弧所对圆周角的两倍。',
        'rule3-title': '内接四边形', 'rule3-desc': '圆内接四边形的对角之和为 180 度。',
        'rule4-title': '弦切角定理', 'rule4-desc': '弦切角等于它所夹的弧所对的圆周角。',
        'rule5-title': '同弧圆周角', 'rule5-desc': '同弧所对的所有圆周角都相等。',
        'rule6-title': '半圆圆周角', 'rule6-desc': '直径（或半圆）所对的圆周角恒为 90 度。',
        'btn-learn': '查看详情',
        // 详情页/手风琴内部
        'detail-explanation-title': '几何原理解析',
        'side-tips': '核心要点',
        'btn-back': '返回主页',
        // 文化板块
        'culture-label': '伟大数学家',
        'meta-nation': '国籍', 'meta-era': '生卒/时代', 'meta-intro': '简介',
        'val-cn': '中国古代', 'val-gr': '古希腊',
        'culture-zh': '祖冲之将圆周率精确到小数点后七位，该纪录领先世界一千年。',
        'culture-gr': '阿基米德利用割圆术研究 π，奠定了西方几何学的基础。',
        // 广告与 Pro
        'pro-title': '升级至 CircleMaster Pro',
        'pro-desc': '获取无限次互动练习和 AI 知识点总结。',
        'pro-btn': '立即加入',
        // AI 聊天与弹窗
        'chat-header': 'AI 几何导师', 'ai-name': '助理: ',
        'chat-welcome': '你好！输入“联系”向我们发消息！', 'chat-placeholder': '在此输入...',
        'modal-title': '确认清空？', 'modal-desc': '确定删除聊天记录吗？', 'btn-confirm': '删除', 'btn-cancel': '取消',
        'footer-copy': '© 2026 第33组。保留所有权利。',
        'footer-data': '隐私政策', 'footer-access': '无障碍辅助', 'footer-contact': '联系我们',
        'zu-name': '祖冲之',
        'arch-name': '阿基米德'
    }
};

let currentLang = 'en';

// --- 2. 定理内容数据库 ---
// 1. 包含 6 个定理的完整数据库（自带 SVG 绘图）
const theoremData = {
     'tangent': {
        titleEn: 'Tangent-Radius Theorem', titleZh: '切线-半径定理',
        descEn: 'A tangent is perpendicular to the radius at the point of contact.',
        descZh: '切线在接触点垂直于圆的半径。',
        propsEn: ['Radius ⊥ Tangent', '90° Angle'], propsZh: ['半径垂直于切线', '夹角恒为 90°'],
        svg: `<svg viewBox="0 0 200 200">
            <circle cx="100" cy="80" r="60" stroke="currentColor" fill="none" stroke-width="2"/>
            <line x1="100" y1="80" x2="100" y2="140" stroke="#007bff" stroke-width="3"/>
            <line x1="40" y1="140" x2="160" y2="140" stroke="#ff4757" stroke-width="3"/>
            <rect x="100" y="130" width="10" height="10" fill="none" stroke="#ff4757"/>
            <circle cx="100" cy="80" r="3" fill="currentColor"/>
            <text x="105" y="110" font-size="12" fill="#007bff">Radius</text>
            <text x="140" y="155" font-size="12" fill="#ff4757">Tangent</text>
        </svg>`
    },
    'center-angle': {
        titleEn: 'Angle at Center', titleZh: '圆心角定理',
        descEn: 'The angle at the center is exactly twice the angle at the circumference.',
        descZh: '圆心角的大小正好是同弧所对圆周角的两倍。',
        propsEn: ['Center = 2θ', 'Circumference = θ'], propsZh: ['圆心角 = 2倍圆周角', '对应同一段弧'],
        svg: `<svg viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="70" stroke="currentColor" fill="none" stroke-width="2"/>
            <path d="M40 140 L100 100 L160 140" stroke="#007bff" fill="none" stroke-width="2.5"/>
            <path d="M40 140 L100 35 L160 140" stroke="#ff4757" fill="none" stroke-width="2.5"/>
            <circle cx="100" cy="100" r="3" fill="currentColor"/>
            <text x="92" y="125" font-size="14" fill="#007bff" font-weight="bold">2θ</text>
            <text x="95" y="60" font-size="14" fill="#ff4757" font-weight="bold">θ</text>
        </svg>`
    },
    'cyclic': {
        titleEn: 'Cyclic Quadrilaterals', titleZh: '圆内接四边形',
        descEn: 'Opposite angles of a quadrilateral inscribed in a circle sum to 180°.',
        descZh: '内接四边形的一组对角相加等于 180 度。',
        propsEn: ['∠A + ∠C = 180°', 'Inscribed vertices'], propsZh: ['对角互补', '四个顶点均在圆上'],
        svg: `<svg viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="75" stroke="currentColor" fill="none" stroke-width="2"/>
            <path d="M70 30 L170 80 L130 170 L35 140 Z" stroke="#007bff" fill="#007bff" fill-opacity="0.1" stroke-width="2"/>
            <text x="65" y="45" font-size="12" font-weight="bold" fill="currentColor">A</text>
            <text x="115" y="160" font-size="12" font-weight="bold" fill="currentColor">C</text>
            <text x="70" y="190" font-size="11" fill="#007bff">A + C = 180°</text>
        </svg>`
    },
    'alternate': {
        titleEn: 'Alternate Segment', titleZh: '弦切角定理',
        descEn: 'The angle between tangent and chord equals the angle in the alternate segment.',
        descZh: '弦切角等于它所夹的弧所对的圆周角。',
        propsEn: ['∠x = ∠y', 'Tangent & Chord'], propsZh: ['弦切角相等', '涉及切线与内接三角形'],
        svg: `<svg viewBox="0 0 200 200">
            <circle cx="100" cy="85" r="65" stroke="currentColor" fill="none" stroke-width="2"/>
            <path d="M100 150 L165 85 L45 60 Z" stroke="#007bff" fill="none" stroke-width="2"/>
            <line x1="40" y1="150" x2="160" y2="150" stroke="#ff4757" stroke-width="3"/>
            <path d="M100 150 L115 150 A 15 15 0 0 0 110 140" fill="none" stroke="#ff4757" stroke-width="2"/>
            <text x="115" y="145" font-size="14" fill="#ff4757">y</text>
            <text x="45" y="80" font-size="14" fill="#007bff">x</text>
            <text x="75" y="185" font-size="11" fill="currentColor">Angle y = Angle x</text>
        </svg>`
    },
    'same-arc': {
        titleEn: 'Same Arc Theorem', titleZh: '同弧圆周角',
        descEn: 'All angles subtended by the same arc at the circumference are equal.',
        descZh: '同一段弧所对应的所有圆周角大小都相等。',
        propsEn: ['Constant Angle', 'Same Arc'], propsZh: ['角度相等', '对应同一段红色弧'],
        svg: `<svg viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="75" stroke="currentColor" fill="none" stroke-width="2"/>
            <path d="M40 80 L100 175 L160 80" stroke="#007bff" fill="none" stroke-width="2" opacity="0.4"/>
            <path d="M40 80 L100 25 L160 80" stroke="#007bff" fill="none" stroke-width="2"/>
            <text x="95" y="50" font-size="14" fill="#007bff">α</text>
            <text x="95" y="160" font-size="14" fill="#007bff" opacity="0.6">α</text>
            <path d="M40 80 A 75 75 0 0 0 160 80" stroke="#ff4757" stroke-width="4" fill="none"/>
        </svg>`
    },
    'semicircle': {
        titleEn: 'Semi-circle Angle', titleZh: '半圆圆周角',
        descEn: 'The angle inscribed in a semi-circle is always 90°.',
        descZh: '半圆（或直径）所对应的圆周角永远是 90 度。',
        propsEn: ['Diameter as base', 'Right angle'], propsZh: ['直径为底边', '始终是直角'],
        svg: `<svg viewBox="0 0 200 200">
            <path d="M25 100 A 75 75 0 1 1 175 100" stroke="currentColor" fill="none" stroke-dasharray="3"/>
            <path d="M25 100 A 75 75 0 0 1 175 100" stroke="currentColor" fill="none" stroke-width="2"/>
            <line x1="25" y1="100" x2="175" y2="100" stroke="currentColor" stroke-width="2"/>
            <path d="M25 100 L100 25 L175 100" stroke="#007bff" fill="none" stroke-width="2.5"/>
            <rect x="95" y="25" width="10" height="10" fill="none" stroke="#ff4757" transform="rotate(45 100 25)"/>
            <text x="90" y="55" font-size="12" fill="#ff4757" font-weight="bold">90°</text>
            <circle cx="100" cy="100" r="3" fill="currentColor"/>
        </svg>`
    }
};

// --- 3. 核心功能函数 ---
function changeLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';

    // 1. 翻译所有带有 data-i18n 的静态标签
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });

    // 2. 翻译输入框占位符
    document.getElementById('chat-input').placeholder = translations[currentLang]['chat-placeholder'];

    // 3. 【新增】如果正在详情页，同步翻译面包屑和手风琴内容
    if (document.getElementById('detail-view').style.display === 'block') {
        renderTheorems(); // 重新渲染列表以更新语言

        // 找到当前打开的那个项的 ID
        const activeItem = document.querySelector('.accordion-item.active');
        if (activeItem) {
            const id = activeItem.id.replace('acc-', '');
            const isEn = (currentLang === 'en');
            // 更新面包屑里的名字
            document.getElementById('active-theorem-name').innerText = isEn ? theoremData[id].titleEn : theoremData[id].titleZh;
            // 重新展开它
            toggleAccordion(id);
        }
    }
}

// 1. 核心：点击首页卡片进入详情页
function goToDetail(id) {
    document.getElementById('main-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'block';

    const isEn = (currentLang === 'en');
    // 初始化面包屑里的定理名字
    document.getElementById('active-theorem-name').innerText = isEn ? theoremData[id].titleEn : theoremData[id].titleZh;

    renderTheorems();
    setTimeout(() => {
        toggleAccordion(id);
    }, 50);
}

// 2. 渲染手风琴列表
function renderTheorems() {
    const container = document.getElementById('theorems-accordion-container');
    if (!container) return;

    container.innerHTML = ''; // 清空旧内容

    Object.keys(theoremData).forEach(key => {
        const item = theoremData[key];
        const isEn = (currentLang === 'en');
        const title = isEn ? item.titleEn : item.titleZh;
        const desc = isEn ? item.descEn : item.descZh;
        const props = isEn ? item.propsEn : item.propsZh;

        // ... 在 renderTheorems 函数内 ...
const html = `
    <div class="accordion-item" id="acc-${key}">
        <div class="accordion-header" onclick="toggleAccordion('${key}')">
            <span>${isEn ? item.titleEn : item.titleZh}</span>
            <span class="arrow-icon">▼</span>
        </div>
        <div class="accordion-content">
            <div class="demo-container">
                ${item.svg}
            </div>
            <div class="info-container">
                <h3 style="color:var(--primary-blue); margin-top:0;">${isEn ? 'Definition' : '几何定义'}</h3>
                <p style="margin-bottom:15px; font-size:0.95rem;">${isEn ? item.descEn : item.descZh}</p>
                <h3 style="color:var(--primary-blue);">${isEn ? 'Key Takeaways' : '核心要点'}</h3>
                <div class="prop-list-pro">
                    ${(isEn ? item.propsEn : item.propsZh).map(p => `<div class="property-item">✅ ${p}</div>`).join('')}
                </div>
            </div>
        </div>
    </div>
`;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// 展开/折叠逻辑 (修正 Iframe 加载)
function toggleAccordion(key) {
    const targetItem = document.getElementById(`acc-${key}`);
    if (!targetItem) return;

    const isAlreadyOpen = targetItem.classList.contains('active');

    // 关闭所有并清除 iframe 释放内存
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        const box = item.querySelector('.demo-container');
        if (box) box.innerHTML = '';
    });

    if (!isAlreadyOpen) {
        targetItem.classList.add('active');
        const box = document.getElementById(`iframe-box-${key}`);
        if (box) {
            // 添加 Loading 提示文字
            box.innerHTML = '<div style="padding:20px; text-align:center;">Loading Geometry Interactive...</div>';

            // 插入真正的 iframe
            const iframe = document.createElement('iframe');
            iframe.src = theoremData[key].url;
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";
            iframe.setAttribute('allowfullscreen', 'true');

            box.innerHTML = ''; // 清除 loading
            box.appendChild(iframe);
        }

        setTimeout(() => {
            targetItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// 返回主页
function hideDetail() {
    document.getElementById('main-view').style.display = 'block';
    document.getElementById('detail-view').style.display = 'none';
    window.scrollTo(0, 0);
}

// 修改原有的返回函数
function hideDetail() {
    document.getElementById('main-view').style.display = 'block';
    document.getElementById('detail-view').style.display = 'none';
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

// 切换隐私政策模态框
function togglePrivacyModal(show) {
    const modal = document.getElementById('privacy-modal');
    if (show) {
        // 自动根据当前语言显示内容 (假设你的语言变量是 currentLang)
        const isZh = (typeof currentLang !== 'undefined' && currentLang === 'zh');
        document.querySelector('.lang-en').style.display = isZh ? 'none' : 'block';
        document.querySelector('.lang-zh').style.display = isZh ? 'block' : 'none';

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // 禁止背景滚动
    } else {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// 触发 AI 清空确认 (绑定到垃圾桶图标)
function showClearChatConfirm() {
    document.getElementById('confirm-modal').style.display = 'flex';
}

function toggleConfirmModal(show) {
    document.getElementById('confirm-modal').style.display = show ? 'flex' : 'none';
}

// 真正执行清空
function executeClearChat() {
    const chatBody = document.querySelector('.chat-body');
    if (chatBody) {
        chatBody.innerHTML = ''; // 清空内容
        // 发送一条 AI 初始欢迎语
        const welcome = (typeof currentLang !== 'undefined' && currentLang === 'zh')
            ? "AI: 历史记录已清空。"
            : "AI: Chat history cleared.";
        chatBody.innerHTML = `<p>${welcome}</p>`;
    }
    toggleConfirmModal(false);
}

function confirmClearChat() { document.getElementById('confirm-modal').style.display = 'flex'; }
function closeModal() { document.getElementById('confirm-modal').style.display = 'none'; }
function executeClear() { document.getElementById('chat-body').innerHTML = ""; closeModal(); }

function renderTheorems() {
    const container = document.getElementById('theorems-accordion-container');
    container.innerHTML = '';

    Object.keys(theoremData).forEach(key => {
        const item = theoremData[key];
        const isEn = (currentLang === 'en');
        const html = `
            <div class="accordion-item" id="acc-${key}">
                <div class="accordion-header" onclick="toggleAccordion('${key}')">
                    <span>${isEn ? item.titleEn : item.titleZh}</span>
                    <span>▼</span>
                </div>
                <div class="accordion-content">
                    <div class="demo-container">
                        ${item.svg}
                    </div>
                    <div class="info-container">
                        <h3 style="color:var(--primary-blue)">${isEn ? 'Definition' : '几何定义'}</h3>
                        <p>${isEn ? item.descEn : item.descZh}</p>
                        <h3 style="color:var(--primary-blue); margin-top:20px;">${isEn ? 'Key Takeaways' : '核心要点'}</h3>
                        <div class="prop-list-pro">
                            ${(isEn ? item.propsEn : item.propsZh).map(p => `<div class="property-item">✅ ${p}</div>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

function toggleAccordion(key) {
    const targetItem = document.getElementById(`acc-${key}`);
    const isAlreadyOpen = targetItem.classList.contains('active');
    document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
    if (!isAlreadyOpen) {
        targetItem.classList.add('active');
        setTimeout(() => targetItem.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
}

function goToDetail(id) {
    document.getElementById('main-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'block';
    renderTheorems();
    setTimeout(() => toggleAccordion(id), 50);
}

function hideDetail() {
    document.getElementById('main-view').style.display = 'block';
    document.getElementById('detail-view').style.display = 'none';
    window.scrollTo(0, 0);
}
/* =========================================
   Version 4 核心逻辑：隐私政策、二次确认、AI 交互
   ========================================= */

// 1. 隐私政策模态框逻辑 (对应评分标准：Ethical & Transparent Data Policy)
function togglePrivacyModal(show) {
    const modal = document.getElementById('privacy-modal');
    const body = document.getElementById('privacy-body');
    if (!modal || !body) return;

    if (show) {
        const isZh = (currentLang === 'zh');
        // 动态生成内容，确保语言同步
        body.innerHTML = isZh ? `
            <h2 style="color:var(--primary-blue); margin-bottom:15px;">数据隐私政策</h2>
            <p>本网站 CircleMaster 仅用于教学演示。我们承诺：</p>
            <ul style="padding-left:20px; line-height:1.8;">
                <li><strong>数据安全：</strong> AI 对话为实时处理，不会在服务器上进行存储或记录。</li>
                <li><strong>个人隐私：</strong> 我们不会收集、销售或共享任何用户个人信息。</li>
                <li><strong>Cookies：</strong> 我们仅使用本地存储记录您的无障碍偏好（如暗黑模式）。</li>
                <li><strong>合规联系：</strong> 2024213574@bupt.cn</li>
            </ul>
        ` : `
            <h2 style="color:var(--primary-blue); margin-bottom:15px;">Data Privacy Policy</h2>
            <p>CircleMaster is for educational purposes only. We promise:</p>
            <ul style="padding-left:20px; line-height:1.8;">
                <li><strong>AI Security:</strong> Conversations are processed real-time and NOT stored.</li>
                <li><strong>Privacy:</strong> We do not collect, sell, or share any personal data.</li>
                <li><strong>Cookies:</strong> We only use local storage to save your theme preferences.</li>
                <li><strong>Accountability:</strong> 2024213574@bupt.cn</li>
            </ul>
        `;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // 弹窗时锁定背景滚动
    } else {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢复滚动
    }
}

// 2. AI 聊天清空二次确认逻辑 (对应评分标准：Tolerance & Safety)
function confirmClearChat() {
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.style.display = 'none';
}

function executeClear() {
    const chatBody = document.getElementById('chat-body');
    if (chatBody) {
        // 清空内容并保留一个专业提示
        const welcome = (currentLang === 'zh')
            ? "<strong>AI:</strong> 对话记录已清空。您可以继续提问。"
            : "<strong>AI:</strong> Chat history cleared. How can I help you again?";
        chatBody.innerHTML = `<p>${welcome}</p>`;
    }
    closeModal();
}

// 3. AI 关键词检测 (检测 "Contact" 或 "联系")
const chatInputBox = document.getElementById('chat-input');
if(chatInputBox) {
    chatInputBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim() !== "") {
            const userInput = this.value.toLowerCase();

            // 如果输入包含关键词，在 0.6 秒后自动回复 BUPT 邮箱
            if (userInput.includes('contact') || userInput.includes('联系')) {
                setTimeout(() => {
                    const reply = (currentLang === 'zh')
                        ? "AI: 我们的首席设计师邮箱是 2024213574@bupt.cn"
                        : "AI: You can contact our lead designer at 2024213574@bupt.cn";

                    const p = document.createElement('p');
                    p.innerHTML = `<span style="color:var(--primary-blue); font-weight:bold;">${reply}</span>`;
                    document.getElementById('chat-body').appendChild(p);

                    // 自动滚动到底部
                    const chatBody = document.getElementById('chat-body');
                    chatBody.scrollTop = chatBody.scrollHeight;
                }, 600);
            }
        }
    });
}

function openFooterModal(type) {
    const modal = document.getElementById('privacy-modal');
    const body = document.getElementById('privacy-body');
    if (!modal || !body) return;

    const isZh = (currentLang === 'zh');

    if (type === 'data') {
        // 数据政策内容 (你之前的内容)
        body.innerHTML = isZh ? `
            <h2>数据隐私政策</h2>
            <p>CircleMaster 仅用于教学演示。我们承诺：</p>
            <ul>
                <li><strong>数据安全：</strong> AI 对话实时处理，不存储。</li>
                <li><strong>个人隐私：</strong> 不收集、不共享任何用户信息。</li>
                <li><strong>联系邮箱：</strong> 2024213574@bupt.cn</li>
            </ul>
        ` : `
            <h2>Data Privacy Policy</h2>
            <p>CircleMaster is for educational purposes only. We promise:</p>
            <ul>
                <li><strong>AI Security:</strong> Conversations are processed real-time and NOT stored.</li>
                <li><strong>Privacy:</strong> We do not collect or share any personal data.</li>
                <li><strong>Accountability:</strong> 2024213574@bupt.cn</li>
            </ul>
        `;
    } else if (type === 'access') {
        // 无障碍说明 (对应评分标准：Inclusive Design)
        body.innerHTML = isZh ? `
            <h2>无障碍辅助说明</h2>
            <p>我们致力于为所有人提供平等的学习机会：</p>
            <ul>
                <li><strong>视觉辅助：</strong> 支持黑夜模式与高对比度切换。</li>
                <li><strong>个性化：</strong> 字体大小可自由调节。</li>
                <li><strong>标准合规：</strong> 努力符合 Web 内容无障碍指南 (WCAG)。</li>
            </ul>
        ` : `
            <h2>Accessibility Statement</h2>
            <p>We are committed to inclusive learning for everyone:</p>
            <ul>
                <li><strong>Visual Aid:</strong> Supports Dark Mode and High Contrast toggles.</li>
                <li><strong>Customization:</strong> Adjustable font sizes for clear reading.</li>
                <li><strong>Compliance:</strong> Striving to meet WCAG accessibility standards.</li>
            </ul>
        `;
    } else if (type === 'contact') {
        // 联系我们 (对应评分标准：Ethical/Contact)
        body.innerHTML = isZh ? `
            <h2>联系我们</h2>
            <p>如果您有任何疑问或反馈，请通过以下方式联系：</p>
            <ul>
                <li><strong>首席设计师邮箱：</strong> 2024213574@bupt.cn</li>
                <li><strong>响应时间：</strong> 我们将在 24 小时内回复。</li>
                <li><strong>GitHub：</strong> 欢迎在项目仓库提交 Issue。</li>
            </ul>
        ` : `
            <h2>Contact Us</h2>
            <p>For any inquiries or feedback, please reach out to us:</p>
            <ul>
                <li><strong>Lead Designer Email:</strong> 2024213574@bupt.cn</li>
                <li><strong>Response Time:</strong> We will respond within 24 hours.</li>
                <li><strong>GitHub:</strong> Feel free to raise an issue in our repository.</li>
            </ul>
        `;
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 记得保留关闭函数
function togglePrivacyModal(show) {
    if (!show) {
        document.getElementById('privacy-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}