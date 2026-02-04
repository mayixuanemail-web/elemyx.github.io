// 混乱功能
function triggerUltraChaos() {
    const body = document.body;
    body.classList.add('chaos-active');
    
    // 激活各种效果
    document.querySelector('.glitch-bg').classList.add('active');
    document.querySelector('.chaos-overlay').classList.add('active');
    
    // 随机颜色
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#00ff00', '#ff00ff'];
    
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
    
    // 卡片混乱
    const cards = document.querySelectorAll('.hero-card');
    cards.forEach(card => {
        card.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.8 + 0.5}) skewX(${Math.random() * 20 - 10}deg)`;
        card.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    });
    
    // 页面抖动
    let shakeCount = 0;
    const shakeInterval = setInterval(() => {
        body.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
        shakeCount++;
        if (shakeCount > 30) {
            clearInterval(shakeInterval);
            body.style.transform = '';
            document.querySelector('.glitch-bg').classList.remove('active');
            document.querySelector('.chaos-overlay').classList.remove('active');
            cards.forEach(card => {
                card.style.transform = '';
                card.style.filter = '';
            });
        }
    }, 50);
}

// 脑洗模式
function brainWash() {
    document.body.classList.toggle('brainwash');
    setTimeout(() => {
        document.body.classList.remove('brainwash');
    }, 5000);
}

// 反转现实
function inverseReality() {
    document.body.classList.toggle('inverted');
}

// 英雄故障
function heroGlitch(element) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = '';
    }, 10);
    
    const glitches = Math.random() * 5 + 2;
    for (let i = 0; i < glitches; i++) {
        setTimeout(() => {
            element.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(${Math.random() * 20 - 10}deg)`;
            element.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        }, i * 50);
    }
    
    setTimeout(() => {
        element.style.transform = '';
        element.style.filter = '';
    }, 500);
}

// 创建彩纸
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = Math.random() * 10 + 5 + 'px';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '999';
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#ff00ff', '#00ffff', '#00ff00'];
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    
    document.body.appendChild(confetti);
    
    // 彩纸下落
    let top = -10;
    const speed = Math.random() * 5 + 2;
    const interval = setInterval(() => {
        top += speed;
        confetti.style.top = top + 'px';
        confetti.style.left = (parseFloat(confetti.style.left) + Math.random() * 10 - 5) + 'px';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.opacity = 1 - (top / window.innerHeight);
        
        if (top > window.innerHeight) {
            clearInterval(interval);
            confetti.remove();
        }
    }, 20);
}

// 页面加载效果
document.addEventListener('DOMContentLoaded', () => {
    // 卡片动画进入
    const cards = document.querySelectorAll('.hero-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0) rotate(-180deg)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            card.style.opacity = '1';
            card.style.transform = '';
        }, index * 150);
    });

    // 鼠标移动效果
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 15 - 7.5;
        const y = (e.clientY / window.innerHeight) * 15 - 7.5;
        
        cards.forEach((card, index) => {
            const offset = (index + 1) * 2;
            card.style.setProperty('--mouse-x', x * offset + 'px');
            card.style.setProperty('--mouse-y', y * offset + 'px');
        });
    });

    // 右键菜单秘蛋
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const messages = [
            '🎉 你发现了秘蛋！这是世界上最诡异的网站！🎉',
            '👁️ 你被注视着... 👁️',
            '🌀 欢迎来到混乱的世界 🌀',
            '💀 不要再点击了... 💀',
            '🔥 你触发了什么东西... 🔥'
        ];
        alert(messages[Math.floor(Math.random() * messages.length)]);
    });

    // 随机事件触发
    setInterval(() => {
        if (Math.random() > 0.97) {
            cards[Math.floor(Math.random() * cards.length)].style.animation = 'none';
            setTimeout(() => {
                cards.forEach(c => c.style.animation = '');
            }, 100);
        }
    }, 1000);

    // 页面失焦时警告
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            console.log('👁️ 你离开了吗？我在这里看着你... 👁️');
        }
    });
});

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        e.preventDefault();
        triggerUltraChaos();
    }
    if (e.key === 'Escape') {
        document.body.classList.remove('inverted', 'brainwash');
    }
});

// 随机效果
setInterval(() => {
    if (Math.random() > 0.98) {
        const cards = document.querySelectorAll('.hero-card');
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        heroGlitch(randomCard);
    }
}, 2000);
