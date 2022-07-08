import Image from "next/image"
import Link from "next/link"

const pokemon = ({ data }) => {
  return (
    <div>
      <h1>Pokemon: {data.name}, numero# {data.id}</h1>
      <Image alt="imagen" src={data.sprites.front_default} width={400} height={400} />
      <Link href='/'>Volver al Inicio</Link>
    </div>
  )
}

export default pokemon

export const getStaticProps = async ({ params }) => {  // la funcion tiene que llamarse getServerSideProps
  // para sacar o pasar los paramatros
  const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${params.id}`)
  const data = await response.json()

  return { props: { data } }
}

export const getStaticPaths = async () => {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
  ]
  return {
    paths,
    // fallback: true,  // si quieres que muestre solo q hay q hacer una funcion.
    // fallback: false,  // si quieres que solo muestro los params delcarados
    fallback: 'blocking',  // si quieres que espere y luego muetre
  }
}
// export const getServerSideProps = async ({ params }) => {  // la funcion tiene que llamarse getServerSideProps
//   // para sacar o pasar los paramatros
//   const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${params.id}`)
//   const data = await response.json()
//
//   return { props: { data } }
// }
