document.addEventListener("DOMContentLoaded", () => {
  const userSelect = document.getElementById("userSelect");
  const avatarIcon = document.getElementById("avatarIcon");

  const colors = {
    Basia: "rgba(255,255,0,0.3)",
    Kaja: "rgba(78,162,236,0.3)",
    Magda: "rgba(0,200,0,0.3)",
  };

  userSelect.addEventListener("change", () => {
    avatarIcon.style.backgroundColor =
      colors[userSelect.value] || "rgba(173,78,236,0.3)";
  });

  avatarIcon.style.backgroundColor = colors[userSelect.value];
});
