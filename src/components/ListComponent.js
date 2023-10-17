export const ListComponent = (prop) => {
  return (
    <>
      <h1>{prop.title}</h1>
      <ul>
        {prop.list.map((listItem) => {
          return <li key={crypto.randomUUID()}>{listItem}</li>;
        })}
      </ul>
    </>
  );
};
