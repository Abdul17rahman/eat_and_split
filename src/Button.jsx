export default function Button({ onclick, children }) {
  return (
    <button onClick={onclick} className="button">
      {children}
    </button>
  );
}
