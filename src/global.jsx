import { Head } from "minista"
import "./assets/style.css"

const Global = ({ url, title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content="description" />
      </Head>
      {children}
    </>
  )
}

export default Global
