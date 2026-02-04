// 混乱功能
function triggerChaos() {
    document.body.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    
    // 随机颜色闪烁
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // 创建彩纸效果
    for (let i = 0; i < 30; i++) {
        createConfetti();
    }
    
    // 缩放所有卡片
    const cards = document.querySelectorAll('.hero-card');
    cards.forEach(card => {
        card.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.8})`;
    });
    
    // 复位
    setTimeout(() => {
        document.body.style.transform = 'rotate(0deg)';
        cards.forEach(card => {
            card.style.transform = '';
        });
    }, 1000);
}

// 创建彩纸
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#ff00ff', '#00ffff'];
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    
    document.body.appendChild(confetti);
    
    // 彩纸下落
    let top = -10;
    const interval = setInterval(() => {
        top += Math.random() * 5 + 3;
        confetti.style.top = top + 'px';
        confetti.style.left = (parseFloat(confetti.style.left) + Math.random() * 10 - 5) + 'px';
        confetti.style.opacity = 1 - (top / window.innerHeight);
        
        if (top > window.innerHeight) {
            clearInterval(interval);
            confetti.remove();
        }
    }, 30);
}

// 页面加载效果
document.addEventListener('DOMContentLoaded', () => {
    // 卡片动画进入
    const cards = document.querySelectorAll('.hero-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = '';
        }, index * 100);
    });
    
    // 随机旋转卡片
    cards.forEach(card => {
        const randomRotate = Math.random() * 4 - 2;
        card.style.setProperty('--initial-rotate', randomRotate + 'deg');
    });

    // 鼠标移动效果
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 10 - 5;
        const y = (e.clientY / window.innerHeight) * 10 - 5;
        document.body.style.backgroundPosition = `${x}% ${y}%`;
    });

    // 右键菜单秘蛋
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        alert('🎉 你发现了秘蛋！这是世界上最离奇的网站！🎉');
    });
});

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        e.preventDefault();
        triggerChaos();
    }
});
