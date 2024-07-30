function openAdWindow() {
    const adWindow = window.open("", "Advertising Window", "width=400,height=300,scrollbars=yes");
    adWindow.document.write(`
        <div style="height: 2000px;">
            <h1>Advertisement</h1>
            <p>This is a scrollable advertising window. Keep scrolling to see more content...</p>
            <!-- Add more content as needed -->
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illo vel repellat officiis magnam velit! Ipsam animi repellendus ab fugit nulla, distinctio ratione voluptatibus earum rerum molestias vitae, aspernatur ducimus! </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illo vel repellat officiis magnam velit! Ipsam animi repellendus ab fugit nulla, distinctio ratione voluptatibus earum rerum molestias vitae, aspernatur ducimus!</p>
            <p>More content...</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illo vel repellat officiis magnam velit! Ipsam animi repellendus ab fugit nulla, distinctio ratione voluptatibus earum rerum molestias vitae, aspernatur ducimus!</p>
            <p>More content...</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illo vel repellat officiis magnam velit! Ipsam animi repellendus ab fugit nulla, distinctio ratione voluptatibus earum rerum molestias vitae, aspernatur ducimus!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illo vel repellat officiis magnam velit! Ipsam animi repellendus ab fugit nulla, distinctio ratione voluptatibus earum rerum molestias vitae, aspernatur ducimus!</p>
         
        </div>
    `);

    adWindow.addEventListener('scroll', function onScroll() {
        clearTimeout(adWindow.scrollTimeout);
        adWindow.scrollTimeout = setTimeout(() => {
            adWindow.close();
        }, 2000); // Adjust the time (2000 ms = 2 seconds) as needed
    }, false);
}
// git init
// git add .
// git commit -m "Initial project setup"
// git remote add origin https://github.com/yourusername/myproject.git
// git push -u origin main