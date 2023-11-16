import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import "/public/this.css";

export default function Box() {
  const app = useRef(null);
  const [imgUrl, setImgUrl] = useState("redJordan");
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".slider", { stagger: 0.5, width: 0, duration: 1 })
        .from(".navbtn", { stagger: 0.5, y:"+=10",opacity:0, duration: .5 })
        .from(".title", { opacity: 0, y: "-=200", duration: 1 })
        .from("#img", { opacity: 0, y: "-=200", duration: 1, scale: 0.7 })
        .from(".btn", { y: "+=20", opacity: 0, stagger: 0.5, duration: 0.5 });
    }, app);

    return () => ctx.revert();
  }, []);

  const onShoe = (val: string) => {
    gsap.from("#img", { opacity: 0, y: "-=100", duration: 1 });
    setImgUrl(val);
  };
  return (
    <>
      <div ref={app} className="text-center">
        <h1 className="title">Air Jordan</h1>
        <nav>
          <button className="navbtn">Home</button>
          <button className="navbtn">Products</button>
          <button className="navbtn">Contact</button>
        </nav>
        
        <div className="allBoxes">
          <div className="slider"></div>
          <div className="slider"></div>
          <div className="slider"></div>
        </div>


        <div className="d-flex flex-column align-items-center product">
          <img
            id="img"
            className="d-inline img-fluid"
            src={imgUrl + ".webp"}
            width={"800px"}
            alt="red"
          />
          <div className="d-flex gap-5 justify-content-center">
            <button
              onClick={() => onShoe("redJordan")}
              className="fs-5 btn btn-danger px-3"
            >
              Red
            </button>
            <button
              onClick={() => onShoe("greenJordan")}
              className=" fs-5 btn btn-success px-3"
            >
              Green
            </button>
            <button
              onClick={() => onShoe("blackJordan")}
              className="fs-5 btn btn-dark px-3"
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
