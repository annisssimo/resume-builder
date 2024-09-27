import { useState, ChangeEvent, useEffect } from 'react';
import { Education } from '../../types/education';
import Button from '../Button/Button';
import EducationItem from '../EducationItem/EducationItem';
import './EducationForm.css';
import { v4 as uuidv4 } from 'uuid';
import { MdSchool } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { EducationFormProps } from './types';
import { saveData } from '../../utils';

function EducationForm({ education, setEducation }: EducationFormProps) {
  const [editingEducationId, setEditingEducationId] = useState<string | null>(null);
  const [tempEducation, setTempEducation] = useState<Education[]>(education);

  useEffect(() => {
    setTempEducation(education);
  }, [education]);

  const handleChange =
    (key: keyof Education) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (editingEducationId) {
        const updatedEducation = tempEducation.map((edu) =>
          edu.id === editingEducationId ? { ...edu, [key]: event.target.value } : edu
        );
        setTempEducation(updatedEducation);
      }
    };

  const saveEducation = (id: string) => {
    const educationToSave = tempEducation.find((edu) => edu.id === id);
    if (educationToSave) {
      saveData(tempEducation, setEducation, id, educationToSave);
    }

    setEditingEducationId(null);
  };

  const cancel = () => {
    setTempEducation(education);
    setEditingEducationId(null);
  };

  const addNewEducation = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();

    const newEducation: Education = {
      id: uuidv4(),
      degree: '',
      institution: '',
      startDate: '',
      endDate: '',
      description: '',
    };

    setTempEducation((prevEducation) => [...prevEducation, newEducation]);
    setEditingEducationId(newEducation.id);
  };

  const deleteEducation = (id: string) => {
    const updatedEducation = tempEducation.filter((edu) => edu.id !== id);
    setTempEducation(updatedEducation);
    setEducation(updatedEducation);
    setEditingEducationId(null);
  };

  return (
    <form>
      <h2 className="card-title">
        <MdSchool />
        Education
      </h2>

      {!editingEducationId && tempEducation.length > 0 && (
        <div className="education">
          {tempEducation.map((edu) => (
            <div key={edu.id}>
              <span onClick={() => setEditingEducationId(edu.id)}>
                {edu.institution || 'New Education'}
              </span>
              <RxCross2 onClick={() => deleteEducation(edu.id)} />
            </div>
          ))}
        </div>
      )}

      {!editingEducationId && tempEducation.length === 0 && <div>No education to display.</div>}

      {editingEducationId && (
        <div>
          {tempEducation
            .filter((edu) => edu.id === editingEducationId)
            .map((edu) => (
              <EducationItem
                key={edu.id}
                education={edu}
                onCancel={cancel}
                onSave={() => saveEducation(edu.id)}
                onChange={handleChange}
              />
            ))}
        </div>
      )}

      <Button
        buttonText="+ Education"
        className="new-btn"
        onClick={(event) => addNewEducation(event)}
      />
    </form>
  );
}

export default EducationForm;
