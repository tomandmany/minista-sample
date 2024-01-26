import Header from "../components/Header"
import Footer from "../components/Footer"

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default GlobalLayout
