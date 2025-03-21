import React from 'react'

function Products() {

  const products = [
    // "Idli Rava",
    "Chakki Atta",
    // "Maida",
    // "Bombay Rava",
    // "Chiroti Rava",
    // "Bansi Rava",
    // "Besan Flour"
  ];

  const productImages = {
    "Idli Rava": "https://via.placeholder.com/50", // Replace with actual image URLs
    "Chakki Atta": "https://drive.google.com/file/d/1bEaZWTOGhmV_MPdt3bq_IvBYfNkMd-3B/view",
    "Maida": "https://via.placeholder.com/50",
    "Bombay Rava": "https://via.placeholder.com/50",
    "Chiroti Rava": "https://via.placeholder.com/50",
    "Bansi Rava": "https://via.placeholder.com/50",
    "Besan Flour": "https://via.placeholder.com/50",
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
      width: "50px",
      height: "50px",
      borderRadius: "8px",
    }
  };
  

  return (
    
    <>
    <h1 style={styles.heading}>Our Products</h1>
    <div style={styles.listContainer}>
      {products.map((product, index) => (
        <div key={index} style={styles.productItem}>
          <img src={productImages[product]} alt={product} style={styles.productImage} />
          <span>{product}</span>
        </div>
      ))}
    </div>
    </>
  );
}


export default Products;