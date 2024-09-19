import { PersonalInfo } from '../../types/personalInfo';
import './ResumePreview.css';
import { MdPerson } from 'react-icons/md';
import { BiSolidContact } from 'react-icons/bi';
import { Contacts } from '../../types/contacts';

interface ResumePreviewProps {
  personalInfo: PersonalInfo;
  contactInfo: Contacts;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ personalInfo, contactInfo }) => {
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
          <div className="left-side-text">{contactInfo.phone}</div>
          <div className="left-side-text">{contactInfo.email}</div>
          <div className="left-side-text">{contactInfo.linkedin}</div>
        </div>
      </div>
      <div className="right-side">
        <div className="heading">
          <p className="user-name">{personalInfo.name}</p>
          <p className="last-name">{personalInfo.lastName}</p>
          <p className="job">{personalInfo.jobPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
