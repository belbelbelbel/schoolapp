import { PacmanLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "whitesmoke", display: "flex", alignItems: "center", justifyContent: "center" }}><PacmanLoader color='#96523b' size="9vw" className=''/></div>
  )
}