import { ChangeEvent } from 'react';
import './PersonalDataForm.css';
import { PersonalInfo } from '../../types/personalInfo';
import { MdPerson } from 'react-icons/md';
import { PersonalDataFormProps } from './types';

function PersonalDataForm({ updatePersonalInfo }: PersonalDataFormProps) {
  const handleChange =
    (key: keyof PersonalInfo) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updatePersonalInfo(key, event.target.value);
    };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => updatePersonalInfo('photo', reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <form>
      <h2 className="card-title">
        <MdPerson />
        Personal Data
      </h2>
      <input
        type="text"
        className="small-input"
        placeholder="First Name"
        onChange={handleChange('name')}
      />
      <input
        type="text"
        className="small-input"
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
