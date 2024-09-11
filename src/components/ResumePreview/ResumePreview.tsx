import { PersonalInfo } from '../../types/personalInfo';
import './ResumePreview.css';

function ResumePreview({ name, lastName, jobPosition, photo, about }: PersonalInfo) {
  return (
    <div className="resume-preview">
      <div className="resume-left-side">
        <div className="photo-container">
          {photo ? (
            <img 
              src={typeof photo === 'string' ? photo : URL.createObjectURL(photo)} 
              alt="person" 
              className="profile-photo" />
          ) : (
            'No photo upload'
          )}
        </div>
        <p className="about">About: {about}</p>
      </div>
      <div className="right-side">
        <div className="heading">
          <p className="user-name">{name}</p>
          <p className="last-name">{lastName}</p>``
          <p className="job">{jobPosition}</p>
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
 