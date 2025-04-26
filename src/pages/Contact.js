import React from 'react'

function Contact() {

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      // backgroundColor: "rgb(171, 171, 164)",
      minHeight : "100vh"
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "18px",
      marginBottom: "12px",
    },
    icon: {
      width: "24px",
      height: "24px",
    },
    mapContainer: {
      width: "100%",
      maxWidth: "600px",
      height: "350px",
      marginTop: "20px",
      borderRadius: "10px",
      overflow: "hidden",
      border: "2px solid #ddd",
    },
    map: {
      width: "100%",
      height: "100%",
      border: "0",
    },
  };
  return (
    <>
    <div style={styles.container}>
    <div style={styles.contactItem}>
      <img style={styles.icon} src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="Phone" />
      <a href="tel:08552226594">08552226594</a>
    </div>

    {/* <div style={styles.contactItem}>
      <img style={styles.icon} src="https://img.icons8.com/ios-filled/50/000000/whatsapp.png" alt="WhatsApp" />
      <a href="https://wa.me/919346167010" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
    </div> */}

    <div style={styles.contactItem}>
      <img style={styles.icon} src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email" />
      <a href="mailto:srigoldgtl@gmail.com">srigoldgtl@gmail.com</a>
    </div>




    {/* Google Maps Embed */}
    <div style={styles.mapContainer}>
     <div>Google Maps Link</div>
     {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.9651741969387!2d77.4155130104954!3d15.160257163069364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6ef6de23f4813%3A0x99bca59748d410e8!2sSai%20Rohith%20Industries!5e0!3m2!1sen!2sin!4v1742580711669!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <iframe
        style={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.9651741969387!2d77.4155130104954!3d15.160257163069364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6ef6de23f4813%3A0x99bca59748d410e8!2sSai%20Rohith%20Industries!5e0!3m2!1sen!2sin!4v1742580711669!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        title="Google Maps Location"
      ></iframe>
    </div>
  </div>
  </>
  )
}

export default Contact