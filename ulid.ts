/** Crockford's Base32 characters used for encoding ULID components. */
const ENCODING = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
/** The length of the encoding character set. */
const ENCODING_LEN = ENCODING.length;
/** The length of the timestamp part of a ULID. */
const TIME_LEN = 10;
/** The length of the random part of a ULID. */
const RANDOM_LEN = 16;

/**
 * Encodes a random sequence of a specified length into a base32 string.
 * 
 * @param length The length of the random sequence to generate.
 * @return A base32 encoded string representing the random sequence.
 */
function encodeRandom(length: number): string {
  let str = '';
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * ENCODING_LEN);
    str += ENCODING.charAt(rand);
  }
  return str;
}

/**
 * Encodes the current timestamp into a base32 string.
 * 
 * @param now The current timestamp in milliseconds since the Unix epoch.
 * @param length The length of the timestamp string to generate.
 * @return A base32 encoded string representing the timestamp.
 */
function encodeTime(now: number, length: number): string {
  let str = '';
  for (let i = length; i > 0; i--) {
    const mod = now % ENCODING_LEN;
    str = ENCODING.charAt(mod) + str;
    now = Math.floor(now / ENCODING_LEN);
  }
  return str;
}

/**
 * Generates a Universally Unique Lexicographically Sortable Identifier (ULID).
 * 
 * @return A string representing the ULID.
 */
export function generateULID(): string {
  const now = Date.now();
  const timestampPart = encodeTime(now, TIME_LEN);
  const randomPart = encodeRandom(RANDOM_LEN);
  return timestampPart + randomPart;
}
