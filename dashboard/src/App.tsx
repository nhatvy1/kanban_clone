import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import { Suspense } from "react";
import SkeletonPage from "./components/skeleton/SkeletonPage";

function App() {
  return (
    <Suspense fallback={<SkeletonPage />}>
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App;