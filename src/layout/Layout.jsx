import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Layout({ children }) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className={`app-layout ${isMobile ? "mobile" : "desktop"}`}>
      {children}
    </div>
  );
}