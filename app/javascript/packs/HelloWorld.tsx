import * as React from 'react'

const HelloWorld = (props) => {
  const [name, setName] = React.useState(props.name)

  return (
    <div>
      <h3>Hola from, {name}!</h3>
      <hr />
      <form>
        <label htmlFor="name">
          Say hello to:
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
    </div>
  )
}

export default HelloWorld
