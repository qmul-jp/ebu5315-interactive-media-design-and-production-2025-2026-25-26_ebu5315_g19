// js/quiz.js
(function(){
    "use strict";

    // ---------- 中英文题库 ----------
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

    // DOM 元素
    const canvasDiv = document.getElementById('circle-canvas');
    const questionPara = canvasDiv.querySelector('p') || document.createElement('p');
    const answerInput = canvasDiv.querySelector('input');
    const nextBtn = document.getElementById('next-btn');
    const analysisBtn = document.getElementById('analysis-btn');
    const feedbackBtn = document.getElementById('feedback-btn');
    const levelRadios = document.querySelectorAll('input[name="Level"]');
    const themeBtn = document.getElementById('theme-btn');
    const audioBtn = document.getElementById('audio-btn');

    // 状态变量
    let currentLang = 'zh'; // zh / en
    let currentLevel = 'basic';       // basic / normal / hard
    let currentQuestions = [];
    let currentIndex = 0;
    let currentQuestionObj = null;
    let lastAnswerCorrect = false;
    let soundEnabled = true;          // 默认开启音效
    let isDarkMode = false;           // 默认亮模式
    let fontSizeLevel = 0;            // 字体大小级别: -2 到 2

    // 初始化: 确保画布里段落存在
    if (!canvasDiv.querySelector('p')) {
        const p = document.createElement('p');
        p.textContent = '[ Quiz Area ]';
        canvasDiv.insertBefore(p, answerInput);
    }

    // 加载对应等级题库
    function loadQuestionsByLevel(level) {
        if (!questionBank[currentLang]) return [];
        if (level === 'basic') return [...questionBank[currentLang].basic];
        if (level === 'normal') return [...questionBank[currentLang].normal];
        if (level === 'hard') return [...questionBank[currentLang].hard];
        return [...questionBank[currentLang].basic];
    }

    // 更新界面显示题目
    function displayQuestion(qObj) {
        if (!qObj) return;
        const displayP = canvasDiv.querySelector('p');
        displayP.textContent = qObj.question;
        answerInput.value = '';
        // 移除之前的反馈信息 (如果有动态插入的反馈元素)
        const oldFeedback = canvasDiv.querySelector('.answer-feedback');
        if (oldFeedback) oldFeedback.remove();
        const oldAnalysis = canvasDiv.querySelector('.analysis-text');
        if (oldAnalysis) oldAnalysis.remove();
    }

    // 刷新当前题目 (根据level和index)
    function refreshQuestion() {
        if (!currentQuestions.length) {
            currentQuestions = loadQuestionsByLevel(currentLevel);
            currentIndex = 0;
        }
        if (currentQuestions.length > 0) {
            currentQuestionObj = currentQuestions[currentIndex % currentQuestions.length];
            displayQuestion(currentQuestionObj);
        } else {
            canvasDiv.querySelector('p').textContent = '暂无题目，请选择题库';
        }
    }

    // 切换等级
    function setLevel(level) {
        currentLevel = level;
        currentQuestions = loadQuestionsByLevel(level);
        currentIndex = 0;
        refreshQuestion();
        // 播放切换音效（可选）
        playSound('switch');
    }

    // 等级监听
    levelRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                const levelKey = e.target.value || 'basic';
                setLevel(levelKey);
            }
        });
    });

    // 默认选中Basic (若没有checked属性)
    const defaultRadio = Array.from(levelRadios).find(r => r.parentElement?.innerText.includes('Basic') || r.parentElement?.innerText.includes('基础')) || levelRadios[0];
    if (defaultRadio) defaultRadio.checked = true;
    setLevel('basic');

    // 主题切换函数
    window.toggleTheme = function() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        updateUILanguage(); // 更新所有界面文字，包括按钮
    };

    // 字体大小调整函数
    window.adjustFontSize = function(delta) {
        fontSizeLevel += delta;
        fontSizeLevel = Math.max(-2, Math.min(2, fontSizeLevel)); // 限制在 -2 到 2
        const baseSize = 16; // 基准字体大小
        const newSize = baseSize + fontSizeLevel * 2; // 每次增减 2px
        document.body.style.fontSize = newSize + 'px';
    };

    // 音效切换函数
    window.toggleSound = function() {
        soundEnabled = !soundEnabled;
        updateUILanguage(); // 更新按钮文字
    };

    // Feedback 显示函数
    function showFeedback() {
        let feedbackDiv = canvasDiv.querySelector('.answer-feedback');
        if (!feedbackDiv) {
            feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'answer-feedback';
            canvasDiv.appendChild(feedbackDiv);
        }

        if (!currentQuestionObj) {
            feedbackDiv.textContent = currentLang === 'zh' ? '当前没有题目可反馈。' : 'No question available for feedback.';
            feedbackDiv.style.color = 'var(--warning-color)';
            return;
        }

        const userAnswer = answerInput.value.trim();
        if (!userAnswer) {
            feedbackDiv.textContent = currentLang === 'zh' ? '请先输入答案，然后再查看反馈。' : 'Please enter an answer first, then check feedback.';
            feedbackDiv.style.color = 'var(--warning-color)';
            return;
        }

        const correctAnswer = currentQuestionObj.answer;
        const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
        if (isCorrect) {
            feedbackDiv.textContent = currentLang === 'zh' ? '你答对了！继续保持。' : 'Correct! Keep it up.';
            feedbackDiv.style.color = 'var(--success-color)';
        } else {
            feedbackDiv.textContent = currentLang === 'zh' ? `答案不对，正确答案是：${correctAnswer}` : `Incorrect. Correct answer: ${correctAnswer}`;
            feedbackDiv.style.color = 'var(--error-color)';
        }
        lastAnswerCorrect = isCorrect;
    }

    // 按钮事件监听
    themeBtn.addEventListener('click', toggleTheme);
    audioBtn.addEventListener('click', toggleSound);
    nextBtn.addEventListener('click', nextQuestion);
    analysisBtn.addEventListener('click', showAnalysis);
    feedbackBtn.addEventListener('click', showFeedback);

    // 初始化界面文字
    updateUILanguage();

    // 语言切换函数
    window.changeLanguage = function() {
        currentLang = (currentLang === 'zh') ? 'en' : 'zh';
        // 切换题库
        currentQuestions = loadQuestionsByLevel(currentLevel);
        currentIndex = 0;
        refreshQuestion();
        // 切换界面文字
        updateUILanguage();
    };

    // 更新界面文字
    function updateUILanguage() {
        // 题目输入框 placeholder
        answerInput.placeholder = currentLang === 'zh' ? '请输入你的答案' : 'Enter your answer';
        // Next/Analysis/Feedback 按钮
        nextBtn.textContent = currentLang === 'zh' ? '下一题' : 'Next';
        analysisBtn.textContent = currentLang === 'zh' ? '解析' : 'Analysis';
        feedbackBtn.textContent = currentLang === 'zh' ? '反馈' : 'Feedback';
        // Level 单选框
        const levelLabels = document.querySelectorAll('label[for^="level-"]');
        const levelTexts = currentLang === 'zh' ? ['基础', '进阶', '挑战'] : ['Basic', 'Normal', 'Hard'];
        levelLabels.forEach((label, i) => { label.textContent = levelTexts[i]; });
        // Level 标题
        const legend = document.querySelector('.level-fieldset legend');
        if (legend) legend.textContent = currentLang === 'zh' ? '难度' : 'Level';
        // Quiz Area
        const quizAreaP = canvasDiv.querySelector('p');
        if (quizAreaP && (!currentQuestionObj)) quizAreaP.textContent = currentLang === 'zh' ? '[ 测验区 ]' : '[ Quiz Area ]';
        // 面包屑
        const breadcrumb = document.querySelector('.breadcrumb');
        if (breadcrumb) {
            breadcrumb.innerHTML = currentLang === 'zh' ? '<a href="index.html">首页 (Home)</a> &nbsp;>&nbsp; <span>测验</span>' : '<a href="index.html">Home (首页)</a> &nbsp;>&nbsp; <span>Quiz</span>';
        }
        // 页脚
        const footerLinks = document.querySelectorAll('.footer-links a');
        if (footerLinks.length === 3) {
            footerLinks[0].textContent = currentLang === 'zh' ? '数据隐私政策' : 'Data Policy';
            footerLinks[1].textContent = currentLang === 'zh' ? '无障碍声明' : 'Accessibility';
            footerLinks[2].textContent = currentLang === 'zh' ? '联系我们' : 'Contact Us';
        }
        // 更新按钮文字
        themeBtn.textContent = isDarkMode ? (currentLang === 'zh' ? '☀️ 亮模式' : '☀️ Light Mode') : (currentLang === 'zh' ? '🌙 暗模式' : '🌙 Dark Mode');
        audioBtn.textContent = soundEnabled ? (currentLang === 'zh' ? '🔊 音效' : '🔊 Sound') : (currentLang === 'zh' ? '🔇 静音' : '🔇 Muted');
    }

    // 答案检查与反馈
    function checkAnswer() {
        if (!currentQuestionObj) return false;
        const userAnswer = answerInput.value.trim();
        const correctAnswer = currentQuestionObj.answer;
        // 简单比较 (忽略大小写与空格)
        const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
        
        // 显示即时反馈
        let feedbackDiv = canvasDiv.querySelector('.answer-feedback');
        if (!feedbackDiv) {
            feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'answer-feedback';
            canvasDiv.appendChild(feedbackDiv);
        }
        if (isCorrect) {
            feedbackDiv.textContent = '✅ 正确！很棒！';
            feedbackDiv.style.color = 'var(--success-color)';
            playSound('correct');
        } else {
            feedbackDiv.textContent = `❌ 答案错误，再试试看 (正确: ${correctAnswer})`;
            feedbackDiv.style.color = 'var(--error-color)';
            playSound('wrong');
        }
        lastAnswerCorrect = isCorrect;
        return isCorrect;
    }

    // 显示解析
    function showAnalysis() {
        if (!currentQuestionObj) return;
        // 先检查答案, 但也可以不依赖检查
        let analysisDiv = canvasDiv.querySelector('.analysis-text');
        if (!analysisDiv) {
            analysisDiv = document.createElement('div');
            analysisDiv.className = 'analysis-text';
            canvasDiv.appendChild(analysisDiv);
        }
        analysisDiv.textContent = `📘 解析: ${currentQuestionObj.analysis}`;
    }

    // 下一题
    function nextQuestion() {
        if (!currentQuestions.length) {
            setLevel(currentLevel);
            return;
        }
        // 可选：先检查当前答案？但为了流畅，直接下一题；也可以自动检查一下。
        if (answerInput.value.trim() !== '') {
            checkAnswer();   // 显示反馈但不阻止
        }
        // 移动到下一题
        currentIndex = (currentIndex + 1) % currentQuestions.length;
        currentQuestionObj = currentQuestions[currentIndex];
        displayQuestion(currentQuestionObj);
        playSound('switch');
    }

    // 简单音效 (使用Web Audio或Audio)
    function playSound(type) {
        if (!soundEnabled) return;
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            let frequency = 440; // 默认 A4
            let duration = 0.2;
            if (type === 'correct') {
                frequency = 523; // C5
                duration = 0.3;
            } else if (type === 'wrong') {
                frequency = 220; // A3
                duration = 0.5;
            } else if (type === 'switch') {
                frequency = 330; // E4
                duration = 0.1;
            }
            osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            console.log('Audio not supported');
        }
    }

})();