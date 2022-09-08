import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Notes from "./notes";



function App(){
    return (
      <div>
        <Header />
        {
            Notes.map(item=>{
                return (
                  <Note
                    key = {item.key}
                    title={item.title}
                    note={item.content}
                  />
                );
            })
        }
        <Footer />
      </div>
    );
}

export default App;