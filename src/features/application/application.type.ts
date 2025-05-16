export const loginType = "applicant/login";
export const statusType = "application/status-update";



export enum ScholarshipApplicationStatus {
  COMPLETED = 'COMPLETED',
  ONGOING = 'ONGOING',
  NOTSTARTED = 'NOTSTARTED',
}

export type applicantData = {
  uuid: string;
  advisor_uuid: string;
  status: ScholarshipApplicationStatus;
  applicant_uuid: string;
  email: string;
};


export type updateStatusType={
  application_uuid: string;
  status: ScholarshipApplicationStatus;
}
