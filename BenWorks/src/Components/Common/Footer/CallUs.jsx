

export default function CallUs({ animated, scrollYProgress }) {
  return (
    <animated.div
      className="footer_containers call_container"
      style={{
        position: "relative",

        opacity: scrollYProgress.to(
          (op) => `${parseFloat(op).toFixed(2) * 10 - 9}`
        ),
        right: scrollYProgress.to(
          (val) => `${2000 - (val * 2000).toFixed()}px`
        ),
      }}
    >
      <h3>Call us </h3>
      <span>Available on Monday - Sunday from 5:00 PM. </span>
      <a href="tel:+473337890" className="call_container_phone">
        <strong>+1234567890 </strong>
      </a>
    </animated.div>
  );
}
