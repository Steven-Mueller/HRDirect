export default function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <>
      <h1>&copy; Steven Müller - {currYear}</h1>
    </>
  );
}
