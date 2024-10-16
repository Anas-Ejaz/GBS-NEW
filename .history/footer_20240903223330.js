var container = document.querySelector(".footer_text_scroll"); // Ensure this matches your class name
var lightEffect = document.querySelector(".footer_cursor-light");

function updateTorchPosition(x, y) {
    if (lightEffect) {
        lightEffect.style.setProperty('--x', x + 'px');
        lightEffect.style.setProperty('--y', y + 'px');
    }
}

container.addEventListener('mousemove', e => {
    var rect = container.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    updateTorchPosition(x, y);
});

// Handle touch events for mobile devices
container.addEventListener('touchmove', e => {
    var rect = container.getBoundingClientRect();
    var x = e.touches[0].clientX - rect.left;
    var y = e.touches[0].clientY - rect.top;
    updateTorchPosition(x, y);
});

container.addEventListener('touchstart', e => {
    var rect = container.getBoundingClientRect();
    var x = e.touches[0].clientX - rect.left;
    var y = e.touches[0].clientY - rect.top;
    updateTorchPosition(x, y);
});
