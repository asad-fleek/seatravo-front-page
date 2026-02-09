import { useNavigate } from "react-router";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Error-404 Not Found</h1>
      <button onClick={() => navigate("/")}>
        Go to home Page
      </button>
    </>
  )
}

export default Notfound;