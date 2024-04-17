"use client";

import { useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import { getPokemon } from "../Queries";
import SlimBtn from "./SlimBtn";

function Pokedex() {
  const cross = useRef<HTMLDivElement>(null);
  const rightInner = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const [color, setColor] = useState<boolean>(false);
  const limit = 50;
  const offset = 0;
  const { loading, error, data } = useQuery(getPokemon, {
    variables: { limit },
    onCompleted: () => {
      console.log(data);

      const test =
        data &&
        data.pokemon_v2_pokemon[index].pokemon_v2_pokemonsprites[0].sprites
          .versions["generation-v"];

      console.log(Object.keys(test)[0]);

      return;
    },
  });

  function highlight() {
    setColor(true);
    setTimeout(() => {
      setColor(false);
    }, 50);
  }

  function getImageSrc(obj: { [key: string]: any }) {
    const firstKey = Object.keys(obj)[0];

    return obj[firstKey].front_default;
  }

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

      if (event.key === "Enter" || event.key === " ") {
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
        alert("");
        horizontal?.classList.add("active_left");
        setIndex((prev) => Math.max(prev - 1, 0));
        setTimeout(() => {
          horizontal?.classList.remove("active_left");
        }, delay);
        highlight();
      }

      if (event.key === "ArrowRight") {
        horizontal?.classList.add("active_right");
        setIndex((prev) => Math.min(prev + 1, limit - 1));
        highlight();

        setTimeout(() => {
          horizontal?.classList.remove("active_right");
        }, delay);
      }
    }
    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, [data, index]);
  return (
    <div className="pokedex_wrapper">
      <div className="pokedex">
        {/* Left Side of Pokedex */}
        <div className="left">
          <div className="inner">
            {/* Top */}
            <div className="top">
              <div className={`big-led ${color ? "active" : ""}`}>
                <div className="inside">
                  <div className="a-color"></div>
                  <div className="b-color"></div>
                  <div className="c-color"></div>
                </div>
              </div>
              <div className={`led__wrapper ${color ? "active" : ""}`}>
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

                  <div
                    className={`screen ${color ? " loading" : ""}`}
                    style={{
                      backgroundImage: `url(${
                        data &&
                        data.pokemon_v2_pokemon[index]
                          .pokemon_v2_pokemonsprites[0].sprites.other.showdown
                          .front_default
                      })`,
                    }}
                  ></div>

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
                    <SlimBtn />
                    <SlimBtn />
                  </div>
                </div>
                <div className="second">
                  <div className="screen">
                    <p className="text-2xl">
                      {data && data.pokemon_v2_pokemon[index].name}
                    </p>
                  </div>
                </div>
                <div className="third">
                  <div className="cross" ref={cross}>
                    <div className="hor" data-place={"left"}>
                      <div
                        className="btn_color"
                        onClick={() => {
                          const event = new KeyboardEvent("keydown", {
                            key: "ArrowRight",
                          });

                          window.dispatchEvent(event);
                        }}
                      ></div>
                      <div className="btn_color"></div>
                    </div>
                    <div className="hor_side"></div>
                    <div className="center"></div>
                    <div className="ver" data-place={"top"}>
                      <div className="btn_color"></div>
                      <div className="btn_color"></div>
                    </div>
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
            <div className="top"></div>
            <div className="wrap">
              <div className="middle">
                <div className="screen">
                  <p>
                    Height :
                    <span>{data && data.pokemon_v2_pokemon[index].height}</span>
                  </p>
                  <p>
                    {" "}
                    Width :{" "}
                    <span>{data && data.pokemon_v2_pokemon[index].weight}</span>
                  </p>
                  <p>
                    Experience :{" "}
                    <span>
                      {data && data.pokemon_v2_pokemon[index].base_experience}
                    </span>
                  </p>
                </div>
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
                    <div
                      className="grid_item"
                      style={{
                        backgroundImage: `url(${
                          data &&
                          getImageSrc(
                            data.pokemon_v2_pokemon[index]
                              .pokemon_v2_pokemonsprites[0].sprites.versions[
                              "generation-iii"
                            ]
                          )
                        })`,
                      }}
                    ></div>
                    <div
                      className="grid_item"
                      style={{
                        backgroundImage: `url(${
                          data &&
                          getImageSrc(
                            data.pokemon_v2_pokemon[index]
                              .pokemon_v2_pokemonsprites[0].sprites.versions[
                              "generation-iv"
                            ]
                          )
                        })`,
                      }}
                    ></div>
                    <div
                      className="grid_item"
                      style={{
                        backgroundImage: `url(${
                          data &&
                          getImageSrc(
                            data.pokemon_v2_pokemon[index]
                              .pokemon_v2_pokemonsprites[0].sprites.versions[
                              "generation-v"
                            ]
                          )
                        })`,
                      }}
                    ></div>
                    <div
                      className="grid_item"
                      style={{
                        backgroundImage: `url(${
                          data &&
                          getImageSrc(
                            data.pokemon_v2_pokemon[index]
                              .pokemon_v2_pokemonsprites[0].sprites.versions[
                              "generation-vi"
                            ]
                          )
                        })`,
                      }}
                    ></div>
                    <div
                      className="grid_item"
                      style={{
                        backgroundImage: `url(${
                          data &&
                          getImageSrc(
                            data.pokemon_v2_pokemon[index]
                              .pokemon_v2_pokemonsprites[0].sprites.versions[
                              "generation-vii"
                            ]
                          )
                        })`,
                      }}
                    ></div>
                    <div
                      className="grid_item"
                      style={{
                        backgroundImage: `url(${
                          data &&
                          data.pokemon_v2_pokemon[index]
                            .pokemon_v2_pokemonsprites[0].sprites.other
                            .dream_world.front_default
                        })`,
                      }}
                    ></div>
                    <div
                      className="grid_item"
                      style={{
                        backgroundImage: `url(${
                          data &&
                          data.pokemon_v2_pokemon[index]
                            .pokemon_v2_pokemonsprites[0].sprites.other.home
                            .front_default
                        })`,
                      }}
                    ></div>
                    <div
                      className="grid_item"
                      style={{
                        backgroundImage: `url(${
                          data &&
                          data.pokemon_v2_pokemon[index]
                            .pokemon_v2_pokemonsprites[0].sprites.other[
                            "official-artwork"
                          ].front_default
                        })`,
                      }}
                    ></div>
                    <div className="grid_item"></div>
                    <div className="grid_item"></div>
                  </div>
                </div>
                <div className="buttons">
                  <SlimBtn />
                  <SlimBtn />
                </div>
                <div className="white_wrap">
                  <div className="grids">
                    <div className="white_cell">
                      <div
                        className="item"
                        style={{
                          backgroundImage: `url(${
                            data &&
                            data.pokemon_v2_pokemon[index]
                              .pokemon_v2_pokemonsprites[0].sprites
                              .front_default
                          })`,
                        }}
                      ></div>
                      <div
                        className="item"
                        style={{
                          backgroundImage: `url(${
                            data &&
                            data.pokemon_v2_pokemon[index]
                              .pokemon_v2_pokemonsprites[0].sprites.front_shiny
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="white_cell">
                      <div
                        className="item"
                        style={{
                          backgroundImage: `url(${
                            data &&
                            data.pokemon_v2_pokemon[index]
                              .pokemon_v2_pokemonsprites[0].sprites.back_default
                          })`,
                        }}
                      ></div>
                      <div
                        className="item"
                        style={{
                          backgroundImage: `url(${
                            data &&
                            data.pokemon_v2_pokemon[index]
                              .pokemon_v2_pokemonsprites[0].sprites.back_shiny
                          })`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="led">
                    <div className="a-color"></div>
                    <div className="b-color"></div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pokedex;
