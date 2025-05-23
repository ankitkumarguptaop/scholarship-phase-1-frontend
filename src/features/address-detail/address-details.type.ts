export const createAddressDetailsType = "address/createAddressDetails";
export const getAddressDetailsType = "address/getAddressDetails";


export enum TypeOfHousingEnum {
  House = 'House',
  Department = 'Department',
}

export enum HousingConditionsEnum {
  Own = 'Own',
  Rented = 'Rented',
  Family = 'Family',
}

export enum PhoneNumberTypeEnum {
  WhatsApp = 'WhatsApp',
  Phone = 'Phone',
}

export interface PhoneNumber {
  number: number;
  country_code: string;
  type: PhoneNumberTypeEnum;
}

export interface CreateAddressDetailsSchema {
  application_id: string;
  emails: string[];
  phone_numbers: PhoneNumber[];
  type_of_housing: TypeOfHousingEnum;
  housing_condition: HousingConditionsEnum;
  country_of_residence: string;
  state_of_residence: string;
  city_of_residence: string;
  zip_code?: string;
  address: string;
}
