const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const alphabet = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

const reverseAlphabet = Object.fromEntries(
  Object.entries(alphabet).map(([letter, number]) => [number, letter])
);

console.log(reverseAlphabet);

rl.question(
  `
  Яку програму хочеш: 

  1 зашифровка афінічна
  2 розшифровка афініча
  3 криптоаналіза
  `,
  (programNumber) => {
    rl.question("Введіть ваше ім'я: ", (name) => {
      console.log(`Ви ввели: ${name}`);

      rl.question("Введіть ключ a:", (a) => {
        rl.question("Введіть ключ b:", (b) => {
          let splitFullName = name.toLowerCase().split("");
          console.log(`Ви ввели: a: ${a}, b: ${b}`);
          console.log(splitFullName);

          if (programNumber === "1") {
            // зашифровка

            for (let i = 0; i < splitFullName.length; i++) {
              console.log(i + ": " + splitFullName[i]);

              let alphabetLetterNumber = alphabet[splitFullName[i]];
              console.log("alphabetLetterNumber: ", alphabetLetterNumber);

              let encryptedNumberLetter = a * alphabetLetterNumber + 5;
              console.log("encryptedNumberLetter: ", encryptedNumberLetter);

              if (encryptedNumberLetter > 26) {
                encryptedNumberLetter = encryptedNumberLetter - 26;

                if (encryptedNumberLetter > 26) {
                  encryptedNumberLetter = encryptedNumberLetter - 26;
                } else {
                  encryptedNumberLetter = encryptedNumberLetter;
                }
              } else {
                encryptedNumberLetter = encryptedNumberLetter;
              }

              let encryptedLetter = reverseAlphabet[encryptedNumberLetter];
              console.log(encryptedLetter);
            }
          } else if (programNumber === "2") {
            // розшифровка

            for (let i = 0; i < splitFullName.length; i++) {
              console.log(`${i}: ${splitFullName[i]}`);

              let alphabetLetterNumber = alphabet[splitFullName[i]];
              console.log("alphabetLetterNumber: ", alphabetLetterNumber);

              // 17 = (3x + 5)
              // alphabetLetterNumber = (a * x) + b
              // a * x = alphabetLetterNumber - b
              // x = (alphabetLetterNumber - b) / a

              let encryptedSymbolNumber;

              let aNum = Number(a);
              let bNum = Number(b);

              if ((alphabetLetterNumber - bNum) % aNum === 0) {
                encryptedSymbolNumber = (alphabetLetterNumber - bNum) / aNum;
              } else {
                while ((alphabetLetterNumber - bNum) % aNum !== 0) {
                  // true
                  alphabetLetterNumber = alphabetLetterNumber + 26;
                  encryptedSymbolNumber = (alphabetLetterNumber - bNum) / aNum;
                }
              }

              console.log("encryptedSymbolNumber: ", encryptedSymbolNumber);

              let encryptedSymbol = reverseAlphabet[encryptedSymbolNumber];
              console.log(encryptedSymbol);

              // if ((encryptedSymbolNumber - b) % a === 0) {
              //   encryptedSymbolNumber = (encryptedSymbolNumber - b) / a;
              // } else {
              //   encryptedSymbolNumber = encryptedSymbolNumber + 26
              // }

              // console.log(encryptedNumberLetter);
            }
          }
        });
      });
    });
  }
);

//  panpiotr => yfsydvke (зашифровка)

// y = (p * 3) + 5
// 15 * 3 + 5
// 45 + 5
// 50
// 50 - 26 = 24 --> y

// ========================
// розшифровка:

//  robert => edqrew

// r -- 17 елемент в таблиці
// 17 = (3x + 5)
//  12 = 3x
//  x = 4  -- елемент 3

//
