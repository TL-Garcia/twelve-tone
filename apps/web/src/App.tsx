import { CircleOfFifths } from "chord-generator";
import { ChordVisualizer, Content, Header } from "./components";

const NaturalFifths = new CircleOfFifths();

const TEXTS = {
  title: "Twelve Tone Music",
};

function App() {
  return (
    <>
      <Header>{TEXTS.title}</Header>

      <Content>
        <ChordVisualizer chords={NaturalFifths.getChords()} />
      </Content>
    </>
  );
}

export default App;
