import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Splash from "@/components/Splash";
import HomePage from "./(tabs)/home";

export default function Index() {
  const [showSplash, setShowSplash] = useState(true); //splash screen state

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return showSplash ? <Splash /> : <HomePage />;
}
