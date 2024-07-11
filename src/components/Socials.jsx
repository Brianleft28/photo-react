import { ImFacebook, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden lg:flex ml-24">
      <div className="flex flex-row gap-x-6 cursor-pointer">
        <a
          className="hover:scale-125 transition"
          href="https://facebook.com"
          target="_blank"
        >
          <ImFacebook />
        </a>
        <a
          className="hover:scale-125 transition"
          href="https://instagram.com"
          target="_blank"
        >
          <ImInstagram />
        </a>
        <a
          className="hover:scale-125 transition"
          href="https://twitter.com"
          target="_blank"
        >
          <ImTwitter />
        </a>
        <a
          className="hover:scale-125 transition"
          href="https://youtube.com"
          target="_blank"
        >
          <ImYoutube />
        </a>
      </div>
    </div>
  );
};

export default Socials;
