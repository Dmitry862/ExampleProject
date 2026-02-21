import Header from './componets/Header';
import WayToTeact from './componets/WayToTeach.jsx';
import { useState } from 'react';
import { Ways } from './data.js';
import Button from './componets/Buttons/Button.jsx';

export default function App() {
  const stateArray = useState('adsfasdf');
  console.log(stateArray);

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>
            Если вы хотите увидеть работу ИИ изнутри и собрать свой первый
            проект за 3 дня, присоединяйтесь к марафону. Вы пройдёте путь
            разработчика в комфортном темпе и получите результат уже в первый
            день.
          </h3>
          <ul>
            <WayToTeact {...Ways[0]} />
            <WayToTeact {...Ways[1]} />
            <WayToTeact {...Ways[2]} />
          </ul>
        </section>
        <section>
          <h3>Основы NodeJS:</h3>
          <Button>Click Me</Button>
          <Button>Mail Me</Button>
        </section>
        <h1>Hello React!!!</h1>
      </main>
    </div>
  );
}
