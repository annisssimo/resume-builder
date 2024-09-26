import { PersonalInfo } from '../../types/personalInfo';

export interface PersonalDataFormProps {
  updatePersonalInfo: (key: keyof PersonalInfo, value: any) => void;
}
