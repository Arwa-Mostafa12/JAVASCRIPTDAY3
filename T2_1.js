let childWindow;
let intervalId;
function openFlyingWindow() {
    childWindow = window.open("", "Flying Window", "width=200,height=100");
    childWindow.document.write("<h1>Flying Window</h1>");
    let x = 0, y = 0;
    let directionX = 1, directionY = 1;
    const step = 5; 
    const width = screen.width - 220; 
    const height = screen.height - 120; 

    intervalId = setInterval(() => {
        if (!childWindow || childWindow.closed) {
            clearInterval(intervalId);
            return;
        }
        x += directionX * step;
        y += directionY * step;

        if (x <= 0 || x >= width) {
            directionX *= -1;
        }
        if (y <= 0 || y >= height) {
            directionY *= -1;
        }

        childWindow.moveTo(x, y);
    }, 10);
}

function stopFlyingWindow() {
    clearInterval(intervalId);
}
