import { Contacts } from '../../types/contacts';

export interface ContactsFormProps {
  updateContactInfo: (key: keyof Contacts, value: any) => void;
}
