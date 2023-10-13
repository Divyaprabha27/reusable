import './App.css';
import HEADER from "./Components/Head/head";
import BANNER from "./Components/Banners/banner";
import MAIN from "./Components/Main/Main";
import PARTS from "./Components/Parts/Parts";
import TESTIMONIAL from "./Components/Testimonial/Testimonial";
import SIGNUP from "./Components/Signup/Signup";
import FOOTER from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import icon1 from './assets/window.png';
import icon2 from './assets/layers.png';
import icon3 from './assets/terminal.png';
import testi1 from './assets/testimonials-1.jpg';
import testi2 from './assets/testimonials-2.jpg';
import testi3 from './assets/testimonials-3.jpg';
const data1 = [
  {
    id: 1,
    imgUrl: icon1,
    name: "Fully Responsive",
    description: "This theme will look great on any device, no matter the size!",
  },
  {
    id: 2,
    imgUrl: icon2,
    name: "Bootstrap 5 Ready",
    description: "Featuring the latest build of the new Bootstrap 5 framework!",
  },
  {
    id: 3,
    imgUrl: icon3,
    name: "Easy to Use",
    description: "Ready to use with your own content, or customize the source files!",
  }
]
const testimonial = [
  {
    id: 1,
    imgUrl: testi1,
    name: "Margaret E.",
    description: "This is fantastic! Thanks so much guys!",
  },
  {
    id: 2,
    imgUrl: testi2,
    name: "Fred S.",
    description: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
  },
  {
    id: 3,
    imgUrl: testi3,
    name: "Sarah W.",
    description: "Thanks so much for making these free resources available to us!",
  }
]
function App() {
  const [items, setitems] = useState(data1);
  const[testi,settesti] = useState(testimonial);
  return (
    <div className="App">
      <HEADER/>
      <BANNER/>
      <MAIN
        items={items}
      />
      <PARTS 
      />
      <TESTIMONIAL
        testi = {testi} />
      <SIGNUP/>
      <FOOTER />
    </div>
  );
}

export default App;
