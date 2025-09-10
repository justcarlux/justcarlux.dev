import BackgroundLayer from "@/components/BackgroundLayer";
import ProfileSection from "@/components/profile/ProfileSection";
import { Toaster } from "react-hot-toast";

export default async function Home() {
  return (
    <>
      <BackgroundLayer />
      <Toaster
        toastOptions={{
          position: "top-center",
          style: {
            fontWeight: "600",
            padding: "15px 25px",
            color: "white",
            backgroundColor: "var(--color-gray-700)"
          }
        }}
      />
      <ProfileSection />
    </>
  );
}
