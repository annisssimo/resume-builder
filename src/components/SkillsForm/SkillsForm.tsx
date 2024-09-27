import { FaCubesStacked } from 'react-icons/fa6';
import { SkillsFormProps } from './types';

const SkillsForm: React.FC<SkillsFormProps> = ({ updateSkills }) => {
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
        onChange={(e) => updateSkills(e.target.value)}
      />
    </form>
  );
};

export default SkillsForm;
