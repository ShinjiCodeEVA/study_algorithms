import { AppRoutes } from "./routes"
import image from '../public/logo.png';
import { CustomFavicon } from "./common/favicon";

function App() {

  return (<>
      <CustomFavicon src={image} />
      <AppRoutes />
  </>)
}

export default App
