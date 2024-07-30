function openAdWindow() {
    const adWindow = window.open("", "Advertising Window", "width=400,height=300,scrollbars=yes");
    adWindow.document.write(`
        <html>
        <head>
            <title>Advertising Window</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 10px;
                    height: 1000px; 
                }
                h1 {
                    text-align: center;
                }
                .content {
                    text-align: center;
                    margin-top: 50px;
                }
                p {
                    font-size: 16px;
                }
            </style>
        </head>
        <body>
            <h1>Advertisement</h1>
            <div class="content">
                <p>This is a scrollable advertising window. Keep scrolling to see more content...</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illo vel repellat officiis magnam velit! Ipsam animi repellendus ab fugit nulla, distinctio ratione voluptatibus earum rerum molestias vitae, aspernatur ducimus!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illo vel repellat officiis magnam velit! Ipsam animi repellendus ab fugit nulla, distinctio ratione voluptatibus earum rerum molestias vitae, aspernatur ducimus!</p>
                <p>More content...</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illo vel repellat officiis magnam velit! Ipsam animi repellendus ab fugit nulla, distinctio ratione voluptatibus earum rerum molestias vitae, aspernatur ducimus!</p>
                <p>More content...</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illo vel repellat officiis magnam velit! Ipsam animi repellendus ab fugit nulla, distinctio ratione voluptatibus earum rerum molestias vitae, aspernatur ducimus!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, illo vel repellat officiis magnam velit! Ipsam animi repellendus ab fugit nulla, distinctio ratione voluptatibus earum rerum molestias vitae, aspernatur ducimus!</p>
            </div>
            <script>
                let scrollPosition = 0;
                const scrollStep = 2; // Adjust the scroll step size
                const scrollInterval = setInterval(() => {
                    window.scrollBy(0, scrollStep); // Scroll down by 2 pixels
                    scrollPosition += scrollStep;
                    if (scrollPosition >= document.body.scrollHeight - window.innerHeight) {
                        clearInterval(scrollInterval);
                    }
                }, 50); 
                
                // Close window after user stops scrolling for 2 seconds
                window.addEventListener('scroll', function onScroll() {
                    clearTimeout(window.scrollTimeout);
                    window.scrollTimeout = setTimeout(() => {
                        clearInterval(scrollInterval); 
                        window.close();
                    }, 2000); 
                }, false);
            </script>
        </body>
        </html>
    `);
}
