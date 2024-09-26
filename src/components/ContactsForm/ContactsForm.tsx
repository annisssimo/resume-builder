import { ChangeEvent } from 'react';
import { Contacts } from '../../types/contacts';
import { BiSolidContact } from 'react-icons/bi';
import { ContactsFormProps } from './types';

const ContactsForm: React.FC<ContactsFormProps> = ({ updateContactInfo }) => {
  const handleChange =
    (key: keyof Contacts) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateContactInfo(key, event.target.value);
    };

  return (
    <form>
      <h2 className="card-title">
        <BiSolidContact />
        Contact Information
      </h2>
      <input
        type="text"
        className="phone"
        placeholder="Phone Number"
        onChange={handleChange('phone')}
      />
      <input type="text" className="email" placeholder="Email" onChange={handleChange('email')} />
      <input
        type="text"
        className="linkedin"
        placeholder="LinkedIn"
        onChange={handleChange('linkedin')}
      />
    </form>
  );
};

export default ContactsForm;
