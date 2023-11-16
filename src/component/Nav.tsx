import gsap from "gsap";
import { useLayoutEffect,useRef } from "react";

function Nav() {
  const app = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".navbtn", {y:"+=10",opacity:0,duration:1,delay:2 })
    }, app);


    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav ref={app} className="d-flex justify-content-center gap-5 position-fixed p-3 ">
     
      </nav>
    </>
  );
}

export default Nav;
