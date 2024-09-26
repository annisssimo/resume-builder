import Button from '../Button/Button';
import './EducationItem.css';
import { EducationItemProps } from './types';

function EducationItem({ education, onCancel, onSave, onChange }: EducationItemProps) {
  return (
    <div>
      <input
        type="text"
        value={education.degree}
        placeholder="Degree"
        onChange={onChange('degree')}
        required
      />
      <input
        type="text"
        value={education.institution}
        placeholder="Institution"
        onChange={onChange('institution')}
      />
      <input
        type="text"
        className="small-input"
        value={education.startDate}
        placeholder="Start Date"
        onChange={onChange('startDate')}
      />
      <input
        type="text"
        className="small-input"
        value={education.endDate}
        placeholder="End Date"
        onChange={onChange('endDate')}
      />
      <textarea
        value={education.description}
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

export default EducationItem;
