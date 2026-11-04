import "server-only";

import { cookies } from "next/headers";
import { connection } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";

const cookieName = "dipact_admin_session";
const sessionLifetimeSeconds = 60 * 60 * 8;

function getSessionSecret() {
  const secret = process.env.DASHBOARD_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "DASHBOARD_SESSION_SECRET must be at least 32 characters long.",
    );
  }
  return secret;
}

function sign(payload: string) {
  return createHmac("sha256", getSessionSecret())
    .update(payload)
    .digest("base64url");
}

function safeEqual(left: string, right: string) {
  const leftDigest = createHmac("sha256", "dipact-auth-comparison")
    .update(left)
    .digest();
  const rightDigest = createHmac("sha256", "dipact-auth-comparison")
    .update(right)
    .digest();
  return timingSafeEqual(leftDigest, rightDigest);
}

export function verifyDashboardCredentials(email: string, password: string) {
  const expectedEmail = process.env.DASHBOARD_EMAIL;
  const expectedPassword = process.env.DASHBOARD_PASSWORD;
  if (!expectedEmail || !expectedPassword) return false;

  return (
    safeEqual(email.trim().toLowerCase(), expectedEmail.trim().toLowerCase()) &&
    safeEqual(password, expectedPassword)
  );
}

export async function createDashboardSession(email: string) {
  const expiresAt = Math.floor(Date.now() / 1000) + sessionLifetimeSeconds;
  const payload = Buffer.from(JSON.stringify({ email, expiresAt })).toString(
    "base64url",
  );
  const token = `${payload}.${sign(payload)}`;

  (await cookies()).set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/dashboard",
    maxAge: sessionLifetimeSeconds,
  });
}

export async function destroyDashboardSession() {
  (await cookies()).set(cookieName, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/dashboard",
    maxAge: 0,
  });
}

export async function getDashboardSession() {
  await connection();
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return null;

  try {
    const [payload, signature] = token.split(".");
    if (!payload || !signature || !safeEqual(signature, sign(payload)))
      return null;

    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    ) as {
      email?: string;
      expiresAt?: number;
    };
    const expectedEmail = process.env.DASHBOARD_EMAIL?.trim().toLowerCase();
    if (
      !session.email ||
      !session.expiresAt ||
      session.expiresAt <= Date.now() / 1000
    )
      return null;
    if (
      !expectedEmail ||
      !safeEqual(session.email.toLowerCase(), expectedEmail)
    )
      return null;
    return { email: session.email };
  } catch {
    return null;
  }
}
