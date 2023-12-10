import { useRouteError } from "react-router-dom";


const Error = () => {
  const err=useRouteError();
  return (
    <div className="text-bold text-xl text-center">Oops ! Something went wrong !!
      <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}
export default Error;