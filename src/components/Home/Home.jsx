import Cards from "../Card/Card";
export default function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "ghostwhite",
        }}
      >
        <Cards />
      </div>
    </>
  );
}
