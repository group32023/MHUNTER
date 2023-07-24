import { useState } from "react";
import '../../assets/css/tabs.css'
import Contact from '../../pages/contact';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Post
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
      Audio Albums     
   </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Video Albums
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Photos
        </button>
      </div>


      <div className="content-tabs">

      <div className={toggleState === 1 ? "content active-content" : "content"}>

  {toggleState === 1 && <Contact/>}
</div>
<div className={toggleState === 2 ? "content active-content" : "content"}>
{toggleState === 2 && <Contact/>}
</div>
<div className={toggleState === 3 ? "content active-content" : "content"}>
{toggleState === 3 && <Contact/>}
</div>
<div className={toggleState === 4 ? "content active-content" : "content"}>
{toggleState === 4 && <Contact/>}
</div>
      </div>
    </div>
  );
}

export default Tabs;

