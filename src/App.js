import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { Main } from './layout/Main'

function App() {
  // <> - React.Fragment (позволяет добавить несколько элементов),
  // можно (после импорта React from 'react') писать так же 
  // <React.Fragment>
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
