window.addEventListener("load", function () {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    // fallback if autoplay blocked
    document.body.addEventListener("click", () => music.play(), { once: true });
  });
});
