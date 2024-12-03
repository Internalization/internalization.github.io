const enterButton = document.getElementById("enter-button");
const overlay = document.querySelector(".overlay");
const profilePage = document.querySelector(".profile-page");
const backgroundVideo = document.getElementById("background-video");

// Pause the video initially
backgroundVideo.pause();

enterButton.addEventListener("click", () => {
  // Fade out overlay
  overlay.style.opacity = "0";

  // Play the video and adjust styles
  backgroundVideo.style.filter = "brightness(1)";
  backgroundVideo.muted = false;
  backgroundVideo.play(); // Start the video playback

  setTimeout(() => {
    overlay.style.display = "none"; // Hide the overlay
    profilePage.style.display = "block"; // Show the profile page
    setTimeout(() => {
      profilePage.style.opacity = "1"; // Trigger fade-in effect
    }, 10); // Slight delay to ensure transition works
  }, 800);
});
