import BottomNav from "../components/BotomNav";

export default function MainLayout({ children }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
      <BottomNav />
    </div>
  );
}
