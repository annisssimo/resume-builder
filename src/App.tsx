import { useState } from 'react';
import './App.css';
import ResumePreview from './components/ResumePreview/ResumePreview';
import { PersonalInfo } from './types/personalInfo';
import defaultPhoto from '/Users/annisssimo/Desktop/prog-frog/repos/resume-builder/src/assets/default.jpg';
import PersonalDataForm from './components/PersonalDataForm/PersonalDataForm';
import ContactsForm from './components/ContactsForm/ContactsForm';
import { Contacts } from './types/contacts';
import WorkExperienceForm from './components/WorkExperienceForm/WorkExperienceForm';
import { Job } from './types/job';
import { v4 as uuidv4 } from 'uuid';
import { Education } from './types/education';
import EducationForm from './components/EducationForm/EducationForm';
import SkillsForm from './components/SkillsForm/SkillsForm';
import { Skills } from './types/skills';

function App() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: 'Isabel',
    lastName: 'Schumacher',
    jobPosition: 'Software Engineer',
    photo: defaultPhoto,
    about:
      "I'm born to develop responsive user interfaces using React. Easily collaborating with backend engineers to integrate APIs and optimize front-end performance.",
  });

  const [skills, setSkills] = useState<Skills>({
    skills:
      'HTML, CSS, JS, React, React Native, Redux, Next.js, Tailwind, GraphQL, Node.js, Nest.js, Express, RabbitMQ, English B2+',
  });

  const [contactInfo, setContactInfo] = useState<Contacts>({
    phone: '+375336816479',
    email: 'isabelhordi@gmail.com',
    linkedin: 'https://www.linkedin.com/isa',
  });

  const [jobs, setJobs] = useState<Job[]>([
    {
      id: uuidv4(),
      company: 'InnovateX Solutions',
      position: 'Senior Software Engineer',
      startDate: 'July 2023',
      endDate: 'Present',
      description:
        'Led a team of developers to create cloud-based solutions for enterprise clients. Improved code efficiency and mentored junior developers on best practices in development.',
    },
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

  const [education, setEducation] = useState<Education[]>([
    {
      id: uuidv4(),
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Tech University',
      startDate: 'September 2016',
      endDate: 'June 2020',
      description: 'Graduated with honors, focusing on software development and user experience.',
    },
    {
      id: uuidv4(),
      degree: 'Master of Science in Software Engineering',
      institution: 'Innovative University',
      startDate: 'September 2020',
      endDate: 'June 2022',
      description: 'Specialized in modern web technologies and agile project management.',
    },
  ]);

  // Update methods
  const updatePersonalInfo = <K extends keyof PersonalInfo>(key: K, value: PersonalInfo[K]) => {
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [key]: value }));
  };

  const updateSkills = <K extends keyof Skills>(key: K, value: Skills[K]) => {
    setSkills((prevInfo) => ({ ...prevInfo, [key]: value }));
  };

  const updateContactInfo = <K extends keyof Contacts>(key: K, value: Contacts[K]) => {
    setContactInfo((prevInfo) => ({ ...prevInfo, [key]: value }));
  };

  const updateWorkExperience = (id: string, key: keyof Job, value: Job[keyof Job]) => {
    setJobs((prevJobs) => prevJobs.map((job) => (job.id === id ? { ...job, [key]: value } : job)));
  };

  const updateEducation = (id: string, key: keyof Education, value: Education[keyof Education]) => {
    setEducation((prevEducation) =>
      prevEducation.map((edu) => (edu.id === id ? { ...edu, [key]: value } : edu))
    );
  };

  return (
    <div className="app">
      <div className="left-side">
        <PersonalDataForm updatePersonalInfo={updatePersonalInfo} />
        <SkillsForm updateSkills={updateSkills} />
        <ContactsForm updateContactInfo={updateContactInfo} />
        <WorkExperienceForm
          jobs={jobs}
          setJobs={setJobs}
          updateWorkExperience={updateWorkExperience}
        />
        <EducationForm
          education={education}
          setEducation={setEducation}
          updateEducation={updateEducation}
        />
      </div>
      <div className="right-side">
        <ResumePreview
          personalInfo={personalInfo}
          skills={skills}
          contactInfo={contactInfo}
          jobs={jobs}
          education={education}
        />
      </div>
    </div>
  );
}

export default App;
