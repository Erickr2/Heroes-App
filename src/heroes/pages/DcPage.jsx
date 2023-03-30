import { HeroesList } from "../components/"

export const DcPage = () => {
  return (
    <>
    <h1>Dc Page</h1>
    <hr />

    <HeroesList publisher='DC Comics' /> {/* llamo mi componenete que renderiza mis heroes y le mando el publisher  */}
      
    </>
  )
}


