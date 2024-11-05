navigator.clipboard.writeText("текст для копирования")
  .then(() => console.log("Скопировано!"))
  .catch(() => console.log("Скопировать не удалось"));