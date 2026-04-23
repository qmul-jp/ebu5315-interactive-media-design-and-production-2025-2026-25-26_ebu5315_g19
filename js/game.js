const translations = {
    en: {
        'btn-lang': 'EN / 中',
        'btn-contrast': 'Contrast',
        'theme-dark': 'Dark Mode',
        'theme-light': 'Light Mode',
        'audio-on': 'Sound On',
        'audio-off': 'Sound Off',
        'logo-text': 'CircleMaster',
        'nav-home': 'Home',
        'nav-game': 'Game',
        'nav-quiz': 'Quiz',
        'bc-home': 'Home',
        'bc-current': 'Game: Geometry Lab',
        'page-title': 'CircleMaster - Geometry Lab',
        'stage-title': 'Geometry Lab',
        'stage-intro': 'Explore circle theorems by dragging points on and near the circle to see what stays true.',
        'mission-title': 'Lab Goal',
        'mission-desc': 'Use the board to manipulate points and test when geometry rules really hold.',
        'mission-step-1': 'Drag highlighted points around the circle and feel them snap back onto the circumference.',
        'mission-step-2': 'Pull a point slightly off the circle to see which theorem relationship starts to drift.',
        'mission-step-3': 'Bring the point back near the circle and explain why the invariant returns.',
        'target-title': 'Current Theorem',
        'hud-mode': 'Mode',
        'hud-drag': 'Drag',
        'hud-measure': 'Measure',
        'hud-stage': 'Stage',
        'hud-status': 'Status',
        'task-current-label': 'Current Task',
        'task-progress-incomplete': 'In Progress',
        'task-progress-complete': 'Complete',
        'task-stage-format': 'Stage {current} / {total}',
        'panel-status': 'Lab Status',
        'status-mode-label': 'Mode:',
        'status-task-label': 'Current task:',
        'status-stage-label': 'Stage:',
        'status-drag-label': 'Draggable points:',
        'status-measure-label': 'Key measurement:',
        'status-observation-label': 'Observation:',
        'status-progress-label': 'Task progress:',
        'status-guides-label': 'Guides:',
        'status-labels-label': 'Labels:',
        'panel-controls': 'Lab Controls',
        'controls-helper': 'Switch the theorem, drag highlighted points, and compare the measurements.',
        'panel-theorem': 'Theorem Notes',
        'theorem-definition-label': 'Definition:',
        'theorem-explanation-label': 'Why it matters:',
        'theorem-hint-label': 'Try this:',
        'panel-log': 'Observation Log',
        'log-empty': 'No observations yet.',
        'btn-reset': 'Reset Board',
        'btn-guides': 'Toggle Guides',
        'btn-labels': 'Toggle Labels',
        'btn-next': 'Next Theorem',
        'mode-tangent': 'Tangent-Radius',
        'mode-center-angle': 'Angle at Center',
        'mode-same-arc': 'Same Arc Theorem',
        'mode-semicircle': 'Semi-circle Angle',
        'drag-t': 'Point T',
        'drag-bc': 'Points B and C',
        'drag-cd': 'Points C and D',
        'drag-p': 'Point P',
        'point-a': 'Point A',
        'point-b': 'Point B',
        'point-c': 'Point C',
        'point-d': 'Point D',
        'point-o': 'Point O',
        'point-p': 'Point P',
        'point-t': 'Point T',
        'toggle-on': 'On',
        'toggle-off': 'Off',
        'status-verified': 'Verified',
        'status-exploring': 'Exploring',
        'status-off-circle': 'Off Circle',
        'snap-state-snapped': 'back on the circle',
        'snap-state-off': 'off the circle',
        'focus-right-angle': '90°',
        'focus-double-angle': '2:1',
        'focus-equal': 'Equal',
        'measure-tangent': 'OT ⟂ tangent = 90°',
        'measure-tangent-off': 'Point T is {distance} away from the circle',
        'measure-center-angle': '∠AOB = {central}, ∠ACB = {inscribed}',
        'measure-same-arc': '∠ACB = {angleC}, ∠ADB = {angleD}',
        'measure-semicircle': '∠APB = {angle}',
        'equation-tangent': 'OT is perpendicular to the tangent at T.',
        'equation-tangent-off': 'T must return to the circumference before this point can define a tangent contact.',
        'equation-center-angle': 'The central angle stays twice the inscribed angle.',
        'equation-same-arc': '{angleC} = {angleD}',
        'equation-semicircle': '∠APB remains {angle}',
        'equation-off-circle': 'This circle theorem is guaranteed only when the draggable point lies on the circumference.',
        'obs-tangent': 'The radius and tangent keep a right angle as T moves.',
        'obs-center-angle': 'The central angle stays twice the circumference angle.',
        'obs-same-arc': 'Both circumference angles keep the same measure from arc AB.',
        'obs-semicircle': 'Any point on the semicircle forms a right angle with the diameter.',
        'obs-off-circle': 'This point is off the circumference, so the circle theorem is no longer guaranteed.',
        'theorem-tangent-definition': 'A tangent is perpendicular to the radius at the contact point.',
        'theorem-tangent-explanation': 'The right angle is preserved wherever the contact point moves around the circle.',
        'theorem-tangent-hint': 'Drag point T around the circumference and watch the tangent line rotate with it.',
        'theorem-center-definition': 'The angle at the centre is twice the angle at the circumference standing on the same arc.',
        'theorem-center-explanation': 'Changing point B changes both angles, but the 2:1 relationship remains visible.',
        'theorem-center-hint': 'Drag B to resize arc AB, then drag C around the opposite arc and compare the numbers.',
        'theorem-same-arc-definition': 'Angles standing on the same arc are equal.',
        'theorem-same-arc-explanation': 'Points C and D can move along the same segment while both look at chord AB.',
        'theorem-same-arc-hint': 'Move C and D separately. The board keeps them on the same side of AB.',
        'theorem-semicircle-definition': 'The angle in a semicircle is always a right angle.',
        'theorem-semicircle-explanation': 'When AB is a diameter, every point P on the semicircle creates ∠APB = 90°.',
        'theorem-semicircle-hint': 'Drag P along the upper arc and check the right-angle marker.',
        'task-tangent-1': 'Move T into the upper-right arc.',
        'task-tangent-2': 'Now move T into the lower-left arc.',
        'task-tangent-3': 'Finish by placing T near the very top of the circle.',
        'task-center-1': 'Drag B until the central angle is greater than 120°.',
        'task-center-2': 'Now move C and keep the inscribed angle close to half of the central angle.',
        'task-center-3': 'Finish with a wide arc and keep the 2:1 relationship visible.',
        'task-same-arc-1': 'Move C to the lower-right side while keeping the angle equal to D.',
        'task-same-arc-2': 'Now drag D toward the lower-left side and keep both angles equal.',
        'task-same-arc-3': 'Finish with C and D separated, still standing on the same arc AB.',
        'task-semicircle-1': 'Move P toward the left side of the semicircle.',
        'task-semicircle-2': 'Now move P toward the right side and keep a right angle.',
        'task-semicircle-3': 'Finish with P near the top while preserving 90°.',
        'msg-ready': 'Drag a highlighted point to explore the theorem.',
        'msg-mode-switched': 'Theorem mode changed. Explore the new relationship.',
        'msg-reset': 'Board reset. The geometry is ready again.',
        'msg-dragging': 'Dragging {point}. Watch the relationship stay true.',
        'msg-verified': 'The theorem relationship still holds.',
        'msg-off-circle': '{point} is off the circle, so the theorem is no longer guaranteed.',
        'msg-snapped': '{point} snapped back onto the circle. The theorem relationship returns.',
        'msg-task-complete': 'Stage {stage} complete. Move on to the next target.',
        'msg-mode-complete': 'All three stages cleared in this theorem mode.',
        'msg-guides-on': 'Guide grid is visible.',
        'msg-guides-off': 'Guide grid is hidden.',
        'msg-labels-on': 'Point labels are visible.',
        'msg-labels-off': 'Point labels are hidden.',
        'log-mode-title': 'Mode loaded',
        'log-reset-title': 'Board reset',
        'log-drag-title': 'Point moved',
        'log-guides-title': 'Guide display changed',
        'log-labels-title': 'Label display changed',
        'log-task-title': 'Task cleared',
        'log-mode-complete-title': 'Mode cleared',
        'log-snap-title': 'Snap detected',
        'log-tangent-intro': 'Tangent-Radius mode loaded. Drag T to see OT stay perpendicular to the tangent.',
        'log-center-intro': 'Angle at Center mode loaded. Compare ∠AOB with ∠ACB.',
        'log-same-arc-intro': 'Same Arc mode loaded. Drag C and D while both stand on arc AB.',
        'log-semicircle-intro': 'Semi-circle mode loaded. Drag P and check the right angle on diameter AB.',
        'log-reset-body': 'The current theorem board returned to its starting layout.',
        'log-tangent-drag': '{point} moved. The tangent still meets radius OT at 90°.',
        'log-center-drag': '{point} moved. ∠AOB = {central}, ∠ACB = {inscribed}.',
        'log-same-arc-drag': '{point} moved. ∠ACB = {angleC} and ∠ADB = {angleD}.',
        'log-semicircle-drag': '{point} moved. ∠APB remains {angle}.',
        'log-guides-on': 'Guide grid turned on for easier comparison.',
        'log-guides-off': 'Guide grid turned off to focus on the theorem lines.',
        'log-labels-on': 'Point labels turned on.',
        'log-labels-off': 'Point labels turned off.',
        'log-snap-body': '{point} is {state}.',
        'log-off-circle-body': '{point} moved off the circumference, so the theorem relationship is no longer guaranteed.',
        'log-task-body': 'Stage {stage} cleared: {task}.',
        'log-mode-complete-body': '{mode} now has all three stages complete.',
        'board-aria-label': 'Interactive circle geometry board',
        'chat-header': 'Circle AI Tutor',
        'chat-ai': 'AI:',
        'chat-you': 'You:',
        'chat-welcome': 'Welcome to the Geometry Lab. Ask for a hint, a tangent reminder, or a center-angle explanation.',
        'chat-placeholder': 'Ask about a circle theorem...',
        'chat-reply-contact': 'Use the footer contact link for team details, or ask here for help with the current theorem.',
        'chat-reply-hint': 'Try dragging the highlighted point slowly and describe which measurement refuses to change.',
        'chat-reply-tangent': 'A tangent touches the circle once and is perpendicular to the radius at that exact contact point.',
        'chat-reply-center': 'For the same arc AB, the central angle ∠AOB is twice the circumference angle ∠ACB.',
        'chat-reply-same-arc': 'Angles standing on the same arc share the same measure, even when their points move.',
        'chat-reply-semicircle': 'A diameter creates a semicircle, and any point on that semicircle forms a 90° angle.',
        'chat-reply-default': 'Pick a theorem mode, drag a blue point, and watch the measurement panel explain the invariant.',
        'nav-toggle-label': 'Menu',
        'modal-close': 'OK',
        'footer-copy': '© 2026 25/26_EBU5315_G19. All rights reserved.',
        'footer-data': 'Data Policy',
        'footer-access': 'Accessibility',
        'footer-contact': 'Contact Us'
    },
    zh: {
        'btn-lang': '中 / EN',
        'btn-contrast': '对比度',
        'theme-dark': '黑夜模式',
        'theme-light': '明亮模式',
        'audio-on': '声音开启',
        'audio-off': '声音关闭',
        'logo-text': '圆几何大师',
        'nav-home': '首页',
        'nav-game': '游戏',
        'nav-quiz': '测验',
        'bc-home': '首页',
        'bc-current': '游戏：圆几何实验室',
        'page-title': 'CircleMaster - 圆几何实验室',
        'stage-title': '圆几何实验室',
        'stage-intro': '通过在圆上以及圆附近拖动点，观察哪些圆几何关系会保持不变。',
        'mission-title': '实验目标',
        'mission-desc': '使用画板移动点，并测试几何规则究竟在什么条件下成立。',
        'mission-step-1': '拖动高亮点，感受它在靠近圆周时自动吸附回圆上。',
        'mission-step-2': '把点稍微拉离圆周，观察哪些定理关系开始偏离。',
        'mission-step-3': '再把点拖回圆附近，并解释为什么不变量又恢复了。',
        'target-title': '当前定理',
        'hud-mode': '模式',
        'hud-drag': '拖动',
        'hud-measure': '测量',
        'hud-stage': '阶段',
        'hud-status': '状态',
        'task-current-label': '当前任务',
        'task-progress-incomplete': '进行中',
        'task-progress-complete': '已完成',
        'task-stage-format': '阶段 {current} / {total}',
        'panel-status': '实验状态',
        'status-mode-label': '模式：',
        'status-task-label': '当前任务：',
        'status-stage-label': '阶段：',
        'status-drag-label': '可拖动点：',
        'status-measure-label': '关键测量：',
        'status-observation-label': '观察：',
        'status-progress-label': '任务进度：',
        'status-guides-label': '辅助线：',
        'status-labels-label': '标签：',
        'panel-controls': '实验控制',
        'controls-helper': '切换定理、拖动高亮点，并比较测量结果。',
        'panel-theorem': '定理说明',
        'theorem-definition-label': '定义：',
        'theorem-explanation-label': '为什么重要：',
        'theorem-hint-label': '试试看：',
        'panel-log': '观察日志',
        'log-empty': '还没有观察记录。',
        'btn-reset': '重置画板',
        'btn-guides': '显示/隐藏辅助线',
        'btn-labels': '显示/隐藏标签',
        'btn-next': '下一个定理',
        'mode-tangent': '切线-半径',
        'mode-center-angle': '圆心角',
        'mode-same-arc': '同弧定理',
        'mode-semicircle': '半圆角',
        'drag-t': '点 T',
        'drag-bc': '点 B 和 C',
        'drag-cd': '点 C 和 D',
        'drag-p': '点 P',
        'point-a': '点 A',
        'point-b': '点 B',
        'point-c': '点 C',
        'point-d': '点 D',
        'point-o': '点 O',
        'point-p': '点 P',
        'point-t': '点 T',
        'toggle-on': '开启',
        'toggle-off': '关闭',
        'status-verified': '已验证',
        'status-exploring': '探索中',
        'status-off-circle': '离开圆周',
        'snap-state-snapped': '回到圆周上',
        'snap-state-off': '离开圆周',
        'focus-right-angle': '90°',
        'focus-double-angle': '2:1',
        'focus-equal': '相等',
        'measure-tangent': 'OT ⟂ 切线 = 90°',
        'measure-tangent-off': '点 T 距离圆周还有 {distance}',
        'measure-center-angle': '∠AOB = {central}，∠ACB = {inscribed}',
        'measure-same-arc': '∠ACB = {angleC}，∠ADB = {angleD}',
        'measure-semicircle': '∠APB = {angle}',
        'equation-tangent': 'OT 在 T 点垂直于切线。',
        'equation-tangent-off': '只有当 T 回到圆周上时，这个点才能重新定义切点与切线。',
        'equation-center-angle': '圆心角始终是圆周角的两倍。',
        'equation-same-arc': '{angleC} = {angleD}',
        'equation-semicircle': '∠APB 保持为 {angle}',
        'equation-off-circle': '只有当可拖动点位于圆周上时，这个圆定理关系才有保证。',
        'obs-tangent': '当 T 移动时，半径和切线始终保持直角。',
        'obs-center-angle': '圆心角始终是同弧圆周角的两倍。',
        'obs-same-arc': '两个圆周角都由弧 AB 张成，因此保持相等。',
        'obs-semicircle': '半圆上的任意点都会和直径形成直角。',
        'obs-off-circle': '这个点已经离开圆周，所以圆定理关系不再一定成立。',
        'theorem-tangent-definition': '切线在接触点处垂直于半径。',
        'theorem-tangent-explanation': '无论接触点沿圆移动到哪里，这个直角关系都会保留。',
        'theorem-tangent-hint': '沿圆周拖动点 T，观察切线如何随之旋转。',
        'theorem-center-definition': '同一条弧所对的圆心角是圆周角的两倍。',
        'theorem-center-explanation': '拖动点 B 会改变两个角，但 2:1 的关系仍然可见。',
        'theorem-center-hint': '拖动 B 改变弧 AB，再拖动 C 到另一侧圆弧并比较数值。',
        'theorem-same-arc-definition': '同一条弧所对的圆周角相等。',
        'theorem-same-arc-explanation': '点 C 和 D 可以在同一圆段上移动，同时都观察弦 AB。',
        'theorem-same-arc-hint': '分别移动 C 和 D。画板会让它们保持在 AB 的同一侧。',
        'theorem-semicircle-definition': '半圆中的圆周角总是直角。',
        'theorem-semicircle-explanation': '当 AB 是直径时，半圆上的任意点 P 都会形成 ∠APB = 90°。',
        'theorem-semicircle-hint': '沿上半圆拖动 P，并检查直角标记。',
        'task-tangent-1': '先把 T 移到圆的右上弧段。',
        'task-tangent-2': '现在把 T 移到左下弧段。',
        'task-tangent-3': '最后把 T 放到接近圆顶的位置。',
        'task-center-1': '拖动 B，让圆心角大于 120°。',
        'task-center-2': '再移动 C，并让圆周角接近圆心角的一半。',
        'task-center-3': '最后保持宽弧，并继续让 2:1 关系清晰可见。',
        'task-same-arc-1': '把 C 移到右下区域，同时保持与 D 的角相等。',
        'task-same-arc-2': '现在把 D 拖到左下区域，并继续保持两角相等。',
        'task-same-arc-3': '最后让 C 和 D 分开，但仍保持同弧所对角相等。',
        'task-semicircle-1': '先把 P 移向半圆左侧。',
        'task-semicircle-2': '再把 P 移向右侧，同时保持直角。',
        'task-semicircle-3': '最后把 P 放到靠近顶部的位置，并保持 90°。',
        'msg-ready': '拖动高亮点来探索这个定理。',
        'msg-mode-switched': '定理模式已切换。请探索新的关系。',
        'msg-reset': '画板已重置，几何图形已准备好。',
        'msg-dragging': '正在拖动{point}。观察关系如何保持不变。',
        'msg-verified': '定理关系仍然成立。',
        'msg-off-circle': '{point} 已经离开圆周，所以定理关系不再一定成立。',
        'msg-snapped': '{point} 已吸附回圆周上，定理关系重新恢复。',
        'msg-task-complete': '第 {stage} 阶段已完成，继续下一个目标。',
        'msg-mode-complete': '这个定理模式的三个阶段都已完成。',
        'msg-guides-on': '辅助网格已显示。',
        'msg-guides-off': '辅助网格已隐藏。',
        'msg-labels-on': '点标签已显示。',
        'msg-labels-off': '点标签已隐藏。',
        'log-mode-title': '模式已载入',
        'log-reset-title': '画板已重置',
        'log-drag-title': '点已移动',
        'log-guides-title': '辅助线显示已改变',
        'log-labels-title': '标签显示已改变',
        'log-task-title': '任务完成',
        'log-mode-complete-title': '模式完成',
        'log-snap-title': '吸附发生',
        'log-tangent-intro': '切线-半径模式已载入。拖动 T，观察 OT 如何始终垂直于切线。',
        'log-center-intro': '圆心角模式已载入。比较 ∠AOB 与 ∠ACB。',
        'log-same-arc-intro': '同弧模式已载入。拖动 C 和 D，观察它们如何同时对应弧 AB。',
        'log-semicircle-intro': '半圆角模式已载入。拖动 P，检查直径 AB 上方的直角。',
        'log-reset-body': '当前定理画板已恢复到起始布局。',
        'log-tangent-drag': '{point}已移动。切线仍然与半径 OT 形成 90°。',
        'log-center-drag': '{point}已移动。∠AOB = {central}，∠ACB = {inscribed}。',
        'log-same-arc-drag': '{point}已移动。∠ACB = {angleC}，∠ADB = {angleD}。',
        'log-semicircle-drag': '{point}已移动。∠APB 仍为 {angle}。',
        'log-guides-on': '辅助网格已打开，便于比较位置。',
        'log-guides-off': '辅助网格已关闭，以便聚焦定理线条。',
        'log-labels-on': '点标签已打开。',
        'log-labels-off': '点标签已关闭。',
        'log-snap-body': '{point} 现在处于“{state}”状态。',
        'log-off-circle-body': '{point} 已经离开圆周，所以定理关系不再一定成立。',
        'log-task-body': '第 {stage} 阶段已完成：{task}。',
        'log-mode-complete-body': '{mode} 的三个阶段都已完成。',
        'board-aria-label': '交互式圆几何画板',
        'chat-header': 'AI 几何导师',
        'chat-ai': 'AI：',
        'chat-you': '你：',
        'chat-welcome': '欢迎来到圆几何实验室。你可以询问提示、切线规则或圆心角解释。',
        'chat-placeholder': '询问一个圆几何定理...',
        'chat-reply-contact': '你可以使用页脚的联系方式，也可以在这里继续询问当前定理。',
        'chat-reply-hint': '慢慢拖动高亮点，并描述哪个测量值始终不变。',
        'chat-reply-tangent': '切线只接触圆一次，并且在接触点处垂直于半径。',
        'chat-reply-center': '对于同一条弧 AB，圆心角 ∠AOB 是圆周角 ∠ACB 的两倍。',
        'chat-reply-same-arc': '同弧所对的角相等，即使对应点移动，角度也会保持一致。',
        'chat-reply-semicircle': '直径形成半圆，半圆上的任意点都会构成 90° 圆周角。',
        'chat-reply-default': '请选择一个定理模式，拖动蓝色点，并观察测量面板中的不变量。',
        'nav-toggle-label': '菜单',
        'modal-close': '确定',
        'footer-copy': '© 2026 25/26_EBU5315_G19. 保留所有权利。',
        'footer-data': '数据政策',
        'footer-access': '无障碍声明',
        'footer-contact': '联系我们'
    }
};

let currentLang = 'en';
let currentFontSize = 16;
let soundEnabled = true;
let currentFooterModalType = null;

const TAU = Math.PI * 2;
const SNAP_DISTANCE = 26;
const FREE_DRAG_PADDING = 52;
const BOARD = {
    cx: 320,
    cy: 260,
    radius: 168,
    tangentLength: 340
};
const CENTER_A_ANGLE = -2.32;
const SAME_A_ANGLE = -2.42;
const SAME_B_ANGLE = -0.72;
const MODE_ORDER = ['tangent', 'center-angle', 'same-arc', 'semicircle'];

const boardState = {
    currentMode: 'tangent',
    showGuides: true,
    showLabels: true,
    draggingPoint: null,
    pointerId: null,
    dragStartedSnapped: true,
    currentStatus: {
        type: 'info',
        key: 'msg-ready',
        vars: {}
    },
    modeStates: createInitialModeStates(),
    missionProgress: createInitialMissionProgress(),
    logEntries: []
};

const fields = Array.from(document.querySelectorAll('[data-field]'));
const geometryBoard = document.getElementById('geometry-board');
const arenaMessage = document.getElementById('arena-message');
const logBox = document.getElementById('log-box');
const modeButtons = Array.from(document.querySelectorAll('[data-mode]'));
const actionButtons = Array.from(document.querySelectorAll('[data-action]'));
const taskProgressBar = document.querySelector('[data-field="task-bar"]');
const themeBtn = document.getElementById('theme-btn');
const audioBtn = document.getElementById('audio-btn');
const chatInput = document.querySelector('#ai-chat-widget input');
const chatBody = document.querySelector('#ai-chat-widget .chat-body');

function createInitialModeStates() {
    return {
        tangent: {
            T: createPointStateFromAngle(-0.92)
        },
        'center-angle': {
            B: createPointStateFromAngle(-0.52),
            C: createPointStateFromAngle(1.56)
        },
        'same-arc': {
            C: createPointStateFromAngle(0.96),
            D: createPointStateFromAngle(2.05)
        },
        semicircle: {
            P: createPointStateFromAngle(Math.PI * 1.5)
        }
    };
}

function createInitialMissionProgress() {
    return {
        tangent: 0,
        'center-angle': 0,
        'same-arc': 0,
        semicircle: 0
    };
}

function t(key, vars = {}) {
    const table = translations[currentLang] || translations.en;
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
        audioIcon.textContent = soundEnabled ? '🔊' : '🔇';
    }
    if (audioLabel) {
        audioLabel.textContent = soundEnabled ? t('audio-on') : t('audio-off');
    }
}

function applyStaticTranslations() {
    document.documentElement.lang = currentLang;
    document.title = t('page-title');

    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.getAttribute('data-i18n');
        node.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
        const key = node.getAttribute('data-i18n-placeholder');
        node.placeholder = t(key);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
        const key = node.getAttribute('data-i18n-aria-label');
        node.setAttribute('aria-label', t(key));
    });

    const navToggleLabel = document.querySelector('[data-nav-toggle-label]');
    if (navToggleLabel) {
        navToggleLabel.textContent = t('nav-toggle-label');
    }

    const privacyCloseButton = document.querySelector('#privacy-modal .modal-close-btn');
    if (privacyCloseButton) {
        privacyCloseButton.textContent = t('modal-close');
    }

    updateThemeButton();
    updateAudioButton();

    if (currentFooterModalType) {
        const privacyModal = document.getElementById('privacy-modal');
        const privacyBody = document.getElementById('privacy-body');
        if (privacyModal && !privacyModal.hidden && privacyBody) {
            privacyBody.innerHTML = footerModalContent(currentFooterModalType);
        }
    }

    applyStatus();
}

function adjustFontSize(delta) {
    currentFontSize += delta * 2;
    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 26) currentFontSize = 26;
    document.documentElement.style.setProperty('--font-size-base', `${currentFontSize}px`);
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

function setNavOpen(isOpen) {
    const navToggle = document.querySelector('[data-nav-toggle]');
    const siteNav = document.querySelector('[data-site-nav]');
    if (!navToggle || !siteNav) return;

    siteNav.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

function syncBodyLock() {
    const privacyModal = document.getElementById('privacy-modal');
    document.body.style.overflow = privacyModal && !privacyModal.hidden ? 'hidden' : '';
}

function footerModalContent(type) {
    if (currentLang === 'zh') {
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
    const privacyModal = document.getElementById('privacy-modal');
    const privacyBody = document.getElementById('privacy-body');
    if (!privacyModal || !privacyBody) return;

    currentFooterModalType = type;
    privacyBody.innerHTML = footerModalContent(type);
    privacyModal.hidden = false;
    setNavOpen(false);
    syncBodyLock();
}

function togglePrivacyModal(show) {
    const privacyModal = document.getElementById('privacy-modal');
    if (!privacyModal) return;

    privacyModal.hidden = !show;
    if (!show) {
        currentFooterModalType = null;
    }
    syncBodyLock();
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

function changeLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    applyStaticTranslations();
    renderBoard();
    renderLog();
    refreshChatWelcome();
}

function setField(name, value) {
    fields.filter((node) => node.dataset.field === name).forEach((node) => {
        node.textContent = value;
    });
}

function normalizeAngle(angle) {
    return ((angle % TAU) + TAU) % TAU;
}

function positiveDiff(from, to) {
    return normalizeAngle(to - from);
}

function signedDiff(from, to) {
    let diff = positiveDiff(from, to);
    if (diff > Math.PI) diff -= TAU;
    return diff;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function fmt(value) {
    return Number.parseFloat(value).toFixed(2);
}

function formatDeg(value) {
    const rounded = Math.round(value * 10) / 10;
    return Number.isInteger(rounded) ? `${rounded.toFixed(0)}°` : `${rounded.toFixed(1)}°`;
}

function centerPoint() {
    return {
        x: BOARD.cx,
        y: BOARD.cy
    };
}

function pointOnCircle(angle, radius = BOARD.radius) {
    return {
        x: BOARD.cx + Math.cos(angle) * radius,
        y: BOARD.cy + Math.sin(angle) * radius
    };
}

function createPointStateFromAngle(angle) {
    return {
        angle: normalizeAngle(angle),
        distance: BOARD.radius,
        snapped: true
    };
}

function clampDistanceFromCenter(distance) {
    return clamp(distance, BOARD.radius - FREE_DRAG_PADDING, BOARD.radius + FREE_DRAG_PADDING);
}

function projectPointState(pointState) {
    return pointOnCircle(pointState.angle, pointState.distance);
}

function circleDifference(distance) {
    return Math.abs(distance - BOARD.radius);
}

function isPointSnapped(pointState) {
    return circleDifference(pointState.distance) <= 0.1;
}

function normalizeDragPoint(point, constraints = {}) {
    const vector = {
        x: point.x - BOARD.cx,
        y: point.y - BOARD.cy
    };
    const rawDistance = Math.hypot(vector.x, vector.y);
    const safeDistance = rawDistance || BOARD.radius;
    const angle = constraints.angleSanitizer ? constraints.angleSanitizer(angleFromPoint(point)) : normalizeAngle(angleFromPoint(point));
    const distance = clampDistanceFromCenter(safeDistance);
    const shouldSnap = !constraints.allowFreeMove || circleDifference(distance) <= SNAP_DISTANCE;

    return {
        angle,
        distance: shouldSnap ? BOARD.radius : distance,
        snapped: shouldSnap
    };
}

function syncPointState(pointState) {
    pointState.angle = normalizeAngle(pointState.angle);
    pointState.distance = clampDistanceFromCenter(pointState.distance);
    pointState.snapped = isPointSnapped(pointState);
    return pointState;
}

function setPointStateFromDrag(pointState, dragPoint, constraints = {}) {
    const next = normalizeDragPoint(dragPoint, {
        allowFreeMove: true,
        ...constraints
    });
    pointState.angle = next.angle;
    pointState.distance = next.distance;
    pointState.snapped = next.snapped;
    return pointState;
}

function offCirclePointIds(modeState, pointIds) {
    return pointIds.filter((pointId) => !isPointSnapped(modeState[pointId]));
}

function distanceText(pointState) {
    return `${Math.round(circleDifference(pointState.distance))} px`;
}

function angleFromPoint(point) {
    return Math.atan2(point.y - BOARD.cy, point.x - BOARD.cx);
}

function add(point, vector) {
    return {
        x: point.x + vector.x,
        y: point.y + vector.y
    };
}

function scale(vector, amount) {
    return {
        x: vector.x * amount,
        y: vector.y * amount
    };
}

function unit(vector) {
    const length = Math.hypot(vector.x, vector.y) || 1;
    return {
        x: vector.x / length,
        y: vector.y / length
    };
}

function angleAt(vertex, pointA, pointB) {
    const first = {
        x: pointA.x - vertex.x,
        y: pointA.y - vertex.y
    };
    const second = {
        x: pointB.x - vertex.x,
        y: pointB.y - vertex.y
    };
    const dot = first.x * second.x + first.y * second.y;
    const lengths = Math.hypot(first.x, first.y) * Math.hypot(second.x, second.y);
    const value = clamp(dot / lengths, -1, 1);
    return Math.acos(value) * 180 / Math.PI;
}

function getMinorArc(angleA, angleB) {
    const forward = positiveDiff(angleA, angleB);
    if (forward <= Math.PI) {
        return {
            start: normalizeAngle(angleA),
            delta: forward,
            end: normalizeAngle(angleB)
        };
    }
    return {
        start: normalizeAngle(angleB),
        delta: TAU - forward,
        end: normalizeAngle(angleA)
    };
}

function constrainOutsideMinorArc(angle, angleA, angleB, padding = 0.24) {
    const normalized = normalizeAngle(angle);
    const arc = getMinorArc(angleA, angleB);
    const diff = positiveDiff(arc.start, normalized);

    if (diff > padding && diff < arc.delta - padding) {
        return diff < arc.delta / 2
            ? normalizeAngle(arc.start - padding)
            : normalizeAngle(arc.end + padding);
    }

    return normalized;
}

function keepSeparated(angle, fixedAngle, minSeparation = 0.62) {
    const normalized = normalizeAngle(angle);
    const diff = signedDiff(fixedAngle, normalized);
    if (Math.abs(diff) >= minSeparation) {
        return normalized;
    }
    const direction = diff >= 0 ? 1 : -1;
    return normalizeAngle(fixedAngle + direction * minSeparation);
}

function keepAwayFromAngles(angle, blockedAngles, minSeparation = 0.28) {
    return blockedAngles.reduce((currentAngle, blockedAngle) => {
        return keepSeparated(currentAngle, blockedAngle, minSeparation);
    }, normalizeAngle(angle));
}

function constrainUpperSemicircle(angle) {
    const normalized = normalizeAngle(angle);
    const min = Math.PI + 0.18;
    const max = TAU - 0.18;

    if (normalized >= min && normalized <= max) {
        return normalized;
    }

    const distanceToLeft = Math.abs(normalized - Math.PI);
    const distanceToRight = Math.min(normalized, TAU - normalized);
    return distanceToLeft < distanceToRight ? min : max;
}

function describeArc(cx, cy, radius, startAngle, delta) {
    const start = {
        x: cx + Math.cos(startAngle) * radius,
        y: cy + Math.sin(startAngle) * radius
    };
    const end = {
        x: cx + Math.cos(startAngle + delta) * radius,
        y: cy + Math.sin(startAngle + delta) * radius
    };
    const largeArc = delta > Math.PI ? 1 : 0;
    return `M ${fmt(start.x)} ${fmt(start.y)} A ${radius} ${radius} 0 ${largeArc} 1 ${fmt(end.x)} ${fmt(end.y)}`;
}

function minorAngleSpan(startAngle, endAngle) {
    const forward = positiveDiff(startAngle, endAngle);
    if (forward <= Math.PI) {
        return {
            start: startAngle,
            delta: forward
        };
    }
    return {
        start: endAngle,
        delta: TAU - forward
    };
}

function directionAngle(from, to) {
    return Math.atan2(to.y - from.y, to.x - from.x);
}

function angleMarker(vertex, pointA, pointB, radius, className, label) {
    const startAngle = directionAngle(vertex, pointA);
    const endAngle = directionAngle(vertex, pointB);
    const span = minorAngleSpan(startAngle, endAngle);
    const path = describeArc(vertex.x, vertex.y, radius, span.start, span.delta);
    const mid = span.start + span.delta / 2;
    const labelPoint = {
        x: vertex.x + Math.cos(mid) * (radius + 22),
        y: vertex.y + Math.sin(mid) * (radius + 22)
    };

    return `
        <path class="${className}" d="${path}"></path>
        <text class="measure-label" x="${fmt(labelPoint.x)}" y="${fmt(labelPoint.y)}" text-anchor="middle" dominant-baseline="middle">${label}</text>
    `;
}

function rightAngleMarker(vertex, pointA, pointB, size = 24) {
    const first = unit({
        x: pointA.x - vertex.x,
        y: pointA.y - vertex.y
    });
    const second = unit({
        x: pointB.x - vertex.x,
        y: pointB.y - vertex.y
    });
    const p1 = add(vertex, scale(first, size));
    const p2 = add(p1, scale(second, size));
    const p3 = add(vertex, scale(second, size));
    const labelPoint = add(vertex, scale(unit({ x: first.x + second.x, y: first.y + second.y }), size + 23));

    return `
        <path class="geom-angle-right" d="M ${fmt(p1.x)} ${fmt(p1.y)} L ${fmt(p2.x)} ${fmt(p2.y)} L ${fmt(p3.x)} ${fmt(p3.y)}"></path>
        <text class="measure-label" x="${fmt(labelPoint.x)}" y="${fmt(labelPoint.y)}" text-anchor="middle" dominant-baseline="middle">90°</text>
    `;
}

function circleArc(angleA, angleB, radius = BOARD.radius) {
    const arc = getMinorArc(angleA, angleB);
    return describeArc(BOARD.cx, BOARD.cy, radius, arc.start, arc.delta);
}

function lineMarkup(pointA, pointB, className) {
    return `<line class="${className}" x1="${fmt(pointA.x)}" y1="${fmt(pointA.y)}" x2="${fmt(pointB.x)}" y2="${fmt(pointB.y)}"></line>`;
}

function pointMarkup(name, point, draggable = false, center = false, snapped = true) {
    if (center) {
        return `<circle class="center-point" cx="${fmt(point.x)}" cy="${fmt(point.y)}" r="6"></circle>`;
    }

    const visibleClass = draggable ? `point-drag${snapped ? '' : ' off-circle'}` : 'point-fixed';
    const hit = draggable ? `<circle class="drag-hit" cx="${fmt(point.x)}" cy="${fmt(point.y)}" r="20" data-point-id="${name}"></circle>` : '';
    const data = draggable ? `data-point-id="${name}"` : '';

    return `
        <g class="point-group">
            ${hit}
            <circle class="${visibleClass}" cx="${fmt(point.x)}" cy="${fmt(point.y)}" r="${draggable ? 8 : 6}" ${data}></circle>
        </g>
    `;
}

function snapGuideMarkup(pointState) {
    if (isPointSnapped(pointState)) {
        return '';
    }

    const actual = projectPointState(pointState);
    const target = pointOnCircle(pointState.angle);

    return `
        <line class="snap-guide" x1="${fmt(actual.x)}" y1="${fmt(actual.y)}" x2="${fmt(target.x)}" y2="${fmt(target.y)}"></line>
        <circle class="snap-target" cx="${fmt(target.x)}" cy="${fmt(target.y)}" r="11"></circle>
    `;
}

function labelMarkup(name, point, dx = 12, dy = -12) {
    if (!boardState.showLabels) {
        return '';
    }
    return `<text class="point-label" x="${fmt(point.x + dx)}" y="${fmt(point.y + dy)}">${name}</text>`;
}

function equationMarkup(text, y = 52) {
    return `<text class="board-equation" x="320" y="${y}" text-anchor="middle">${text}</text>`;
}

function captionMarkup(text, y = 486) {
    return `<text class="board-caption" x="320" y="${y}" text-anchor="middle">${text}</text>`;
}

function guideMarkup() {
    if (!boardState.showGuides) {
        return '';
    }

    return `
        <g aria-hidden="true">
            <circle class="board-grid" cx="320" cy="260" r="84"></circle>
            <circle class="board-grid" cx="320" cy="260" r="126"></circle>
            <circle class="board-grid" cx="320" cy="260" r="210"></circle>
            <line class="board-axis" x1="320" y1="42" x2="320" y2="478"></line>
            <line class="board-axis" x1="102" y1="260" x2="538" y2="260"></line>
            <line class="board-axis" x1="166" y1="106" x2="474" y2="414"></line>
            <line class="board-axis" x1="166" y1="414" x2="474" y2="106"></line>
        </g>
    `;
}

function boardScaffold(content) {
    return `
        <rect class="board-backdrop" x="0" y="0" width="640" height="520" rx="28"></rect>
        ${guideMarkup()}
        <circle class="board-circle" cx="320" cy="260" r="168"></circle>
        <circle class="snap-zone" cx="320" cy="260" r="${BOARD.radius - SNAP_DISTANCE}"></circle>
        <circle class="snap-zone" cx="320" cy="260" r="${BOARD.radius + SNAP_DISTANCE}"></circle>
        ${content}
    `;
}

function sanitizeCenterState(state) {
    state.B.angle = keepSeparated(state.B.angle, CENTER_A_ANGLE);
    state.C.angle = constrainOutsideMinorArc(state.C.angle, CENTER_A_ANGLE, state.B.angle);
    state.C.angle = keepAwayFromAngles(state.C.angle, [CENTER_A_ANGLE, state.B.angle], 0.3);
    syncPointState(state.B);
    syncPointState(state.C);
}

function sanitizeSameArcState(state) {
    state.C.angle = constrainOutsideMinorArc(state.C.angle, SAME_A_ANGLE, SAME_B_ANGLE);
    state.D.angle = constrainOutsideMinorArc(state.D.angle, SAME_A_ANGLE, SAME_B_ANGLE);
    state.C.angle = keepAwayFromAngles(state.C.angle, [SAME_A_ANGLE, SAME_B_ANGLE], 0.28);
    state.D.angle = keepAwayFromAngles(state.D.angle, [SAME_A_ANGLE, SAME_B_ANGLE, state.C.angle], 0.28);
    syncPointState(state.C);
    syncPointState(state.D);
}

function sanitizeSemicircleState(state) {
    state.P.angle = constrainUpperSemicircle(state.P.angle);
    syncPointState(state.P);
}

function currentStageIndex(modeId = boardState.currentMode) {
    return boardState.missionProgress[modeId] || 0;
}

function missionStageCount(modeId = boardState.currentMode) {
    return modeConfigs[modeId].tasks.length;
}

function isModeComplete(modeId = boardState.currentMode) {
    return currentStageIndex(modeId) >= missionStageCount(modeId);
}

function getCurrentTask(modeId = boardState.currentMode) {
    const config = modeConfigs[modeId];
    return config.tasks[Math.min(currentStageIndex(modeId), config.tasks.length - 1)];
}

function ratioWithin(value, min, max) {
    return value >= min && value <= max;
}

function angleNearTarget(angle, target, tolerance) {
    return Math.abs(signedDiff(target, angle)) <= tolerance;
}

const modeConfigs = {
    tangent: {
        titleKey: 'mode-tangent',
        dragKey: 'drag-t',
        focusValueKey: 'focus-right-angle',
        definitionKey: 'theorem-tangent-definition',
        explanationKey: 'theorem-tangent-explanation',
        hintKey: 'theorem-tangent-hint',
        observationKey: 'obs-tangent',
        logIntroKey: 'log-tangent-intro',
        logDragKey: 'log-tangent-drag',
        draggable: ['T'],
        tasks: [
            { key: 'task-tangent-1', check: (state) => isPointSnapped(state.T) && state.T.angle > 4.7 && state.T.angle < 5.95 },
            { key: 'task-tangent-2', check: (state) => isPointSnapped(state.T) && state.T.angle > 1.8 && state.T.angle < 3.35 },
            { key: 'task-tangent-3', check: (state) => isPointSnapped(state.T) && angleNearTarget(state.T.angle, Math.PI * 1.5, 0.26) }
        ],
        updateDrag(state, pointId, _, point) {
            if (pointId === 'T') {
                setPointStateFromDrag(state.T, point);
            }
        },
        getDerived(state) {
            syncPointState(state.T);
            const O = centerPoint();
            const T = projectPointState(state.T);
            const tangentContact = pointOnCircle(state.T.angle);
            const tangentVector = {
                x: -Math.sin(state.T.angle),
                y: Math.cos(state.T.angle)
            };
            const tangentStart = add(tangentContact, scale(tangentVector, -BOARD.tangentLength));
            const tangentEnd = add(tangentContact, scale(tangentVector, BOARD.tangentLength));
            const tangentReference = add(tangentContact, scale(tangentVector, 72));
            const snapped = isPointSnapped(state.T);

            return {
                points: { O, T, tangentContact },
                tangentStart,
                tangentEnd,
                tangentReference,
                offCirclePoints: offCirclePointIds(state, ['T']),
                measurement: snapped
                    ? t('measure-tangent')
                    : t('measure-tangent-off', { distance: distanceText(state.T) }),
                equation: snapped ? t('equation-tangent') : t('equation-tangent-off'),
                observation: snapped ? t('obs-tangent') : t('obs-off-circle'),
                logVars: {}
            };
        },
        render(derived) {
            const { O, T } = derived.points;
            return boardScaffold(`
                ${lineMarkup(derived.tangentStart, derived.tangentEnd, 'geom-line-tangent')}
                ${lineMarkup(O, T, 'geom-line-radius')}
                ${snapGuideMarkup(getCurrentModeState().T)}
                ${isPointSnapped(getCurrentModeState().T) ? rightAngleMarker(derived.points.tangentContact, O, derived.tangentReference, 24) : ''}
                ${pointMarkup('O', O, false, true)}
                ${pointMarkup('T', T, true, false, isPointSnapped(getCurrentModeState().T))}
                ${labelMarkup('O', O, 12, -12)}
                ${labelMarkup('T', T, 14, -14)}
                ${equationMarkup(derived.measurement)}
                ${captionMarkup(derived.equation)}
            `);
        }
    },
    'center-angle': {
        titleKey: 'mode-center-angle',
        dragKey: 'drag-bc',
        focusValueKey: 'focus-double-angle',
        definitionKey: 'theorem-center-definition',
        explanationKey: 'theorem-center-explanation',
        hintKey: 'theorem-center-hint',
        observationKey: 'obs-center-angle',
        logIntroKey: 'log-center-intro',
        logDragKey: 'log-center-drag',
        draggable: ['B', 'C'],
        tasks: [
            { key: 'task-center-1', check: (_, derived) => parseFloat(derived.logVars.central) > 120 },
            { key: 'task-center-2', check: (_, derived) => ratioWithin(parseFloat(derived.logVars.central) / Math.max(parseFloat(derived.logVars.inscribed), 1), 1.95, 2.05) && parseFloat(derived.logVars.inscribed) > 35 },
            { key: 'task-center-3', check: (_, derived) => parseFloat(derived.logVars.central) > 140 && ratioWithin(parseFloat(derived.logVars.central) / Math.max(parseFloat(derived.logVars.inscribed), 1), 1.95, 2.05) }
        ],
        sanitize: sanitizeCenterState,
        updateDrag(state, pointId, _, point) {
            if (pointId === 'B') {
                setPointStateFromDrag(state.B, point);
            }
            if (pointId === 'C') {
                setPointStateFromDrag(state.C, point);
            }
            sanitizeCenterState(state);
        },
        getDerived(state) {
            sanitizeCenterState(state);
            const O = centerPoint();
            const A = pointOnCircle(CENTER_A_ANGLE);
            const B = projectPointState(state.B);
            const C = projectPointState(state.C);
            const central = angleAt(O, A, B);
            const inscribed = angleAt(C, A, B);
            const centralText = formatDeg(central);
            const inscribedText = formatDeg(inscribed);
            const offCirclePoints = offCirclePointIds(state, ['B', 'C']);
            const snapped = offCirclePoints.length === 0;

            return {
                points: { O, A, B, C },
                angles: {
                    central: centralText,
                    inscribed: inscribedText
                },
                offCirclePoints,
                measurement: t('measure-center-angle', { central: centralText, inscribed: inscribedText }),
                equation: snapped
                    ? t('equation-center-angle', { central: centralText, inscribed: inscribedText })
                    : t('equation-off-circle'),
                observation: snapped ? t('obs-center-angle') : t('obs-off-circle'),
                logVars: {
                    central: centralText,
                    inscribed: inscribedText
                }
            };
        },
        render(derived) {
            const modeState = getCurrentModeState();
            const { O, A, B, C } = derived.points;
            return boardScaffold(`
                <path class="geom-arc-highlight" d="${circleArc(CENTER_A_ANGLE, modeState.B.angle)}"></path>
                ${lineMarkup(O, A, 'geom-line-radius')}
                ${lineMarkup(O, B, 'geom-line-radius')}
                ${lineMarkup(A, B, 'geom-line-secondary')}
                ${lineMarkup(C, A, 'geom-line-chord')}
                ${lineMarkup(C, B, 'geom-line-chord')}
                ${snapGuideMarkup(modeState.B)}
                ${snapGuideMarkup(modeState.C)}
                ${angleMarker(O, A, B, 52, 'geom-angle', derived.angles.central)}
                ${angleMarker(C, A, B, 42, 'geom-angle-secondary', derived.angles.inscribed)}
                ${pointMarkup('O', O, false, true)}
                ${pointMarkup('A', A)}
                ${pointMarkup('B', B, true, false, isPointSnapped(modeState.B))}
                ${pointMarkup('C', C, true, false, isPointSnapped(modeState.C))}
                ${labelMarkup('O', O, 12, -12)}
                ${labelMarkup('A', A, -30, -12)}
                ${labelMarkup('B', B, 12, -12)}
                ${labelMarkup('C', C, 12, 22)}
                ${equationMarkup(derived.measurement)}
                ${captionMarkup(derived.equation)}
            `);
        }
    },
    'same-arc': {
        titleKey: 'mode-same-arc',
        dragKey: 'drag-cd',
        focusValueKey: 'focus-equal',
        definitionKey: 'theorem-same-arc-definition',
        explanationKey: 'theorem-same-arc-explanation',
        hintKey: 'theorem-same-arc-hint',
        observationKey: 'obs-same-arc',
        logIntroKey: 'log-same-arc-intro',
        logDragKey: 'log-same-arc-drag',
        draggable: ['C', 'D'],
        tasks: [
            { key: 'task-same-arc-1', check: (_, derived) => derived.points.C.x > BOARD.cx + 70 && Math.abs(parseFloat(derived.logVars.angleC) - parseFloat(derived.logVars.angleD)) < 0.6 },
            { key: 'task-same-arc-2', check: (_, derived) => derived.points.D.x < BOARD.cx - 70 && Math.abs(parseFloat(derived.logVars.angleC) - parseFloat(derived.logVars.angleD)) < 0.6 },
            { key: 'task-same-arc-3', check: (_, derived) => Math.abs(derived.points.C.x - derived.points.D.x) > 110 && Math.abs(parseFloat(derived.logVars.angleC) - parseFloat(derived.logVars.angleD)) < 0.8 }
        ],
        sanitize: sanitizeSameArcState,
        updateDrag(state, pointId, _, point) {
            if (pointId === 'C') {
                setPointStateFromDrag(state.C, point);
            }
            if (pointId === 'D') {
                setPointStateFromDrag(state.D, point);
            }
            sanitizeSameArcState(state);
        },
        getDerived(state) {
            sanitizeSameArcState(state);
            const A = pointOnCircle(SAME_A_ANGLE);
            const B = pointOnCircle(SAME_B_ANGLE);
            const C = projectPointState(state.C);
            const D = projectPointState(state.D);
            const angleC = formatDeg(angleAt(C, A, B));
            const angleD = formatDeg(angleAt(D, A, B));
            const offCirclePoints = offCirclePointIds(state, ['C', 'D']);
            const snapped = offCirclePoints.length === 0;

            return {
                points: { A, B, C, D },
                angles: { angleC, angleD },
                offCirclePoints,
                measurement: t('measure-same-arc', { angleC, angleD }),
                equation: snapped ? t('equation-same-arc', { angleC, angleD }) : t('equation-off-circle'),
                observation: snapped ? t('obs-same-arc') : t('obs-off-circle'),
                logVars: {
                    angleC,
                    angleD
                }
            };
        },
        render(derived) {
            const modeState = getCurrentModeState();
            const { A, B, C, D } = derived.points;
            return boardScaffold(`
                <path class="geom-arc-highlight" d="${circleArc(SAME_A_ANGLE, SAME_B_ANGLE)}"></path>
                ${lineMarkup(A, B, 'geom-line-secondary')}
                ${lineMarkup(C, A, 'geom-line-chord')}
                ${lineMarkup(C, B, 'geom-line-chord')}
                ${lineMarkup(D, A, 'geom-line-radius')}
                ${lineMarkup(D, B, 'geom-line-radius')}
                ${snapGuideMarkup(modeState.C)}
                ${snapGuideMarkup(modeState.D)}
                ${angleMarker(C, A, B, 38, 'geom-angle', derived.angles.angleC)}
                ${angleMarker(D, A, B, 38, 'geom-angle-secondary', derived.angles.angleD)}
                ${pointMarkup('A', A)}
                ${pointMarkup('B', B)}
                ${pointMarkup('C', C, true, false, isPointSnapped(modeState.C))}
                ${pointMarkup('D', D, true, false, isPointSnapped(modeState.D))}
                ${labelMarkup('A', A, -30, -12)}
                ${labelMarkup('B', B, 12, -12)}
                ${labelMarkup('C', C, 12, 24)}
                ${labelMarkup('D', D, -34, 22)}
                ${equationMarkup(derived.measurement)}
                ${captionMarkup(derived.equation)}
            `);
        }
    },
    semicircle: {
        titleKey: 'mode-semicircle',
        dragKey: 'drag-p',
        focusValueKey: 'focus-right-angle',
        definitionKey: 'theorem-semicircle-definition',
        explanationKey: 'theorem-semicircle-explanation',
        hintKey: 'theorem-semicircle-hint',
        observationKey: 'obs-semicircle',
        logIntroKey: 'log-semicircle-intro',
        logDragKey: 'log-semicircle-drag',
        draggable: ['P'],
        tasks: [
            { key: 'task-semicircle-1', check: (state, derived) => state.P.angle > Math.PI && state.P.angle < Math.PI * 1.34 && parseFloat(derived.logVars.angle) >= 89 && parseFloat(derived.logVars.angle) <= 91 },
            { key: 'task-semicircle-2', check: (state, derived) => state.P.angle > Math.PI * 1.66 && state.P.angle < TAU && parseFloat(derived.logVars.angle) >= 89 && parseFloat(derived.logVars.angle) <= 91 },
            { key: 'task-semicircle-3', check: (state, derived) => angleNearTarget(state.P.angle, Math.PI * 1.5, 0.24) && parseFloat(derived.logVars.angle) >= 89 && parseFloat(derived.logVars.angle) <= 91 }
        ],
        sanitize: sanitizeSemicircleState,
        updateDrag(state, pointId, _, point) {
            if (pointId === 'P') {
                setPointStateFromDrag(state.P, point, {
                    angleSanitizer: constrainUpperSemicircle
                });
            }
            sanitizeSemicircleState(state);
        },
        getDerived(state) {
            sanitizeSemicircleState(state);
            const A = pointOnCircle(Math.PI);
            const B = pointOnCircle(0);
            const P = projectPointState(state.P);
            const angle = formatDeg(angleAt(P, A, B));
            const offCirclePoints = offCirclePointIds(state, ['P']);
            const snapped = offCirclePoints.length === 0;

            return {
                points: { A, B, P },
                angle,
                offCirclePoints,
                measurement: t('measure-semicircle', { angle }),
                equation: snapped ? t('equation-semicircle', { angle }) : t('equation-off-circle'),
                observation: snapped ? t('obs-semicircle') : t('obs-off-circle'),
                logVars: {
                    angle
                }
            };
        },
        render(derived) {
            const modeState = getCurrentModeState();
            const { A, B, P } = derived.points;
            return boardScaffold(`
                <path class="geom-arc-highlight" d="${describeArc(BOARD.cx, BOARD.cy, BOARD.radius, Math.PI, Math.PI)}"></path>
                ${lineMarkup(A, B, 'board-diameter')}
                ${lineMarkup(P, A, 'geom-line-chord')}
                ${lineMarkup(P, B, 'geom-line-chord')}
                ${snapGuideMarkup(modeState.P)}
                ${isPointSnapped(modeState.P) ? rightAngleMarker(P, A, B, 22) : ''}
                ${pointMarkup('A', A)}
                ${pointMarkup('B', B)}
                ${pointMarkup('P', P, true, false, isPointSnapped(modeState.P))}
                ${labelMarkup('A', A, -30, 4)}
                ${labelMarkup('B', B, 14, 4)}
                ${labelMarkup('P', P, 12, -14)}
                ${equationMarkup(derived.measurement)}
                ${captionMarkup(derived.equation)}
            `);
        }
    }
};

function getCurrentModeConfig() {
    return modeConfigs[boardState.currentMode];
}

function getCurrentModeState() {
    return boardState.modeStates[boardState.currentMode];
}

function getCurrentDerived() {
    const config = getCurrentModeConfig();
    const modeState = getCurrentModeState();
    if (config.sanitize) {
        config.sanitize(modeState);
    }
    return config.getDerived(modeState);
}

function currentStageLabel(modeId = boardState.currentMode) {
    const completed = currentStageIndex(modeId);
    const total = missionStageCount(modeId);
    return t('task-stage-format', {
        current: Math.min(completed + 1, total),
        total
    });
}

function taskProgressText(modeId = boardState.currentMode) {
    return t(isModeComplete(modeId) ? 'task-progress-complete' : 'task-progress-incomplete');
}

function taskProgressWidth(modeId = boardState.currentMode) {
    return `${(currentStageIndex(modeId) / missionStageCount(modeId)) * 100}%`;
}

function evaluateCurrentTask(modeId, derived) {
    const config = modeConfigs[modeId];
    const stageIndex = currentStageIndex(modeId);
    if (stageIndex >= config.tasks.length) {
        return false;
    }
    if (derived.offCirclePoints && derived.offCirclePoints.length > 0) {
        return false;
    }
    return config.tasks[stageIndex].check(boardState.modeStates[modeId], derived);
}

function currentInteractionStatus(derived) {
    if (boardState.draggingPoint) {
        return t('status-exploring');
    }
    if (derived.offCirclePoints && derived.offCirclePoints.length > 0) {
        return t('status-off-circle');
    }
    return taskProgressText();
}

function currentTaskLabel() {
    return isModeComplete() ? t('task-progress-complete') : t(getCurrentTask().key);
}

function updateDynamicFields(config, derived) {
    const modeTitle = t(config.titleKey);
    const interactionStatus = currentInteractionStatus(derived);

    setField('mode-badge', modeTitle);
    setField('focus-value', t(config.focusValueKey));
    setField('focus-note', t(config.definitionKey));
    setField('task-title', currentTaskLabel());
    setField('task-progress', currentStageLabel());
    setField('task-state', interactionStatus);
    setField('mode', modeTitle);
    setField('drag', t(config.dragKey));
    setField('measure', derived.measurement);
    setField('hud-stage', currentStageLabel());
    setField('status', interactionStatus);
    setField('status-mode', modeTitle);
    setField('status-task', currentTaskLabel());
    setField('status-stage', currentStageLabel());
    setField('status-drag', t(config.dragKey));
    setField('status-measure', derived.measurement);
    setField('status-observation', derived.observation);
    setField('status-progress', taskProgressText());
    setField('status-guides', t(boardState.showGuides ? 'toggle-on' : 'toggle-off'));
    setField('status-labels', t(boardState.showLabels ? 'toggle-on' : 'toggle-off'));
    setField('theorem-mode', modeTitle);
    setField('theorem-statement', t(config.definitionKey));
    setField('theorem-explanation', t(config.explanationKey));
    setField('theorem-hint', t(config.hintKey));

    if (taskProgressBar) {
        taskProgressBar.style.width = taskProgressWidth();
    }
}

function updateModeButtons() {
    modeButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.mode === boardState.currentMode);
    });
}

function renderBoard() {
    const config = getCurrentModeConfig();
    const derived = getCurrentDerived();

    updateDynamicFields(config, derived);
    updateModeButtons();

    if (geometryBoard) {
        geometryBoard.innerHTML = config.render(derived);
    }

    return derived;
}

function applyStatus() {
    if (!arenaMessage) return;
    const { type, key, vars } = boardState.currentStatus;
    arenaMessage.className = `status-banner ${type} arena-message`;
    arenaMessage.textContent = t(key, vars);
}

function setStatus(type, key, vars = {}) {
    boardState.currentStatus = {
        type,
        key,
        vars
    };
    applyStatus();
}

function pushLog(titleKey, bodyKey, vars = {}) {
    boardState.logEntries.unshift({ titleKey, bodyKey, vars });
    boardState.logEntries = boardState.logEntries.slice(0, 6);
    renderLog();
}

function renderLog() {
    if (!logBox) return;

    if (boardState.logEntries.length === 0) {
        logBox.innerHTML = `<div class="log-empty">${t('log-empty')}</div>`;
        return;
    }

    logBox.innerHTML = boardState.logEntries.map((entry) => `
        <div class="log-entry">
            <div class="log-title">${t(entry.titleKey, entry.vars)}</div>
            <div class="log-text">${t(entry.bodyKey, entry.vars)}</div>
        </div>
    `).join('');
}

function switchMode(modeId) {
    if (!modeConfigs[modeId]) return;
    boardState.currentMode = modeId;
    boardState.draggingPoint = null;
    boardState.pointerId = null;
    boardState.dragStartedSnapped = true;
    setStatus('info', 'msg-mode-switched');
    renderBoard();
    pushLog('log-mode-title', getCurrentModeConfig().logIntroKey);
}

function resetBoard() {
    const freshStates = createInitialModeStates();
    boardState.modeStates[boardState.currentMode] = freshStates[boardState.currentMode];
    boardState.missionProgress[boardState.currentMode] = 0;
    boardState.draggingPoint = null;
    boardState.pointerId = null;
    boardState.dragStartedSnapped = true;
    renderBoard();
    setStatus('info', 'msg-reset');
    pushLog('log-reset-title', 'log-reset-body');
}

function resetAllProgress() {
    boardState.modeStates = createInitialModeStates();
    boardState.missionProgress = createInitialMissionProgress();
    boardState.draggingPoint = null;
    boardState.pointerId = null;
    boardState.dragStartedSnapped = true;
}

function completeCurrentTask() {
    const modeId = boardState.currentMode;
    const stageNumber = currentStageIndex(modeId) + 1;
    const task = getCurrentTask(modeId);

    boardState.missionProgress[modeId] += 1;
    renderBoard();

    pushLog('log-task-title', 'log-task-body', {
        stage: stageNumber,
        task: t(task.key)
    });

    if (isModeComplete(modeId)) {
        setStatus('success', 'msg-mode-complete');
        pushLog('log-mode-complete-title', 'log-mode-complete-body', {
            mode: t(modeConfigs[modeId].titleKey)
        });
        return;
    }

    setStatus('success', 'msg-task-complete', {
        stage: stageNumber
    });
}

function toggleGuides() {
    boardState.showGuides = !boardState.showGuides;
    renderBoard();
    setStatus('info', boardState.showGuides ? 'msg-guides-on' : 'msg-guides-off');
    pushLog('log-guides-title', boardState.showGuides ? 'log-guides-on' : 'log-guides-off');
}

function toggleLabels() {
    boardState.showLabels = !boardState.showLabels;
    renderBoard();
    setStatus('info', boardState.showLabels ? 'msg-labels-on' : 'msg-labels-off');
    pushLog('log-labels-title', boardState.showLabels ? 'log-labels-on' : 'log-labels-off');
}

function nextMode() {
    const currentIndex = MODE_ORDER.indexOf(boardState.currentMode);
    const nextIndex = (currentIndex + 1) % MODE_ORDER.length;
    switchMode(MODE_ORDER[nextIndex]);
}

function svgPointFromEvent(event) {
    if (!geometryBoard) {
        return centerPoint();
    }
    const point = geometryBoard.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const matrix = geometryBoard.getScreenCTM();
    if (!matrix) {
        return centerPoint();
    }
    return point.matrixTransform(matrix.inverse());
}

function pointName(pointId) {
    const key = `point-${pointId.toLowerCase()}`;
    return t(key);
}

function updateDragFromEvent(event) {
    if (!boardState.draggingPoint) return;

    const config = getCurrentModeConfig();
    const modeState = getCurrentModeState();
    const point = svgPointFromEvent(event);

    config.updateDrag(modeState, boardState.draggingPoint, null, point);
    const derived = renderBoard();

    if (derived.offCirclePoints && derived.offCirclePoints.includes(boardState.draggingPoint)) {
        setStatus('error', 'msg-off-circle', { point: pointName(boardState.draggingPoint) });
    } else {
        setStatus('info', 'msg-dragging', { point: pointName(boardState.draggingPoint) });
    }
}

function finishDrag(event) {
    if (!boardState.draggingPoint || event.pointerId !== boardState.pointerId) {
        return;
    }

    updateDragFromEvent(event);
    const movedPoint = boardState.draggingPoint;
    const modeId = boardState.currentMode;
    const modeState = getCurrentModeState();
    const endedSnapped = isPointSnapped(modeState[movedPoint]);
    const startedSnapped = boardState.dragStartedSnapped;

    boardState.draggingPoint = null;
    boardState.pointerId = null;
    boardState.dragStartedSnapped = true;

    if (geometryBoard && geometryBoard.hasPointerCapture && geometryBoard.hasPointerCapture(event.pointerId)) {
        geometryBoard.releasePointerCapture(event.pointerId);
    }

    const derived = renderBoard();

    pushLog('log-drag-title', getCurrentModeConfig().logDragKey, {
        point: pointName(movedPoint),
        ...derived.logVars
    });

    if (startedSnapped !== endedSnapped) {
        pushLog('log-snap-title', 'log-snap-body', {
            point: pointName(movedPoint),
            state: t(endedSnapped ? 'snap-state-snapped' : 'snap-state-off')
        });
    }

    if (!endedSnapped) {
        pushLog('log-snap-title', 'log-off-circle-body', { point: pointName(movedPoint) });
        setStatus('error', 'msg-off-circle', { point: pointName(movedPoint) });
        return;
    }

    if (!startedSnapped && endedSnapped) {
        setStatus('success', 'msg-snapped', { point: pointName(movedPoint) });
    }

    if (evaluateCurrentTask(modeId, derived)) {
        completeCurrentTask();
        return;
    }

    if (startedSnapped || endedSnapped) {
        setStatus('success', startedSnapped ? 'msg-verified' : 'msg-snapped', { point: pointName(movedPoint) });
    }
}

function setupPointerEvents() {
    if (!geometryBoard) return;

    geometryBoard.addEventListener('pointerdown', (event) => {
        const target = event.target.closest('[data-point-id]');
        if (!target) return;

        const pointId = target.dataset.pointId;
        const config = getCurrentModeConfig();
        if (!config.draggable.includes(pointId)) return;

        event.preventDefault();
        boardState.draggingPoint = pointId;
        boardState.pointerId = event.pointerId;
        boardState.dragStartedSnapped = isPointSnapped(getCurrentModeState()[pointId]);

        if (geometryBoard.setPointerCapture) {
            geometryBoard.setPointerCapture(event.pointerId);
        }

        updateDragFromEvent(event);
    });

    geometryBoard.addEventListener('pointermove', (event) => {
        if (!boardState.draggingPoint || event.pointerId !== boardState.pointerId) {
            return;
        }
        event.preventDefault();
        updateDragFromEvent(event);
    });

    geometryBoard.addEventListener('pointerup', finishDrag);
    geometryBoard.addEventListener('pointercancel', finishDrag);
}

function setupActions() {
    actionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            if (action === 'reset') resetBoard();
            if (action === 'guides') toggleGuides();
            if (action === 'labels') toggleLabels();
            if (action === 'next-mode') nextMode();
        });
    });

    modeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            switchMode(button.dataset.mode);
        });
    });
}

function refreshChatWelcome() {
    if (!chatBody) return;
    const welcomeLine = chatBody.querySelector('[data-chat-welcome]');
    if (!welcomeLine) return;

    // 这种写法确保不会把 "AI:" 这个词弄丢
    const strong = welcomeLine.querySelector('strong');
    const span = welcomeLine.querySelector('span');
    if (strong) strong.textContent = t('chat-ai'); // 对应翻译里的 'AI:'
    if (span) span.textContent = t('chat-welcome');
}

function renderMessage(senderKey, text) {
    if (!chatBody) return;

    const p = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = t(senderKey);
    p.appendChild(strong);
    p.appendChild(document.createTextNode(` ${text}`));
    chatBody.appendChild(p);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getChatReply(message) {
    const normalized = message.toLowerCase();

    if (normalized.includes('contact') || message.includes('联系')) {
        return t('chat-reply-contact');
    }
    if (normalized.includes('hint') || message.includes('提示')) {
        return t(getCurrentModeConfig().hintKey);
    }
    if (normalized.includes('tangent') || message.includes('切线') || normalized.includes('90')) {
        return t('chat-reply-tangent');
    }
    if (normalized.includes('center') || normalized.includes('centre') || normalized.includes('圆心角')) {
        return t('chat-reply-center');
    }
    if (normalized.includes('same arc') || message.includes('同弧')) {
        return t('chat-reply-same-arc');
    }
    if (normalized.includes('semicircle') || normalized.includes('semi-circle') || message.includes('半圆')) {
        return t('chat-reply-semicircle');
    }

    return t('chat-reply-default');
}

function setupChat() {
    if (!chatInput) return;

    chatInput.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' || chatInput.value.trim() === '') {
            return;
        }

        const userMessage = chatInput.value.trim();
        renderMessage('chat-you', userMessage);
        chatInput.value = '';

        setTimeout(() => {
            renderMessage('chat-ai', getChatReply(userMessage));
        }, 350);
    });
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // 1. 修改当前页面样式
        document.documentElement.setAttribute('data-theme', newTheme);

        // 2. 【核心修复】保存到本地，这样 Home 和 Quiz 才能知道 Game 变色了
        localStorage.setItem('theme', newTheme);

        // 3. 更新按钮文字和图标
        updateThemeButton();
    });
}

if (audioBtn) {
    audioBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        updateAudioButton();
    });
}

const gamePrivacyModal = document.getElementById('privacy-modal');
if (gamePrivacyModal) {
    gamePrivacyModal.hidden = true;
}
syncBodyLock();

applyStaticTranslations();
setupNavToggle();

window.changeLanguage = changeLanguage;
window.toggleContrast = toggleContrast;
window.adjustFontSize = adjustFontSize;
window.openFooterModal = openFooterModal;
window.togglePrivacyModal = togglePrivacyModal;

function initializeLab() {
    resetAllProgress();
    setupActions();
    setupPointerEvents();
    setupChat();
    applyStaticTranslations();
    renderBoard();
    pushLog('log-mode-title', getCurrentModeConfig().logIntroKey);
    refreshChatWelcome();
}

initializeLab();

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    // 关键：必须加上这一句，游戏页的修改才能被记住
    localStorage.setItem('theme', newTheme);

    updateThemeButton();
}

/* =========================================
   Version 3.5.b: 最终全站同步修正 (Game 专项版)
   ========================================= */
function syncAtStartup() {
    // 1. 检查对比度
    if (localStorage.getItem('high-contrast') === 'true') {
        document.documentElement.setAttribute('data-a11y', 'high-contrast');
    }

    // 2. 检查并同步黑夜模式
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        // 重要：Game 页面特有的更新按钮状态函数
        if (typeof updateThemeButton === 'function') {
            updateThemeButton();
        }
    }
}

// 立即执行同步
syncAtStartup();

// 控制聊天框开关
function toggleChat() {
    const chat = document.getElementById('ai-chat-widget');
    chat.style.display = (chat.style.display === 'none') ? 'block' : 'none';
}

// 弹出确认框
function confirmClearChat() {
    document.getElementById('confirm-modal').style.display = 'flex';
}

// 关闭确认框
function closeModal() {
    document.getElementById('confirm-modal').style.display = 'none';
}

// 执行清空并保留欢迎语
function executeClear() {
    const chatBody = document.getElementById('chat-body');
    if (chatBody) {
        const welcome = (currentLang === 'zh') ? "<strong>AI:</strong> 对话记录已清空。" : "<strong>AI:</strong> Chat history cleared.";
        chatBody.innerHTML = `<p>${welcome}</p>`;
    }
    closeModal();
}