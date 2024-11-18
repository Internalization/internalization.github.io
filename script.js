// Handle "Enter" button click
document.getElementById("enterButton").addEventListener("click", function () {
    const bgVideo = document.getElementById("bgVideo");
    const overlay = document.querySelector(".overlay");

    // Reveal video
    bgVideo.style.opacity = "1";
    bgVideo.muted = false; // Unmute video
    bgVideo.play();

    // Hide "Enter" button and show main content
    document.getElementById("enterContent").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    // Adjust overlay opacity
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    // Set video to loop
    bgVideo.loop = true;
});

// Handle "Untitled Clothing App" button click
document.getElementById("clothingAppButton").addEventListener("click", function () {
    window.location.href = "clothingapp.html"; // Redirect to clothing app page
});

// Randomly select background video
function chooseRandomVideo() {
    // Updated video options including bg1.mp4 to bg11.mp4
    const videoOptions = [];
    for (let i = 10; i <= 11; i++) {
        videoOptions.push(`bg${i}.mp4`);
    }

    // Generate a random index from the updated list
    const randomIndex = Math.floor(Math.random() * videoOptions.length);
    const videoSource = document.getElementById("bgSource");

    videoSource.src = videoOptions[randomIndex];
    document.getElementById("bgVideo").load();
}

// Initialize random video on page load
chooseRandomVideo();
