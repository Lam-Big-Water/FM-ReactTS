import { ReactNode } from "react"

const App = () => {
  return (
    <div>
      <NameTag>
        LoveSong
      </NameTag>
    </div>
    
  )
}

type NameTagProps = {children: ReactNode}

const NameTag = ({children}: NameTagProps) => <h1>{children}</h1>

export default App