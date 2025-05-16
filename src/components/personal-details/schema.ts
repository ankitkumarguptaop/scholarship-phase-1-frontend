import { z } from "zod";

export const personalDataSchema = z.object({
  application_id: z.string().uuid(),
  
  documentType: z.enum(["National identity card", "Passport", "Foreigner's identity card", "RUC", "Other"]),
  documentNumber: z.string().min(1),
  
  maritalStatus: z.enum(["Married", "Single", "Divorced", "Widowed", "Separated"]),
  profession: z.string().min(1),
  
  dateOfBirth: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), { message: "Invalid date" })
    .optional()
    .or(z.date().optional()),
  
  country: z.string().min(1),
  provinceOrState: z.string().optional().nullable(),
  city: z.string().min(1),
  nationality: z.string().min(1),
  
  monthlyIncome: z.preprocess((val) => Number(val), z.number().nonnegative()),
  monthlyExpenses: z.preprocess((val) => Number(val), z.number().nonnegative()),
  
  financialDependency: z.enum(["Yes", "No"]),
  hasChildren: z.boolean(),
  
  children_0_4: z.number().int().nonnegative(),
  children_5_12: z.number().int().nonnegative(),
  children_13_18: z.number().int().nonnegative(),
  children_above_18: z.number().int().nonnegative(),
});
