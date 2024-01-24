import ResearchEdit from './ResearchEdit';
import ReseachDetails from './ResearchDetails';
import { useState } from 'react';
import styles from '../../styles/ResearchList.module.css';

function ResearchContainer({onderzoek, handleSave, handleDelete}) {

    const [editOnderzoekId, setEditOnderzoekId] = useState(null); // Nieuwe state voor het tonen van het edit formulier

    return (
        <div className={styles.percontainer}>
            {
                editOnderzoekId === onderzoek.onderzoekId ? (
                <ResearchEdit
                    onderzoek={onderzoek}
                    onSave={handleSave}
                    onCancel={setEditOnderzoekId}
                />
                ) : (
                <ReseachDetails
                    onderzoek={onderzoek}
                    onEdit={() => setEditOnderzoekId(onderzoek.onderzoekId)}
                    onDelete={() => handleDelete(onderzoek.onderzoekId)}
                />
                )
            }
        </div>
    );
}

export default ResearchContainer;