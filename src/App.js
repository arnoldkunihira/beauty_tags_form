import Header from "./components/Header";
import React, {useEffect, useState} from "react";
import Dropdown from "./components/Dropdown";
import axios from "axios";

function App() {
    const [selected, setSelected] = useState("");

    const [hairstyle, setHairstyle] = useState([]);
    const [filteredHairstyle, setFilteredHairstyle] = useState(hairstyle);

    const [makeup, setMakeup] = useState([]);
    const [filteredMakeup, setFilteredMakeup] = useState(makeup);

    // Hairstyles
    useEffect(() => {
        axios.get("http://localhost:5000/api/hairstyles")
            .then(response => {
                setHairstyle(response.data);
                setFilteredHairstyle(response.data);
            })
            .catch(error => {
                console.log(`Error getting hairstyles: ${error}`);
            });
    }, []);

    // Makeup
    useEffect(() => {
        axios.get("http://localhost:5000/api/makeup")
            .then(response => {
                setMakeup(response.data);
                setFilteredMakeup(response.data);
            })
            .catch(error => {
                console.log(`Error getting makeup: ${error}`);
            });
    }, []);

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = hairstyle.filter((data) => {
            return data.name.search(value) !== -1;
        });

        return result ? setFilteredHairstyle(result): setFilteredMakeup(result);
    }

    return (
        <div className="container">
            <Header/>
            <Dropdown selected={selected} setSelected={setSelected}/>
            <form className="fields-form">
                <div className="form-control">
                    <label>Search for Beauty Tags</label>
                    <input type="text" placeholder="Search..."
                           onChange={(event) => handleSearch(event)}/>
                </div>
                <div className="list">
                    {filteredHairstyle.map((value) => {
                        return (
                            <div key={value.id}>
                                <div className="listFiltered" key={value.id}>
                                    {value.name}
                                </div>
                            </div>
                        );
                    })}

                    {filteredMakeup.map((value) => {
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
