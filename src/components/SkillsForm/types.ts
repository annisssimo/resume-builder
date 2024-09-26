import { Skills } from '../../types/skills';

export interface SkillsFormProps {
  updateSkills: (key: keyof Skills, value: any) => void;
}
