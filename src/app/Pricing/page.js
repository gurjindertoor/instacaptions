import PageHeaders from "../components/PageHeaders";

const PricingPage = () => {
  return (
    <div>
      <PageHeaders
        h1Text={"Check out our pricing"}
        h2Text={"Our pricing is very simple"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-100 text-slate-700 rounded-lg p-4">
          <h3 className="font-bold text-3xl">Free</h3>
          <h4>Free forever</h4>
          <p className="mt-2">Includes basic features</p>
        </div>
        <div className="bg-gray-100 text-slate-700 rounded-lg p-4">
          <h3 className="font-bold text-3xl">Pro</h3>
          <h4>$10/month</h4>
          <p className="mt-2">Includes all features</p>
        </div>
        <div className="bg-gray-100 text-slate-700 rounded-lg p-4">
          <h3 className="font-bold text-3xl">Enterprise</h3>
          <h4>Contact us</h4>
          <p className="mt-2">Customized solutions for businesses</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
