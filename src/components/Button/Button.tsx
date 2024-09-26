import './Button.css';
import { ButtonPropTypes } from './types.ts';

function Button({ buttonText, className, onClick }: ButtonPropTypes) {
  return (
    <button className={className} onClick={onClick}>
      {' '}
      {buttonText}{' '}
    </button>
  );
}

export default Button;
