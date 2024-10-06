import { useEffect, useState } from "react";
import { Joke } from "../interfaces/Jokes.ts";
import DisplayJoke from "./DisplayJoke.tsx"; 



export default function App() {
    const [data, setData] = useState<Joke[]>([]);
  
    useEffect(() => {
      async function fetchData(): Promise<void> {
        
          const rawData = await fetch("https://official-joke-api.appspot.com/random_ten");
          const jokes: Joke[] = await rawData.json(); 
          setData(jokes); 
        }
      
  
      fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was an error: " + e));
    }, []); 
  
    return (
      <div>
        <DisplayJoke data={data} />
      </div>
    );
  }
  