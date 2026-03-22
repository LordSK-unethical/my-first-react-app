const Card = () => {
  return (
      <div>
        <h3>Card Component</h3>
      </div>
  )
}

const App = () => {
  return (
      <div className="card-container">
        <h1>Welcome to React APP</h1>

        <Card/>
        <Card/>

      </div>
  )
}

export default App