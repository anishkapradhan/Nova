export const SPACE_CONSTELLATIONS = [
  'Orion',
  'Vega',
  'Lyra',
  'Altair',
  'Cygnus',
  'Cassiopeia',
  'Andromeda',
  'Pegasus',
  'Centaurus',
  'Perseus',
  'Ursa',
  'Draco',
  'Phoenix',
  'Sirius',
  'Antares',
] as const;

/**
 * Generates an ECDSA P-256 keypair strictly within the client browser WebCrypto sandbox.
 * Zero private key material ever leaves the user's local machine.
 */
export async function generateCadetKeypair(): Promise<CryptoKeyPair> {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    throw new Error('WebCrypto subtle API is unavailable in this environment');
  }

  return subtle.generateKey(
    {
      name: 'ECDSA',
      namedCurve: 'P-256',
    },
    true,
    ['sign', 'verify']
  );
}

/**
 * Derives a deterministic, privacy-safe Cadet callsign from an ECDSA public key.
 * Uses SHA-256 digest bytes to map to a constellation and numeric identifier.
 * Format: Cadet_[Constellation]_[Number] (e.g., Cadet_Orion_42)
 */
export async function deriveCadetHandle(publicKey: CryptoKey): Promise<string> {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    throw new Error('WebCrypto subtle API is unavailable in this environment');
  }

  const rawKey = await subtle.exportKey('raw', publicKey);
  const hashBuffer = await subtle.digest('SHA-256', rawKey);
  const hashBytes = new Uint8Array(hashBuffer);

  const constellationIndex = hashBytes[0]! % SPACE_CONSTELLATIONS.length;
  const constellation = SPACE_CONSTELLATIONS[constellationIndex]!;
  const cadetNumber = ((hashBytes[1]! << 8) | hashBytes[2]!) % 100;

  return `Cadet_${constellation}_${cadetNumber.toString().padStart(2, '0')}`;
}

/**
 * Cryptographically signs an arbitrary string payload using the Cadet ECDSA private key.
 * Returns a URL-safe Base64 signature.
 */
export async function signPayload(
  privateKey: CryptoKey,
  data: string
): Promise<string> {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    throw new Error('WebCrypto subtle API is unavailable in this environment');
  }

  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);

  const signatureBuffer = await subtle.sign(
    {
      name: 'ECDSA',
      hash: { name: 'SHA-256' },
    },
    privateKey,
    encodedData
  );

  return Buffer.from(signatureBuffer).toString('base64');
}

/**
 * Verifies a Base64 ECDSA signature against the corresponding public key and data string.
 */
export async function verifySignature(
  publicKey: CryptoKey,
  signatureBase64: string,
  data: string
): Promise<boolean> {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    throw new Error('WebCrypto subtle API is unavailable in this environment');
  }

  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);
  const signatureBuffer = Buffer.from(signatureBase64, 'base64');

  return subtle.verify(
    {
      name: 'ECDSA',
      hash: { name: 'SHA-256' },
    },
    publicKey,
    signatureBuffer,
    encodedData
  );
}
