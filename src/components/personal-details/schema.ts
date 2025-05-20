
import { z } from "zod";
import { DocumentType, FinancialDependency, MaritalStatus } from "./enums";

//Zod schema definition
export const personalInfoSchema = z.object({
  document_type: z
    .nativeEnum(DocumentType, {
      errorMap: () => ({ message: "Please select a document type" }),
    })
    .optional()
    .nullable(),

  document_number: z
    .string()
    .min(1, "Document number is required")
    .optional()
    .nullable(),

  marital_status: z
    .nativeEnum(MaritalStatus, {
      errorMap: () => ({ message: "Please select a marital status" }),
    })
    .optional()
    .nullable(),

  profession: z.string().min(1, "Profession is required").optional().nullable(),

  date_of_birth: z.any().optional().nullable(),

  country: z.string().min(1, "Country is required").optional().nullable(),

  province_or_state: z
    .string()
    .min(1, "Province/State is required")
    .optional()
    .nullable(),

  city: z.string().min(1, "City is required").optional().nullable(),

  nationality: z
    .string()
    .min(1, "Nationality is required")
    .optional()
    .nullable(),

  monthly_income: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0,
      "Must be a positive number"
    )
    .optional()
    .nullable(),

  monthly_expenses: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0,
      "Must be a positive number"
    )
    .optional()
    .nullable(),

  financial_dependency: z
    .nativeEnum(FinancialDependency, {
      errorMap: () => ({ message: "Please select yes or no" }),
    })
    .optional()
    .nullable(),

  has_children: z.boolean().optional().nullable(),

  children_0_4: z
    .string()
    .transform((val) => {
      if (val === "") return "0";
      return val;
    })
    .refine(
      (val) =>
        val === null ||
        val === "" ||
        (!isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 99),
      {
        message: "Must be a number greater than 0 and less than or equal to 99",
      }
    )
    .optional()
    .nullable(),

  children_5_12: z
    .string()
    .refine(
      (val) =>
        val === null ||
        val === "" ||
        (!isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 99),
      {
        message: "Must be a number greater than 0 and less than or equal to 99",
      }
    )
    .optional()
    .nullable(),

  children_13_18: z
    .string()
    .refine(
      (val) =>
        val === null ||
        val === "" ||
        (!isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 99),
      {
        message: "Must be a number greater than 0 and less than or equal to 99",
      }
    )
    .optional()
    .nullable(),

  children_above_18: z
    .string()
    .refine(
      (val) =>
        val === null ||
        val === "" ||
        (!isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 99),
      {
        message: "Must be a number greater than 0 and less than or equal to 99",
      }
    )
    .optional()
    .nullable(),
});
