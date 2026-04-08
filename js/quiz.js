// js/quiz.js
(function(){
    "use strict";

    // ---------- 模拟题库 ----------
    const questionBank = {
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
            }
        ]
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
    let currentLevel = 'basic';       // basic / normal / hard
    let currentQuestions = [];
    let currentIndex = 0;
    let currentQuestionObj = null;
    let lastAnswerCorrect = false;
    let soundEnabled = true;          // 默认开启音效

    // 初始化: 确保画布里段落存在
    if (!canvasDiv.querySelector('p')) {
        const p = document.createElement('p');
        p.textContent = '[ Quiz Area ]';
        canvasDiv.insertBefore(p, answerInput);
    }

    // 加载对应等级题库
    function loadQuestionsByLevel(level) {
        if (level === 'basic') return [...questionBank.basic];
        if (level === 'normal') return [...questionBank.normal];
        if (level === 'hard') return [...questionBank.hard];
        return [...questionBank.basic];
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
                const label = e.target.nextSibling?.nodeValue?.trim() || e.target.parentElement?.innerText;
                let levelKey = 'basic';
                if (label.includes('Normal')) levelKey = 'normal';
                else if (label.includes('Hard')) levelKey = 'hard';
                setLevel(levelKey);
            }
        });
    });

    // 默认选中Basic (若没有checked属性)
    const defaultRadio = Array.from(levelRadios).find(r => r.parentElement?.innerText.includes('Basic')) || levelRadios[0];
    if (defaultRadio) defaultRadio.checked = true;
    setLevel('basic');

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
            const gain = audioC
