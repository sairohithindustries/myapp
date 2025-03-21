import React from 'react'

function Products() {

  const products = [
    "Idli Rava",
    "Chakki Atta",
    "Maida",
    "Bombay Rava",
    "Chiroti Rava",
    "Bansi Rava",
    "Besan Flour"
  ];

  const productImages = {
    "Idli Rava": "https://i.imgur.com/8vEgFqd.jpg", // Replace with actual image URLs
    // <img src="https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID" alt="drive image"/>
    "Chakki Atta": "https://i.imgur.com/znZOMpK.jpg",
    "Maida": "https://i.imgur.com/WECbYrA.jpg",
    "Bombay Rava": "https://i.imgur.com/QEwsWeO.jpg",
    "Chiroti Rava": "https://i.imgur.com/KPLmWOH.jpg",
    "Bansi Rava": "https://i.imgur.com/KtNysYD.jpg",
    "Besan Flour": "https://i.imgur.com/8ccp21l.jpg",
  };

  const styles = {
    // heading: {
    //   fontSize: "24px",
    //   fontWeight: "bold",
    //   marginBottom: "16px",
    //   textAlign: "center"
    // },
    heading: {
      fontSize: "28px", // Slightly larger font
      fontWeight: "bold",
      marginBottom: "16px",
      textAlign: "center",
      fontFamily: "'Ubuntu', sans-serif", // Custom font (make sure it's available)
      color: " #2c3e50", // Dark grayish-blue color
      padding: "20px",
      border: "2px solidrgb(85, 85, 86)", // Blue border
      borderRadius: "8px", // Rounded corners
      backgroundColor: "rgb(237, 230, 230)", // Light gray background
      margin : "0"
    },
    listContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      width: "100%",
    },
    productItem: {
      display : "flex",
      flexDirection : "column",
      alignItems : "center",
      gap : "10px",
      padding: "16px",
      backgroundColor: "#ffffff",
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "500",
      width : "100%"
    },
    productImage: {
      width: "500px",
      height: "500px",
      borderRadius: "8px",
    },
    span : {
      fontWeight : "bold",
      fontSize : "20px"
    }
  };
  

  return (
    
    <>
    <h1 style={styles.heading}>Our Products</h1>
    <div style={styles.listContainer}>
      {products.map((product, index) => (
        <div key={index} style={styles.productItem}>
          <img src={productImages[product]} alt={product} style={styles.productImage} />
          <span style = {styles.span}>{product}</span>
        </div>
      ))}
    </div>
    </>
  );
}


export default Products;