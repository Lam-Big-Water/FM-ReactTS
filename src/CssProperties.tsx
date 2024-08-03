import { CSSProperties, ReactNode } from "react"

const App = () => {
  return (
    <div>
      <NameTag style={{border: '1px solid red'}}>
        LoveSong
      </NameTag>
    </div>
    
  )
}

type NameTagProps = {children: ReactNode, style?: CSSProperties}

const NameTag = ({children, style}: NameTagProps) => {
  return (
      <h1 style={{padding: '10px', color: 'orangered', ...style}}>{children}</h1>
  )
}

export default App