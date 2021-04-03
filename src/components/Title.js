export const Title = ({ title }) => {
  return (
    <div className="font-sans text-2xl font-bold capitalize leading-none tracking-tight text-gray-900 sm:text-3xl">
      <h1 className="inline-block">{title || ""}</h1>
    </div>
  );
};

export default Title;
