import { useEffect, useState } from "react";
import Splash from "@/components/Splash";
import { Redirect } from "expo-router";

const index = () => {
  const [showSplash, setShowSplash] = useState(true); //splash screen state

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);
  return showSplash ? <Splash /> : <Redirect href="/home" />;
};

export default index;
