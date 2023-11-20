import './Switch.css';

const ContrastButton = ({ isOn, handleToggle, onClick, clicked }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{
            background: isOn ? '#000000' : 'transparent', // Use a transparent background when isOn is false
          }}
          className={`react-switch-label ${clicked ? 'clicked' : ''}`}
          htmlFor={`react-switch-new`}
          onClick={onClick}
        >
          <span className={`react-switch-button`} />
        </label>
      </>
    );
  };

export default ContrastButton;