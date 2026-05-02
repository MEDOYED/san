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

// console.log(reverseAlphabet);

const mod = (n, m) => ((n % m) + m) % m;

const modInverse = (a, m) => {
  a = mod(a, m);
  for (let x = 1; x < m; x++) {
    if (mod(a * x, m) === 1) return x;
  }
  return null;
};

const decryptAffine = (text, a, b) => {
  const aInv = modInverse(a, 26);
  if (aInv === null) return null;

  const chars = text.toLowerCase().split("");
  const result = [];

  for (let i = 0; i < chars.length; i++) {
    const y = alphabet[chars[i]];
    if (y === undefined) {
      result.push(" ");
      continue;
    }
    const x = mod(aInv * (y - b), 26);
    result.push(reverseAlphabet[x]);
  }

  return result.join("");
};

const scoreText = (text) => {
  const common = "etaoinshrdlu";
  let score = 0;
  for (let i = 0; i < text.length; i++) {
    if (common.includes(text[i])) score += 1;
  }
  return score;
};

const getFrequencies = (text) => {
  const freq = {};
  for (const ch of text.toLowerCase()) {
    if (alphabet[ch] === undefined) continue;
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .map(([letter]) => letter);
};

const normalizeKey = (key) => key.toLowerCase().replace(/[^a-z]/g, "");

const encryptVigenere = (text, key) => {
  const cleanKey = normalizeKey(key);
  if (!cleanKey) return "";

  const chars = text.toLowerCase().split("");
  const result = [];
  let keyIndex = 0;

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const x = alphabet[ch];
    if (x === undefined) {
      result.push(" ");
      continue;
    }
    const k = alphabet[cleanKey[keyIndex % cleanKey.length]];
    const y = mod(x + k, 26);
    result.push(reverseAlphabet[y]);
    keyIndex += 1;
  }

  return result.join("");
};

const decryptVigenere = (text, key) => {
  const cleanKey = normalizeKey(key);
  if (!cleanKey) return "";

  const chars = text.toLowerCase().split("");
  const result = [];
  let keyIndex = 0;

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const y = alphabet[ch];
    if (y === undefined) {
      result.push(" ");
      continue;
    }
    const k = alphabet[cleanKey[keyIndex % cleanKey.length]];
    const x = mod(y - k, 26);
    result.push(reverseAlphabet[x]);
    keyIndex += 1;
  }

  return result.join("");
};

const englishFreq = [
  0.08167, 0.01492, 0.02782, 0.04253, 0.12702, 0.02228, 0.02015, 0.06094, 0.06966, 0.00153, 0.00772,
  0.04025, 0.02406, 0.06749, 0.07507, 0.01929, 0.00095, 0.05987, 0.06327, 0.09056, 0.02758, 0.00978,
  0.0236, 0.0015, 0.01974, 0.00074,
];

const chiSquare = (counts, length) => {
  let score = 0;
  for (let i = 0; i < 26; i++) {
    const expected = englishFreq[i] * length;
    const diff = counts[i] - expected;
    score += (diff * diff) / (expected || 1);
  }
  return score;
};

const getIC = (text) => {
  const counts = new Array(26).fill(0);
  let length = 0;
  for (const ch of text) {
    const idx = alphabet[ch];
    if (idx === undefined) continue;
    counts[idx] += 1;
    length += 1;
  }
  if (length < 2) return 0;
  let sum = 0;
  for (let i = 0; i < 26; i++) {
    sum += counts[i] * (counts[i] - 1);
  }
  return sum / (length * (length - 1));
};

const guessVigenereKey = (cipherText, maxLen = 12) => {
  const clean = cipherText.toLowerCase().replace(/[^a-z]/g, "");
  if (!clean) return "";

  let bestLen = 1;
  let bestScore = 0;

  for (let keyLen = 1; keyLen <= maxLen; keyLen++) {
    let totalIC = 0;
    for (let i = 0; i < keyLen; i++) {
      let slice = "";
      for (let j = i; j < clean.length; j += keyLen) {
        slice += clean[j];
      }
      totalIC += getIC(slice);
    }
    const avgIC = totalIC / keyLen;
    if (avgIC > bestScore) {
      bestScore = avgIC;
      bestLen = keyLen;
    }
  }

  let key = "";
  for (let i = 0; i < bestLen; i++) {
    const counts = new Array(26).fill(0);
    let length = 0;
    for (let j = i; j < clean.length; j += bestLen) {
      const idx = alphabet[clean[j]];
      counts[idx] += 1;
      length += 1;
    }

    let bestShift = 0;
    let bestChi = Infinity;
    for (let shift = 0; shift < 26; shift++) {
      const shifted = new Array(26).fill(0);
      for (let k = 0; k < 26; k++) {
        shifted[k] = counts[mod(k + shift, 26)];
      }
      const score = chiSquare(shifted, length);
      if (score < bestChi) {
        bestChi = score;
        bestShift = shift;
      }
    }
    key += reverseAlphabet[bestShift];
  }

  return key;
};

rl.question(
  `
  Wybierz, co chcesz: 

  1 Szyfrowanie (Affine)
  2 Deszyfrowanie (Affine)
  3 Brute-force (Affine)
  4 metoda statystyczna - (Kryptoanaliza Affine)
  5 szyfrowanie Vigenere
  6 deszyfrowanie Vigenere
  7 kryptoanaliza Vigenere (bez klucza)
  `,
  (programNumber) => {
    rl.question("Wpisz swój tekst: ", (name) => {
      // console.log(`Ви ввели: ${name}`);

      rl.question("Podaj klucz  a:", (a) => {
        rl.question("Podaj klucz  b:", (b) => {
          // console.log(`Ви ввели: a: ${a}, b: ${b}`);

          let splitFullName = name.toLowerCase().split("");
          // console.log(splitFullName);

          if (programNumber === "1") {
            // зашифровка

            const encryptedLettersArr = [];

            for (let i = 0; i < splitFullName.length; i++) {
              // console.log(i + ": " + splitFullName[i]);

              let alphabetLetterNumber = alphabet[splitFullName[i]];
              // console.log("alphabetLetterNumber: ", alphabetLetterNumber);

              let encryptedNumberLetter = a * alphabetLetterNumber + 5;
              // console.log("encryptedNumberLetter: ", encryptedNumberLetter);

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

              if (!encryptedLetter) {
                // console.log("");
                encryptedLettersArr.push(" ");
              } else {
                // console.log(encryptedLetter);
                encryptedLettersArr.push(encryptedLetter);
              }
            }

            console.log("Tekst zaszyfrowany: ", encryptedLettersArr.join(""));
          } else if (programNumber === "2") {
            // розшифровка

            const encryptedLettersArr = [];

            for (let i = 0; i < splitFullName.length; i++) {
              console.log(`${i}: ${splitFullName[i]}`);

              let alphabetLetterNumber = alphabet[splitFullName[i]];
              // console.log("alphabetLetterNumber: ", alphabetLetterNumber);

              // 17 = (3x + 5)
              // alphabetLetterNumber = (a * x) + b
              // a * x = alphabetLetterNumber - b
              // x = (alphabetLetterNumber - b) / a

              let encryptedSymbolNumber;

              let aNum = Number(a);
              let bNum = Number(b);

              if (alphabetLetterNumber === undefined) {
                // console.log("");
                encryptedSymbolNumber = "";
              } else {
                if ((alphabetLetterNumber - bNum) % aNum === 0) {
                  encryptedSymbolNumber = (alphabetLetterNumber - bNum) / aNum;
                } else {
                  while ((alphabetLetterNumber - bNum) % aNum !== 0) {
                    alphabetLetterNumber = alphabetLetterNumber + 26;
                    encryptedSymbolNumber = (alphabetLetterNumber - bNum) / aNum;
                  }
                }
              }

              // console.log("encryptedSymbolNumber: ", encryptedSymbolNumber);

              let encryptedSymbol = reverseAlphabet[encryptedSymbolNumber];

              if (!encryptedSymbol) {
                // console.log("");
                encryptedLettersArr.push(" ");
              } else {
                // console.log(encryptedSymbol);
                encryptedLettersArr.push(encryptedSymbol);
              }
            }

            console.log("Рошрифроване повідомлення: ", encryptedLettersArr.join(""));
          } else if (programNumber === "3") {
            // криптоаналіз brute force

            const candidates = [];
            const possibleA = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];

            for (let i = 0; i < possibleA.length; i++) {
              const aCandidate = possibleA[i];
              for (let bCandidate = 0; bCandidate < 26; bCandidate++) {
                const decrypted = decryptAffine(name, aCandidate, bCandidate);
                if (!decrypted) continue;
                const score = scoreText(decrypted);
                candidates.push({ a: aCandidate, b: bCandidate, score, text: decrypted });
              }
            }

            candidates.sort((a, b) => b.score - a.score);

            console.log("Brute Force (top 5):");
            for (let i = 0; i < candidates.length; i++) {
              const item = candidates[i];
              console.log(`#${i + 1} a=${item.a}, b=${item.b} -> ${item.text}`);
            }
          } else if (programNumber === "4") {
            // криптоаналіз metoda statystyczna

            const cipherFreq = getFrequencies(name);
            const expected = ["e", "t", "a", "o", "n", "i", "r", "s", "h", "d", "l", "u"];

            const candidates = [];

            for (let i = 0; i < Math.min(5, cipherFreq.length); i++) {
              for (let j = i + 1; j < Math.min(6, cipherFreq.length); j++) {
                const y1 = alphabet[cipherFreq[i]];
                const y2 = alphabet[cipherFreq[j]];

                for (let p = 0; p < Math.min(6, expected.length); p++) {
                  for (let q = p + 1; q < Math.min(6, expected.length); q++) {
                    const x1 = alphabet[expected[p]];
                    const x2 = alphabet[expected[q]];
                    const diffX = mod(x1 - x2, 26);
                    const invDiffX = modInverse(diffX, 26);
                    if (invDiffX === null) continue;
                    const aCandidate = mod((y1 - y2) * invDiffX, 26);
                    if (modInverse(aCandidate, 26) === null) continue;
                    const bCandidate = mod(y1 - aCandidate * x1, 26);
                    const decrypted = decryptAffine(name, aCandidate, bCandidate);
                    if (!decrypted) continue;
                    const score = scoreText(decrypted);
                    candidates.push({ a: aCandidate, b: bCandidate, score, text: decrypted });
                  }
                }
              }
            }

            candidates.sort((a, b) => b.score - a.score);

            console.log("Metoda statystyczna (top 5):");
            for (let i = 0; i < Math.min(5, candidates.length); i++) {
              const item = candidates[i];
              console.log(`#${i + 1} a=${item.a}, b=${item.b} -> ${item.text}`);
            }
          } else if (programNumber === "5") {
            // szyfrowanie Vigenere

            rl.question("Введіть ключ Vigenere: ", (key) => {
              const encrypted = encryptVigenere(name, key);
              console.log("зашифроване повідомлення: ", encrypted);
            });
          } else if (programNumber === "6") {
            // deszyfrowanie Vigenere

            rl.question("Введіть ключ Vigenere: ", (key) => {
              const decrypted = decryptVigenere(name, key);
              console.log("Рошрифроване повідомлення: ", decrypted);
            });
          } else if (programNumber === "7") {
            // kryptoanaliza Vigenere (bez klucza)

            const key = guessVigenereKey(name, 12);
            const decrypted = decryptVigenere(name, key);
            console.log("Znaleziony klucz: ", key);
            console.log("Рошрифроване повідомлення: ", decrypted);
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

// metoda statystyczna i Brute Force

// szyfr wizynera
// lamanie szyfra wizynera bez klucza
