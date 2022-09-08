import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Notes from "./notes";




function App(){


    const [counter, counterCal] = React.useState(0);
    function increse(){
        counterCal(counter+1);
    }



    return (
      <div>
        <Header />
        <h1 onClick={increse} >{counter}</h1>
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