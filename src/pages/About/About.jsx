import photo from "../../assets/images/photo.jpeg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Full-Stack Developer{" "}
            <span className="text-teal-400">&</span>
            <br /> Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b  aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={photo}
                  className="rounded-[15px] h-30 shadow block"
                  alt="payments illustration"
                  width={500}
                  height={800}
                />
              </div>
            </div>

            <div className="relative space-y-6">
              {/* Primary Bio Paragraph */}
              <p className="text-slate-200 text-lg leading-relaxed">
                Hello! I'm{" "}
                <span className="font-semibold text-white">
                  Prachurjo Barmon
                </span>
                , a passionate Full-Stack Software Engineer specializing in
                building modern web applications, scalable backend
                architectures, and intelligent{" "}
                <span className="font-semibold text-white">
                  AI API integrations
                </span>
                .
              </p>

              {/* Core Focus & Tech Stack */}
              <p className="text-slate-300 leading-relaxed">
                My core expertise centers around the{" "}
                <span className="font-semibold text-white">
                  MERN Stack and Next.js
                </span>
                , turning complex requirements into clean, high-performance, and
                user-centric digital experiences. Through initiatives like{" "}
                <span className="font-bold text-teal-400">Dev Sniper</span>, I
                love simplifying workflows and empowering the developer
                community.
              </p>

              {/* Quote & Personal Philosophy Section */}
              <div className="pt-4">
                <blockquote className="border-l-4 border-teal-500 pl-4 bg-slate-900/40 p-4 rounded-r-xl backdrop-blur-sm">
                  <p className="text-slate-300 italic text-sm sm:text-base leading-relaxed">
                    "I'm a lifelong learner and innovator, driven by a desire to
                    craft production-ready software solutions that deliver
                    real-world value. Pushing the boundaries of web development
                    to create tools that make an impact."
                  </p>

                  {/* Author / Signature */}
                  <div className="mt-4 flex items-center space-x-3">
                    <div className="h-0.5 w-6 bg-teal-500"></div>
                    <cite className="block font-semibold text-white not-italic tracking-wide">
                      Prachurjo Barmon
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
