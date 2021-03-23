import ContentLoader from "react-content-loader";

const PizzaLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={455}
      viewBox="0 0 280 455"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="15" y="254" rx="0" ry="0" width="260" height="22" />
      <circle cx="145" cy="120" r="120" />
      <rect x="15" y="286" rx="0" ry="0" width="260" height="47" />
    </ContentLoader>
  );
};

export default PizzaLoader;
