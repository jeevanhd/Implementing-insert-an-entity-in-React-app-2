import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [FormData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    year: "",
    synopsis: "",
    image: "",
  });
  const navigate = useNavigate();

  const handelChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handelChange}
            value={FormData.title}
          />
        </div>
        <div>
          <label htmlFor="director">Director</label>
          <input
            type="text"
            name="director"
            id="director"
            onChange={handelChange}
            value={FormData.director}
          />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            id="genre"
            onChange={handelChange}
            value={FormData.genre}
          />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            id="year"
            onChange={handelChange}
            value={FormData.year}
          />
        </div>
        <div>
          <label htmlFor="synopsis">Synopsis</label>
          <textarea
            name="synopsis"
            id="synopsis"
            value={FormData.synopsis}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="ul"
            name="image"
            id="image"
            onChange={handelChange}
            value={FormData.image}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
