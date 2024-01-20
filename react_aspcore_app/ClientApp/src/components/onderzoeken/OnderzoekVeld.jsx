import axios from "axios";

function OnderzoekVeld() {

    const [onderzoeken, setOnderzoeken] = useState([]);

    const getOnderzoeken = async () => {
        jwt = jwtDecode(localStorage.getItem("jwt"));
        axios.get("https://localhost:7251/api/Research/valid/" + jwt.id), {

        }
    }

    return (
        <div className="onderzoek-veld">

        </div>
    );
}

export default OnderzoekVeld;