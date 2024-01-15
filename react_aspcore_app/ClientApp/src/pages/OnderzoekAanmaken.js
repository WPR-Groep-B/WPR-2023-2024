// import { useQuery } from "@tanstack/react-query"

async function getData() {
  const data = await fetch('https://localhost:7251/api/research/', {
    mode: "cors", headers: {
      "Access-Control-Allow-Origin": "*"
    }
  })
  return await data.json()
}

//dit is een weergave geen aanmaken
export default function OnderzoekAanmaken() {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () => getData()

  // })

  // if (isPending) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message

  return (
    <div><button type="button">Create</button><div>
      {/* {data.map(onderzoek => (
        <OnderzoekDetails onderzoek={onderzoek} />
      ))} */}
    </div></div>
  )
}

// zoek op google goed toepassen form html react functionaliteit bij React
function OnderzoekEdit({ onderzoek }) {
  return <form>{onderzoek.onderzoekNaam}</form>
}

// deze kan herbruiker gemaakt worden (maak er apart component van)
function OnderzoekDetails({ onderzoek }) {
  return <div><button type="button">Edit</button><div>{onderzoek.onderzoekNaam}</div></div>
}