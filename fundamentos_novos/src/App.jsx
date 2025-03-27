import './App.css'

import City from "./assets/cube.jpg"

function App() {

  return (
    <>
      <div className="App">
        <h1>Avançando em React</h1>
        <h2>Imagens</h2>
        <div>
          <img src="/tobias.jpg" alt="" />
        </div>
        <div>
          <img src={City} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
