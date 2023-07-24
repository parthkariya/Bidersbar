import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchList from "./SearchList";

function Searchh({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter((person) => {
    return person.name.toLowerCase().includes(searchField.toLowerCase());
    // person.email.toLowerCase().includes(searchField.toLowerCase())
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <>
          <SearchList filteredPersons={filteredPersons} />
        </>
      );
    }
  }

  return (
    <section className="">
      <div className="search_wrapp">
        <AiOutlineSearch style={{ width: "24px", height: "24px" }} />
        <input
          type="text"
          placeholder="Search"
          className="search_input"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Searchh;
