import { useState } from "react";
import "./index.css";
import Galaxy from "../../images/galaxy.jpg";
import BookImg from "../../images/book-image.png";
function Books() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const [book, setBook] = useState([]);

  function handleBook(e) {
    e.preventDefault();
    const data = {
      name: name,
      author: author,
      desc: desc,
    };
    const copied = [...book];
    copied.push(data);

    setBook(copied);
  }

  return (
    <>
      <div className="books-wrapper">
        <div className="container">
          <div className="top-content">
            <h2>2-masala</h2>
            <h1>2. Kitob qo'shish</h1>
          </div>
          <div className="form">
            <form>
              <div className="books-all-info">
                <div className="books-name">
                  <label className="book-name" htmlFor="book-name">
                    Kitob Nomi <span>*</span>
                    <br />
                    <input
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="text"
                      placeholder="Book Name Here"
                      id="book-name"
                    />
                  </label>
                </div>
                <div className="books-author">
                  <label className="author" htmlFor="author">
                    Kitob Yaratuvchisi <span>*</span>
                    <br />
                    <input
                      value={author}
                      onChange={(e) => {
                        setAuthor(e.target.value);
                      }}
                      type="text"
                      placeholder="Book Author Name"
                      id="author"
                    />
                  </label>
                </div>
              </div>
              <div className="book-description">
                <label htmlFor="book-desc">
                  Kitob Haqida Qishqacha <span>*</span>
                  <br />
                  <textarea
                    value={desc}
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    id="books-desc"
                    placeholder="Book Description Here"
                  ></textarea>
                </label>
              </div>
              <button onClick={handleBook} className="book-save">
                SAVE
              </button>
            </form>
            <div className="block">
              {book.length > 0 &&
                book.map((value, index) => {
                  return (
                    <div key={index} className="book-card">
                      <div className="top-image">
                        <img src={Galaxy} alt="" />
                      </div>
                      <div className="avatar-img">
                        <img src={BookImg} alt="" />
                      </div>
                      <div className="book-info">
                        <div className="given-name">
                          <h2 className="book-given-name">{value.name}</h2>
                        </div>
                        <div className="book-given-author">
                          <h3>Author: {value.author}</h3>
                          <h3 className="desc">{value.desc}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
