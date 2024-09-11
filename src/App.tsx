import { useState } from 'react';
import './App.css';
import ResumePreview from './components/ResumePreview/ResumePreview';
import { PersonalInfo } from './types/personalInfo';
import defaultPhoto from '/Users/annisssimo/Desktop/prog-frog/repos/resume-builder/src/assets/default.jpg';
import PersonalDataForm from './components/PersonalDataForm/PersonalDataForm';

function App() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: 'Isabel',
    lastName: 'Schumacher',
    jobPosition: 'Graphics Designer',
    photo: defaultPhoto,
    about:
      'As a graphic designer, I strive to create designs that are not only visually appealing but also communicate a message effectively.',
  });

  const updatePersonalInfo = (key: keyof PersonalInfo, value: any) => {
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [key]: value }));
  };

  return (
    <div className="app">
      <PersonalDataForm updatePersonalInfo={updatePersonalInfo} />
      <div className="left-side">
        <ResumePreview {...personalInfo} />
      </div>
    </div>
  );
}

export default App;
