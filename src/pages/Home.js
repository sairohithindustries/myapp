import { React,useState, useEffect } from 'react'
import {
  TickDouble04Icon,
  ContainerTruck02Icon,
  Plant01Icon,
  PackageProcessIcon,
  Call02Icon
} from "hugeicons-react";

import Font, {Text} from 'react-font'
import Contact from './Contact';

function Home() {

  const fullText = "FROM FIELD TO FLOUR";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100); // 100ms delay between letters

      return () => clearTimeout(timeout); // Clean up timeout
    }
  }, [index, fullText]);

  const advantages = [
    { icon: <Plant01Icon size={48} />, title: "Organic Ingredients" },
    { icon: <PackageProcessIcon size={48} />, title: "Advanced Milling Techniques" },
    { icon: <TickDouble04Icon size={48} />, title: "Strict Quality Control" },
    { icon: <ContainerTruck02Icon size={48} />, title: "Reliable Supply & Delivery" },
  ];

  const products = [
    {
      name: "Chakki Atta",
      description: "High-quality Chakki Atta for soft and fluffy rotis",
      image: "https://i.imgur.com/znZOMpK.jpg",
    },
    {
      name: "Maida",
      description: "Refined flour perfect for baking and pastries",
      image: "https://i.imgur.com/WECbYrA.jpg",
    },
    {
      name: "Bombay Rava",
      description: "Ideal for upma and traditional Indian dishes",
      image: "https://i.imgur.com/QEwsWeO.jpg",
    },
    {
      name: "Chiroti Rava",
      description: "Finely milled rava for fluffy and soft recipes",
      image: "https://i.imgur.com/KPLmWOH.jpg",
    },
    {
      name: "Bansi Rava",
      description: "Coarse textured rava perfect for authentic flavors",
      image: "https://i.imgur.com/KtNysYD.jpg",
    },
    {
      name: "Besan Flour",
      description: "Pure besan, ideal for sweets and savory dishes",
      image: "https://i.imgur.com/8ccp21l.jpg",
    },
    {
      name: "Idli Rava",
      description: "Perfectly milled rava for soft, fluffy idlis",
      image: "https://i.imgur.com/8vEgFqd.jpg",
    },
  ];

  return (
    <>
    <div style={{ position: "relative", height: "60vh", width: "100%" }}>
      <img
        src="https://i.imgur.com/2AywGtX.jpg"
        alt="Flour background"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />

      {/* Text Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "16px",
        }}
      >
        <Font family='Spectral' weight= "1000000" >
        <h1 style={{ fontSize: "4rem", marginBottom: "8px" }}>
          {/* From Field to Flour */}
          {text}
        </h1>
        </Font>


        <Font family='Montserrat'>
        <p style={{ fontSize: "1.25rem" }}>
          High-Quality Flours for Your Culinary Needs
        </p>
        </Font>
      </div>
    </div>

    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <Font family='Montserrat' weight={1000} italic={true}>
      <h2 style={{ fontSize: "2rem", marginBottom: "60px" }}>
        ADVANTAGES
      </h2>
      </Font>

      <Font family='Montserrat'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {advantages.map((item, index) => (
          <div key={index} style={{ width: "150px" }}>
            {item.icon}
            <p style={{ fontSize: "1rem", lineHeight: "1.4", marginTop: "10px" }}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
      </Font>
    </div>
    

    <Font family='Montserrat' weight={1000} italic={true}>
    <div style={{ padding: "15px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "40px", marginTop: "0px" }}>
       PRODUCTS
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              background: "#fff",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "8px" }}>
                {product.name}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Font>
    

    <Contact/>

    </>
  )
}

export default Home