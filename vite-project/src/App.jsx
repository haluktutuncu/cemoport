import "./App.css";
import Accordion from "./components/Accordion";
import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";
import NavMini from "./components/NavMini";
import DownloadBtn from "./components/DownloadBtn";

const items = [
  {
    title: "Transient Echoes",
    content:
      "In 2022, in the heart of Berlin, Transient Echoes took shape. This immersive sound installation spanned 60 x 15 x 1.2 meters and invited participants to explore the ephemeral nature of memory through auditory experiences. Inspired by the fleeting sounds of urban environments, this piece challenged visitors to question the permanence of their auditory memories. By capturing and playing back sounds from various city locations, Transient Echoes offered a unique commentary on the intersection of place and recollection, encouraging a deeper appreciation for the sounds that define our daily lives.",
    date: "2022",
  },
  {
    title: "The Urban Mirage",
    content:
      "Displayed in the bustling center of Tokyo in 2021, The Urban Mirage presented a 50 x 10 x 1 meter illusion of an urban skyline. Using reflective materials and strategic lighting, this installation created a mesmerizing visual experience that blurred the lines between reality and illusion. The Urban Mirage provoked discussions about the constantly evolving nature of cityscapes and the role of perception in urban living. As a temporary spectacle, it underscored the transient beauty of metropolitan environments, prompting onlookers to consider the fleeting moments that comprise city life.",
    date: "2021",
  },
  {
    title: "Temporal Reflections",
    content:
      "Set against the serene backdrop of Lake Geneva in 2020, Temporal Reflections was a 30 x 30 x 0.5 meter floating installation. It used mirrored surfaces to reflect the changing skies and water, creating a dynamic and ever-shifting artwork. This piece explored themes of time and change, inviting viewers to contemplate their place within the natural world. By emphasizing the constant flux of the environment, Temporal Reflections highlighted the beauty and impermanence of our surroundings.",
    date: "2020",
  },
];

const about = [
  {
    title: "About",
    content:
      "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor ",
  },
  {
    title: "Contact",
    content:
      "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor ",
  },
];

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-white flex flex-col">
        <div className="w-full flex-1">
          <Accordion items={items} />
        </div>
        <div className="w-full bg-black text-white bottom-0 p-[0.45%] max-780:block hidden">
          <NavMini about={about} />
          <DownloadBtn />
        </div>
        <div className="fixed bottom-0 w-full max-780:hidden ">
          <BottomBar />
        </div>
        <Navbar className="lg:hidden" />
      </div>
    </>
  );
}

export default App;
