"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  submitCandidateApplication,
  submitCompanyRequest,
  submitContactMessage,
} from "@/app/actions/forms";
import {
  candidateApplicationSchema,
  companyRequestSchema,
  contactMessageSchema,
  type CandidateApplicationInput,
  type CompanyRequestInput,
  type ContactMessageInput,
} from "@/lib/validation";

function FormStatus({
  message,
  success,
}: {
  message?: string;
  success?: boolean;
}) {
  if (!message) return null;

  return (
    <div
      className={`rounded-xl border px-4 py-3 text-sm ${
        success
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
          : "border-red-500/30 bg-red-500/10 text-red-200"
      }`}
    >
      {message}
    </div>
  );
}

export function CandidateApplicationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CandidateApplicationInput>({
    resolver: zodResolver(candidateApplicationSchema),
    defaultValues: {
      hasExperience: false,
      workModel: "Anstellung",
      message: "",
    },
  });
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const onSubmit = async (values: CandidateApplicationInput) => {
    const result = await submitCandidateApplication(values);
    setStatus(result);
    if (result.success) reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900 p-6 sm:p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Name
          </label>
          <input
            {...register("name")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="Max Mustermann"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-300">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Telefonnummer
          </label>
          <input
            {...register("phone")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="+49 170 1234567"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-300">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            E-Mail
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="name@email.de"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-300">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Wohnort
          </label>
          <input
            {...register("location")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="Berlin"
          />
          {errors.location && (
            <p className="mt-2 text-sm text-red-300">
              {errors.location.message}
            </p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Vertriebserfahrung
          </label>
          <select
            {...register("hasExperience", {
              setValueAs: (value) => value === "true",
            })}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-400"
          >
            <option value="true">Ja</option>
            <option value="false">Nein</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Bevorzugtes Modell
          </label>
          <select
            {...register("workModel")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-400"
          >
            <option value="Anstellung">Anstellung</option>
            <option value="Selbstständig">Selbstständig</option>
            <option value="Offen">Offen</option>
          </select>
          {errors.workModel && (
            <p className="mt-2 text-sm text-red-300">
              {errors.workModel.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200">
          Nachricht
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
          placeholder="Erzählen Sie uns kurz, warum Sie sich für DIPACT interessieren."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-300">{errors.message.message}</p>
        )}
      </div>

      <FormStatus message={status?.message} success={status?.success} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-6 py-3 font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Wird gesendet..." : "Bewerbung absenden"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

export function CompanyRequestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CompanyRequestInput>({
    resolver: zodResolver(companyRequestSchema),
    defaultValues: {
      message: "",
    },
  });
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const onSubmit = async (values: CompanyRequestInput) => {
    const result = await submitCompanyRequest(values);
    setStatus(result);
    if (result.success) reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900 p-6 sm:p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Unternehmen
          </label>
          <input
            {...register("company")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="Muster GmbH"
          />
          {errors.company && (
            <p className="mt-2 text-sm text-red-300">
              {errors.company.message}
            </p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Ansprechpartner
          </label>
          <input
            {...register("contactPerson")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="Max Mustermann"
          />
          {errors.contactPerson && (
            <p className="mt-2 text-sm text-red-300">
              {errors.contactPerson.message}
            </p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Geschäftliche E-Mail
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="info@unternehmen.de"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-300">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Telefon
          </label>
          <input
            {...register("phone")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="+49 30 123456"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-300">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Projektregion
          </label>
          <input
            {...register("region")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="Berlin"
          />
          {errors.region && (
            <p className="mt-2 text-sm text-red-300">{errors.region.message}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Geplante Startzeit
          </label>
          <input
            {...register("startDate")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="Q3 2026"
          />
          {errors.startDate && (
            <p className="mt-2 text-sm text-red-300">
              {errors.startDate.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200">
          Nachricht
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
          placeholder="Beschreiben Sie Ihren Bedarf und den gewünschten Einsatz."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-300">{errors.message.message}</p>
        )}
      </div>

      <FormStatus message={status?.message} success={status?.success} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-6 py-3 font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Wird gesendet..." : "Projektanfrage senden"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

export function ContactMessageForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactMessageInput>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      subject: "Geschäftspartnerschaft",
      phone: "",
      message: "",
    },
  });
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const onSubmit = async (values: ContactMessageInput) => {
    const result = await submitContactMessage(values);
    setStatus(result);
    if (result.success) reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900 p-6 sm:p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Name
          </label>
          <input
            {...register("name")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="Ihr Name"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-300">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            E-Mail
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="name@email.de"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-300">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Telefon
          </label>
          <input
            {...register("phone")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
            placeholder="Optional"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-300">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Anliegen
          </label>
          <select
            {...register("subject")}
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-400"
          >
            <option value="Geschäftspartnerschaft">
              Geschäftspartnerschaft
            </option>
            <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
          </select>
          {errors.subject && (
            <p className="mt-2 text-sm text-red-300">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200">
          Nachricht
        </label>
        <textarea
          {...register("message")}
          rows={6}
          className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400"
          placeholder="Wie können wir Ihnen helfen?"
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-300">{errors.message.message}</p>
        )}
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-300">
        <input
          type="checkbox"
          {...register("privacyAccepted")}
          className="mt-1 h-4 w-4 rounded border-white/10 bg-slate-950 text-orange-500 focus:ring-orange-500"
        />
        <span>
          Ich habe die Datenschutzhinweise gelesen und akzeptiere sie.
        </span>
      </label>
      {errors.privacyAccepted && (
        <p className="text-sm text-red-300">{errors.privacyAccepted.message}</p>
      )}

      <FormStatus message={status?.message} success={status?.success} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-6 py-3 font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
