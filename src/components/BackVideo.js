const BackgroundVideo = () => {
  return (
    <div className="w-full h-[80vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dbgsublmc/video/upload/v1747934709/background_zfy4a3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;