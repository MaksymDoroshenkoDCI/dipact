"use server";

import { redirect } from "next/navigation";

import {
  createDashboardSession,
  destroyDashboardSession,
  verifyDashboardCredentials,
} from "@/lib/admin-auth";

export type LoginState = { error?: string };

export async function loginDashboard(_previousState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  if (!verifyDashboardCredentials(email, password)) {
    return { error: "E-Mail-Adresse oder Passwort ist nicht korrekt." };
  }

  await createDashboardSession(email.trim());
  redirect("/dashboard");
}

export async function logoutDashboard() {
  await destroyDashboardSession();
  redirect("/dashboard/login");
}