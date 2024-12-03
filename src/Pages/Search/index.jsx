import React, { useEffect, useState } from "react";
import { posts } from "../../axios";
import "./index.css";

function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(function () {
    posts
      .get("posts")
      .then((response) => {
        if (response.status == 200) {
          setData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterEl = data.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="search">
      <div className="container search-container">
        <h1>Qidiruv bolimi</h1>
        <input
          id="searchInput"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="search ?"
        />
        <div className="wr-cont">
          {filterEl.length > 0 ? (
            filterEl.map((item) => {
              return (
                <div className="wrOpen" key={item.id}>
                  <div>{item.title}</div>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Not found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
