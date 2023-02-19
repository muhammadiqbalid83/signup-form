import React from "react";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div className="flex flex-row">
      <section>
        <h1 className="mobile:text-3xl mobile:w-72 mobile:text-center mobile:mx-9 mobile:mt-28 mobile:mb-7 font-bold text-white">
          Learn to code by watching others
        </h1>
        <p className="text-white mobile:text-center leading-7 mobile:mb-16">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section>
        <div className="bg-blue text-white rounded-xl mobile:w-80 mobile:mx-7 mobile:mb-7 shadow-2xl">
          <p className="px-10 py-5 text-center">
            <span className="font-semibold">Try it free 7 days</span> then
            $20/mo. thereafter
          </p>
        </div>

        <div className="bg-white mobile:w-80 mobile:mx-7 rounded-xl mobile:h-auto mobile:pt-5">
          <form className="mobile:mx-4">
            <input
              className="mobile:w-72 mobile:h-14 border-dark-blue border-2 placeholder:font-bold placeholder:pl-4 rounded-md mb-4"
              type="text"
              placeholder="First Name"
            />
            <input
              type="text"
              className="mobile:w-72 mobile:h-14 border-dark-blue border-2 placeholder:font-bold placeholder:pl-4 rounded-md mb-4"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="mobile:w-72 mobile:h-14 border-dark-blue border-2 placeholder:font-bold placeholder:pl-4 rounded-md mb-4"
              placeholder="Email"
            />
            <input
              type="text"
              className="mobile:w-72 mobile:h-14 border-dark-blue border-2 placeholder:font-bold placeholder:pl-4 rounded-md mb-4"
              placeholder="Password"
            />
            <button className="bg-green text-white mobile:w-72 mobile:h-14 rounded-md mb-4">
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="text-xs text-center text-grayish-blue">
              By clicking the button, you are agreeing to our{" "}
              <span className="text-red font-bold">Terms and Services</span>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
