import { Job } from '../../types/job';

export interface WorkExperienceFormProps {
  jobs: Job[];
  setJobs: (updatedJobs: Job[]) => void;
}
