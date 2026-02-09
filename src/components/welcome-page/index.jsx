function WelcomePage() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center min-h-screen bg-custom bg-center bg-cover px-4">

        <h1 className="font-primary font-extrabold text-xl sm:text-2xl md:text-4xl leading-[110%] text-center mb-6">
          Why Thousand Trust
        </h1>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <div className="w-full flex justify-center items-center">
            <img
              src="images/welcome/image.png"
              alt="logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default WelcomePage;
