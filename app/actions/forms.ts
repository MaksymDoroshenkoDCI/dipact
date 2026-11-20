"use server";

import { sendNotificationEmail } from "@/lib/email";
import { getPrisma } from "@/lib/prisma";
import {
  candidateApplicationSchema,
  companyRequestSchema,
  contactMessageSchema,
  type CandidateApplicationInput,
  type CompanyRequestInput,
  type ContactMessageInput,
} from "@/lib/validation";

export async function submitCandidateApplication(
  values: CandidateApplicationInput,
) {
  try {
    const parsed = candidateApplicationSchema.parse(values);
    const prisma = getPrisma();

    await prisma.candidateApplication.create({
      data: {
        name: parsed.name,
        phone: parsed.phone,
        email: parsed.email,
        location: parsed.location,
        hasExperience: parsed.hasExperience,
        workModel: parsed.workModel,
        message: parsed.message ?? null,
      },
    });

    const emailSent = await sendFormNotification("Candidate application", {
      subject: "Neue Bewerbung über dipact.de",
      replyTo: parsed.email,
      text: [
        "Neue Bewerbung",
        `Name: ${parsed.name}`,
        `Telefon: ${parsed.phone}`,
        `E-Mail: ${parsed.email}`,
        `Wohnort: ${parsed.location}`,
        `Vertriebserfahrung: ${parsed.hasExperience ? "Ja" : "Nein"}`,
        `Bevorzugtes Modell: ${parsed.workModel}`,
        `Nachricht: ${parsed.message || "Keine Nachricht angegeben"}`,
      ].join("\n"),
    });

    return {
      success: true,
      warning: !emailSent,
      message: emailSent
        ? "Ihre Bewerbung wurde erfolgreich gesendet."
        : "Ihre Bewerbung wurde gespeichert, aber die E-Mail-Benachrichtigung konnte nicht versendet werden. Bitte kontaktieren Sie uns bei dringenden Anliegen direkt.",
    };
  } catch (error) {
    console.error("Candidate application error", error);
    return {
      success: false,
      message:
        "Es ist ein Fehler aufgetreten. Bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut.",
    };
  }
}

export async function submitCompanyRequest(values: CompanyRequestInput) {
  try {
    const parsed = companyRequestSchema.parse(values);
    const prisma = getPrisma();

    await prisma.companyRequest.create({
      data: {
        company: parsed.company,
        contactPerson: parsed.contactPerson,
        email: parsed.email,
        phone: parsed.phone,
        region: parsed.region,
        startDate: parsed.startDate,
        message: parsed.message ?? null,
      },
    });

    const emailSent = await sendFormNotification("Company request", {
      subject: "Neue Projektanfrage über dipact.de",
      replyTo: parsed.email,
      text: [
        "Neue Projektanfrage",
        `Unternehmen: ${parsed.company}`,
        `Ansprechpartner: ${parsed.contactPerson}`,
        `E-Mail: ${parsed.email}`,
        `Telefon: ${parsed.phone}`,
        `Projektregion: ${parsed.region}`,
        `Geplanter Start: ${parsed.startDate}`,
        `Nachricht: ${parsed.message || "Keine Nachricht angegeben"}`,
      ].join("\n"),
    });

    return {
      success: true,
      warning: !emailSent,
      message: emailSent
        ? "Ihre Projektanfrage wurde erfolgreich gesendet."
        : "Ihre Projektanfrage wurde gespeichert, aber die E-Mail-Benachrichtigung konnte nicht versendet werden. Bitte kontaktieren Sie uns bei dringenden Anliegen direkt.",
    };
  } catch (error) {
    console.error("Company request error", error);
    return {
      success: false,
      message:
        "Bitte prüfen Sie Ihre Angaben und senden Sie die Anfrage erneut.",
    };
  }
}

export async function submitContactMessage(values: ContactMessageInput) {
  try {
    const parsed = contactMessageSchema.parse(values);
    const prisma = getPrisma();

    await prisma.contactMessage.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone ?? null,
        subject: parsed.subject,
        message: parsed.message,
      },
    });

    const emailSent = await sendFormNotification("Contact message", {
      subject: `Neue Kontaktanfrage: ${parsed.subject}`,
      replyTo: parsed.email,
      text: [
        "Neue Kontaktanfrage",
        `Anliegen: ${parsed.subject}`,
        `Name: ${parsed.name}`,
        `E-Mail: ${parsed.email}`,
        `Telefon: ${parsed.phone || "Nicht angegeben"}`,
        "",
        "Nachricht:",
        parsed.message,
      ].join("\n"),
    });

    return {
      success: true,
      warning: !emailSent,
      message: emailSent
        ? "Ihre Nachricht wurde erfolgreich gesendet."
        : "Ihre Nachricht wurde gespeichert, aber die E-Mail-Benachrichtigung konnte nicht versendet werden. Bitte kontaktieren Sie uns bei dringenden Anliegen direkt.",
    };
  } catch (error) {
    console.error("Contact message error", error);
    return {
      success: false,
      message:
        "Bitte prüfen Sie Ihre Eingaben und senden Sie die Nachricht erneut.",
    };
  }
}

async function sendFormNotification(
  context: string,
  email: Parameters<typeof sendNotificationEmail>[0],
) {
  try {
    await sendNotificationEmail(email);
    return true;
  } catch (error) {
    console.error(`${context} email notification error`, error);
    return false;
  }
}
