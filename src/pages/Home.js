import React from 'react'
import {
  TickDouble04Icon,
  ContainerTruck02Icon,
  Plant01Icon,
  PackageProcessIcon,
} from "hugeicons-react";

function Home() {

  const advantages = [
    { icon: <Plant01Icon size={48} />, title: "Organic Ingredients" },
    { icon: <PackageProcessIcon size={48} />, title: "Advanced Milling Techniques" },
    { icon: <TickDouble04Icon size={48} />, title: "Strict Quality Control" },
    { icon: <ContainerTruck02Icon size={48} />, title: "Reliable Supply & Delivery" },
  ];

  return (
    <>
    {/* <img
            src={"https://i.imgur.com/2AywGtX.jpg"}
            //https://imgur.com/a/JdWHfgc
            //alt={product}
            //style={styles.productImage}
    /> */}
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
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "8px" }}>
          From Field to Flour
        </h1>
        <p style={{ fontSize: "1.25rem" }}>
          High-Quality Flours for Your Culinary Needs
        </p>
      </div>
    </div>

    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}>
        OUR ADVANTAGES
      </h2>

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
    </div>




    </>
  )
}

export default Home