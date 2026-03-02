"use client";

import { z } from "zod";

/* ======================================================
   AUTH SCHEMAS
====================================================== */

export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),

  email: z.string()
    .min(1, "Email is required")
    .email("Email is invalid"),

  password: z.string()
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),

  password_confirmation: z.string()
    .min(8)
    .max(32)
}).refine(data => data.password === data.password_confirmation, {
  message: "Passwords do not match",
  path: ["password_confirmation"]
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required")
});

export type LoginSchema = z.infer<typeof loginSchema>;


/* ======================================================
   DEPARTMENT
====================================================== */

export const departmentSchema = z.object({
  title: z.string().min(1, "Department name is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().min(1, "Image is required"),
  is_featured: z.number()
});

export type DepartmentSchema = z.infer<typeof departmentSchema>;


/* ======================================================
   CONSULTANT
====================================================== */

export const consultantSchema = z.object({
  name: z.string().min(1, "Name is required"),

  email: z.string().email("Email is invalid"),

  password: z.string()
    .min(6)
    .max(32),

  office_extension: z.string(),
  photo: z.string(),

  departments: z.array(z.string())
    .min(1, "Department is required"),

  education: z.array(
    z.object({
      degree: z.string().min(1),
      institute: z.string().min(1),
      year: z.any().optional()
    })
  ).min(1),

  /* ✅ FIXED BUG */
  work_experience: z.string().min(1, "Experience is required"),

  membership: z.string(),
  residency: z.string(),
  diploma: z.string(),
  certification: z.string(),
  award: z.string(),
  extra_info: z.string()
});

export type ConsultantSchema = z.infer<typeof consultantSchema>;


/* ======================================================
   APPOINTMENT
====================================================== */

export const makeAppointmentSchema = z.object({
  mr_no: z.string(),

  patient_name: z.string()
    .min(1, "Patient name is required"),

  mobile_no: z.string()
    .min(1, "Mobile no is required")
    .max(11, "Mobile must be 11 characters"),

  appointment_dateTime: z.string()
    .min(1, "Date & time is required"),

  department_id: z.string()
    .min(1, "Department is required"),

  consultant_id: z.string()
    .min(1, "Consultant is required"),

  /* OPTIONAL MESSAGE */
  message: z.string().optional()
});

export type MakeAppointmentSchema =
  z.infer<typeof makeAppointmentSchema>;


/* ======================================================
   FORMDATA SAFE HELPER
====================================================== */

export const appendFormData = (
  formData: FormData,
  key: string,
  value: unknown
) => {
  if (value === undefined || value === null) {
    formData.append(key, "");
    return;
  }

  formData.append(key, String(value));
};


/* ======================================================
   API ACTION
====================================================== */

export async function MakePublicAppointmentAction(
  formData: FormData
) {
  const response = await fetch("/api/make-appointment", {
    method: "POST",
    body: formData,
  });

  return response.json();
}


/* ======================================================
   SUBMIT HANDLER (YOUR ERROR WAS HERE)
====================================================== */

export const submitAppointment = async (
  data: MakeAppointmentSchema,
  departmentId: number | string | undefined,
  consultantId: number | string | undefined,
  setLoading: (value: boolean) => void
) => {

  try {
    setLoading(true);

    const result = makeAppointmentSchema.safeParse(data);

    if (!result.success) {
      console.log(result.error.flatten());
      setLoading(false);
      return;
    }

    const formData = new FormData();

    appendFormData(formData, "mr_no", result.data.mr_no);
    appendFormData(formData, "patient_name", result.data.patient_name);
    appendFormData(formData, "mobile_no", result.data.mobile_no);
    appendFormData(formData, "appointment_dateTime",
      result.data.appointment_dateTime);

    /* ✅ FIXED TYPESCRIPT ERROR */
    appendFormData(formData, "department_id", departmentId);
    appendFormData(formData, "consultant_id", consultantId);
    appendFormData(formData, "message", result.data.message);

    const res = await MakePublicAppointmentAction(formData);

    if (res.status === "success") {
      console.log("Appointment Created Successfully");
    }

    setLoading(false);

  } catch (error) {
    console.error(error);
    setLoading(false);
  }
};
