export const Title = ({ title }) => {
  return (
    <div className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
      <h1 className="inline-block">{title || ""}</h1>
    </div>
  );
};

export default Title;
