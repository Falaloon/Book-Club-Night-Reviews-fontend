import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EditFormProduct() {
  const params = useParams();
  const navigate = useNavigate();

  console.log("get id:" + params.id); //ออก

  const [data, setData] = useState({
    name: "",
    detail: "",
    price: 0,
  });

  useEffect(() => {
    loadDataById(params.id);
  }, []);

  //ต้องรับ params.id
  const loadDataById = async (id) => {
    await axios
      .get(import.meta.env.VITE_API_URL + "/products" + "/" + id)
      .then((res) => {
        setData(res.data);
        console.log("log Data: " + res.data);
      }) //
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event, id, data) => {
    event.preventDefault();
    console.log("ขอดูไอดีหน่อย:" + id);
    console.log("ขอดู data หน่อย:" + data);

    await axios
      .put(import.meta.env.VITE_API_URL + "/products/" + id, data)
      .then((res) => {
        console.log("res.data ออกมาแล้ว" + res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" font-IBMPlex font-IBMPlexThai flex flex-col self-center	justify-center">
      <p className="text-3xl font-extrabold	 text-center m-5 font-IBMPlex text-[#3E54AC]">
        Edit Your Reviews
      </p>
      <div
        id="card input"
        className="border-solid border-8 border-[#655DBB] w-1/2 rounded-lg self-center justify-center p-5"
      >
        <div className="flex flex-col">
          <label htmlFor="lfname" className="m-2">
            Title/ชื่อหนังสื่อ:
          </label>
          <input
            id="lfname"
            name="name"
            type="text"
            placeholder="name"
            //add ค่าเดิม
            value={data.name}
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
            value={data.detail}
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
            value={data.price}
            className="border-solid border-2 border-[#BFACE2] m-2"
            onChange={(event) => handleChange(event)}
          />

          <div className="flex justify-around">
            <Link to={"/"}>
              <button
                type="button"
                className="text-white bg-[#bb5d86] hover:bg-[#ac3ea3] focus:outline-none focus:ring-2  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Back
              </button>
            </Link>
            <button
              type="button"
              onClick={(event) => handleSubmit(event, params.id, data)}
              className="text-white bg-[#655DBB] hover:bg-[#3E54AC] focus:outline-none focus:ring-2  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2  "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditFormProduct;
