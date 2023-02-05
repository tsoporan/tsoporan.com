import Footer from "./footer";
import Sidebar from "./sidebar";
import Main from "./main";

// <div className="flex justify-center gap-4 items-center h-screen px-4">
export default function Layout({ children }) {
  return (
    <div className="container mx-auto w-1/2">
      <div className="flex flex-row flex-wrap content-center items-center h-screen">
        <div className="basis-1/4">
          <Sidebar />
        </div>
        <div className="basis-3/4">
          <Main>{children}</Main>
        </div>
        <div
          className="basis-full mt-10"
          style={{ borderTop: "1px solid #eee" }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}
