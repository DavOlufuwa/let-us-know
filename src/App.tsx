import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Profile from "./pages/Profile"
import Homepage from "./pages/Homepage"


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index  element={<Homepage />} />
      <Route path="profile/:username" element={<Profile />} />
    </Route>  
  ))

function App() {
  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  )
}

export default App
