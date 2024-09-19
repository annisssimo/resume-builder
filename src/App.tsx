import { useState } from 'react';
import './App.css';
import ResumePreview from './components/ResumePreview/ResumePreview';
import { PersonalInfo } from './types/personalInfo';
import defaultPhoto from '/Users/annisssimo/Desktop/prog-frog/repos/resume-builder/src/assets/default.jpg';
import PersonalDataForm from './components/PersonalDataForm/PersonalDataForm';
import ContactsForm from './components/ContactsForm/ContactsForm';
import { Contacts } from './types/contacts';

function App() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: 'Isabel',
    lastName: 'Schumacher',
    jobPosition: 'Graphics Designer',
    photo: defaultPhoto,
    about:
      'As a graphic designer, I strive to create designs that are not only visually appealing but also communicate a message effectively.',
  });

  const [contactInfo, setContactInfo] = useState<Contacts>({
    phone: '+375336816479',
    email: 'isabelhordi@gmail.com',
    linkedin: 'https://www.linkedin.com/in/isabelsca',
  });

  const updatePersonalInfo = <K extends keyof PersonalInfo>(key: K, value: PersonalInfo[K]) => {
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [key]: value }));
  };

  const updateContactInfo = <K extends keyof Contacts>(key: K, value: Contacts[K]) => {
    setContactInfo((prevInfo) => ({ ...prevInfo, [key]: value }));
  };

  return (
    <div className="app">
      <div className="left-side">
        <PersonalDataForm updatePersonalInfo={updatePersonalInfo} />
        <ContactsForm updateContactInfo={updateContactInfo} />
      </div>
      <div className="right-side">
        <ResumePreview personalInfo={personalInfo} contactInfo={contactInfo} />
      </div>
    </div>
  );
}

export default App;
