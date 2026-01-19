document.addEventListener('keydown', (event) => {
    // Check if the key pressed is strictly "Alt"
    if (event.key === "Alt") {
        
        event.preventDefault(); // Stop normal Alt behavior

        // Find the video element on the page
        const video = document.querySelector('video');

        if (video) {
            try {
                // Create a virtual canvas to paint the image
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                
                // Draw the video frame onto the canvas
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Convert that drawing into a text code that represents an image
                const dataURL = canvas.toDataURL('image/png');

                // Send that code to the background downloader
                chrome.runtime.sendMessage({
                    action: "download_screenshot",
                    imageData: dataURL
                });
            } catch (err) {
                console.log("Error capturing video frame.");
            }
        }
    }
});