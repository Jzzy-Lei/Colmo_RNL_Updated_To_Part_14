import { AxiosError } from "axios";
import { NavigateFunction } from "react-router-dom";

const ErrorHandler = (
  error: AxiosError | number | unknown,
  navigate: NavigateFunction | null
) => {
  if (navigate) {
    if (
      (typeof error === "number" && error === 401) ||
      (error instanceof AxiosError && error.response?.status === 401)
    ) {
      navigate("/");
      return;
    }
  }

  console.error("Unexpected server error:", error);
};

export default ErrorHandler;

// Vid
// import { useNavigate } from "react-router-dom";

// const ErrorHandler = (
//   error: any,
//   navigate: ReturnType<typeof useNavigate> | null
// ) => {
//   if (navigate) {
//     if (error.response.status === 401 || error === 401) {
//       navigate("/");
//     }
//   } else {
//     console.error("Unexpected server error: ", error);
//   }
// };

// export default ErrorHandler;
