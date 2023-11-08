import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import axios from "axios";

function AddReview() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  console.log(form);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(import.meta.env.VITE_API_URL + "/products", form)
      .then((res) => {
        console.log("res.data ออกมาแล้ว" + res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" font-IBMPlex font-IBMPlexThai flex flex-col self-center	justify-center">
      <p className="text-3xl font-extrabold	 text-center m-5 font-IBMPlex text-[#3E54AC]">
        Add Your Reviews
      </p>
      <div
        id="card input"
        className="border-solid border-8 border-[#655DBB] w-1/2 rounded-lg self-center justify-center p-5"
      >
        <div className="flex flex-col font-IBMPlexThai">
          <label htmlFor="lfname" className="m-2">
            Title/ชื่อหนังสื่อ:
          </label>
          <input
            id="lfname"
            name="name"
            type="text"
            placeholder="name"
            className="border-solid border-2 border-[#BFACE2] m-2"
            onChange={(event) => handleChange(event)}
          />

          <label htmlFor="ldetail" className="m-2">
            Output/สิ่งที่ได้รับ:
          </label>
          <input
            id="ldetail"
            name="detail"
            type="text"
            placeholder="detail"
            className="border-solid border-2 border-[#BFACE2] m-2"
            onChange={(event) => handleChange(event)}
          />

          <label htmlFor="lprice" className="m-2">
          Price/ราคา:
          </label>
          <input
            id="lprice"
            name="price"
            type="number"
            placeholder="price"
            className="border-solid border-2 border-[#BFACE2] m-2"
            onChange={(event) => handleChange(event)}
          />
          <div className="flex justify-around">
            <Link to="/">
              <button
                type="button"
                className="text-white bg-[#bb5d86] hover:bg-[#ac3ea3] focus:outline-none focus:ring-2  font-medium rounded-full text-sm px-5 py-2.5 text-center m-2"
              >
                Back
              </button>
            </Link>

            <button
              type="button"
              onClick={handleSubmit}
              className="text-white bg-[#655DBB] hover:bg-[#3E54AC] focus:outline-none focus:ring-2  font-medium rounded-full text-sm px-5 py-2.5 text-center m-2 "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReview;
