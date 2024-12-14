import React from "react";

export default function ContactPage() {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.breadcrumbs}>Home . page . Contact Us</p>

      {/* Information About Us */}
      <section style={styles.section}>
        <h2>Information About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
          massa ut et ultrices posuere amet. Morbi tincidunt ornare massa.
        </p>
      </section>

      {/* Contact Way */}
      <section style={styles.section}>
        <h2>Contact Way</h2>
        <ul style={styles.list}>
          <li>
            <strong>Phone:</strong> TEL: 877-67-88-99
          </li>
          <li>
            <strong>Email:</strong> shop@store.com
          </li>
          <li>
            <strong>Support:</strong> forum For over 24hr
          </li>
          <li>
            <strong>Address:</strong> 20 Margaret st, London Greate Britian,3NM98-LK
          </li>
          <li>
            <strong>Support:</strong> Free standard shipping on all orders.
          </li>
        </ul>
      </section>

      {/* Get In Touch */}
      <section style={styles.section}>
        <h2>Get In Touch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
          massa ut et ultrices posuere amet. Morbi tincidunt ornare massa.
        </p>
        {/* Contact Form */}
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            style={styles.input}
            required
          />
          <textarea
            placeholder="Type Your Message"
            rows={4} // Correct syntax for rows
            style={styles.textarea}
            required
          ></textarea>
          <button type="submit" style={styles.button}>
            Send Mail
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div>
          <h3>Contact Info</h3>
          <p>17 Princess Road, London Greater London NW-1 8JR, UK</p>
        </div>
        <div>
          <h3>Categories</h3>
          <ul>
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>
        <div>
          <h3>Customer Care</h3>
          <ul>
            <li>My Account</li>
            <li>Discount</li>
            <li>Return</li>
            <li>Orders History</li>
            <li>Other Tracking</li>
          </ul>
        </div>
        <div>
          <h3>Pages</h3>
          <ul>
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Build Pages</li>
            <li>Visual Composer Elements</li>
          </ul>
        </div>
        <p>©copyright© Wobeky. All Rights Reserved</p>
      </footer>
    </div>
  );
}

// Defining styles with correct TypeScript types
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  breadcrumbs: {
    fontSize: "0.9rem",
    color: "#888",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "30px",
  },
  list: {
    paddingLeft: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column", // Correct TypeScript-compatible value
    gap: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  footer: {
    marginTop: "40px",
    borderTop: "1px solid #ccc",
    paddingTop: "20px",
  },
};
