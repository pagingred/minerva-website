import React from "react";

const Contact = () => {
  return (
    <div className="topOffset"
	style={{
		overflow: "hidden",
		position: "relative"
	}}>
	<div
	style={{
        backgroundImage: `url(${'/background.png'})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
		opacity: 0,
		position: "absolute"
      }}>
    </div>
    <div className="dark:bg-zinc-950 px-4 py-16 flex justify-center"
	style={{
		position: "relative"
      }}>
      <div
        className="
          w-full max-w-2xl
          bg-zinc-950
          border border-zinc-800
          rounded-2xl
          p-8 md:p-12
          text-zinc-300
          leading-relaxed
        "
      >
        <h1 className="text-3xl font-semibold text-white mb-4">
          Contact Us
        </h1>

        <p className="text-sm text-zinc-500 mb-8">
          We’d love to hear from you. Reach out using the information below.
        </p>
		
		<div className="space-y-8">
          {/* Email */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Email
            </h2>
            <a
              href="mailto:contact@minervadefense.com"
              className="text-blue-400 underline break-all"
            >
              contact@minervadefense.com
            </a>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Address
            </h2>
            <p>
              Minerva Defense <br />
              115 Murray Drive <br />
              Madison, AL 35758 <br />
              United States
            </p>
          </div>
        </div>
      </div>
	  </div>
    </div>
  );
};

export default Contact;