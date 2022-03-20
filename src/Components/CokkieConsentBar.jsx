import CookieConsent from "react-cookie-consent";

const CokkieConsentBar = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I Agree"
      cookieName="agreeCokkie"
      style={{
        background: "#2B373B",
        borderRadius: "5px",
        backdropFilter: "blur(8px)",
        opacity: 0.8,
      }}
      buttonStyle={{
        color: "#fff",
        fontSize: "15px",
        borderRadius: "5px",
        background: "#1976d2",
        fontWeight: "bold",
      }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
      <span style={{ fontSize: "10px" }}>
        I agree to use cokkies according to the{" "}
        <button
          style={{
            color: "#fff",
            fontSize: "10px",
            borderRadius: "5px",
            background: "grey",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={(e) =>
            alert("We have strict policies to protect your privacy")
          }
        >
          Privacy Policy
        </button>{" "}
        and{" "}
        <button
          style={{
            color: "#fff",
            fontSize: "10px",
            borderRadius: "5px",
            background: "grey",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={(e) =>
            alert("We have certain terms and condition to run our business")
          }
        >
          Terms and Conditions
        </button>
        .
      </span>
    </CookieConsent>
  );
};

export default CokkieConsentBar;
