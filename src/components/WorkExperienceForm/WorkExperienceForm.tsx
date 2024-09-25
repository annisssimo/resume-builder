import { useState, ChangeEvent, useEffect } from 'react';
import { Job } from '../../types/job';
import Button from '../Button/Button';
import WorkExperience from '../WorkExperience/WorkExperience';
import './WorkExperienceForm.css';
import { v4 as uuidv4 } from 'uuid';
import { MdWork } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

interface WorkExperienceFormProps {
  jobs: Job[];
  setJobs: (jobs: Job[]) => any;
  updateWorkExperience: (id: string, key: keyof Job, value: any) => void;
}

function WorkExperienceForm({ jobs, setJobs, updateWorkExperience }: WorkExperienceFormProps) {
  const [editingJobId, setEditingJobId] = useState<string | null>(null);
  const [tempJobs, setTempJobs] = useState<Job[]>(jobs);

  useEffect(() => {
    setTempJobs(jobs);
  }, [jobs]);

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
    setEditingJobId(newJob.id);
  };

  const deleteJob = (id: string) => {
    const updatedJobs = tempJobs.filter((job) => job.id !== id);
    setTempJobs(updatedJobs);
    setJobs(updatedJobs);
    setEditingJobId(null);
  };

  return (
    <form>
      <h2 className="card-title">
        <MdWork />
        Work Experience
      </h2>

      {/* Показываем список компаний из опыта */}
      {!editingJobId && tempJobs.length > 0 && (
        <div className="jobs">
          {tempJobs.map((job) => (
            <div key={job.id}>
              <span onClick={() => setEditingJobId(job.id)}>{job.company || 'New Job'}</span>
              {/* Иконка удаления */}
              <RxCross2 onClick={() => deleteJob(job.id)} />
            </div>
          ))}
        </div>
      )}

      {/* Если записей нет, показываем сообщение */}
      {!editingJobId && tempJobs.length === 0 && <div>No jobs to display.</div>}

      {/* Форма редактирования работы */}
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

      <Button buttonText="+ Experience" className="new-btn" onClick={(event) => addNewJob(event)} />
    </form>
  );
}

export default WorkExperienceForm;
