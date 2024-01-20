import ResearchEdit from './ResearchEdit';
import ReseachDetails from './ResearchDetails';

function ResearchContainer(onderzoek, handleSave, handleDelete, setEditOnderzoekId) {
    return (
        <div>
            editOnderzoekId === onderzoek.onderzoekId ? (
            <ResearchEdit
                key={onderzoek.onderzoekId}
                onderzoek={onderzoek}
                onSave={handleSave}
                onCancel={() => setEditOnderzoekId(null)}
            />
            ) : (
            <ReseachDetails
                key={onderzoek.onderzoekId}
                onderzoek={onderzoek}
                onEdit={() => setEditOnderzoekId(onderzoek.onderzoekId)}
                onDelete={() => handleDelete(onderzoek.onderzoekId)}
            />
            );
        </div>
    );
}

export default ResearchContainer;