function copyText(text) {
  navigator.clipboard.writeText(text);
}

function loaded() {
  document.querySelectorAll(".btn__copy").forEach((btn) => {
    btn.addEventListener('click', () => {
      copyText(btn.nextElementSibling.textContent);
    })
  });
}

document.addEventListener("DOMContentLoaded", loaded);
