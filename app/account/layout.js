import SideNavigation from "../_components/SideNavigation";

function Layout({ children }) {
  return (
    <div className="grid-cols-[16rem_1fr] grid h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default Layout;
