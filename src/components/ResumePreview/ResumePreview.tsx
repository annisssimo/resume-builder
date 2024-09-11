import { PersonalInfo } from '../../types/personalInfo';
import './ResumePreview.css';
import { MdPerson } from 'react-icons/md';
import { BiSolidContact } from 'react-icons/bi';

function ResumePreview({ name, lastName, jobPosition, photo, about }: PersonalInfo) {
  return (
    <div className="resume-preview">
      <div className="resume-left-side">
        <div className="photo-container">
          {photo ? (
            <img
              src={typeof photo === 'string' ? photo : URL.createObjectURL(photo)}
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
          <div className="left-side-text"> {about}</div>
        </div>

        <div className="left-section">
          <h3 className="left-side-heading">
            <BiSolidContact />
            Contact
          </h3>
          <div className="left-side-text"> {about}</div>
        </div>
      </div>
      <div className="right-side">
        <div className="heading">
          <p className="user-name">{name}</p>
          <p className="last-name">{lastName}</p>
          <p className="job">{jobPosition}</p>
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
