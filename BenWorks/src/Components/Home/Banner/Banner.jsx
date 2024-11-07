import BannerText from "./BannerText";

function Banner() {
  return (
    <header>
      <div className="banner">
        <div className="video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/krVvhnuEUpI?start=65&playsinline=1&autoplay=1&controls=0&mute=1&loop=1&playlist=krVvhnuEUpI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <BannerText />
      </div>
    </header>
  );
}

export default Banner;
