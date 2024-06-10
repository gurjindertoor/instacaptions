const PageHeaders = ({ h1Text = "Header", h2Text = "Subheader" }) => {
  return (
    <section className="text-center mt-24 mb-8">
      <h1
        className="text-3xl"
        style={{ textShadow: "1px 1px 0 rgba(0,0,0,.2" }}
      >
        {h1Text}
      </h1>
      <h2 className="text-white/75 pt-4">{h2Text}</h2>
    </section>
  );
};

export default PageHeaders;
