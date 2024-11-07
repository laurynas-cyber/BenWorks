import BannerText from "./BannerText";

function Banner() {
  return (
    <header>
      <div className="banner">
        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/krVvhnuEUpI?start=65&playsinline=1&autoplay=1&controls=0&mute=1&loop=1&playlist=krVvhnuEUpI&modestbranding=1&rel=0"
            title="YouTube video player"
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
