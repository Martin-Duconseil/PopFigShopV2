import { useEffect } from "react";

export default function Products() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <h2>Page d'accueil</h2>
            <br></br>
            <h2 className="text-center mt-3">Pop à la Une</h2>
            <br></br>
            
        </div>
    );
  }