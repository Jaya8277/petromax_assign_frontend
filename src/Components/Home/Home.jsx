import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import Footer from "../Footer/Footer";
import { FaLaptop, FaMobileAlt } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { SiProtodotio, SiTestinglibrary } from "react-icons/si";
import imgg1 from "../image/image3.PNG";
// import imgg2 from './image2.PNG';
const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://petromax-assign-backend.vercel.app/content")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="content animate__animated animate__backInLeft">
          <h1>{data.topleft}</h1>
          <p>{data.topleft1}</p>
          <button>Free Consultation</button>
        </div>
        <div className="content-img  animate__animated  animate__bounceInRight">
          <img src={data.topright} alt="wrong" />
        </div>
      </div>

      <div className="container1">
        <div className="content-img1 animate__animated animate__backInLeft">
          <img src={data.bottomleft} alt="wrong" />
        </div>
        <div className="content1  animate__animated  animate__bounceInRight">
          <h1>{data.bottomRight}</h1>
          <p>{data.bottomRight1}</p>
          <button>Find Out More!</button>
        </div>
      </div>

      {/* service */}

      <div className="container2">
        <h1>Our Services</h1>
        <div className="card1">
          <div className="cards animate__animated  animate__backInUp ">
            <FaMobileAlt className="icon" />
            <h2>App Development</h2>
            <p>
              This HTML file is a template. If you open it directly in the
              browser, you will see an empty page. You can add webfonts,
            </p>
          </div>
          <div className="cards animate__animated  animate__backInUp">
            <FaLaptop className="icon" />
            <h2>Web Development</h2>
            <p>
              This HTML file is a template. If you open it directly in the
              browser, you will see an empty page. You can add webfonts,
            </p>
          </div>
          <div className="cards animate__animated  animate__backInUp">
            <MdBusinessCenter className="icon" />
            <h2>Manage IT Services</h2>
            <p>
              This HTML file is a template. If you open it directly in the
              browser, you will see an empty page. You can add webfonts,
            </p>
          </div>
          <div className="cards animate__animated  animate__backInUp">
            <RiComputerLine className="icon" />
            <h2>Business Analysis</h2>
            <p>
              This HTML file is a template. If you open it directly in the
              browser, you will see an empty page. You can add webfonts,
            </p>
          </div>
          <div className="cards animate__animated  animate__backInUp">
            <SiProtodotio className="icon" />
            <h2>Prototyping</h2>
            <p>
              This HTML file is a template. If you open it directly in the
              browser, you will see an empty page. You can add webfonts,
            </p>
          </div>
          <div className="cards animate__animated  animate__backInUp">
            <SiTestinglibrary className="icon" />
            <h2>QA & Testing</h2>
            <p>
              This HTML file is a template. If you open it directly in the
              browser, you will see an empty page. You can add webfonts,
            </p>
          </div>
        </div>
        <button>Find Out More!</button>
      </div>

      <div className="container3">
        <div className="content-img3 animate__animated animate__backInLeft">
          <img src={imgg1} alt="wrong" />
        </div>
        <div className="content3 animate__animated  animate__bounceInRight">
          <h1>Drop Us A Line!</h1>
          <div className="inputtag">
            <input type="text" placeholder="Your Name" />
            <br /> <br />
            <input type="text" placeholder="Your Email" />
            <br /> <br />
            <textarea placeholder="Your Message"></textarea>
            <br /> <br />
            <button>Send</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
