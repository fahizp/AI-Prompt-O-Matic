import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & Distribute
        <br className="max-md:hidden" />
        <span className="new_gradient text-center">Smart Prompts</span>
      </h1>
      <p className="desc text-center">
        The AI-Prompt-O-Matic is an innovative AI-powered tool for today's
        generation, enabling the exploration, generation, and exchange of
        imaginative prompts.
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
