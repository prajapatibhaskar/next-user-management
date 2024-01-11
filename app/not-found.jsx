import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h1>NotFound</h1>
      <p>Could not find requested resource</p>
      <Link className="font-semibold italic text-sky-600 underline" href='/'>Return home</Link>
    </>
  );
};
export default NotFound;
