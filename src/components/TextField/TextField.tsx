import './TextField.scss';

type TextFieldProps = {
  name?: string;
  label?: string;
  type?: 'text' | 'password';
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextField: React.FC<TextFieldProps> = ({ name, label, error, ...props }) => {
  return (
    <div className="textField">
      <label htmlFor={name} className="textField-label">
        {label}
        <input name={name} {...props} className="textField-input" />
      </label>
      {error && <span className="textField-error">{error}</span>}
    </div>
  );
};
