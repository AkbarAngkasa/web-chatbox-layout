import SidenavBlock from "../blocks/SidenavBlock"
import NavbarBlockFirst from "../blocks/NavbarBlockFirst"
import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';

export default function DashboardLayout() {
    useEffect(() => {
        initFlowbite();
    });

    return (
        <div className="w-full flex">
            {/* Sidenav */}
            <div className="w-0 sm:w-[20%] bg-transparent">
                <SidenavBlock />
            </div>
            {/* Content */}
            <div className="w-full sm:w-[80%] sm:z-50 bg-transparent">
                <NavbarBlockFirst />
            </div>
        </div>
    )
}
