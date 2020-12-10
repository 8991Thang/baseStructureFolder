export const TitlePage = ({ content }) => {
  return (
    <div>
      <h1 className="font-extrabold text-4xl tracking-wide uppercase">{content + "."}</h1>
      <p className="text-gray-600 pt-4">Show the : {content} page</p>
    </div>
  );
};
