import { Education } from '../../types/education';

export interface EducationFormProps {
  education: Education[];
  setEducation: (education: Education[]) => void;
}
