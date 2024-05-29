import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  const {isPending, data: menu = [], refetch} = useQuery({
    queryKey:["menuData"],
    queryFn: async () => {
      const res = await axiosPublic("/menu");
      return res.data;
    }
  })

  return [isPending, menu, refetch]
};

export default useMenu;