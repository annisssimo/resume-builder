import { ChangeEvent } from 'react';
import './PersonalDataForm.css';
import { PersonalInfo } from '../../types/personalInfo';

interface PersonalDataFormProps {
  updatePersonalInfo: (key: keyof PersonalInfo, value: any) => void;
}

function PersonalDataForm({ updatePersonalInfo }: PersonalDataFormProps) {
  const handleChange =
    (key: keyof PersonalInfo) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updatePersonalInfo(key, event.target.value);
    };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    updatePersonalInfo('photo', file);
  };

  return (
    <form>
      <h2 className="card-title">Personal Data</h2>
      <input
        type="text"
        className="firstName"
        placeholder="First Name"
        onChange={handleChange('name')}
      />
      <input
        type="text"
        className="lastName"
        placeholder="Last Name"
        onChange={handleChange('lastName')}
      />
      <input
        type="text"
        className="post"
        placeholder="Job Position"
        onChange={handleChange('jobPosition')}
      />
      <div className="custom-file-upload">
        <label htmlFor="file">Choose a picture</label>
        <input type="file" id="file" accept="image/*" onChange={handleFileChange} />
      </div>

      <textarea
        placeholder="Tell something about yourself to stand out from other candidates..."
        className="about"
        onChange={handleChange('about')}
      />
    </form>
  );
}

export default PersonalDataForm;
