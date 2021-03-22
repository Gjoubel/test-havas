import React, { useState, useEffect } from "react";
import './App.scss';
import PeopleInformations from './components/PeopleInformations';
import SearchBar from './components/SearchBar';

function App() {
  const [people, setPeople] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
    }
    fetchPeople();
  }, [])
  const keywordRegExp = new RegExp(keyword, 'i') ;
  const filteredPeople = !keyword ? people : people.filter(p => 
    (keywordRegExp.test(p.name)));
  const perPage = 6;
  const pages = [...Array(Math.ceil(filteredPeople.length/perPage)).keys()];
  const paginatedPeople = filteredPeople.slice(perPage*page,perPage*page+perPage);
  return (
    <div>
      <h1 className='main-title'>Test Havas Swapi</h1>
      <SearchBar keyword={keyword} setKeyword={setKeyword}/>
      <PeopleInformations data={paginatedPeople}/>
      <div className="container-pagination">
        {pages.map((item) => (
          <button key={item} onClick={() => setPage(item)} className="button-pagination">{item + 1}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
