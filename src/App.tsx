import { useState } from 'react';
import './App.css';
import ResumePreview from './components/ResumePreview/ResumePreview';
import { ResumeData } from './types/resumeData';
import defaultPhoto from '../src/assets/default.jpg';
import PersonalDataForm from './components/PersonalDataForm/PersonalDataForm';
import ContactsForm from './components/ContactsForm/ContactsForm';
import WorkExperienceForm from './components/WorkExperienceForm/WorkExperienceForm';
import { v4 as uuidv4 } from 'uuid';
import EducationForm from './components/EducationForm/EducationForm';
import SkillsForm from './components/SkillsForm/SkillsForm';
import { produce } from 'immer';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: 'Isabel',
      lastName: 'Schumacher',
      jobPosition: 'Software Engineer',
      photo: defaultPhoto,
      about:
        "I'm born to develop responsive user interfaces using React. Easily collaborating with backend engineers to integrate APIs and optimize front-end performance.",
    },
    skills:
      'HTML, CSS, JS, React, React Native, Redux, Next.js, Tailwind, GraphQL, Node.js, Nest.js, Express, RabbitMQ, English B2+',
    contactInfo: {
      phone: '+375336816479',
      email: 'isabelhordi@gmail.com',
      linkedin: 'https://www.linkedin.com/isa',
    },
    jobs: [
      {
        id: uuidv4(),
        company: 'InnovateX Solutions',
        position: 'Senior Software Engineer',
        startDate: 'July 2023',
        endDate: 'Present',
        description:
          'Led a cross-functional team of 8 developers in the design and implementation of scalable, cloud-based solutions for enterprise-level clients. Introduced best practices for code review, resulting in a 20% reduction in post-deployment issues. Spearheaded a project that cut cloud infrastructure costs by 30%, leveraging modern cloud-native technologies.',
      },
      {
        id: uuidv4(),
        company: 'TechCorp Innovations',
        position: 'Software Engineer',
        startDate: 'January 2020',
        endDate: 'June 2023',
        description:
          'Contributed to the development and maintenance of high-traffic web applications using React and Node.js. Led the implementation of a major feature that improved user retention by 15%. Collaborated closely with the UX team to enhance overall user experience, resulting in a 10% increase in customer satisfaction scores. Optimized system performance, achieving a 25% reduction in load times across key components.',
      },
      {
        id: uuidv4(),
        company: 'FutureTech Labs',
        position: 'Junior Software Engineer',
        startDate: 'June 2018',
        endDate: 'December 2019',
        description:
          'Assisted senior engineers in developing new features for e-commerce platforms, focusing on improving checkout flow and payment integration. Played a key role in migrating legacy code to a modern, microservices-based architecture, resulting in a 40% improvement in system reliability. Regularly maintained and refactored codebases to ensure adherence to modern development standards and security protocols.',
      },
    ],
    education: [
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
    ],
  });

  const updateField = <T extends keyof ResumeData>(
    section: T,
    field: keyof ResumeData[T] | null,
    value: any
  ) => {
    setResumeData(
      produce((draft) => {
        if (field) {
          draft[section][field] = value;
        } else {
          draft[section] = value;
        }
      })
    );
  };

  return (
    <div className="app">
      <div className="left-side">
        <PersonalDataForm
          updatePersonalInfo={(key, value) => updateField('personalInfo', key, value)}
        />
        <SkillsForm updateSkills={(value) => updateField('skills', null, value)} />
        <ContactsForm updateContactInfo={(key, value) => updateField('contactInfo', key, value)} />
        <WorkExperienceForm
          jobs={resumeData.jobs}
          setJobs={(jobs) => updateField('jobs', null, jobs)}
        />
        <EducationForm
          education={resumeData.education}
          setEducation={(education) => updateField('education', null, education)}
        />
      </div>
      <div className="right-side">
        <ResumePreview
          personalInfo={resumeData.personalInfo}
          skills={resumeData.skills}
          contactInfo={resumeData.contactInfo}
          jobs={resumeData.jobs}
          education={resumeData.education}
        />
      </div>
    </div>
  );
}

export default App;
