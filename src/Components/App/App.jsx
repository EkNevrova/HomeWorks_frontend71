import './App.module.scss'
import data from '../../style/data.json'
import Card from '../Card/Card.jsx'

function App() {
  return (
      <div className="App">
        {data.map((item) => (
          <div key={item.speed}>
            <Card {...item} />
          </div>
        ))}
      </div>
  )
}

export default App
