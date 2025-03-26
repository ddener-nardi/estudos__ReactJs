import FirstComponent from './components/FirstComponent'
import './App.css'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'

function App() {

  return (
    <div className="App">
      <h1>Fundamentos ReactJs</h1>
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
      <Events></Events>
    </div>
  )
}

export default App