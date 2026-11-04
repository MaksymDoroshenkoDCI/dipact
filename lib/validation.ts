import { z } from "zod";

const optionalText = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value === "" ? undefined : value));

export const candidateApplicationSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein."),
  phone: z
    .string()
    .trim()
    .min(6, "Bitte geben Sie eine gültige Telefonnummer ein."),
  email: z
    .string()
    .trim()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  location: z.string().trim().min(2, "Bitte geben Sie Ihren Wohnort ein."),
  hasExperience: z.boolean(),
  workModel: z.enum(["Anstellung", "Selbstständig", "Offen"], {
    message: "Bitte wählen Sie ein bevorzugtes Modell.",
  }),
  message: optionalText.pipe(z.string().max(1500).optional()),
});

export const companyRequestSchema = z.object({
  company: z.string().trim().min(2, "Bitte geben Sie den Firmennamen ein."),
  contactPerson: z
    .string()
    .trim()
    .min(2, "Bitte geben Sie den Ansprechpartner ein."),
  email: z
    .string()
    .trim()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  phone: z
    .string()
    .trim()
    .min(6, "Bitte geben Sie eine gültige Telefonnummer ein."),
  region: z.string().trim().min(2, "Bitte geben Sie die Projektregion an."),
  startDate: z
    .string()
    .trim()
    .min(2, "Bitte geben Sie eine geplante Startzeit an."),
  message: optionalText.pipe(z.string().max(1500).optional()),
});

export const contactMessageSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z
    .string()
    .trim()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  phone: optionalText.pipe(z.string().max(50).optional()),
  subject: z.enum(["Geschäftspartnerschaft", "Allgemeine Anfrage"], {
    message: "Bitte wählen Sie ein Anliegen aus.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein."),
  privacyAccepted: z.boolean().refine((value) => value === true, {
    message: "Bitte akzeptieren Sie die Datenschutzbestimmungen.",
  }),
});

export type CandidateApplicationInput = z.infer<
  typeof candidateApplicationSchema
>;
export type CompanyRequestInput = z.infer<typeof companyRequestSchema>;
export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
