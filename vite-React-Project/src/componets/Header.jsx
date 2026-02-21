import logo from '/public/vite.svg';

export default function Header() {
  const now = new Date();

  return (
    <header>
      <img src={logo} alt="Vite" />
      {/* <h3>Result UNI</h3> */}
      <span>Дата сейчас: {now.toDateString()}</span>
    </header>
  );
}
