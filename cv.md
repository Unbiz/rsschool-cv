# Vladimir Bessonov
---

## Contacts
* Phone: +7 (926) 678-79-96
* E-mail: bessmy@gmail.com
* Telegram: [@VladBes](https://t.me/VladBes)

## Summary
All my life I wonted to be a programmer. But I working in other profession.
I've been studying Frontend Development for the last half year. My goal is to start working as a developer this year.

## Skills
- HTML (HTML5, PUG)
- CSS (CSS3, SCSS, BEM)
- JavaScript (ES6)
- Git
- NPM
- Figma
- Visual Studio Code

## Code example
```js
function squareDigits(num) {
  const sum = String(num).split('')
    .map((item) => Number(item) ** 2)
    .join('');
  return Number(sum);
}

function findShort(s) {
  const arrOfLengths = s.split(' ').map((word) => word.length);
  return Math.min(...arrOfLengths);
}

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}
```