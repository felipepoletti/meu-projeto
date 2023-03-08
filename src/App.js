import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Felipe';

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome={nome} />
      <SayMyName nome="Poletti" />
      
      <Pessoa 
        nome={nome} 
        idade="21" 
        profissao="Programador" 
        foto="https://media.licdn.com/dms/image/C4E03AQH5_QbCZC8GHQ/profile-displayphoto-shrink_800_800/0/1644373766386?e=2147483647&v=beta&t=dhZEqucUedic2wZj9d9CfBh2xYBhDWtWHeRh1kHeW4c" 
        fotoDescricao="Uma foto minha."
      />
    </div>
  );
}

export default App;
