import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import "/public/this.css"
export default function Box() {
  const app = useRef(null);
  const [imgUrl, setImgUrl] = useState("redJordan");
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("#img", { opacity: 0, y: "-=300", duration: 1, scale: 0.7 });
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
        <img
          id="img"
          className="d-inline img-fluid"
          src={imgUrl + ".webp"}
          width={"800px"}
          alt="red"
        />
      </div>
      <div className="d-flex gap-5 justify-content-center">
        <button
          onClick={() => onShoe("redJordan")}
          className="fs-5 btn btn-danger px-3 "
        >
          Red
        </button>
        <button
          onClick={() => onShoe("greenJordan")}
          className=" fs-5 btn btn-success px-3 "
        >
          Green
        </button>
        <button
          onClick={() => onShoe("blackJordan")}
          className="fs-5 btn btn-dark px-3 "
        >
          Black
        </button>
      </div>
    </>
  );
}
