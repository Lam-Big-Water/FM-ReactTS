import { CharacterType } from "../util/characters";
import { Table, TableRow } from "./Table";

type CardProps = {character: CharacterType}

const Card = ({character}: CardProps) => {
  return (
    <main className="card">
        <header className="title">
            <h1>{character.name}</h1>
        </header>
        <Table>
            <TableRow heading="Alignment" value={character.alignment}/>
            <TableRow heading="Intelligence" value={character.intelligence} />
            <TableRow heading="Strength" value={character.strength} />
            <TableRow heading="Speed" value={character.speed} />
            <TableRow heading="Durability" value={character.durability} />
            <TableRow heading="Power" value={character.power} />
            <TableRow heading="Combat" value={character.combat} />
            <TableRow heading="Total" value={character.total} />
        </Table>
    </main>
  )
}

export default Card