import { useRouter } from "next/router";
import { useEffect } from "react";
import timeboxingTS from "../types/timeboxingTS";

const RouterChangeStart = (timeboxing: timeboxingTS[]) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      console.log("chenge");

      console.log(timeboxing);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
};

export default RouterChangeStart;
