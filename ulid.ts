const ENCODING = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'; // Crockford's Base32
const ENCODING_LEN = ENCODING.length;
const TIME_LEN = 10;
const RANDOM_LEN = 16;

function encodeRandom(length: number): string {
  let str = '';
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * ENCODING_LEN);
    str += ENCODING.charAt(rand);
  }
  return str;
}

function encodeTime(now: number, length: number): string {
  let str = '';
  for (let i = length; i > 0; i--) {
    const mod = now % ENCODING_LEN;
    str = ENCODING.charAt(mod) + str;
    now = Math.floor(now / ENCODING_LEN);
  }
  return str;
}

export function generateULID(): string {
  const now = Date.now();
  const timestampPart = encodeTime(now, TIME_LEN);
  const randomPart = encodeRandom(RANDOM_LEN);
  return timestampPart + randomPart;
}
