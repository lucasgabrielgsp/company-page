import PhraseContent from './components/PhraseContent/PhraseContent';
import Header from './components/Header/Header';
import InfoContent from './components/InfoContent/InfoContent';
import AnotherInfoContent from './components/AnotherInfoContent/AnotherInfoContent';
import LastContent from './components/LastContent/LastContent';
import ImagesHolder from './components/ImagesHolder/ImagesHolder';
function App() {
  return (
    <div>
      <Header></Header>
      <PhraseContent></PhraseContent>
      <InfoContent></InfoContent>
      <AnotherInfoContent></AnotherInfoContent>
      <LastContent></LastContent>
      <ImagesHolder></ImagesHolder>
    </div>
  );
}

export default App;
