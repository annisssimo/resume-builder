import { useRef } from 'react';
import './ResumePreview.css';
import { MdEmail, MdPerson, MdWork } from 'react-icons/md';
import { FaLinkedinIn, FaPhone, FaUniversity } from 'react-icons/fa';
import { FaCubesStacked } from 'react-icons/fa6';
import html2pdf from 'html2pdf.js';
import { IoMdCloudDownload } from 'react-icons/io';
import { ResumePreviewProps } from './types';
import { BiSolidContact } from 'react-icons/bi';

const ResumePreview: React.FC<ResumePreviewProps> = ({
  personalInfo,
  skills,
  contactInfo,
  jobs,
  education,
}) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadResume = () => {
    if (resumeRef.current) {
      const element = resumeRef.current;
      const opt = {
        margin: 0,
        filename: `${personalInfo.name}_${personalInfo.lastName}_Resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      html2pdf().from(element).set(opt).save();
    }
  };

  return (
    <div>
      <IoMdCloudDownload onClick={downloadResume} className="download-fixed" />
      <div className="resume-preview" ref={resumeRef}>
        {/* Ваш контент резюме */}
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
              <FaCubesStacked />
              Skills
            </h3>
            <div className="left-side-text"> {skills.skills}</div>
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
                <hr />
                <p className="company-position">
                  {j.position} at {j.company}
                </p>
                <p className="dates">
                  <i>
                    {j.startDate} - {j.endDate}
                  </i>
                </p>
                <p className="description">{j.description}</p>
              </div>
            ))}
          </div>

          <div className="edu-section">
            <h3 className="left-side-heading">
              <FaUniversity />
              Education
            </h3>

            {education.map((e) => (
              <div key={e.id}>
                <hr />
                <p className="company-position">
                  {e.degree} at {e.institution}
                </p>
                <p className="dates">
                  <i>
                    {e.startDate} - {e.endDate}
                  </i>
                </p>
                <p className="description">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={downloadResume} className="download-btn">
        <IoMdCloudDownload />
        Download
      </button>
    </div>
  );
};

export default ResumePreview;
