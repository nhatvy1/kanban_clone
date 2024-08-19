import useRouteElements from "./routers/useRouteElement";

function App() {
  const routeElements = useRouteElements()

  return (
    <>{routeElements}</>
  )
}

export default App;