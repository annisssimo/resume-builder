import { Job } from '../../types/job';

export interface WorkExperienceProps {
  job: Job;
  onCancel: () => void;
  onSave: () => void;
  onChange: (
    key: keyof Job
  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
