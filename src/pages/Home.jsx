import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-3xl font-bold underline flex flex-col">
        <Link to={'/camera-layout'}>Camera Layout</Link>
        <Link to={'/pin-screen-layout'}>PIN Screen Layout</Link>
        <Link to={'/animation-layout'}>Animation Screen Layout</Link>
        <Link to={'/component-button'}>Component Button</Link>
        <Link to={'/component-pagination'}>Component Pagination</Link>
        <Link to={'/component-form'}>Component Forms</Link>
        <Link to={'/component-message-box'}>Component Message Box</Link>
    </div>
  )
}
