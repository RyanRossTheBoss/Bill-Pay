import crypto from "node:crypto";

export const API_BASE = "https://api.paymasterworldwide.com/api/v4/";

export function sha256Hex(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export function hmacSha256Base64(message: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(message).digest("base64");
}

export function ensureEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// Paymaster expects UTC with no milliseconds and no timezone suffix, e.g. 2018-04-01T10:00:00
export function formatUtcTimestamp(): string {
  const now = new Date();
  const yyyy = now.getUTCFullYear();
  const mm = String(now.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(now.getUTCDate()).padStart(2, "0");
  const hh = String(now.getUTCHours()).padStart(2, "0");
  const min = String(now.getUTCMinutes()).padStart(2, "0");
  const ss = String(now.getUTCSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}`;
}

export function buildAuthFields() {
  const USER = ensureEnv("PAYMASTER_USER");
  const PASSWORD = ensureEnv("PAYMASTER_PASSWORD");
  const SECRET = ensureEnv("PAYMASTER_SECRET");

  const DTime = formatUtcTimestamp();
  const AuthKey = hmacSha256Base64(DTime, SECRET);
  const hashedPassword = sha256Hex(PASSWORD);
  const EncPassword = hmacSha256Base64(hashedPassword, AuthKey);

  return {
    DTime,
    AuthKey,
    User: USER,
    Password: EncPassword,
  };
}


