export const loginType = "applicant/login";
export const statusType = "application/status-update";

export enum ScholarshipApplicationStatus {
  pending = "PENDING",
  finished = "FINISHED",
  inProcess = "IN_PROCESS",
}

export type applicantData = {
  uuid: string;
  advisor_uuid: string;
  status: ScholarshipApplicationStatus;
  applicant_uuid: string;
  email: string;
  message: string;
};

export type updateStatusType = {
  application_uuid: string;
  status: ScholarshipApplicationStatus;
};
