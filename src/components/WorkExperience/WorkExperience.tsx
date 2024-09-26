import Button from '../Button/Button';
import './WorkExperience.css';
import { WorkExperienceProps } from './types';

function WorkExperience({ job, onCancel, onSave, onChange }: WorkExperienceProps) {
  return (
    <div>
      <input
        type="text"
        value={job.company}
        placeholder="Company name"
        onChange={onChange('company')}
        required
      />
      <input
        type="text"
        value={job.position}
        placeholder="Position"
        onChange={onChange('position')}
      />
      <input
        type="text"
        className="small-input"
        value={job.startDate}
        placeholder="Start Date"
        onChange={onChange('startDate')}
      />
      <input
        type="text"
        className="small-input"
        value={job.endDate}
        placeholder="End Date"
        onChange={onChange('endDate')}
      />
      <textarea
        value={job.description}
        placeholder="Description"
        onChange={onChange('description')}
      />
      <div className="buttons-block">
        <Button buttonText="Cancel" className="cancel-btn" onClick={onCancel} />
        <Button buttonText="Save" className="save-btn" onClick={onSave} />
      </div>
    </div>
  );
}

export default WorkExperience;
