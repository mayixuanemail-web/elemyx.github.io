// 文本框交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有按钮
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 添加点击动画
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            // 处理按钮功能
            if (this.textContent.includes('关闭')) {
                this.closest('.textbox').style.animation = 'fadeOut 0.5s ease-out forwards';
            }
            
            // 300毫秒后移除涟漪效果
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // 添加文本框的进入动画
    const textboxes = document.querySelectorAll('.textbox');
    textboxes.forEach((box, index) => {
        box.style.animation = `slideIn 0.6s ease-out ${index * 0.1}s forwards`;
        box.style.opacity = '0';
    });
    
    // 鼠标悬停效果
    textboxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
