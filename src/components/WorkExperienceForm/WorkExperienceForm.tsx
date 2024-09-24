import { MdWork } from 'react-icons/md';
import Button from '../Button/Button';
import { ChangeEvent, useState } from 'react';
import WorkExperience from '../WorkExperience/WorkExperience';
import './WorkExperienceForm.css';
import { Job } from '../../types/job';

interface WorkExperienceFormProps {
  jobs: Job[];
  updateWorkExperience: (id: string, key: keyof Job, value: any) => void;
}

function WorkExperienceForm({ jobs, updateWorkExperience }: WorkExperienceFormProps) {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const handleChange =
    (id: string, key: keyof Job) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateWorkExperience(id, key, event.target.value);
    };

  const showWorkFields = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsHidden(false);
  };

  const showEmptyFields = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsHidden(false);
    console.log('showEmptyFields');
  };

  const cancel = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsHidden(true);
  };

  const saveWork = (event: React.MouseEvent) => {
    event.preventDefault();

    setIsHidden(true);
  };

  return (
    <form>
      <h2 className="card-title">
        <MdWork />
        Work Experience
      </h2>
      {!isHidden && (
        <div>
          {jobs.map((job) => (
            <WorkExperience
              key={job.id}
              job={job}
              onCancel={cancel}
              onSave={saveWork}
              onChange={handleChange}
            />
          ))}
        </div>
      )}
      {isHidden && (
        <div className="jobs">
          {jobs.map((job) => (
            <div key={job.id} onClick={showWorkFields}>
              {job.company}
            </div>
          ))}
        </div>
      )}
      {isHidden && (
        <Button buttonText="+ Experience" className="new-exp-btn" onClick={showEmptyFields} />
      )}
    </form>
  );
}

export default WorkExperienceForm;
