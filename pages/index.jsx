import Link from "next/link"

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(x => x).pop({})  //filtra los datos vacios de un arreglo
  return (
    <li><Link href={`/pokemones/${id}`}>{pokemon.name}</Link></li>
  )
}

export default function Pokemones({ pokemones }) {
  return (
    <div>
      <p>Mi App de Pokemones en NextJs</p>
      <ul>
        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('http://pokeapi.co/api/v2/pokemon?limit=200')
  const data = await response.json()

  return {
    props: { pokemones: data.results }
  }
}
