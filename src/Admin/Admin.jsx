import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./admin.css";

export default function Update() {
  const [topleft, setTopleft] = useState("");
  const [topleft1, setTopleft1] = useState("");
  const [topright, setTopright] = useState("");
  const [bottomleft, setBottomleft] = useState("");
  const [bottomRight, setBottomRight] = useState("");
  const [bottomRight1, setBottomRight1] = useState("");
  const [facebook, setFacebook] = useState("");
  const [google, setGoogle] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const navigate = useNavigate();

  function updataData() {
    const obj = {
      topright,
      topleft,
      topleft1,
      bottomleft,
      bottomRight,
      bottomRight1,
      facebook,
      instagram,
      linkedin,
      twitter,
      google,
    };

    axios
      .put(
        "https://petromax-assign-backend.vercel.app/content/update/63d96229ebe33e8731f6d85a",
        obj
      )
      .then((res) => {
        console.log(res);

        alert("Content updated Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="main1">
        <h1>Admin Update Data</h1>
        <div className="main">
          <input
            type="text"
            placeholder="Add TopLeft Content"
            onChange={(e) => setTopleft(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add TopLeft Descriptions"
            onChange={(e) => setTopleft1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Top Right Image"
            onChange={(e) => setTopright(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Bottom Image"
            onChange={(e) => setBottomleft(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Bottom Content"
            onChange={(e) => setBottomRight(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Bottom Descriptions"
            onChange={(e) => setBottomRight1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Facebook link"
            onChange={(e) => setFacebook(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Google link"
            onChange={(e) => setGoogle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Instagram link"
            onChange={(e) => setInstagram(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Twitter link"
            onChange={(e) => setTwitter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Linkedin link"
            onChange={(e) => setLinkedin(e.target.value)}
          />{" "}
          <br /> <br />
          <button className="btn" onClick={updataData}>
            update Content
          </button>
        </div>
      </div>
    </>
  );
}
