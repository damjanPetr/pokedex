function Pokedex() {
  return (
    <div className="pokedex">
      {/* Left Side of Pokedex */}
      <div className="left">
        <div className="inner">
          <div className="top">
            <div className="big-led">
              <div className="inside">
                <div className="a-color"></div>
                <div className="b-color"></div>
                <div className="c-color"></div>
              </div>
            </div>
            <div className="led__wrapper">
              <div className="leds"></div>
              <div className="leds"></div>
              <div className="leds"></div>
            </div>
          </div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </div>
      </div>
      {/* Right Side of Pokedex */}
      <div className="right">
        <div className="inner">
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
}
export default Pokedex;
