import { toast } from "react-toastify";
import { TukinContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get("/tukins", { params });
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllTukinContext = createContext();

const AllRincian = () => {
  const { data } = useLoaderData();
  return (
    <AllTukinContext.Provider value={{ data }}>
      <SearchContainer />
      <TukinContainer />
    </AllTukinContext.Provider>
  );
};

export const useAllTukinContext = () => useContext(AllTukinContext);

export default AllRincian;
