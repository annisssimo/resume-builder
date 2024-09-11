import { useState } from 'react';
import './App.css';
import InputInfSide from './components/InputInfSide/InputInfSide';
import ResumePreview from './components/ResumePreview/ResumePreview';
import { PersonalInfo } from './types/personalInfo';
import defaultPhoto from '/Users/annisssimo/Desktop/prog-frog/repos/resume-builder/src/assets/default.jpg';

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
      <InputInfSide updatePersonalInfo={updatePersonalInfo} />
      <ResumePreview {...personalInfo} />
    </div>
  );
}

export default App;
