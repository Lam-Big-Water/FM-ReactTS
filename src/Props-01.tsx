type TagProp = {
  name: string;
}

const App = () => {
  return (
    <div>
      <NameTag name='PropType'/>
    </div>
    
  )
}


const NameTag = ({name}: TagProp) => <h1>{name}</h1>

export default App