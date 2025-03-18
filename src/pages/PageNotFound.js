import NotFound from "../assets/images/NotFound.png";
import { Link } from "react-router-dom";
import { Button } from "../components/Button"
import { useEffect } from "react"

export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found / Bioscoop`;
  })


    return (
     <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-6xl text-gray-700 font-bolf my-10 dark:text-white">404 Oops!</p>
          <div className="max-w-4xl"><img className="rounded w-64 h-64" src={NotFound} alt="404 Page Not Found" /></div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
          <Button>Back To Home</Button>
          </Link>
        </div>
      </section>
     </main>
    )
  }