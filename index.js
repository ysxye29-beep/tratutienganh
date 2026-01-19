document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  if (!root) {
    console.error("❌ Không tìm thấy #root");
    return;
  }

  root.innerHTML = `
    <div style="
      min-height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:28px;
      color:white;
    ">
      🎉 WEB ĐÃ CHẠY OK 🎉
    </div>
  `;
});
