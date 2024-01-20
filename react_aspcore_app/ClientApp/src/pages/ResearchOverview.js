import ResearchList from "../components/Research/ResearchList";

export default function ResearchOverview() {
    return (
        <div>
            <h1>Overzicht Onderzoeken</h1>
            <p>
                Hierond staat een lijstweergave van de onderzoeken. <br />
                Onderzoeken kunnen worden bewerkt of verwijderd. <br />
                En nieuwe onderzoeken kunnen worden geplaatst.
            </p>
            <ResearchList />
        </div>
    );
}