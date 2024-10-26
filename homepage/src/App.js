import React from "react";
import Sidebar from "./Sidebar.js";
import Header from "./Header.js";
import ContentArea from "./ContentArea.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <ContentArea />
      </div>
    </div>
  );
}

export default App;

// import React from "react";

// function App() {
//   return (
//     <div style={{ display: "flex", height: "100vh", border: "1px solid blue" }}>
//       <div style={{ width: "20%", backgroundColor: "#f0f0f0", padding: "10px" }}>
//         Sidebar
//       </div>
//       <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         <div style={{ backgroundColor: "#e0e0e0", padding: "10px" }}>Header</div>
//         <div style={{ padding: "20px", backgroundColor: "#e6e6e6" }}>Content Area</div>
//       </div>
//     </div>
//   );
// }

// export default App;

