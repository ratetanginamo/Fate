// Example JS for project
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked! Live reload and animation working.');
});

// Optional: Demo animation on load (works with animation_lr.js)
window.addEventListener('load', () => {
    document.body.style.transform = 'scale(1.02)';
    setTimeout(() => document.body.style.transform = 'scale(1)', 500);
});
