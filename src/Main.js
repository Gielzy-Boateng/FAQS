import Faqs from "./Faqs";
const Main = ({ data }) => {
  return (
    <div className="main">
      {data.map((el, i) => (
        <Faqs Question={el.Question} Answer={el.Answer} num={i} key={i} />
      ))}
    </div>
  );
};

export default Main;
