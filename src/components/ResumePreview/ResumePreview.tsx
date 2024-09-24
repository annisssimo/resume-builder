import { PersonalInfo } from '../../types/personalInfo';
import './ResumePreview.css';
import { MdEmail, MdPerson } from 'react-icons/md';
import { BiSolidContact } from 'react-icons/bi';
import { Contacts } from '../../types/contacts';
import { FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { Job } from '../../types/job';
import { MdWork } from 'react-icons/md';

interface ResumePreviewProps {
  personalInfo: PersonalInfo;
  contactInfo: Contacts;
  jobs: Job[];
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ personalInfo, contactInfo, jobs }) => {
  return (
    <div className="resume-preview">
      <div className="resume-left-side">
        <div className="photo-container">
          {personalInfo.photo ? (
            <img
              src={
                typeof personalInfo.photo === 'string'
                  ? personalInfo.photo
                  : URL.createObjectURL(personalInfo.photo)
              }
              alt="person"
              className="profile-photo"
            />
          ) : (
            'No photo upload'
          )}
        </div>

        <div className="left-section">
          <h3 className="left-side-heading">
            <MdPerson />
            About Me
          </h3>
          <div className="left-side-text"> {personalInfo.about}</div>
        </div>

        <div className="left-section">
          <h3 className="left-side-heading">
            <BiSolidContact />
            Contact
          </h3>
          <div className="left-side-text">
            <FaPhone /> {contactInfo.phone}
          </div>
          <div className="left-side-text">
            <MdEmail /> {contactInfo.email}
          </div>
          <div className="left-side-text">
            <FaLinkedinIn />
            {contactInfo.linkedin}
          </div>
        </div>
      </div>
      <div className="resume-right-side">
        <div className="heading">
          <p className="user-name">{personalInfo.name}</p>
          <p className="last-name">{personalInfo.lastName}</p>
          <p className="job">{personalInfo.jobPosition}</p>
        </div>

        <div className="work-experience">
          <h3 className="left-side-heading">
            <MdWork />
            Work experience
          </h3>
          {jobs.map((j) => (
              <div key={j.id}>
                <p>{j.company}</p>
                <p>{j.position}</p>
                <p>{j.startDate} - {j.endDate}</p>
                <p>{j.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
