import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = axios.create({
  withCredentials: true, // needed to set JWT
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:4000"
      : "https://vaschoolserver.vercel.app/",
});

console.log("import.meta.env.MODE :>> ", import.meta.env.MODE);
const isStatusInRange = (status, start, end) =>
  status >= start && status <= end;

const handleResponse = (response, id) => {
  console.log(response);
  if (isStatusInRange(response.status, 200, 299)) {
    const message = response?.data?.message || "Request successful";
    // toast.success(message);
    if (message !== "Cart data fetched") {
      toast.update(id, {
        render: message,
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    } else {
      toast.dismiss(id);
    }
    return response.data;
  } else {
    throw new Error(response);
  }
};

const handleError = (error, id) => {
  console.error(error);
  const message = error?.response?.data?.message || "somthing went wrong";

  // toast.error(message);
  toast.update(id, {
    render: message,
    type: "error",
    isLoading: false,
    autoClose: 2000,
  });
};

class Axios {
  async get(ENDPOINT) {
    const id = toast.loading("Please wait...");
    try {
      const response = await apiUrl.get(ENDPOINT);
      return handleResponse(response, id);
    } catch (error) {
      handleError(error, id);
    }
  }

  async post(ENDPOINT, data) {
    const id = toast.loading("Please wait...");
    try {
      const response = await apiUrl.post(`${ENDPOINT}`, data);
      return handleResponse(response, id);
    } catch (error) {
      handleError(error, id);
    }
  }

  async patch(ENDPOINT, data) {
    const id = toast.loading("Please wait...");
    try {
      const response = await apiUrl.patch(ENDPOINT, data);
      return handleResponse(response, id);
    } catch (error) {
      handleError(error, id);
    }
  }

  async delete(ENDPOINT, data) {
    const id = toast.loading("Please wait...");
    try {
      const response = await apiUrl.delete(ENDPOINT, { data });
      return handleResponse(response, id);
    } catch (error) {
      handleError(error, id);
    }
  }
}

export const apiAxios = new Axios();
