export const getPersonalDetailsType= "personalDetails/Get"
export const createPersonalDetailsType= "personalDetails/Create"



export interface personalDataSchema {
  id: number | null ;
  application_id: string;

  document_type: string | null;
  document_number: string | null;
  marital_status: string | null;
  profession: string | null;
  date_of_birth: string | null;
  country: string | null;
  province_or_state: string | null;
  city: string | null;
  nationality: string | null;

  monthly_income: number | null;
  monthly_expenses: number | null;
  financial_dependency: string | null;
  has_children: boolean | null;

  children_0_4: number | null;
  children_5_12: number | null;
  children_13_18: number | null;
  children_above_18: number | null;

  created_at: string;
  updated_at: string;
}
