window.addEventListener("DOMContentLoaded", () => {
  const currentTimeEl = document.getElementById("currentTime");
  const progressBar = document.querySelector(".progress-bar"); // ✅ lấy thanh tiến trình
  const totalSeconds = 152;
  let startTime = Date.now();

  function updateTime() {
    let elapsed = (Date.now() - startTime) / 1000;

    if (elapsed >= totalSeconds) {
      // ✅ Reset thời gian
      startTime = Date.now();
      elapsed = 0;

      // ✅ Reset animation
      progressBar.style.animation = "none";
      void progressBar.offsetWidth; // ép reflow để animation chạy lại
      progressBar.style.animation = "fillBar 152s linear forwards";
    }

    const minutes = Math.floor(elapsed / 60);
    const seconds = Math.floor(elapsed % 60);
    currentTimeEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    requestAnimationFrame(updateTime);
  }

  updateTime();
});