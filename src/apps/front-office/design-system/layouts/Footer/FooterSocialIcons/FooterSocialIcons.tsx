import { Link } from "@mongez/react-router";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

const socialLinks = [
  { name: "facebook", href: "#", icon: <IconBrandFacebook /> },
  { name: "twitter", href: "#", icon: <IconBrandX /> },
  { name: "youtube", href: "#", icon: <IconBrandYoutube /> },
  { name: "instagram", href: "#", icon: <IconBrandInstagram /> },
];

export default function FooterSocialIcons() {
  return (
    <>
      <ul className="footer-social-icons flex justify-center">
        {socialLinks.map((item, index) => (
          <li key={index}>
            <Link to={item.href} className="flex items-center justify-center">
              {item.icon}
              <span className="sr-only">item.name</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
