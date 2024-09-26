import { Job } from '../../types/job';

export interface WorkExperienceFormProps {
  jobs: Job[];
  setJobs: (jobs: Job[]) => any;
  updateWorkExperience: (id: string, key: keyof Job, value: any) => void;
}
