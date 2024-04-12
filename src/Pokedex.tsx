"use client";

import { useEffect, useRef } from "react";

function Pokedex() {
  const cross = useRef<HTMLDivElement>(null);
  const rightInner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("keydown", handlePress);
    function handlePress(event: KeyboardEvent) {
      event.preventDefault();
      if (!cross.current) return;
      const delay = 150;
      const horizontal = cross.current.querySelector(".hor");
      const vertical = cross.current.querySelector(".ver");

      if (event.key === "ArrowUp") {
        vertical?.classList.add("active_up");
        setTimeout(() => {
          vertical?.classList.remove("active_up");
        }, delay);
      }

      if (event.key === "Enter") {
        console.log(rightInner.current);

        rightInner?.current?.classList.toggle("active");
      }
      if (event.key === "ArrowDown") {
        vertical?.classList.add("active_down");
        setTimeout(() => {
          vertical?.classList.remove("active_down");
        }, delay);
      }

      if (event.key === "ArrowLeft") {
        horizontal?.classList.add("active_left");
        setTimeout(() => {
          horizontal?.classList.remove("active_left");
        }, delay);
      }
      if (event.key === "ArrowRight") {
        horizontal?.classList.add("active_right");
        setTimeout(() => {
          horizontal?.classList.remove("active_right");
        }, delay);
      }
    }
    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, []);

  return (
    <div className="pokedex_wrapper">
      <div className="pokedex">
        {/* Left Side of Pokedex */}
        <div className="left">
          <div className="inner">
            {/* Top */}
            <div className="top">
              <div className="big-led">
                <div className="inside">
                  <div className="a-color"></div>
                  <div className="b-color"></div>
                  <div className="c-color"></div>
                </div>
              </div>
              <div className="led__wrapper">
                <div className="leds">
                  <div className="a-color"></div>
                  <div className="b-color"></div>
                </div>
                <div className="leds">
                  <div className="a-color"></div>
                  <div className="b-color"></div>
                </div>
                <div className="leds">
                  <div className="a-color"></div>
                  <div className="b-color"></div>
                </div>
              </div>
            </div>
            {/* Middle */}
            <div className="wrap">
              <div className="middle">
                <div className="inside">
                  <div className="up">
                    <div className="screen-led-wrapper">
                      <div className="screen-led"></div>
                      <div className="screen-led"></div>
                    </div>
                  </div>
                  <div className="screen"></div>
                  <div className="down">
                    <div className="wrapper">
                      <div className="screen-led"></div>
                      <div className="bars">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom */}
              <div className="bottom">
                <div className="first">
                  <div className="large_btn"></div>
                  <div className="small_btn_wrapper">
                    <div className="small_btn"></div>
                    <div className="small_btn"></div>
                  </div>
                </div>
                <div className="second">
                  <div className="screen">
                    <p className="text-2xl">htohatunaohuaet</p>
                  </div>
                </div>
                <div className="third">
                  <div className="cross" ref={cross}>
                    <div className="hor" data-place={"left"}></div>
                    <div className="hor_side"></div>
                    <div className="center"></div>
                    <div className="ver" data-place={"top"}></div>
                    <div className="ver_side"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cylinder">
            <div className="rec1"></div>
            <div className="rec2"></div>
            <div className="rec3 shades"></div>
            <div className="rec5 shades"></div>
            <div className="rec6 shades"></div>
            <div className="rec7 shades"></div>
            <div className="rec8 shades"></div>
            <div className="rec9 shades"></div>
          </div>
        </div>
        {/* Right Side of Pokedex */}
        <div className="right">
          <div className="inner" ref={rightInner}>
            <div className="top">
              <div className="screen"></div>
            </div>
            <div className="middle">
              <div className="grid_wrapper">
                <div className="blue_grid">
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                </div>
                <div className="blue_grid">
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                  <div className="grid_item"></div>
                </div>
              </div>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pokedex;
