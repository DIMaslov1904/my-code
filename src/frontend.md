---
prev: false
next: false
---

# Frontend

## - HTML

## Переключатель
```html
 <style>
  .toggle {
    font-size: 40px;
    appearance: none;
    width: 2.12em;
    height: 1em;
    background-color: grey;
    border-radius: .5em;
    display: flex;
    align-items: center;
    padding: .12em;
    transition: background-color .3s ease;
    border: none; 
  }
  .toggle:not(:disabled) {
    cursor: pointer;
  }
  .toggle::after {
    content: '';
    display: block;
    width: .87em;
    height: .87em;
    background-color: white;
    border-radius: 50%;
    transition: transform .3s ease;
  }
  .toggle:checked {
    background-color:#1cc668;
  }
  .toggle:checked::after {
    transform: translateX(1em);
  }
 </style>
<input class="toggle" type="checkbox" />
```

## Прелодер
<style>
.loader {
      --color: 255 255 255; /* цвет (rgb) */
      font-size: 5rem;      /* размер */
      width: 1em;
      position: relative;
      display: inline-block;
      aspect-ratio: 1/1;
    }
    .loader::before,
    .loader::after {
      --fill-box-shadow: 0 0 0 .12em rgb(var(--color));
      --box-shadow: 0 0 0 0 rgb(var(--color));
      content: '';
      position: absolute;
      aspect-ratio: inherit;
      border-radius: 50%;
      animation-duration: 1.8s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      filter: drop-shadow(0 0 .08em rgba(var(--color) / .75));
    }
    .loader::before {
      width: 1em;
      box-shadow: inset var(--fill-box-shadow);
      animation-name: pulsA;
    }
    .loader::after {
      width: .76em;
      inset: 0;
      margin: auto;
      box-shadow: var(--box-shadow);
      animation-name: pulsB;
    }
    @keyframes pulsA {
      0% {box-shadow: inset var(--fill-box-shadow);opacity: 1;}
      50%,100% {box-shadow: inset var(--box-shadow);opacity: 0;}
    }
    @keyframes pulsB {
      0%,50% {box-shadow: var(--box-shadow);opacity:0;}
      100% {box-shadow: var(--fill-box-shadow);opacity:1;}
    }
  </style>
  <span class="loader"></span>
```html
<style>
    .loader {
      --color: 255 255 255; /* цвет (rgb) */
      font-size: 5rem;      /* размер */
      width: 1em;
      position: relative;
      display: inline-block;
      aspect-ratio: 1/1;
    }
    .loader::before,
    .loader::after {
      --fill-box-shadow: 0 0 0 .12em rgb(var(--color));
      --box-shadow: 0 0 0 0 rgb(var(--color));
      content: '';
      position: absolute;
      aspect-ratio: inherit;
      border-radius: 50%;
      animation-duration: 1.8s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      filter: drop-shadow(0 0 .08em rgba(var(--color) / .75));
    }
    .loader::before {
      width: 1em;
      box-shadow: inset var(--fill-box-shadow);
      animation-name: pulsA;
    }
    .loader::after {
      width: .76em;
      inset: 0;
      margin: auto;
      box-shadow: var(--box-shadow);
      animation-name: pulsB;
    }
    @keyframes pulsA {
      0% {box-shadow: inset var(--fill-box-shadow);opacity: 1;}
      50%,100% {box-shadow: inset var(--box-shadow);opacity: 0;}
    }
    @keyframes pulsB {
      0%,50% {box-shadow: var(--box-shadow);opacity:0;}
      100% {box-shadow: var(--fill-box-shadow);opacity:1;}
    }
  </style>
  <span class="loader"></span>
```

## Аккордион
```html
<style>
  .accordion__title {
    display: inline;
  }
  .accordion__content {
    display: grid;
    grid-template-rows: 0fr;
    transition-duration: .3s;
  }
  .accordion__body {
    overflow: hidden;
  }
  .accordion__details[open] + .accordion__content {
    grid-template-rows: 1fr;
  }
</style>

<div class="accordion">
  <details class="accordion__details" name="faq">
    <summary class="accordion__details">
      <h3 class="accordion__title" role="term" aria-details="faq_1">Вопрос 1</h3>
    </summary>
  </details>

  <div class="accordion__content" id="faq_1" role="definition">
    <div class="accordion__body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis accusamus amet dolorem soluta sit molestias necessitatibus, ab rerum odio iure nam dolorum culpa doloribus ex ipsam. Ab, molestiae amet!
    </div>
  </div>
</div>

<div class="accordion">
  <details class="accordion__details" name="faq">
    <summary class="accordion__details">
      <h3 class="accordion__title" role="term" aria-details="faq_2">Вопрос 2</h3>
    </summary>
  </details>

  <div class="accordion__content" id="faq_2" role="definition">
    <div class="accordion__body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis accusamus amet dolorem soluta sit molestias necessitatibus, ab rerum odio iure nam dolorum culpa doloribus ex ipsam. Ab, molestiae amet!
    </div>
  </div>
</div>

<div class="accordion">
  <details class="accordion__details" name="faq">
    <summary class="accordion__details">
      <h3 class="accordion__title" role="term" aria-details="faq_3">Вопрос 3</h3>
    </summary>
  </details>

  <div class="accordion__content" id="faq_3" role="definition">
    <div class="accordion__body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis accusamus amet dolorem soluta sit molestias necessitatibus, ab rerum odio iure nam dolorum culpa doloribus ex ipsam. Ab, molestiae amet!
    </div>
  </div>
</div>
```

## - CSS

## Отцентровать абсолютный блок
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

## - JS

## Отслеживание нескольких событий

```js
"input focus blur keydown".split(" ").forEach(function(e){input.addEventListener(e,()=>{},false)});
```

## Отложенное подключение скрипта

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
    "scroll touchstart load".split(" ").forEach(function(e){window.removeEventListener(e,connectScript)});
    "mouseenter click".split(" ").forEach(function(e){document.removeEventListener(e,connectScript)});
  }

  "touchstart load".split(" ").forEach(function(e){window.addEventListener(e,connectScript)});
  "mouseenter click".split(" ").forEach(function(e){document.addEventListener(e,connectScript)});
  window.addEventListener("scroll", connectScript, { passive: true });
})()
</script>
```

## Копирование в буфер обмена

```js
navigator.clipboard.writeText(this.textContent)
  .then(() => console.log("Скопировано!"))
  .catch(() => console.log("Скопировать не удалось"));
```

## Добаление блоков полей формы

Перепроверить

```html
<template class="additional-work">
  <button class="remove-work">Удалить</button>
  <input name="data[{count}]">
</template>

<form>
  <div class="additional-works"></div>
  <button class="add-work" type="button">Добавить</button>
</form>
```

```js
function addWorkplaceField() {
  const btn_add = document.querySelector('.add-work');
  const insert_here = document.querySelector('.additional-works');
  const template = document.querySelector('.additional-work').cloneNode(true);
  let counter = 0; // счетчик доп рабочих мест

  btn_add.addEventListener('click', more_fields);

  // Проверяем количество и если больше 4 штук (вместе с постоянной), то скрываем кнопку добавление доп полей
  function check_count(){
    btn_add.style.display = (counter > 3) ? 'none' : '';
  }

  // Меняем индексы у полей после удаления
  correctNumbering = () => {
    const children_list = insert_here.children
    for (let i=0;<children_list.length; i++) {
      children_list[i].querySelectorAll('input[name]').forEach((item)=> {
        item.name = item.name.replace(/\[(\d+)\]/,`[${i+1}]`);
      })
    }
  }

  // Удаляем поля
  function remove_fields(e) {
      counter--;
      check_count();
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
      correctNumbering();
  }

  // Добавляем поля
  function more_fields() {
      counter++;
      check_count();
      const newFields = fields.cloneNode(true);
      newFields.querySelector(`.remove-work`).addEventListener('click', remove_fields);
      // заменяем шаблон номера блока и устанавливаем маску на поля
      newFields.querySelectorAll('input[name]').forEach((child) => {
          child.name = child.name.replace('{count}',counter);
      })

      insert_here.appendChild(newFields);
  }
}
```

## Получение доминируещего цвета из изображения

```ts
export interface Opts {
  ignore?: string[];
  scale?: number;
  skipTransparentPixels?: boolean;
}

function getContext(width: string, height: string) {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
  return canvas.getContext("2d");
}

function getImageData(src: string, scale: number) {
  if (scale === void 0) scale = 1;

  const img = new Image();
  if (!src.startsWith("data")) img.crossOrigin = "Anonymous";

  return new Promise((resolve, reject) => {
    img.onload = () => {
      const width = img.width * scale;
      const height = img.height * scale;
      const context = getContext(String(width), String(height));
      context?.drawImage(img, 0, 0, width, height);
      const ref = context?.getImageData(0, 0, width, height);
      const data = ref?.data;
      resolve(data);
    };

    const errorHandler = () =>
      reject(new Error("An error occurred attempting to load image"));

    img.onerror = errorHandler;
    img.onabort = errorHandler;
    img.src = src;
  });
}

function getCounts(data: any, ignore?: string[]) {
  const countMap: { [key: string]: any } = {};

  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    if (+alpha === 0) continue;

    const rgbComponents = Array.from(data.subarray(i, i + 3));
    if (rgbComponents.indexOf(undefined) !== -1) continue;

    const color =
      alpha && alpha !== 255
        ? "rgba(" + rgbComponents.concat([alpha]).join(",") + ")"
        : "rgb(" + rgbComponents.join(",") + ")";

    if (ignore?.indexOf(color) !== -1) continue;

    if (countMap[color]) countMap[color].count++;
    else countMap[color] = { color: color, count: 1 };
  }

  const counts = Object.values(countMap);
  return counts.sort((a, b) => b.count - a.count);
}

const defaultOpts = { ignore: [], scale: 1 };

export default async function colorImages(src: string, opts?: Opts) {
  if (opts === void 0) opts = defaultOpts;

  try {
    opts = Object.assign({}, defaultOpts, opts);
    const ignore = opts.ignore;
    const scale = opts.scale;

    if ((!!scale && scale > 1) || (!!scale && scale <= 0)) {
      console.warn(
        "You set scale to " +
          scale +
          ", which isn't between 0-1. This is either pointless (> 1) or a no-op (≤ 0)"
      );
    }

    const data = await Promise.resolve(getImageData(src, Number(scale)));
    return getCounts(data, ignore);
  } catch (e) {
    return Promise.reject(e);
  }
}
```

## Работа с датами

```ts
type InputDate = Date | string | number | null;

const created_at = new Date();

export function parsDate(date: InputDate) {
  if (!date) {
    return null;
  } else if (typeof date === "string") {
    return new Date(date);
  } else if (typeof date === "number") {
    return new Date(String(date).length === 10 ? date * 1000 : date);
  } else {
    return date;
  }
}

function checkDate(date: InputDate) {
  return date instanceof Date ? date : parsDate(date);
}

function getDateNoTime(date: InputDate) {
  const nDate = checkDate(date);
  return nDate
    ? new Date(nDate.getFullYear(), nDate.getMonth(), nDate.getDate())
    : null;
}

export function formateDate(date: InputDate, format: string = "DD.MM.YYYY") {
  const fDate = checkDate(date);
  if (!fDate) return "";
  return format
    .replace(/\bYYYY\b/, String(fDate.getFullYear()))
    .replace(/\bDD\b/, String(fDate.getDate()).padStart(2, "0"))
    .replace(/\bMM\b/, String(fDate.getMonth() + 1).padStart(2, "0"));
}

export function formateTime(date: InputDate, format: string = "HH:mm") {
  const fDate = checkDate(date);
  if (!fDate) return "";
  return format
    .replace(/\bHH\b/, String(fDate.getHours()).padStart(2, "0"))
    .replace(/\bmm\b/, String(fDate.getMinutes()).padStart(2, "0"))
    .replace(/\bss\b/, String(fDate.getSeconds()));
}

export function daysInMonth(month: number, year: number) {
  return new Date(year ?? created_at.getFullYear(), month, 0).getDate();
}

export function dateDiff(date1: InputDate, date2: InputDate, accountTime: Boolean = true) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const fDate1 = checkDate(date1);
  const fDate2 = checkDate(date2);

  const millisBetween = accountTime
    ? Number(fDate2) - Number(fDate1)
    : Number(getDateNoTime(fDate2)) - Number(getDateNoTime(fDate1));

  return Math.round(millisBetween / millisecondsPerDay);
}

export default {
  parsDate,
  formateDate,
  formateTime,
  daysInMonth,
};

// return new Date(props.date).toLocaleDateString("ru-RU", {
//   timeZone: "Europe/Moscow",
// });

```

## Числительное по номеру

```js
function declOfNum(number, words) {
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}
```

## Перевод микросекунд в период

```js
function durationFormat(duration) {
  let delta = duration / 1000,
  result = '';
  const days = Math.floor(delta / 86400);
  result += days ? `${days} дн ` : '';
  delta -= days * 86400;
  const hours = Math.floor(delta / 3600) % 24;
  result += hours ? hours + ' ч ' : '';
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60) % 60;
  result += minutes ? minutes + ' м ' : '';
  delta -= minutes * 60;
  const seconds = Math.floor(delta % 60); 
  return result + seconds + ' с';
}
```

## Форматирование байт в человекочитаемый вид

```ts
export function formatBytes(bytes: number, decimals = 2) {
  if (!bytes) return "0 байт";

  const k = 1024,
  dm = decimals < 0 ? 0 : decimals,
  sizes = ["байт", "КБ", "МБ", "ГБ", "ТБ", "ПБ"],
  i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
```

## Запрос файла. Получаем размер файла

```js
export async function getFile (href) {
  function getExtension(str) {
    return str.slice(((str.lastIndexOf(".") - 1) >>> 0) + 2).toLowerCase();
  }

  function getFileNameFromHref() {
    return href.substring(
      href.lastIndexOf("/") + 1,
      href.lastIndexOf(".")
    )
  }

  const response = await fetch(href, { method: "HEAD" })
  const size = Number(response.headers.get("content-length"))
  const name = getFileNameFromHref()
  const extension = getExtension(href)

  return { name, extension, size }
}
```

## Hex в RGB

```ts
export function hexToRgb(hex: string) {
  hex = hex.replace("#", "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b].join();
}
```

## Получаем цвет фона (темный или светлый)

```ts
import { hexToRgb } from "./hexToRgb";

export function isBackgroundDark(color: string) {
  const rgb = color.includes("#")
    ? hexToRgb(color).match(/\d+/g)
    : color.match(/\d+/g);
  const luma = 186;
  if (!rgb) return true;
  return +rgb[0] * 0.299 + +rgb[1] * 0.587 + +rgb[2] * 0.114 < luma;
}

```

## Input file

Я бы пересмотрел свой подход
 
```js
/
 * inputFile v0.2
 * developed by DIMaslov
 */

class InputFile {
  dt = new DataTransfer();

  constructor(input) {
    this.input = input;
    this._init();
  }

  _initDefaultName = () => {
    if (this.input.placeholder)
      return this.input.placeholder
    else if (this.multiple)
      return 'Выберите файл(ы)'
    return 'Выберите файл'
  }

  _init = () => {
    this.multiple = this.input.getAttribute('multiple') !== null
    this.defaultName = this._initDefaultName()
    this.disabled = this.input.getAttribute('disabled') !== null
    this._createWrapper();
    this._run();
    this._initValues();
  }

  _initValues = () => {
    const values = this.input.getAttribute('data-init-value')
    if (values) {
      if (this.multiple) {
        try {
          this.addFiles(JSON.parse(values))
        }
        catch (err) {
          console.error(`input[name=${this.input.name}] атрибут data-init-value имеет не верный формат.\n\nУкажите в формате: data-init-value='["url-file", "url-file"]'`)
        }
      } else {
        this.addFiles([values])
      }
    }
  }

  _createElement(tag, className) {
    const newElement = document.createElement(tag)
    if (className) newElement.classList.add(className)
    return newElement
  }

  _createWrapper () {
    const org_html = this.input;
    org_html.classList.add('n-input-file')
    this.wrapper = this._createElement('label', `n-input-file__container`);
    org_html.parentNode.insertBefore(this.wrapper, org_html);
    this.wrapper.appendChild(org_html);
    const nameContainer = this._createElement('div', 'n-input-file__name')
    this.name = this._createElement('span')
    this.name.textContent = this.defaultName;
    nameContainer.appendChild(this.name);
    this.wrapper.appendChild(nameContainer);
    this.list = this._createElement('div', `n-input-file__list`)
    if (this.disabled) this.list.classList.add('disabled')
    this.wrapper.insertAdjacentElement('afterend', this.list)
  }

  _run () {
    this.input.addEventListener('change', this._handlerChange)
  }

  _handlerChange = () => {
    this.list.textContent = '';
    if (this.multiple) {
      this._handlerMultipleChange()
    } else {
      this.dt = new DataTransfer();
      const file = this.input.files[0];
      if (file) this.dt.items.add(file);
      this.name.textContent = file ? file.name : this.defaultName;
    }
  }

  _handlerMultipleChange() {
    this.dt = new DataTransfer();
    for(let i = 0; i < this.input.files.length; i++) {
      const file = this.input.files[i];
      this._addFileLine(file)
    }
  }

  _addFileLine = (file, ind, href) => {
    this.dt.items.add(file);
    const name = href
      ? this.multiple ? `Прикрепленный файл ${ind + 1}` : 'Прикрепленный файл'
      : file.name;
    const fileLine = this._createElement('div', 'n-input-file__item');
    fileLine.innerHTML =  href
      ? `<a href="${href}" target="_blank">${name}</a>`
      : `<span>${name}<span>`;
    const removeButton = this._createElement('button', 'n-input-file__remove')
    removeButton.addEventListener('click', (e) => this._removeFilesItem(e, file.name, fileLine))
    fileLine.appendChild(removeButton)
    this.list.appendChild(fileLine);
  }

  _removeFilesItem(event, name, fileLine) {
    fileLine.remove();
    for(let i = 0; i < this.dt.items.length; i++){
      if(name === this.dt.items[i].getAsFile().name){
        this.dt.items.remove(i);
      }
    }
    this.input.files = this.dt.files;
    const eventChange = new Event("change");
    this.input.dispatchEvent(eventChange);
    this.input.closest("form")?.dispatchEvent(eventChange);
  }

  unload = () => {
    this.input.removeEventListener('change', this._handlerChange)
    this.wrapper.parentNode.insertBefore(this.input, this.wrapper);
    this.input.classList.remove('n-input-file')
    this.wrapper.remove();
    if (this.list) this.list.remove();
  }

  inputFile = () => {
    this._init();
  }

  reset = () => {
    this.addFiles([])
  }

  addFiles = (files) => {
    try {
      this.dt = new DataTransfer();
      this.list.textContent = '';

      if (Array.isArray(files)) {
        files.forEach((href, ind) => {
          const file = new File([], href, {type: 'downloaded/server'});
          this._addFileLine(file, ind, href)
        })
      } else if (files) {
        const file = new File([], files, {type: 'downloaded/server'});
        this._addFileLine(file, 0, files)
      }
      this.input.files = this.dt.files;
    } catch {
      console.error('Ошибка добавления файлов в inputFile ' + this.input.name)
    }
  }
}
```

## Простая маска на телефон

```ts
window.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.js-phone-mask').forEach(function(input) {
        let keyCode: number;
        function mask(this: HTMLInputElement, event: Event & { keyCode?: number, inputType?: string, type: string }): void {
            event.keyCode && (keyCode = event.keyCode);
            const pos = this.selectionStart;
            if (pos && pos < 3) event.preventDefault();
            const matrix = "+7 (___) ___ ____",
                def = matrix.replace(/\D/g, "");
            let val = this.value.replace(/\D/g, "");
            if (event.inputType === 'insertFromPaste') val = '7' + val.slice(-10);
            let i = 0,
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = new_value.indexOf("_");
            if (i !== -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i);
            }
            let reg: RegExp | string = matrix.substring(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type === "blur" && this.value.length < 5)  this.value = "";
            if (event.type === 'focus') setTimeout(()=> this.selectionStart = this.selectionEnd = 10000, 0);
        }
        ["input", "focus", "blur", "keydown"].forEach(function(e){
            (input as HTMLInputElement).addEventListener(e, mask as EventListener, false);
        });
    });
});
```

## Прелоадер

```js
document.addEventListener("DOMContentLoaded", addStylePreloader);

function addStylePreloader() {
  document.querySelector('head').insertAdjacentHTML( 'beforeend', '<style>.preloader {display:block;width:50px;height:50px;margin: 0 auto;}</style>')
}


class Preloader {
  colorPreloader = '#51b848'
  svg = `<svg class="preloader"xmlns="http://www.w3.org/2000/svg"viewBox="0 0 100 100"><rect width="6"height="15"x="47"y="22.5"fill="${this.colorPreloader}"rx="3"ry="7.5"><animate attributeName="opacity"begin="-0.9s"dur="1s"keyTimes="0;1"repeatCount="indefinite"values="1;0"/></rect><rect width="6"height="15"x="47"y="22.5"fill="${this.colorPreloader}"rx="3"ry="7.5"transform="rotate(36 50 50)"><animate attributeName="opacity"begin="-0.8s"dur="1s"keyTimes="0;1"repeatCount="indefinite"values="1;0"/></rect><rect width="6"height="15"x="47"y="22.5"fill="${this.colorPreloader}"rx="3"ry="7.5"transform="rotate(72 50 50)"><animate attributeName="opacity"begin="-0.7s"dur="1s"keyTimes="0;1"repeatCount="indefinite"values="1;0"/></rect><rect width="6"height="15"x="47"y="22.5"fill="${this.colorPreloader}"rx="3"ry="7.5"transform="rotate(108 50 50)"><animate attributeName="opacity"begin="-0.6s"dur="1s"keyTimes="0;1"repeatCount="indefinite"values="1;0"/></rect><rect width="6"height="15"x="47"y="22.5"fill="${this.colorPreloader}"rx="3"ry="7.5"transform="rotate(144 50 50)"><animate attributeName="opacity"begin="-0.5s"dur="1s"keyTimes="0;1"repeatCount="indefinite"values="1;0"/></rect><rect width="6"height="15"x="47"y="22.5"fill="${this.colorPreloader}"rx="3"ry="7.5"transform="rotate(180 50 50)"><animate attributeName="opacity"begin="-0.4s"dur="1s"keyTimes="0;1"repeatCount="indefinite"values="1;0"/></rect><rect width="6"height="15"x="47"y="22.5"fill="${this.colorPreloader}"rx="3"ry="7.5"transform="rotate(216 50 50)"><animate attributeName="opacity"begin="-0.3s"dur="1s"keyTimes="0;1"repeatCount="indefinite"values="1;0"/></rect><rect width="6"height="15"x="47"y="22.5"fill="${this.colorPreloader}"rx="3"ry="7.5"transform="rotate(252 50 50)"><animate attributeName="opacity"begin="-0.2s"dur="1s"keyTimes="0;1"repeatCount="indefinite"values="1;0"/></rect><rect width="6"height="15"x="47"y="22.5"fill="${this.colorPreloader}"rx="3"ry="7.5"transform="rotate(288 50 50)"><animate attributeName="opacity"begin="-0.1s"dur="1s"keyTimes="0;1"repeatCount="indefinite"values="1;0"/></rect><rect width="6"height="15"x="47"y="22.5"fill="${this.colorPreloader}"rx="3"ry="7.5"transform="rotate(324 50 50)"><animate attributeName="opacity"begin="0s"dur="1s"keyTimes="0;1"repeatCount="indefinite"values="1;0"/></rect></svg>`;

  constructor(selector) {
    this.preloader = null;
    this.container = null;
    this.selector = selector
  }

  show = () => {
    this.preloader = this.container ? this.container : this.svg;
    if (this.container) {
      this.preloader.innerHTML = this.svg
    };
    document.querySelector(this.selector).insertAdjacentHTML( 'beforeend', this.preloader )
  };
  remove = () => {
    this.preloader.remove()
  };
  addContainer = (tag, attrs) => {
    this.container = document.createElement(tag);
    for (const attr in attrs) {
      this.container.setAttribute(attr, attrs[attr])
    }
  }
}
```

## Простой слайдер

```js
class Slider {
  constructor(selector) {
    this.slider = document.querySelector(selector)
    this.prevButton = this.slider.querySelector('.prev-button')
    this.nextButton = this.slider.querySelector('.next-button')
    this.slides = Array.from(this.slider.querySelectorAll('img'))
    this.slideCount = this.slides.length
    this.slideIndex = 0
    this._initial()
  }

  _initial() {
    if (this.slideCount < 2) {
      this.prevButton.style.display = 'none'
      this.nextButton.style.display = 'none'
    } else {
      this.prevButton.addEventListener('click', this.showPreviousSlide)
      this.nextButton.addEventListener('click', this.showNextSlide)
      this._updateSlider()
    }
  }

  _updateSlider() {
    this.slides.forEach((slide, index) => {
      if (index === this.slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    })
  }

  showPreviousSlide = () => {
    this.slideIndex = (this.slideIndex - 1 + this.slideCount) % this.slideCount
    this._updateSlider()
  }

  showNextSlide = () => {
    this.slideIndex = (this.slideIndex + 1) % this.slideCount
    this._updateSlider()
  }
}
```

## Получение цвета из буквы/букв

```js
const symColor = {
  'А': '#ff5454',
  'Б': '#a28882',
  'В': '#ab7464',
  'Г': '#a4aeac',
  'Д': '#7a676b',
  'Е': '#4c8af2',
  'Ё': '#4cbad6',
  'Ж': '#f5cc4c',
  'З': '#84e26c',
  'И': '#4ca2ca',
  'Й': '#4ca2ca',
  'К': '#9e6558',
  'Л': '#e1e59a',
  'М': '#ff8b4c',
  'Н': '#4db679',
  'О': '#cbcb44',
  'П': '#dbd9d3',
  'Р': '#6e666c',
  'С': '#d1eea8',
  'Т': '#81868b',
  'У': '#f0eb4d',
  'Ф': '#6e62ae',
  'Х': '#dddbbd',
  'Ц': '#cbdf92',
  'Ч': '#dfac77',
  'Ш': '#cac0ab',
  'Щ': '#c5a897',
  'Ъ': '#78787c',
  'Ы': '#756766',
  'Ь': '#e9e9e1',
  'Э': '#a286ff',
  'Ю': '#f9bc52',
  'Я': '#f94c81',
  '0': '#73bfd2',
  '1': '#f69cac',
  '2': '#8e8695',
  '3': '#88d05b',
  '4': '#efc74c',
  '5': '#ff5454',
  '6': '#5485d5',
  '7': '#c3ef89',
  '8': '#50b2ca',
  '9': '#7871a8',
  transcription: { A: 'А', B: 'Б', C: 'Ц', D: 'Д', E: 'Е', F: 'Ф', G: 'Г', H: 'Х', I: 'И', J: 'Ж', K: 'К', L: 'Л', M: 'М', N: 'Н', O: 'О', P: 'П', Q: 'Ю', R: 'Р', S: 'С', T: 'Т', U: 'У', V: 'В', W: 'В', X: 'Х', Y: 'Ю', Z: 'З' }
}

function symbolColor(str) {
  const sym = fColor(String(str)[0].toUpperCase())
  return (sym in symColor || sym in symColor.transcription[sym]) ? symColor[sym] ?? symColor.transcription[sym] : '#222222'
}


// пример использования jQuery
$('Элемент с именем').each((_, el) => {
  let userName = $(el).text().split(' ', 2)
  userName = (userName[1]) ? userName[0][0] + userName[1][0] : userName[0][0]
  let elChild = $(el).parent().children('Элемент где нужно писать буквы и закрашивать фон').text(userName)
  $(elChild).css('background-color', symbolColor($(elChild).text()))
})

```

## Редирект для iOS и Android
``` js
//iPhone Version:
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    window.location = "https://ВАША_ССЫЛКА_НА СТРАНИЦУ_В_APP_STORE";
}
//Android Version:
if(navigator.userAgent.match(/android/i)) {
    window.location = "https://ВАША_ССЫЛКА_НА СТРАНИЦУ_В_GOOGLE_PLAY";
}
```

## Заполнить диапазот от до
```js
function* range(s, e) { while (s <= e) yield s++ }

console.log([...range(1, 5)])
```