import { Job } from '../../types/job';
import Button from '../Button/Button';
import './WorkExperience.css';

interface WorkExperienceProps {
  job: Job;
  onCancel: (event: React.MouseEvent) => void;
  onSave: (event: React.MouseEvent) => void;
  onChange: (key: string, field: any) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function WorkExperience({ job, onCancel, onSave, onChange }: WorkExperienceProps) {
  const handleDelete = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log('handleDelete!');
  };

  return (
    <div>
      <input
        type="text"
        value={job.company}
        placeholder="Company name"
        onChange={onChange(job.id, 'company')}
      />
      <input
        type="text"
        value={job.position}
        placeholder="Position"
        onChange={onChange(job.id, 'position')}
      />
      <input
        type="text"
        className="small-input"
        value={job.startDate}
        placeholder="Start Date"
        onChange={onChange(job.id, 'startDate')}
      />
      <input
        type="text"
        className="small-input"
        value={job.endDate}
        placeholder="End Date"
        onChange={onChange(job.id, 'endDate')}
      />
      <input
        type="text"
        value={job.description}
        placeholder="Description"
        onChange={onChange(job.id, 'description')}
      />
      <div className="buttons-block">
        <Button buttonText="Delete" className="delete-btn" onClick={handleDelete} />
        <Button buttonText="Cancel" className="cancel-btn" onClick={onCancel} />
        <Button buttonText="Save" className="save-btn" onClick={onSave} />
      </div>
    </div>
  );
}

export default WorkExperience;
