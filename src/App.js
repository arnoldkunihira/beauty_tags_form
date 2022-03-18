import Header from "./components/Header";
import React, {useEffect, useState} from "react";
import Dropdown from "./components/Dropdown";
import axios from "axios";

function App() {
    const [selected, setSelected] = useState("");
    const [tags, setTags] = useState([]);
    const [filteredTags, setFilteredTags] = useState(tags);

    useEffect(() => {
        axios.get("http://localhost:5000/api/hairstyles")
            .then(response => {
                setTags(response.data);
                setFilteredTags(response.data);
            })
            .catch(error => {
                console.log(`Error getting data: ${error}`);
            });
    }, []);

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result;
        result = tags.filter((data) => {
            return data.name.search(value) !== -1;
        });

        setFilteredTags(result)
    }

    return (
        <div className="container">
            <Header />
            <Dropdown selected={selected} setSelected={setSelected} />
            <form className="fields-form">
                <div className="form-control">
                    <label>Search for Tags</label>
                    <input type="text" placeholder="Search..."
                           onChange={(event) => handleSearch(event)}/>
                </div>
                <div className="list">
                    {filteredTags.map((value) => {
                        return (
                            <div key={value.id}>
                                <div className="listFiltered" key={value.id}>
                                    {value.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </form>
        </div>
    );
}

export default App;
