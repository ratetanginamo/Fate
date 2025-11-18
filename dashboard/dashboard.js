const ws = new WebSocket('ws://localhost:9001');
const errorDiv = document.getElementById('errors');

ws.onmessage = function(event) {
    const errors = JSON.parse(event.data);
    errorDiv.innerHTML = '';

    if (errors.length === 0) {
        errorDiv.innerHTML = '<p style="color:green;">No errors detected ✅</p>';
    } else {
        errors.forEach(err => {
            const el = document.createElement('div');
            el.className = 'error';
            el.innerHTML = `[${err.type}] ${err.file}: ${err.message}`;
            errorDiv.appendChild(el);
        });
    }
};
