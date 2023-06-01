import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-3xl font-bold underline flex flex-col">
        <Link to={'/camera-layout'}>Camera Layout</Link>
        <Link to={'/pin-screen-layout'}>PIN Screen Layout</Link>
        <Link to={'/animation-layout'}>Animation Screen Layout</Link>
        <Link to={'/dashboard-layout'}>Dashboard Layout</Link>
        <Link to={'/skeleton-layout'}>Skeleton Layout</Link>
        <Link to={'/component-button'}>Component Button</Link>
        <Link to={'/component-pagination'}>Component Pagination</Link>
        <Link to={'/component-form'}>Component Forms</Link>
        <Link to={'/component-message-box'}>Component Message Box</Link>
        <Link to={'/component-modal'}>Component Modal</Link>
        <Link to={'/component-date'}>Component Date</Link>
        <Link to={'/block-navbar'}>Block Navbar</Link>
        <Link to={'/block-table'}>Block Table</Link>
        <Link to={'/block-table-prime'}>Block Table Prime</Link>
        <Link to={'/block-crud'}>Block CRUD</Link>
        <Link to={'/block-login'}>Block Login</Link>
        <Link to={'/block-sidenav'}>Block Sidenav</Link>
    </div>
  )
}
