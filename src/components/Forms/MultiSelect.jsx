import Select from 'react-select';

export const MultiSelect = ({ name, onChange, defaultValue, options }) => {
  const handleChange = (value) => {
    const fakeTarget = {
      target: {
        name,
        value,
      },
    };

    onChange(fakeTarget);
  };

  return (
    <div>
      <Select
        defaultValue={defaultValue}
        isMulti
        name={name}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};
