export enum JobSalaryPaymentMethod {
  HOURLY = 'HOURLY',
  MONTHLY = 'MONTHLY',
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  YEARLY = 'YEARLY',
  NEGOTIABLE = 'NEGOTIABLE',
  OTHER = 'OTHER'
}

export enum JobForm {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  INTERNSHIP = 'INTERNSHIP',
  TEMPORARY = 'TEMPORARY',
  VOLUNTEER = 'VOLUNTEER',
  OTHER = 'OTHER'
}

export interface JobBenefits {
  salary: [number, number, JobSalaryPaymentMethod]
  items: string[]
}

export interface JobRequirements {
  age: [number, number]
  experience: [number, number]
  education: string
}

export interface JobInfo {
  // basic info
  name: string
  benefits: JobBenefits
  requirements: JobRequirements
  recruitmentNumber: number
  type: string
  form: JobForm

  // addition info
  timestamp: number
  id: number
  companyId: number
  companyName: string
  recruiterId: number
  recruiterName: string
}
