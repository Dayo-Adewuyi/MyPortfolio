import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Goke Valentino",
      title: "Senior Developer",
      img:
        "asset/goke.png",
      icon: "asset/twitter.png",
      desc:
        "I am really impressed by the quality of service from dayo adewuyi. He was right on schedule, professional and delivered a stunning e-commerce site for my products",
    },
    {
      id: 2,
      name: "Ayo Agboola",
      title: "Co-Founder of GreenLagos",
      img:
        "asset/chub.png",
      icon: "asset/twitter.png",
      desc:
        "Dayo is quite the talent. he helped bring our ideas to life in a professional and timely manner ",
      featured: true,
    },
    {
      id: 3,
      name: "Timo Heaman",
      title: "FrontEnd Developer",
      img:
        "asset/www.png",
      icon: "asset/linkedin.png",
      desc:
        "An utterly amazing fellow, he assited with the rebranding of our website and also contributed to the creation of our dApps",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="asset/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}