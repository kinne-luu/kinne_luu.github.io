    // Hàm copy text riêng biệt
    function copyText(iconElement) {
        const text = iconElement.previousElementSibling.innerText;
        const uid = text.replace(/[^\d]/g, ''); // Lấy UID, loại bỏ chữ
        navigator.clipboard.writeText(uid).then(() => {
          console.log("Copied:", uid);
        });
      }