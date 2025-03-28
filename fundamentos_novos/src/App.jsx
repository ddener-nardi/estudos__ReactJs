import './App.css'

import City from "./assets/cube.jpg"
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ConditionalRender from './components/ConditionalRender'

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
        <ManageData></ManageData>
        <ListRender></ListRender>
        <ConditionalRender></ConditionalRender>
      </div>
    </>
  )
}

export default App
