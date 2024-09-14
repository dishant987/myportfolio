import { lazy, Suspense, useState } from 'react';

const Globe = lazy(() => import('react-globe.gl'));
import Button from '../components/Button.jsx';
const IconCloud = lazy(() => import('@/components/magicui/icon-cloud.jsx'));
const GlobeSkeleton = () => (
  <div className="rounded-full bg-gray-500 w-[326px] h-[326px] animate-pulse"></div>
);
const SkeletonIconCloud = () => {
  return (
    <div className="skeleton-icon-cloud grid grid-cols-4 gap-2">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-gray-500 rounded-full w-12 h-12 animate-pulse"></div>
      ))}
    </div>
  );
};

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "nextjs",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "nodejs",
  "amazonaws",
  "postgresql",
  "firebase",
  "mongodb",
  "vercel",
  "git",
  "github",
  "gitlab",
  "mysql",
  "tailwindcss",
  "bootstrap",
  "figma",
];

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('infodishant04tank@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (

    <section className="c-space my-24" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Dishant Tank</p>
              <p className="grid-subtext">
                I am a recent Computer Science graduate with strong skills in programming, databases, and algorithms. Eager to apply my knowledge, I am committed to continuous learning and thrive in team environments. I’m excited to contribute innovative solutions and make a meaningful impact in your organization.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Suspense fallback={<SkeletonIconCloud />}>
              <IconCloud iconSlugs={slugs} />
            </Suspense>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">

              <Suspense fallback={<GlobeSkeleton />}>
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.8}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                />
              </Suspense>
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I'm based in Vapi, Gujarat, India, and open to remote work worldwide.</p>

              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                Programming is not just my profession; it's my true passion. I thrive on solving complex problems and turning abstract ideas into functional code. The process of exploring new technologies, mastering various programming languages, and continuously improving my skills is both intellectually stimulating and deeply fulfilling. Each project, whether a small script or a large application, presents a unique challenge that fuels my curiosity and creativity. For me, coding represents a perfect blend of logic and creativity, and the joy of building and optimizing solutions keeps me motivated and eager to learn more.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-base md:text-xl font-medium text-gray_gradient text-white">infodishant04tank@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;