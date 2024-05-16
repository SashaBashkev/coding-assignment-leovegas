import { useEffect, useState } from "react";

export const useInfiniteScroll = (callback, isLoading) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.scrollHeight &&
        !isLoading
      ) {
        callback(page);
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, callback, page]);
};

