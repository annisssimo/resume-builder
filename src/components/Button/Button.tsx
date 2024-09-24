import './Button.css';

interface ButtonPropTypes {
  buttonText: string;
  className: string;
  onClick: (event: React.MouseEvent) => void;
}

function Button({ buttonText, className, onClick }: ButtonPropTypes) {
  return (
    <button className={className} onClick={onClick}>
      {' '}
      {buttonText}{' '}
    </button>
  );
}

export default Button;
