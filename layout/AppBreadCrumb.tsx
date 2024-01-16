'use client';

import { usePathname } from 'next/navigation';
import { ObjectUtils, classNames } from 'primereact/utils';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { LayoutContext } from './context/layoutcontext';
import { Breadcrumb } from '../types/layout';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import BreadCrumbs from '../app/(main)/components/BreadCrumbs/BreadCrumbs'

const AppBreadcrumb = () => {
    const [searchActive, setSearchActive] = useState(false);
    const pathname = usePathname();
    const [breadcrumb, setBreadcrumb] = useState<Breadcrumb | null>(null);
    const { breadcrumbs, showSidebar } = useContext(LayoutContext);
    const searchInput = useRef(null);

    useEffect(() => {
        const filteredBreadcrumbs = breadcrumbs?.find((crumb) => {
            const lastPathSegment = crumb?.to?.split('/').pop();
            const lastRouterSegment = pathname.split('/').pop();

            if (lastRouterSegment?.startsWith('[') && !isNaN(Number(lastPathSegment))) {
                return pathname.split('/').slice(0, -1).join('/') === crumb.to?.split('/').slice(0, -1).join('/');
            }
            return crumb.to === pathname;
        });

        setBreadcrumb(filteredBreadcrumbs as Breadcrumb);
    }, [pathname, breadcrumbs]);

    const activateSearch = () => {
        setSearchActive(true);
        setTimeout(() => {
            (searchInput?.current as any).focus();
        }, 100);
    };

    const deactivateSearch = () => {
        setSearchActive(false);
    };

    const onSidebarButtonClick = () => {
        showSidebar();
    };

    return (
        // <div className="layout-breadcrumb flex align-items-center relative h-3rem">
             <div className="list-none  mb-4 pl-0 m-0 shadow-2 surface-card border-round flex font-medium overflow-y-hidden overflow-x-auto">
             {/* <BreadCrumbs/> */}
          
            {/* <nav className="layout-breadcrumb"> */}
            <nav >
            <BreadCrumbs/>
                {/* <ol>
                    {ObjectUtils.isNotEmpty(breadcrumb) ? (
                        breadcrumb?.labels?.map((label, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {index !== 0 && <li className="layout-breadcrumb-chevron"> / </li>}
                                    <li key={index}>{label}</li>
                                </React.Fragment>
                            );
                        })
                    ) : (
                        <>
                            {pathname === '/' && <li key={'home'}>Main Dashboard</li>}
                        </>
                    )}
                </ol> */}
            </nav>
        </div>
    );
};

export default AppBreadcrumb;
