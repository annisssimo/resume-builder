import { PersonalInfo } from '../../types/personalInfo';
import './ResumePreview.css';

function ResumePreview({ name, lastName, jobPosition, photo, about }: PersonalInfo) {


  return <div className="resume-preview">
    <p>Name: {name}</p>
    <p>LastName: {lastName}</p>
    <p>Job: {jobPosition}</p>
    {/* <p>Photo: {photo}</p> */}
    <p>About: {about}</p>
  </div>;
}

export default ResumePreview;
