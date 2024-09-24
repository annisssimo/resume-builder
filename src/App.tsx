import { useState } from 'react';
import './App.css';
import ResumePreview from './components/ResumePreview/ResumePreview';
import { PersonalInfo } from './types/personalInfo';
import defaultPhoto from '/Users/annisssimo/Desktop/prog-frog/repos/resume-builder/src/assets/default.jpg';
import PersonalDataForm from './components/PersonalDataForm/PersonalDataForm';
import ContactsForm from './components/ContactsForm/ContactsForm';
import { Contacts } from './types/contacts';
import WorkExperience from './components/WorkExperienceForm/WorkExperienceForm';
import { Job } from './types/job';
import { v4 as uuidv4 } from 'uuid';

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
    linkedin: 'https://www.linkedin.com/isa',
  });

  const [jobs, setJobs] = useState<Job[]>([
    {
      id: uuidv4(),
      company: 'TechCorp Innovations',
      position: 'Software Engineer',
      startDate: 'January 2020',
      endDate: 'June 2023',
      description:
        'Developed and maintained web applications using React and Node.js. Led the implementation of key features and optimized system performance.',
    },
  ]);

  const updatePersonalInfo = <K extends keyof PersonalInfo>(key: K, value: PersonalInfo[K]) => {
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [key]: value }));
  };

  const updateWorkExperience = (id: string, key: keyof Job, value: Job[keyof Job]) => {
    setJobs((prevJobs) => prevJobs.map((job) => (job.id === id ? { ...job, [key]: value } : job)));
  };

  const updateContactInfo = <K extends keyof Contacts>(key: K, value: Contacts[K]) => {
    setContactInfo((prevInfo) => ({ ...prevInfo, [key]: value }));
  };

  // const addNewJob = () => {
  //   const newJob: Job = {
  //     id: uuidv4(),
  //     company: '',
  //     position: '',
  //     startDate: '',
  //     endDate: '',
  //     description: '',
  //   };
  //   if (jobs.some((job) => job.company === '' || job.position === '')) {
  //     alert('Please fill out all job fields');
  //     return;
  //   }
  //   setJobs([...jobs, newJob]);
  // };

  // const deleteJob = (id: string) => {
  //   setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  // };

  return (
    <div className="app">
      <div className="left-side">
        <PersonalDataForm updatePersonalInfo={updatePersonalInfo} />
        <ContactsForm updateContactInfo={updateContactInfo} />
        <WorkExperience jobs={jobs} updateWorkExperience={updateWorkExperience} />
      </div>
      <div className="right-side">
        <ResumePreview personalInfo={personalInfo} contactInfo={contactInfo} jobs={jobs}/>
      </div>
    </div>
  );
}

export default App;
