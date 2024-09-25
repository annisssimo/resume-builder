import { useState, ChangeEvent, useEffect } from 'react';
import { Job } from '../../types/job';
import Button from '../Button/Button';
import WorkExperience from '../WorkExperience/WorkExperience';
import './WorkExperienceForm.css';
import { v4 as uuidv4 } from 'uuid';
import { MdWork } from 'react-icons/md';

interface WorkExperienceFormProps {
  jobs: Job[];
  setJobs: (jobs: any) => any;
  updateWorkExperience: (id: string, key: keyof Job, value: any) => void;
}

function WorkExperienceForm({ jobs, setJobs, updateWorkExperience }: WorkExperienceFormProps) {
  const [editingJobId, setEditingJobId] = useState<string | null>(null);
  const [tempJobs, setTempJobs] = useState<Job[]>(jobs);

  useEffect(() => console.log(tempJobs));

  const handleChange =
    (key: keyof Job) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (editingJobId) {
        const updatedJobs = tempJobs.map((job) =>
          job.id === editingJobId ? { ...job, [key]: event.target.value } : job
        );
        setTempJobs(updatedJobs);
      }
    };

  const saveWork = (id: string) => {
    const jobToSave = tempJobs.find((job) => job.id === id);
    if (jobToSave) {
      Object.keys(jobToSave).forEach((key) => {
        updateWorkExperience(id, key as keyof Job, jobToSave[key as keyof Job]);
      });
    }

    setJobs(tempJobs);
    setEditingJobId(null);
  };

  const cancel = () => {
    setTempJobs(jobs);
    setEditingJobId(null);
  };

  const addNewJob = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();

    const newJob: Job = {
      id: uuidv4(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };

    setTempJobs((prevJobs) => [...prevJobs, newJob]);
  };

  return (
    <form>
      <h2 className="card-title">
        <MdWork />
        Work Experience
      </h2>

      {/* Shows all the companies names of experiences */}
      {!editingJobId && (
        <div className="jobs">
          {tempJobs.map((job) => (
            <div key={job.id} onClick={() => setEditingJobId(job.id)}>
              {job.company || 'New Job'}
            </div>
          ))}
        </div>
      )}

      {/* Opens editing form */}
      {editingJobId && (
        <div>
          {tempJobs
            .filter((job) => job.id === editingJobId)
            .map((job) => (
              <WorkExperience
                key={job.id}
                job={job}
                onCancel={() => cancel()}
                onSave={() => saveWork(job.id)}
                onChange={handleChange}
              />
            ))}
        </div>
      )}

      <Button
        buttonText="+ Experience"
        className="new-exp-btn"
        onClick={(event) => addNewJob(event)}
      />
    </form>
  );
}

export default WorkExperienceForm;
