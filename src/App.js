import Main from "./Main";

function App() {
  const data = [
    {
      Question: "What is the difference between a comet and an asteroid?",
      Answer:
        "Comets are icy bodies that originate from the outer regions of the solar system and develop tails when they approach the Sun due to sublimation of their icy surfaces. Asteroids, on the other hand, are rocky or metallic objects that orbit the Sun, primarily found in the asteroid belt between Mars and Jupiter.",
    },
    {
      Question: "How does the human brain store memories?",
      Answer:
        " Memories are believed to be stored in various regions of the brain through a process involving changes in the strength and connectivity of neural pathways, known as synaptic plasticity. Different types of memories may involve different brain structures and mechanisms.",
    },
    {
      Question: "What is the difference between weather and climate?",
      Answer:
        "Weather refers to short-term atmospheric conditions in a specific place at a specific time, while climate refers to long-term patterns and averages of temperature, precipitation, and other atmospheric conditions in a region over a period of time (usually decades or centuries).",
    },
    {
      Question: "What is the greenhouse effect?",
      Answer:
        "The greenhouse effect is the process by which certain gases in Earth's atmosphere (such as carbon dioxide, methane, and water vapor) trap heat from the Sun, preventing it from escaping into space. This process helps keep Earth's surface warm enough to support lif e but can lead to global warming and climate change when enhanced by human activities.",
    },
  ];
  return (
    <div className="App">
      <Main data={data} />
    </div>
  );
}

export default App;
