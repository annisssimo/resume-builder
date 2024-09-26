import { Contacts } from "../../types/contacts";
import { Education } from "../../types/education";
import { Job } from "../../types/job";
import { PersonalInfo } from "../../types/personalInfo";
import { Skills } from "../../types/skills";

export interface ResumePreviewProps {
  personalInfo: PersonalInfo;
  skills: Skills;
  contactInfo: Contacts;
  jobs: Job[];
  education: Education[];
}
