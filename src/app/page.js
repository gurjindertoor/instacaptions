import DemoSection from "./components/DemoSection";
import PageHeaders from "./components/PageHeaders";
import UploadForm from "./components/UploadForm";

const Home = () => {
  return (
    <>
      <PageHeaders
        h1Text={"Instantly add captions to your videos."}
        h2Text={"Just upload your video and we do the rest!"}
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <DemoSection />
    </>
  );
};

export default Home;
