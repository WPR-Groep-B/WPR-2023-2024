import ResearchList from "../components/ResearchList";

export default function ResearchOverview() {
    return (
        <div>
            <h1>Overzicht Onderzoeken</h1>
            <p>Hierond staat een lijstweergave van de onderzoeken. <br></br>Onderzoeken kunnen worden bewerkt of verwijderd. <br></br>En nieuwe onderzoeken kunnen worden geplaatst.</p>
            <ResearchList />
        </div>
    );
}