import './Button.css';

export default function Button({ children }) {
  return (
    <button
      className="button active"
      onClick={() => console.log('button clicked')}
    >
      {children}
    </button>
  );
}
