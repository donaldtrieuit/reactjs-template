import GlobalStyle from 'styles/GlobalStyle';
import { useLanguage } from 'hooks/useLanguage';

function App() {
  const { language } = useLanguage();
  return (
    <>
      <GlobalStyle />
      <div>
        <p>Trieu</p>
      </div>
    </>
  );
}

export default App;
