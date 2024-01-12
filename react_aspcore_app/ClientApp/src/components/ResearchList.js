import { useQuery } from "@tanstack/react-query"

async function getData(){
    const data = await fetch('https://localhost:7251/api/research/', {mode: "cors", headers: {
      "Access-Control-Allow-Origin": "*"
    }})
    console.log(data)
    const json = await data.json()
    console.log("json", json)
    console.table(json)
    return json
}

export default function ResearchList() {
    const { isPending, error, data } = useQuery({
        queryKey: ['get-research-list'],
        queryFn: () => getData()
 
      })
    
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
    
      return (
        <div><button type="button">Create</button><div>
            {data.map(onderzoek => (
              <OnderzoekDetails onderzoek={onderzoek} />
            ))}
        </div></div>
      )
    }

    // function OnderzoekEdit({onderzoek}) {
    //     return <form>{onderzoek.onderzoekNaam}</form>
    //   }

      function OnderzoekDetails({onderzoek}) {
        return <div><button type="button">Edit</button><div>{onderzoek.onderzoekNaam}</div></div>
      }