import { z } from 'zod';

export const TypeOfHousingEnum = z.enum(['House', 'Department']);
export const HousingConditionsEnum = z.enum(['Own', 'Rented', 'Family']);
export const PhoneNumberTypeEnum = z.enum(['WhatsApp', 'Phone']);

const PhoneNumberSchema = z.object({
  number: z.string().max(20).optional(),
  country_code: z.string().max(10).optional(),
  type: PhoneNumberTypeEnum.optional(),
});


const EmailSchmema = z.object({
  email: z.string().email().max(50).optional(),
});


export const createAddressDetailSchema = z.object({
  emails: z.array(EmailSchmema).max(5).optional(),
  phone_numbers: z.array(PhoneNumberSchema).optional(),
  type_of_housing: TypeOfHousingEnum.optional(),
  housing_condition: HousingConditionsEnum.optional(),
  country_of_residence: z.string().min(1).optional(),
  state_of_residence: z.string().min(1).optional(),
  city_of_residence: z.string().min(1).optional(),
  zip_code: z.string().max(10).optional(),
  address: z.string().max(250).optional(),
});

export type CreateAddressDetailValidation = z.infer<typeof createAddressDetailSchema>;
