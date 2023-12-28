import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/index"
import Products from "../pages/Products/index"


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}
export default Router

