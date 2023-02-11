import { useRouter } from "next/router";
import { useEffect } from "react";

const useLeavePageConfirmation = () => {
  const router = useRouter();

  useEffect(() => {
    window.onbeforeunload = () => "Are you sure want to discard changes?";

    return () => {
      window.onbeforeunload = null;
    };
  }, [router.isReady]);
};

export default useLeavePageConfirmation;
