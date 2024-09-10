import { PersonalInfo } from '../../types/personalInfo';
import PersonalDataForm from '../PersonalDataForm/PersonalDataForm';
import './InputInfSide.css';

interface InputInfSideProps {
  updatePersonalInfo: (key: keyof PersonalInfo, value: any) => void;
}

function InputInfSide({updatePersonalInfo}: InputInfSideProps) {
  return (
    <div className="left-side">
      <PersonalDataForm updatePersonalInfo={updatePersonalInfo}/>
    </div>
  );
}

export default InputInfSide;
