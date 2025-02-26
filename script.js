let installPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    installPrompt = e;
    document.getElementById("actionBtn").innerText = "Install App";
});

document.getElementById("actionBtn").addEventListener("click", () => {
    if (installPrompt) {
        // Show PWA Install Prompt
        installPrompt.prompt();
        installPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("User installed the app");
            }
            installPrompt = null;
            document.getElementById("actionBtn").innerText = "Download App";
        });
    } else {
        // Fallback to downloading the .app file
        window.location.href = "CosMos.apk"; // Update with actual file path
    }
});
