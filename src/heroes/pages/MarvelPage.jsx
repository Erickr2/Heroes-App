import { HeroesList } from "../components/"

export const MarvelPage = () => {
  return (
    <>
    <h1>Marvel Page</h1>
    <hr />

    <HeroesList publisher='Marvel Comics'/> {/* llamo mi componenete que renderiza mis heroes y le mando el publisher  */}
      
    </>
  )
}

