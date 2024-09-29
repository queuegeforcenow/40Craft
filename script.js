// スクロール時のアニメーション
window.addEventListener('scroll', () => {
    const content = document.querySelector('.content');
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (contentPosition < screenPosition) {
        content.classList.add('visible');
    } else {
        content.classList.remove('visible');
    }
});