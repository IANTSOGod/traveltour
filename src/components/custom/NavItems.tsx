import { useLocation, useNavigate } from "react-router-dom";

export default function NavItems() {
  const location = useLocation();
  const navigate = useNavigate();

  const itemlist = [
    { title: "Home", link: "/" },

    { title: "Destination", link: "/destination" },

    { title: "Tour list", link: "/tourlist" },

    { title: "Room list", link: "/roomlist" },

    { title: "Tour search", link: "/toursearch" },

    { title: "Blog", link: "/blog" },
  ];

  return (
    <div className="hidden md:flex md:flex-row gap-x-10">
      {itemlist.map((item: { title: string; link: string }, index) => (
        <p
          className={`cursor-pointer ${
            location.pathname == item.link ? "text-black" : "text-gray-400"
          }`}
          key={index}
          onClick={() => {
            navigate(item.link);
          }}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
}
