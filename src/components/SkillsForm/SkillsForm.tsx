import { ChangeEvent } from 'react';
import { Skills } from '../../types/skills';
import { FaCubesStacked } from 'react-icons/fa6';
import { SkillsFormProps } from './types';

const SkillsForm: React.FC<SkillsFormProps> = ({ updateSkills }) => {
  const handleChange =
    (key: keyof Skills) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateSkills(key, event.target.value);
    };

  return (
    <form>
      <h2 className="card-title">
        <FaCubesStacked />
        Skills
      </h2>
      <input
        type="text"
        className="skills"
        placeholder="Enter you skills"
        onChange={handleChange('skills')}
      />
    </form>
  );
};

export default SkillsForm;
