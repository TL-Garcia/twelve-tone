import { CircleOfFifths } from "chord-generator";

const NaturalFifths = new CircleOfFifths();

function App() {
  return (
    <>
      <h1>Twelve tone music</h1>

      <h2>Some chords</h2>

      <dl>
        {NaturalFifths.getChords().map((chord) => {
          return (
            <div>
              <dt>
                <b>Name: </b>
                {chord.name}
              </dt>
              <dd>
                {chord.notes.map((note, i) =>
                  i !== chord.notes.length - 1 ? `${note} - ` : note
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </>
  );
}

export default App;
