chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "download_screenshot") {
        
        // Create a unique name using the current time
        const filename = `framegrab-${Date.now()}.png`;

        // Tell Chrome to download it
        chrome.downloads.download({
            url: request.imageData,
            filename: filename
        });
    }
});