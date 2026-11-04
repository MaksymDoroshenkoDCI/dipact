"use server";

import prisma from "@/lib/prisma";
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

    return {
      success: true,
      message: "Ihre Bewerbung wurde erfolgreich gesendet.",
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

    return {
      success: true,
      message: "Ihre Projektanfrage wurde erfolgreich gesendet.",
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

    await prisma.contactMessage.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone ?? null,
        subject: parsed.subject,
        message: parsed.message,
      },
    });

    return {
      success: true,
      message: "Ihre Nachricht wurde erfolgreich gesendet.",
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
