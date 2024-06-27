function Banner() {
  return (
    <div className="banner">
      <div className="video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/krVvhnuEUpI?si=5ilZekemLkxvzwDY&amp;start=65;playsinline=1&amp;autoplay=1&amp;controls=0&amp;mute=1&amp;loop=1&amp;"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="bannertextCont">
        <div className="bannertext">
          <span className="bigtextbanner">Handmade </span>
          <div className="restbannerCont">
            <span className="textSpanCont">
              wooden <span className="smalltextbanner">furnitures </span>
            </span>
            <span className="textSpanCont">
              <span className="smalltextbanner">for your </span> home
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
