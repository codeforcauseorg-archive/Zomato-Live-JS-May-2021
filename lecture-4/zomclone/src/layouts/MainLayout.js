import { Box } from "@material-ui/core";
import BottomNav from "../components/BotomNav";

export default function MainLayout({ children }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      {children}
      <BottomNav />
    </div>
  );
}
