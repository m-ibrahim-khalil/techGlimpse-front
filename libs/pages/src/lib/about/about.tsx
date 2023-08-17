export function About() {
  return (
    <main className="relative py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-3 min-h-screen flex flex-col justify-center items-center text-content">
        <p className="my-10   first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-700  first-letter:mr-3 first-letter:float-left">
          TechGlimpse - Your Window to the World of Technology! Whether you're
          an avid tech enthusiast, a curious learner, or a seasoned
          professional, TechGlimpse is your one-stop destination for all the
          latest updates, trends, and innovations in the tech realm.
        </p>
        <h3 className="text-3xl font-bold  my-10">Introduction</h3>
        <p className="">
          Welcome to TechGlimpse, your go-to destination for insightful and
          engaging technical content. We are a passionate group of tech
          enthusiasts dedicated to sharing our knowledge, experiences, and
          expertise with the world. Whether you are a seasoned developer, an
          aspiring techie, or simply someone curious about the latest
          advancements in the digital realm, you've come to the right place.
        </p>
        <h3 className="text-3xl font-bold  mt-10">Mission</h3>
        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
          <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
            "At TechGlimpse, we are passionate about all things technology. Our
            blogging site is a dedicated platform where tech enthusiasts,
            developers, and learners come together to explore, share, and gain
            insights into the ever-evolving world of technology."
          </p>
        </blockquote>
        <h3 className="text-3xl font-bold  my-10">Vission</h3>
        <p className="">
          Our vision is to create a vibrant online community where tech
          enthusiasts, experts, and beginners alike can come together to share
          knowledge, exchange ideas, and stay ahead in the fast-paced world of
          technology. We aim to foster an environment that encourages open
          discussions, curiosity-driven exploration, and collaborative learning.
        </p>
        <h3 className="text-3xl font-bold  my-10">
          Join the TechGlimpse Community Today!
        </h3>
        <p className=" mb-10">
          Whether you're a tech newbie or a seasoned professional, TechGlimpse
          has something for everyone. Join us on this exhilarating journey
          through the world of technology. Subscribe to our newsletter, follow
          us on social media, and become part of the TechGlimpse community to
          embark on an enriching tech experience. Thank you for being a part of
          TechGlimpse! Stay curious, stay informed!
        </p>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
        }}
      ></div>
    </main>
  );
}

export default About;
