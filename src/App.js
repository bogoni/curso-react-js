import Titulo from './components/Titulo';
import Button from './components/Button'

function App() {
//nao precisa de ; eh o bloco que demarca inicio e fim
  const aula = <> primeira aula</>

  const chapters = ['um', 'dois']

  const aula2 = (num) => {
    return (
      <> aula {num}</>
    )
  }

   return (
    <>
    <Titulo aula='Aula 02'><p>Teste teste teste <b>teste negrito</b></p></Titulo>
    <Titulo turma='turma134'/>

    <h2>{aula}</h2>
    <h2>{aula2(2)}</h2>
 


{chapters.map((c, index) => {
  return <p key={index}>{c}</p>
})}

<Button onClick={() => {
    console.log('clicou');}}>Clique aqui</Button>

</>
  );
}

export default App;
