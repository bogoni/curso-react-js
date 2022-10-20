import Titulo from './components/Titulo';

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
    <Titulo/>
    <hr/>
    <h2>{aula}</h2>
    <h2>{aula2(2)}</h2>
 


{chapters.map((c, index) => {
  return <p key={index}>{c}</p>
})}

</>
  );
}

export default App;
