
import { useScroll, animated } from "@react-spring/web";
import CallUs from "./CallUs";
import MailUs from "./MailUs";
import SocialUs from "./SocialUs";
export default function Footer() {
  const { scrollYProgress } = useScroll();

  return (
    <footer className="section_footer">
      <CallUs animated={animated} scrollYProgress={scrollYProgress} />
      <MailUs animated={animated} scrollYProgress={scrollYProgress} />
      <SocialUs animated={animated} scrollYProgress={scrollYProgress} />
    </footer>
  );
}
