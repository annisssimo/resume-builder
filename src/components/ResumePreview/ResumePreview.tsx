import { PersonalInfo } from '../../types/personalInfo';
import './ResumePreview.css';

function ResumePreview({ name, lastName, jobPosition, photo, about }: PersonalInfo) {
  return (
    <div className="resume-preview">
      <p>Name: {name}</p>
      <p>LastName: {lastName}</p>
      <p>Job: {jobPosition}</p>
      <p>
        Photo:{' '}
        {photo ? (
          <img src={URL.createObjectURL(photo)} alt="person" className="profile-photo" />
        ) : (
          'No photo upload'
        )}{' '}
      </p>
      <p>About: {about}</p>
    </div>
  );
}

export default ResumePreview;
