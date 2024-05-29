import { useState } from "react";

export default function Navbar({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsOpen2(false);
    }
  };

  const toggleOpen2 = () => {
    setIsOpen2(!isOpen2);
    if (!isOpen2) {
      setIsOpen(false);
    }
  };

  return (
    <div className="divide-x-2 divide-slate-950  max-780:hidden ">
      <div className="flex top-0  fixed h-[50%] right-0 flex-col justify-center items-center border-stone-950 bg-slate-50 border-l-2 z-50 divide-y-2 divide-stone-950 cursor-pointer ">
        <div
          className={`w-full h-full text-[4vw] lg:text-[3.5vmin] leading-[1] font-regular transform justify-center items-center flex  border-stone-950 divide-x-2 divide-slate-950 ${
            isOpen2 ? "border-b-0" : ""
          } 
          ${isOpen ? "border-b-2" : ""} text-center cursor-pointer`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a onClick={toggleOpen}>
            <div className="scale-custom p-3">
              {isOpen && isHovered ? (
                <a>
                  C<br></br>L<br></br>O<br></br>S<br></br>E
                </a>
              ) : (
                <a>
                  A<br></br>B<br></br>O<br></br>U<br></br>T
                </a>
              )}
            </div>
          </a>
          {isOpen && (
            <div className="w-[35rem]  md:w-[45rem] lg:w-[60rem] h-full overflow-auto scroll-smooth hide-scrollbar">
              <div className=" text-left p-3 pt-30 flex flex-col space-y-5 text-[2.5vmax] md:[2.2vmax] tracking-tighter leading-[1.4]  ">
                <span className="font-regular scale-custom py-16 ">
                  Wir sind YRD.Works Yacin Boudalfa, Ruben Fischer und David
                  Bausch. Wir kennen uns seit unserer Jugend und arbeiten seit
                  2015 an eigenständig initiierten Projekten und Auftragswerken
                  für Kulturinstitutionen oder den öffentlichen Raum. Bei
                  unserer Arbeit interessieren uns besonders temporäre Räume und
                  deren soziale Funktion. Wir schaffen kurzfristige
                  Begegnungsorte und forschen an der Schnittstelle von Raum,
                  Skulptur und Aktion. Für uns ist es wichtig, unsere
                  architektonischen Interventionen nicht losgelöst von den
                </span>
                <span className="font-regular scale-custom pb-16">
                  Wir sind YRD.Works Yacin Boudalfa, Ruben Fischer und David
                  Bausch. Wir kennen uns seit unserer Jugend und arbeiten seit
                  2015 an eigenständig initiierten Projekten und Auftragswerken
                  für Kulturinstitutionen oder den öffentlichen Raum. Bei
                  unserer Arbeit interessieren uns besonders temporäre Räume und
                  deren soziale Funktion. Wir schaffen kurzfristige
                  Begegnungsorte und forschen an der Schnittstelle von Raum,
                  Skulptur und Aktion. Für uns ist es wichtig, unsere
                  architektonischen Interventionen nicht losgelöst von den
                </span>
                <span className="font-regular scale-custom pb-16">
                  Wir sind YRD.Works Yacin Boudalfa, Ruben Fischer und David
                  Bausch. Wir kennen uns seit unserer Jugend und arbeiten seit
                  2015 an eigenständig initiierten Projekten und Auftragswerken
                  für Kulturinstitutionen oder den öffentlichen Raum. Bei
                  unserer Arbeit interessieren uns besonders temporäre Räume und
                  deren soziale Funktion. Wir schaffen kurzfristige
                  Begegnungsorte und forschen an der Schnittstelle von Raum,
                  Skulptur und Aktion. Für uns ist es wichtig, unsere
                  architektonischen Interventionen nicht losgelöst von den
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex bottom-0 h-[50%] fixed right-0 flex-col justify-center items-center border-stone-950 bg-slate-50  border-l-2 z-50  divide-y-2 divide-stone-950 cursor-pointer">
        <div
          className={`w-full h-full text-[4vw] lg:text-[3.5vmin] leading-[1] font-regular transform justify-center items-center flex   border-stone-950 divide-x-2 divide-slate-950 ${
            isOpen ? "border-t-0" : "border-t-2"
          } text-center cursor-pointer`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <a onClick={toggleOpen2}>
            <div className="scale-custom p-3">
              {isOpen2 && isHovered2 ? (
                <a>
                  C<br></br>L<br></br>O<br></br>S<br></br>E
                </a>
              ) : (
                <a>
                  C<br></br>O<br></br>N<br></br>T<br></br>A<br></br>C<br></br>T
                </a>
              )}
            </div>
          </a>
          {isOpen2 && (
            <div className="w-[35rem] h-full overflow-auto scroll-smooth hide-scrollbar">
              <div className=" text-left p-3 pt-10 flex flex-col space-y-5 text-[2.2vmax] md:text-[2vmax]  tracking-tighter leading-[1.4] ">
                <span className="font-regular scale-custom pb-16 pt-8 ">
                  Wir sind YRD.Works Yacin Boudalfa, Ruben Fischer und David
                  Bausch. Wir kennen uns seit unserer Jugend und arbeiten seit
                  2015 an eigenständig initiierten Projekten und Auftragswerken
                  für Kulturinstitutionen oder den öffentlichen Raum. Bei
                  unserer Arbeit interessieren uns besonders temporäre Räume und
                  deren soziale Funktion. Wir schaffen kurzfristige
                  Begegnungsorte und forschen an der Schnittstelle von Raum,
                  Skulptur und Aktion. Für uns ist es wichtig, unsere
                  architektonischen Interventionen nicht losgelöst von den
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
