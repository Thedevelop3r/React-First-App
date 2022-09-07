import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";




function App(){
    return (
      <div>
        <Header />
        <Note
          title="Malcom"
          note="Malcom was leader of black poeple, killed by his own kin."
        />
        <Footer />
      </div>
    );
}

export default App;