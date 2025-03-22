import {React,useState} from 'react'

function Products() {

const [showRecipes, setShowRecipes] = useState(false);

  const products = [
    "Chakki Atta",
    "Maida",
    "Bombay Rava",
    "Chiroti Rava",
    "Bansi Rava",
    "Besan Flour",
    "Idli Rava",
  ];

  const productRecipes = {
    "Chakki Atta": [
      { 
        "name": "Chapati", 
        "Preparation": "Mix Chakki Atta with water, knead into dough, roll into thin circles, and cook on a hot pan until golden brown." 
      },
      { 
        "name": "Paratha", 
        "Preparation": "Prepare dough using Chakki Atta, stuff with spiced filling (potatoes or paneer), roll, and cook with ghee on a hot pan." 
      }
    ],
  
    "Maida": [
      { 
        "name": "Naan", 
        "Preparation": "Mix Maida, yeast, yogurt, and milk, knead into soft dough, roll, and cook on a tandoor or hot pan." 
      },
      { 
        "name": "Cake", 
        "Preparation": "Mix Maida with sugar, eggs, butter, and baking powder. Bake at 180°C for 30 minutes." 
      }
    ],
  
    "Bombay Rava": [
      { 
        "name": "Upma", 
        "Preparation": "Roast Bombay Rava, cook with sautéed onions, mustard seeds, and water until soft and fluffy." 
      },
      { 
        "name": "Rava Dosa", 
        "Preparation": "Mix Bombay Rava with rice flour, curd, and water. Pour on a hot pan and cook until crispy." 
      }
    ],
  
    "Chiroti Rava": [
      { 
        "name": "Chiroti", 
        "Preparation": "Make a dough with Chiroti Rava, roll into thin layers, deep-fry, and sprinkle with powdered sugar." 
      },
      { 
        "name": "Shankarpali", 
        "Preparation": "Prepare dough using Chiroti Rava, Maida, and sugar. Cut into small squares and deep-fry." 
      }
    ],
  
    "Bansi Rava": [
      { 
        "name": "Bansi Rava Upma", 
        "Preparation": "Roast Bansi Rava, cook with tempered mustard seeds, green chilies, and water until soft." 
      },
      { 
        "name": "Bansi Rava Kheer", 
        "Preparation": "Boil milk, add roasted Bansi Rava, sugar, and cardamom. Simmer until thick." 
      }
    ],
  
    "Besan Flour": [
      { 
        "name": "Besan Ladoo", 
        "Preparation": "Roast Besan Flour in ghee, mix with sugar, and shape into ladoos." 
      },
      { 
        "name": "Pakora", 
        "Preparation": "Make a batter with Besan Flour, spices, and water. Coat vegetables and deep-fry until crispy." 
      }
    ],
  
    "Idli Rava": [
      { 
        "name": "Idli", 
        "Preparation": "Soak Idli Rava, mix with urad dal batter, ferment overnight, and steam into soft idlis." 
      },
      { 
        "name": "Rava Dhokla", 
        "Preparation": "Mix Idli Rava with curd, let it ferment, and steam to make spongy dhoklas." 
      }
    ]
  };

  const productImages = {
     // Replace with actual image URLs
    // <img src="https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID" alt="drive image"/>
    "Chakki Atta": "https://i.imgur.com/znZOMpK.jpg",
    "Maida": "https://i.imgur.com/WECbYrA.jpg",
    "Bombay Rava": "https://i.imgur.com/QEwsWeO.jpg",
    "Chiroti Rava": "https://i.imgur.com/KPLmWOH.jpg",
    "Bansi Rava": "https://i.imgur.com/KtNysYD.jpg",
    "Besan Flour": "https://i.imgur.com/8ccp21l.jpg",
    "Idli Rava": "https://i.imgur.com/8vEgFqd.jpg",
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
      padding: "16px 0px",
      backgroundColor: "#ffffff",
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "500",
      width : "100%"
    },
    productImage: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      objectFit: "cover",
    },
    span : {
      fontWeight : "bold",
      fontSize : "20px"
    },
    receipeContainer : {
      display: "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center",
    },
    receipeItem : {
      display: "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center",
      gap : "2px"
    }
  };

  const toggleRecipe = (product) => {
    setShowRecipes((prevState) => ({
      ...prevState,
      [product]: !prevState[product], // Toggle only for the clicked product
    }));
  };
  
  return (
    <div>
    <h1 style={styles.heading}>Our Products</h1>
    <div style={styles.listContainer}>
      {products.map((product, index) => (
        <div key={index} style={styles.productItem}>
          <img
            src={productImages[product]}
            alt={product}
            style={styles.productImage}
          />
          <span style={styles.span}>{product}</span>
          <button onClick={() => toggleRecipe(product)}>View Recipes</button>

          {/* Show recipes only for the clicked product */}
          {showRecipes[product] && (
            <div style={styles.recipeContainer}>
              {productRecipes[product].map((recipe, idx) => (
                <div key={idx} style={styles.recipeItem}>
                  <div><strong>Name:</strong> {recipe.name}</div>
                  <div><strong>Preparation:</strong> {recipe.Preparation}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  );
}


export default Products;