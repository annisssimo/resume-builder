import { Education } from '../../types/education';

export interface EducationItemProps {
  education: Education;
  onCancel: () => void;
  onSave: () => void;
  onChange: (
    key: keyof Education
  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
