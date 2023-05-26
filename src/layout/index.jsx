import "./Layout.css"
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const Layout = ( {children}) => {
  return (
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
       <Header />
        <div id="content">{children}</div>
       
        <Footer />
      </div>
    </div>
  );
};