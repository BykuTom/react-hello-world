import { ListComponent } from "./components/ListComponent";
import { Introduction } from "./components/Introduction";

const titles = ["Interests", "Bands"];

const [listOfInterests, listOfBands] = [
  [
    "I love computer science",
    "Programming",
    "Video Games",
    "Mountain Climbing",
    "Cycling",
    "Outdoors",
  ],
  ["Slipknot", "Five Fingers Death Punch", "Wu-Tang Clan", "Gibbs"],
];

function App() {
  return (
    <>
      <Introduction />
      <ListComponent title={titles[0]} list={listOfInterests} key={titles[0]} />
      <ListComponent title={titles[1]} list={listOfBands} key={titles[1]} />
    </>
  );
}

export default App;
