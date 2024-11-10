---
prev: false
next: false
---

# Frontend

## HTML

## CSS

**Отцентровать абсолютный блок**
````css
.element {
  display: block;
  position: absolute;
  height: 20px;
  width: 20px;
  inset: 0;
  margin: auto;
}
````

## JS

**Отложенное подключение скрипта**

Подключение происходит по целевому действию пользователя или через 5
секунд полсе загрузки страницы

```js
<script type="text/javascript">
(function () {
  "use strict";
  let connectedScript = false, timerId;

  function loadFallback() {timerId = setTimeout(connectScript, 5000)}

  function connectScript() {
    if (connectedScript) return;

    // Выполняемая функция

    connectedScript = true;
    clearTimeout(timerId);
    window.removeEventListener("scroll", connectScript);
    window.removeEventListener("touchstart", connectScript);
    document.removeEventListener("mouseenter", connectScript);
    document.removeEventListener("click", connectScript);
    window.removeEventListener("load", loadFallback);
  }

  window.addEventListener("scroll", connectScript, { passive: true });
  window.addEventListener("touchstart", connectScript);
  document.addEventListener("mouseenter", connectScript);
  document.addEventListener("click", connectScript);
  window.addEventListener("load", loadFallback);
})()
</script>
```

**Копирование в буфер обмена**

```js
navigator.clipboard.writeText("текст для копирования")
  .then(() => console.log("Скопировано!"))
  .catch(() => console.log("Скопировать не удалось"));
```

**Добаление блоков полей формы**

```html
<template>
  <button>Удалить</button>
  <input name="data[{count}]">
</template>

<form>
  <div></div>
  <button type="button">Добавить</button>
</form>
```

```js
class QuestionnaireForm {
  // Дата атрибуты через которые находим нужные элементы
  selector_fields = "origin_additional_place_work";
  selector_add = "button_add_place_work";
  selector_insert_here = "insert_here_place_work";
  selector_remove = "remove_place_work";

  constructor() {
      this.counter = 0;

      this.btn_add = document.querySelector(`[data-js="${this.selector_add}"]`);
      if (!this.btn_add) return;
      this.fields = this.init_fields();
      this.insert_here = this.init_insert_here();
      if (!this.fields || !this.insert_here) return;

      this.btn_add.addEventListener('click', this.more_fields);
  }

  // Получаем поля которые будем копировать
  init_fields = () =>  {
      const origin_fields = document.querySelector(`[data-js="${this.selector_fields}"]`);
      if (!origin_fields) {
          console.error(`Не найден блок 'Место работы" с атрибутом data-js="${this.selector_fields}"`);
          return;
      }
      const fields = origin_fields.cloneNode(true);
      fields.removeAttribute('style');
      return fields;
  }

  // Получаем блок в который будем добавлять новые поля
  init_insert_here = () =>  {
      const insert_here = document.querySelector(`[data-js="${this.selector_insert_here}"]`);
      if (!insert_here) {
          console.error(`Не найден блок, подставления дополнительных мест работы, с атрибутом data-js="${this.selector_insert_here}"`);
          return;
      }
      return insert_here;
  }

  // Провереряем количество и если больше 4 штук (вместе с постоянной), то скрываем кнопку добавление доп полей
  check_count = () => {
    this.btn_add.style.display = this.counter > 3 ? "none" : ""
  }

  // Меняем индексы у полей после удаления
  correctNumbering = () => {
    const children_list = this.insert_here.children
    for (let i=0;<children_list.length; i++) {
      children_list[i].querySelectorAll('input[name]').forEach((item)=> {
        item.name = item.name.replace(/\[(\d+)\]/,`[${i+1}]`);
      })
    }
  }

  // Удалаяем поля
  remove_fields = (e) => {
      this.counter--;
      this.check_count();
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
      this.correctNumbering();
  }

  // Если есть кнопка удаления, то подписываем на ее клик удаление
  remove_hendler = (elem) => {
      if (!elem) return;
      elem.addEventListener('click', this.remove_fields);
  }

  // Добавляем поля
  more_fields = () => {
      this.counter++;
      this.check_count();
      const newFields = this.fields.cloneNode(true);

      this.remove_hendler(newFields.querySelector(`[data-js="${this.selector_remove}"]`));

      // заменяем шаблон номера блока и устанавливаем маску на поля
      newFields.querySelectorAll('input[name]').forEach((child) => {
          child.name = child.name.replace('{count}',this.counter);
      })

      this.insert_here.appendChild(newFields);
  }
}
```
