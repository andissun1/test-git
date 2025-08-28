import { Component } from 'react';

export default class FieldLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttons, handleClickButton } = this.props;
    return (
      <div className="grid grid-cols-3 grid-rows-3 mt-[50px] mb-10 shadow-2xl">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`cursor-pointer border-[#f0f8ff80] border text-[3.5rem] font-bold h-[100px] w-[100px] ${
              button === 'X' ? 'text-red-500' : 'text-blue-500'
            }`}
            onClick={handleClickButton.bind(null, index)}
          >
            {button}
          </button>
        ))}
      </div>
    );
  }
}
