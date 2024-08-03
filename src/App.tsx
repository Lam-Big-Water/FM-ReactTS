import { useState, useEffect } from "react";

type InitData = {id: number; name: string;}

const listData = [
  {id: 1, name: 'Sam'},
  {id: 2, name: 'Jan'},
]

const getAsyncData = (): Promise<{data: InitData[]}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({data: listData})
    }, 1000)
  })
}







const App = () => {

  const [asyncData, setAsyncData] = useState<InitData[] | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAsyncData().then((result) => {
      setAsyncData(result.data);
      setIsLoading(false);
    })
  }, [])

  return (
    <div>
      {isLoading && <Loading />}
      {asyncData && <List list={asyncData}/>}
      {/* {isLoading ? <Loading /> : <List list={asyncData}/>} */}
    </div>
  )
}

type ListProps = {list: InitData[]};

const List: React.FC<ListProps> = ({list}) => {
  return (
    <ul>
      {list.map((item) => item.name)}
    </ul>
  )
}

const Loading = () => <h1>Loading...</h1>

export default App