export default function MailUs({ animated, scrollYProgress }) {
  return (
    <animated.div
      className="footer_containers mail_container"
      style={{
        position: "relative",
        opacity: scrollYProgress.to(
          (op) => `${parseFloat(op).toFixed(2) * 10 - 9}`
        ),
      }}
    >
      <h3>Mail us </h3>
      <span>We will answer within 1 working day. </span>
      <a href="mailto: Theme@xclusiveliving.nl">
        <strong>Theme@xclusiveliving.nl </strong>
      </a>
    </animated.div>
  );
}
