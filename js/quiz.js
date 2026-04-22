(function () {
    "use strict";

    const questionBank = {
        zh: {
            basic: [
                {
                    question: "若圆的半径为 5，直径是多少？",
                    answer: "10",
                    analysis: "直径 = 2 × 半径，所以 2 × 5 = 10。"
                },
                {
                    question: "半径为 7 的圆，周长约为？(π≈3.14)",
                    answer: "43.96",
                    analysis: "周长 = 2πr = 2 × 3.14 × 7 = 43.96"
                },
                {
                    question: "一个圆的直径是 12，半径是？",
                    answer: "6",
                    analysis: "半径 = 直径 ÷ 2 = 6"
                },
                {
                    question: "圆的半径是 3，面积是多少？(π≈3.14)",
                    answer: "28.26",
                    analysis: "面积 = πr² = 3.14 × 9 = 28.26"
                },
                {
                    question: "直径为 10 的圆，周长是多少？(π≈3.14)",
                    answer: "31.4",
                    analysis: "周长 = πd = 3.14 × 10 = 31.4"
                },
                {
                    question: "半径为 2 的圆，直径是多少？",
                    answer: "4",
                    analysis: "直径 = 2 × 半径 = 2 × 2 = 4"
                }
            ],
            normal: [
                {
                    question: "半径为 4 的圆面积是多少？(π≈3.14)",
                    answer: "50.24",
                    analysis: "面积 = πr² = 3.14 × 16 = 50.24"
                },
                {
                    question: "周长 31.4 的圆，半径大约是多少？(π≈3.14)",
                    answer: "5",
                    analysis: "C=2πr => 31.4=2×3.14×r => r=5"
                },
                {
                    question: "一个扇形圆心角90°，半径6，弧长是多少？(π≈3.14)",
                    answer: "9.42",
                    analysis: "弧长 = (90/360)×2π×6 = 0.25×37.68 = 9.42"
                },
                {
                    question: "半径为 8 的圆面积是多少？(π≈3.14)",
                    answer: "200.96",
                    analysis: "面积 = πr² = 3.14 × 64 = 200.96"
                },
                {
                    question: "周长 62.8 的圆，半径是多少？(π≈3.14)",
                    answer: "10",
                    analysis: "C=2πr => 62.8=2×3.14×r => r=10"
                },
                {
                    question: "扇形圆心角120°，半径5，弧长是多少？(π≈3.14)",
                    answer: "10.47",
                    analysis: "弧长 = (120/360)×2π×5 = (1/3)×31.4 = 10.47"
                }
            ],
            hard: [
                {
                    question: "圆环外半径8，内半径3，求圆环面积。(π≈3.14)",
                    answer: "172.7",
                    analysis: "S = π(R² - r²) = 3.14×(64-9)=3.14×55=172.7"
                },
                {
                    question: "已知扇形面积15.7，半径5，求圆心角度数(π≈3.14)",
                    answer: "72",
                    analysis: "扇形面积=(n/360)×πr² => 15.7=(n/360)×78.5 => n=72"
                },
                {
                    question: "两个同心圆，外圆半径10，内圆半径6，圆环面积是多少？(π≈3.14)",
                    answer: "219.8",
                    analysis: "S = π(R² - r²) = 3.14×(100-36)=3.14×64=219.8"
                },
                {
                    question: "扇形面积50.24，半径8，圆心角是多少度？(π≈3.14)",
                    answer: "90",
                    analysis: "扇形面积=(n/360)×πr² => 50.24=(n/360)×200.96 => n=90"
                },
                {
                    question: "圆环外径16，内径10，圆环面积是多少？(π≈3.14)",
                    answer: "141.3",
                    analysis: "外半径=8，内半径=5，S=π(64-25)=3.14×39=141.3"
                },
                {
                    question: "已知弧长18.84，半径6，圆心角是多少度？(π≈3.14)",
                    answer: "180",
                    analysis: "弧长=(n/360)×2πr => 18.84=(n/360)×37.68 => n=180"
                }
            ]
        },
        en: {
            basic: [
                {
                    question: "If the radius of a circle is 5, what is the diameter?",
                    answer: "10",
                    analysis: "Diameter = 2 × radius, so 2 × 5 = 10."
                },
                {
                    question: "A circle has a radius of 7. What is its circumference? (π≈3.14)",
                    answer: "43.96",
                    analysis: "Circumference = 2πr = 2 × 3.14 × 7 = 43.96"
                },
                {
                    question: "A circle has a diameter of 12. What is the radius?",
                    answer: "6",
                    analysis: "Radius = diameter ÷ 2 = 6"
                },
                {
                    question: "What is the area of a circle with radius 3? (π≈3.14)",
                    answer: "28.26",
                    analysis: "Area = πr² = 3.14 × 9 = 28.26"
                },
                {
                    question: "What is the circumference of a circle with diameter 10? (π≈3.14)",
                    answer: "31.4",
                    analysis: "Circumference = πd = 3.14 × 10 = 31.4"
                },
                {
                    question: "What is the diameter of a circle with radius 2?",
                    answer: "4",
                    analysis: "Diameter = 2 × radius = 2 × 2 = 4"
                }
            ],
            normal: [
                {
                    question: "What is the area of a circle with radius 4? (π≈3.14)",
                    answer: "50.24",
                    analysis: "Area = πr² = 3.14 × 16 = 50.24"
                },
                {
                    question: "A circle has a circumference of 31.4. What is its radius? (π≈3.14)",
                    answer: "5",
                    analysis: "C=2πr => 31.4=2×3.14×r => r=5"
                },
                {
                    question: "A sector has a central angle of 90° and radius 6. What is the arc length? (π≈3.14)",
                    answer: "9.42",
                    analysis: "Arc length = (90/360)×2π×6 = 0.25×37.68 = 9.42"
                },
                {
                    question: "What is the area of a circle with radius 8? (π≈3.14)",
                    answer: "200.96",
                    analysis: "Area = πr² = 3.14 × 64 = 200.96"
                },
                {
                    question: "A circle has a circumference of 62.8. What is its radius? (π≈3.14)",
                    answer: "10",
                    analysis: "C=2πr => 62.8=2×3.14×r => r=10"
                },
                {
                    question: "A sector has a central angle of 120° and radius 5. What is the arc length? (π≈3.14)",
                    answer: "10.47",
                    analysis: "Arc length = (120/360)×2π×5 = (1/3)×31.4 = 10.47"
                }
            ],
            hard: [
                {
                    question: "A ring has an outer radius of 8 and an inner radius of 3. What is the area? (π≈3.14)",
                    answer: "172.7",
                    analysis: "S = π(R² - r²) = 3.14×(64-9)=3.14×55=172.7"
                },
                {
                    question: "A sector has an area of 15.7 and radius 5. What is the central angle? (π≈3.14)",
                    answer: "72",
                    analysis: "Sector area=(n/360)×πr² => 15.7=(n/360)×78.5 => n=72"
                },
                {
                    question: "Two concentric circles have outer radius 10 and inner radius 6. What is the ring area? (π≈3.14)",
                    answer: "219.8",
                    analysis: "S = π(R² - r²) = 3.14×(100-36)=3.14×64=219.8"
                },
                {
                    question: "A sector has an area of 50.24 and radius 8. What is the central angle? (π≈3.14)",
                    answer: "90",
                    analysis: "Sector area=(n/360)×πr² => 50.24=(n/360)×200.96 => n=90"
                },
                {
                    question: "A ring has outer diameter 16 and inner diameter 10. What is the area? (π≈3.14)",
                    answer: "141.3",
                    analysis: "Outer radius=8, inner radius=5, S=π(64-25)=3.14×39=141.3"
                },
                {
                    question: "An arc has length 18.84 and radius 6. What is the central angle? (π≈3.14)",
                    answer: "180",
                    analysis: "Arc length=(n/360)×2πr => 18.84=(n/360)×37.68 => n=180"
                }
            ]
        }
    };

    const translations = {
        en: {
            'btn-lang': 'EN / 中',
            'btn-contrast': 'Contrast',
            'logo-text': 'CircleMaster',
            'nav-home': 'Home',
            'nav-game': 'Game',
            'nav-quiz': 'Quiz',
            'bc-home': 'Home',
            'bc-current': 'Quiz',
            'page-title': 'CircleMaster - Interactive Geometry Learning',
            'theme-dark': 'Dark Mode',
            'theme-light': 'Light Mode',
            'audio-on': 'Sound On',
            'audio-off': 'Sound Off',
            'nav-toggle-label': 'Menu',
            'modal-close': 'OK',
            'footer-copy': '© 2026 25/26_EBU5315_G19. All rights reserved.',
            'footer-data': 'Data Policy',
            'footer-access': 'Accessibility',
            'footer-contact': 'Contact Us',
            'level-legend': 'Level',
            'level-basic': 'Basic',
            'level-normal': 'Normal',
            'level-hard': 'Hard',
            'btn-next': 'Next',
            'btn-analysis': 'Analysis',
            'btn-feedback': 'Feedback',
            'answer-placeholder': 'Enter your answer',
            'answer-aria': 'Enter your answer',
            'quiz-empty': '[ Quiz Area ]',
            'quiz-no-questions': 'No questions available right now.',
            'feedback-no-question': 'No question available for feedback.',
            'feedback-empty': 'Please enter an answer first, then check feedback.',
            'feedback-correct': 'Correct! Keep it up.',
            'feedback-wrong': 'Incorrect. Correct answer: {answer}',
            'analysis-text': 'Analysis: {analysis}',
            'chat-reply-contact': 'You can reach the team at 2024213571@bupt.cn.',
            'chat-reply-default': 'Use the shared footer links for policies, accessibility details, and contact information.'
        },
        zh: {
            'btn-lang': '中 / EN',
            'btn-contrast': '对比度',
            'logo-text': '圆几何大师',
            'nav-home': '首页',
            'nav-game': '游戏',
            'nav-quiz': '测验',
            'bc-home': '首页',
            'bc-current': '测验',
            'page-title': 'CircleMaster - 圆几何互动学习',
            'theme-dark': '黑夜模式',
            'theme-light': '明亮模式',
            'audio-on': '声音开启',
            'audio-off': '声音关闭',
            'nav-toggle-label': '菜单',
            'modal-close': '确定',
            'footer-copy': '© 2026 25/26_EBU5315_G19. 保留所有权利。',
            'footer-data': '数据政策',
            'footer-access': '无障碍说明',
            'footer-contact': '联系我们',
            'level-legend': '难度',
            'level-basic': '基础',
            'level-normal': '进阶',
            'level-hard': '挑战',
            'btn-next': '下一题',
            'btn-analysis': '解析',
            'btn-feedback': '反馈',
            'answer-placeholder': '请输入你的答案',
            'answer-aria': '请输入你的答案',
            'quiz-empty': '[ 测验区 ]',
            'quiz-no-questions': '当前暂无题目。',
            'feedback-no-question': '当前没有可反馈的题目。',
            'feedback-empty': '请先输入答案，然后再查看反馈。',
            'feedback-correct': '你答对了，继续保持。',
            'feedback-wrong': '答案不对，正确答案是：{answer}',
            'analysis-text': '解析：{analysis}',
            'chat-reply-contact': '你可以通过 2024213571@bupt.cn 联系团队。',
            'chat-reply-default': '你可以通过页脚的共享链接查看数据政策、无障碍说明和联系方式。'
        }
    };

    const state = {
        currentLang: 'en',
        currentLevel: 'basic',
        currentQuestions: [],
        currentIndex: 0,
        currentQuestionObj: null,
        soundEnabled: true,
        currentFontSize: 16,
        currentFooterModalType: null
    };

    const canvasDiv = document.getElementById('circle-canvas');
    const questionPara = canvasDiv ? (canvasDiv.querySelector('p') || document.createElement('p')) : null;
    const answerInput = document.getElementById('answer-input');
    const nextBtn = document.getElementById('next-btn');
    const analysisBtn = document.getElementById('analysis-btn');
    const feedbackBtn = document.getElementById('feedback-btn');
    const levelRadios = Array.from(document.querySelectorAll('input[name="Level"]'));
    const themeBtn = document.getElementById('theme-btn');
    const audioBtn = document.getElementById('audio-btn');
    const privacyModal = document.getElementById('privacy-modal');
    const privacyBody = document.getElementById('privacy-body');

    if (canvasDiv && questionPara && !questionPara.parentNode) {
        canvasDiv.insertBefore(questionPara, answerInput || null);
    }

    function t(key, vars = {}) {
        const table = translations[state.currentLang] || translations.en;
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
            audioIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
        }
        if (audioLabel) {
            audioLabel.textContent = state.soundEnabled ? t('audio-on') : t('audio-off');
        }
    }

    function setNavOpen(isOpen) {
        const navToggle = document.querySelector('[data-nav-toggle]');
        const siteNav = document.querySelector('[data-site-nav]');
        if (!navToggle || !siteNav) return;

        siteNav.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    function syncBodyLock() {
        document.body.style.overflow = privacyModal && !privacyModal.hidden ? 'hidden' : '';
    }

    function feedbackColor(type) {
        if (type === 'success') return '#247245';
        if (type === 'error') return '#a53a2f';
        return 'var(--text-color)';
    }

    function removeDynamicMessages() {
        if (!canvasDiv) return;
        const feedback = canvasDiv.querySelector('.answer-feedback');
        const analysis = canvasDiv.querySelector('.analysis-text');
        if (feedback) feedback.remove();
        if (analysis) analysis.remove();
    }

    function ensureFeedbackNode() {
        if (!canvasDiv) return null;
        let feedback = canvasDiv.querySelector('.answer-feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'answer-feedback';
            canvasDiv.appendChild(feedback);
        }
        return feedback;
    }

    function ensureAnalysisNode() {
        if (!canvasDiv) return null;
        let analysis = canvasDiv.querySelector('.analysis-text');
        if (!analysis) {
            analysis = document.createElement('div');
            analysis.className = 'analysis-text';
            canvasDiv.appendChild(analysis);
        }
        return analysis;
    }

    function loadQuestionsByLevel(level) {
        const bank = questionBank[state.currentLang] || questionBank.en;
        return [...(bank[level] || bank.basic)];
    }

    function displayQuestion(questionObject) {
        if (!questionPara) return;

        questionPara.textContent = questionObject ? questionObject.question : t('quiz-no-questions');
        if (answerInput) {
            answerInput.value = '';
        }
        removeDynamicMessages();
    }

    function syncQuestions(resetIndex) {
        state.currentQuestions = loadQuestionsByLevel(state.currentLevel);
        if (resetIndex) {
            state.currentIndex = 0;
        }
        if (state.currentIndex >= state.currentQuestions.length) {
            state.currentIndex = 0;
        }
        state.currentQuestionObj = state.currentQuestions[state.currentIndex] || null;
        displayQuestion(state.currentQuestionObj);
    }

    function setLevel(level) {
        state.currentLevel = level;
        syncQuestions(true);
        playSound('switch');
    }

    function normalizedAnswer(value) {
        return String(value || '').trim().toLowerCase();
    }

    function isCurrentAnswerCorrect() {
        if (!state.currentQuestionObj || !answerInput) return false;
        return normalizedAnswer(answerInput.value) === normalizedAnswer(state.currentQuestionObj.answer);
    }

    function showFeedback() {
        const feedback = ensureFeedbackNode();
        if (!feedback) return;

        if (!state.currentQuestionObj) {
            feedback.textContent = t('feedback-no-question');
            feedback.style.color = feedbackColor('error');
            return;
        }

        const userAnswer = answerInput ? answerInput.value.trim() : '';
        if (!userAnswer) {
            feedback.textContent = t('feedback-empty');
            feedback.style.color = feedbackColor('error');
            return;
        }

        if (isCurrentAnswerCorrect()) {
            feedback.textContent = t('feedback-correct');
            feedback.style.color = feedbackColor('success');
            playSound('correct');
            return;
        }

        feedback.textContent = t('feedback-wrong', { answer: state.currentQuestionObj.answer });
        feedback.style.color = feedbackColor('error');
        playSound('wrong');
    }

    function showAnalysis() {
        const analysis = ensureAnalysisNode();
        if (!analysis || !state.currentQuestionObj) return;
        analysis.textContent = t('analysis-text', { analysis: state.currentQuestionObj.analysis });
    }

    function nextQuestion() {
        if (!state.currentQuestions.length) {
            syncQuestions(true);
            return;
        }

        if (answerInput && answerInput.value.trim() !== '') {
            playSound(isCurrentAnswerCorrect() ? 'correct' : 'wrong');
        } else {
            playSound('switch');
        }

        state.currentIndex = (state.currentIndex + 1) % state.currentQuestions.length;
        state.currentQuestionObj = state.currentQuestions[state.currentIndex] || null;
        displayQuestion(state.currentQuestionObj);
    }

    function playSound(type) {
        if (!state.soundEnabled) return;

        try {
            const AudioContextCtor = window.AudioContext || window['webkitAudioContext'];
            if (!AudioContextCtor) return;

            const audioContext = new AudioContextCtor();
            const oscillator = audioContext.createOscillator();
            const gain = audioContext.createGain();
            oscillator.connect(gain);
            gain.connect(audioContext.destination);

            let frequency = 330;
            let duration = 0.12;

            if (type === 'correct') {
                frequency = 523;
                duration = 0.28;
            } else if (type === 'wrong') {
                frequency = 220;
                duration = 0.4;
            }

            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            gain.gain.setValueAtTime(0.08, audioContext.currentTime);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + duration);
        } catch (error) {
            console.log('Audio not supported');
        }
    }

    function footerModalContent(type) {
        if (state.currentLang === 'zh') {
            if (type === 'data') {
                return `
                    <h2>数据政策</h2>
                    <p>CircleMaster 仅用于教学演示。我们承诺以透明、最小化的方式处理站点偏好和交互内容。</p>
                    <ul>
                        <li><strong>实时处理：</strong> 页面内 AI 提示和交互内容仅在当前浏览器会话中使用。</li>
                        <li><strong>个人信息：</strong> 我们不会在站点中主动收集、出售或共享你的个人信息。</li>
                        <li><strong>联系方式：</strong> 如需反馈，请发送邮件至 2024213571@bupt.cn。</li>
                    </ul>
                    <div class="preference-note"><strong>偏好说明：</strong> 主题、字体和无障碍设置由浏览器当前页面即时应用。</div>
                `;
            }
            if (type === 'access') {
                return `
                    <h2>无障碍说明</h2>
                    <p>我们希望 Home、Game、Quiz 三页都提供一致且可理解的学习体验。</p>
                    <ul>
                        <li><strong>视觉支持：</strong> 支持黑夜模式、高对比度和字体缩放。</li>
                        <li><strong>结构一致：</strong> 统一导航、面包屑和页脚，降低跨页切换成本。</li>
                        <li><strong>持续改进：</strong> 如发现可读性或操作问题，欢迎联系团队反馈。</li>
                    </ul>
                `;
            }
            return `
                <h2>联系我们</h2>
                <p>如果你对课程内容、设计实现或无障碍细节有建议，欢迎联系我们。</p>
                <ul>
                    <li><strong>项目反馈：</strong> 可通过仓库 Issue 或邮件提交问题。</li>
                    <li><strong>响应方式：</strong> 我们会根据课程项目节奏尽快回复。</li>
                </ul>
            `;
        }

        if (type === 'data') {
            return `
                <h2>Data Policy</h2>
                <p>CircleMaster is an educational prototype. We keep site messaging and preference handling simple and transparent.</p>
                <ul>
                    <li><strong>Session-first behaviour:</strong> AI hints and page interactions stay within the current browser session.</li>
                    <li><strong>Personal data:</strong> We do not intentionally collect, sell, or share personal user data through this site.</li>
                    <li><strong>Contact:</strong> Reach the team at 2024213571@bupt.cn for questions or concerns.</li>
                </ul>
                <div class="preference-note"><strong>Preference note:</strong> Theme, font size, and accessibility controls apply directly in the browser for the current page.</div>
            `;
        }
        if (type === 'access') {
            return `
                <h2>Accessibility Statement</h2>
                <p>We aim to keep Home, Game, and Quiz visually consistent and easier to navigate for all learners.</p>
                <ul>
                    <li><strong>Visual support:</strong> Dark mode, high contrast, and font scaling are available from the shared toolbar.</li>
                    <li><strong>Consistent structure:</strong> Navigation, breadcrumbs, and footer behaviour are aligned across pages.</li>
                    <li><strong>Feedback welcome:</strong> Please contact the team if a control is unclear or difficult to use.</li>
                </ul>
            `;
        }
        return `
            <h2>Contact Us</h2>
            <p>If you have feedback about the content, design, or accessibility details, please get in touch.</p>
            <ul>
                <li><strong>Project feedback:</strong> You can also raise an issue in the project repository.</li>
                <li><strong>Response style:</strong> We will reply as quickly as the course project schedule allows.</li>
            </ul>
        `;
    }

    function openFooterModal(type) {
        if (!privacyModal || !privacyBody) return;

        state.currentFooterModalType = type;
        privacyBody.innerHTML = footerModalContent(type);
        privacyModal.hidden = false;
        setNavOpen(false);
        syncBodyLock();
    }

    function togglePrivacyModal(show) {
        if (!privacyModal) return;

        privacyModal.hidden = !show;
        if (!show) {
            state.currentFooterModalType = null;
        }
        syncBodyLock();
    }

    function applyStaticTranslations() {
        document.documentElement.lang = state.currentLang;
        document.title = t('page-title');

        document.querySelectorAll('[data-i18n]').forEach((node) => {
            const key = node.getAttribute('data-i18n');
            node.textContent = t(key);
        });

        const navToggleLabel = document.querySelector('[data-nav-toggle-label]');
        if (navToggleLabel) {
            navToggleLabel.textContent = t('nav-toggle-label');
        }

        const privacyCloseButton = document.querySelector('#privacy-modal .modal-close-btn');
        if (privacyCloseButton) {
            privacyCloseButton.textContent = t('modal-close');
        }

        const levelLegend = document.querySelector('.level-fieldset legend');
        if (levelLegend) {
            levelLegend.textContent = t('level-legend');
        }

        const levelLabelMap = {
            'level-basic': 'level-basic',
            'level-normal': 'level-normal',
            'level-hard': 'level-hard'
        };
        Object.keys(levelLabelMap).forEach((id) => {
            const label = document.querySelector(`label[for="${id}"]`);
            if (label) {
                label.textContent = t(levelLabelMap[id]);
            }
        });

        if (answerInput) {
            answerInput.placeholder = t('answer-placeholder');
            answerInput.setAttribute('aria-label', t('answer-aria'));
        }

        if (nextBtn) nextBtn.textContent = t('btn-next');
        if (analysisBtn) analysisBtn.textContent = t('btn-analysis');
        if (feedbackBtn) feedbackBtn.textContent = t('btn-feedback');

        updateThemeButton();
        updateAudioButton();

        if (state.currentFooterModalType && privacyModal && !privacyModal.hidden && privacyBody) {
            privacyBody.innerHTML = footerModalContent(state.currentFooterModalType);
        }
    }

    function changeLanguage() {
        state.currentLang = state.currentLang === 'en' ? 'zh' : 'en';
        applyStaticTranslations();
        syncQuestions(false);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
        updateThemeButton();
    }

// --- 全站大脑：页面加载时立即同步对比度和主题 ---
(function syncGlobalSettings() {
    // 检查并应用对比度
    if (localStorage.getItem('high-contrast') === 'true') {
        document.documentElement.setAttribute('data-a11y', 'high-contrast');
    }
    // 检查并应用黑夜模式 (顺便也同步了)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
})();

// --- 统一的切换函数 (确保每个页面的 Contrast 按钮都能调用它) ---
function toggleContrast() {
    const isHighContrast = document.documentElement.getAttribute('data-a11y') === 'high-contrast';
    if (isHighContrast) {
        document.documentElement.removeAttribute('data-a11y');
        localStorage.setItem('high-contrast', 'false');
    } else {
        document.documentElement.setAttribute('data-a11y', 'high-contrast');
        localStorage.setItem('high-contrast', 'true');
    }
}

// 全站同步：进入页面时检查对比度设置
if (localStorage.getItem('high-contrast') === 'true') {
    document.documentElement.setAttribute('data-a11y', 'high-contrast');
}

    function adjustFontSize(delta) {
        state.currentFontSize = Math.min(Math.max(state.currentFontSize + (delta * 2), 12), 26);
        document.documentElement.style.setProperty('--font-size-base', `${state.currentFontSize}px`);
    }

    function toggleSound() {
        state.soundEnabled = !state.soundEnabled;
        updateAudioButton();
    }

    function setupNavToggle() {
        const navToggle = document.querySelector('[data-nav-toggle]');
        const siteNav = document.querySelector('[data-site-nav]');
        if (!navToggle || !siteNav) return;

        navToggle.addEventListener('click', () => {
            const isOpen = !siteNav.classList.contains('is-open');
            setNavOpen(isOpen);
        });

        siteNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setNavOpen(false));
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 760) {
                setNavOpen(false);
            }
        });
    }

    function setupLevelControls() {
        levelRadios.forEach((radio) => {
            radio.addEventListener('change', (event) => {
                if (event.target.checked) {
                    setLevel(event.target.value || 'basic');
                }
            });
        });

        const basicRadio = document.getElementById('level-basic');
        if (basicRadio) {
            basicRadio.checked = true;
        }
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    if (audioBtn) {
        audioBtn.addEventListener('click', toggleSound);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }

    if (analysisBtn) {
        analysisBtn.addEventListener('click', showAnalysis);
    }

    if (feedbackBtn) {
        feedbackBtn.addEventListener('click', showFeedback);
    }

    setupLevelControls();
    setupNavToggle();
    if (privacyModal) {
        privacyModal.hidden = true;
    }
    syncBodyLock();
    state.currentFontSize = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--font-size-base'), 10) || 16;
    applyStaticTranslations();
    syncQuestions(true);

    window.changeLanguage = changeLanguage;
    window.toggleContrast = toggleContrast;
    window.adjustFontSize = adjustFontSize;
    window.openFooterModal = openFooterModal;
    window.togglePrivacyModal = togglePrivacyModal;
})();

// 页面一加载就检查之前的 Contrast 设置
(function() {
    const savedContrast = localStorage.getItem('high-contrast');
    if (savedContrast === 'true') {
        document.documentElement.setAttribute('data-a11y', 'high-contrast');
    }
})();