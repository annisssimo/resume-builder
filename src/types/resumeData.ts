import { Contacts } from './contacts';
import { Education } from './education';
import { Job } from './job';
import { PersonalInfo } from './personalInfo';

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: string;
  contactInfo: Contacts;
  jobs: Job[];
  education: Education[];
}
