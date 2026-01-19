
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "download_screenshot") {
        
        // 1. Get the current time
        const timestamp = Date.now();

        // 2. Define your folder name here (You can change "AltCap" to whatever you want)
        // Note: The "/" at the end creates the folder
        const folderName = "AltCap-Captures/";
        
        // 3. Create the full path: Folder/File.png
        const fullFilename = `${folderName}screenshot-${timestamp}.png`;

        // 4. Download to that specific path
        chrome.downloads.download({
            url: request.imageData,
            filename: fullFilename,
            saveAs: false, // Set to false to skip the "Save As" dialog
            conflictAction: 'uniquify' // If file exists, add a number (1)
        });
    }
});
