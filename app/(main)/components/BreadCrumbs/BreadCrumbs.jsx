import React from 'react';

const BreadCrumbs = () => {
    const reducedHeight = '90%';

    return (
        <ul className="list-none pl-4 m-0 surface-card flex font-medium overflow-y-hidden overflow-x-auto">
            <li className="relative p-3" style={{ height: reducedHeight }}>
                <a href="/#" className="cursor-pointer">
                    <i className="pi pi-home text-blue-500"></i>
                </a>
            </li>
            <li className="relative p-3" style={{ height: reducedHeight }}>
                <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-card)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                <a href="/#" className="cursor-pointer text-blue-500 pl-4 white-space-nowrap">Level 3</a>
                <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-border)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
            </li>
            <li className="relative p-3" style={{ height: reducedHeight }}>
                <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-card)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                <a href="/#" className="cursor-pointer text-blue-500 pl-4 white-space-nowrap">Level 2</a>
                <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-border)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
            </li>
            <li className="relative p-3" style={{ height: reducedHeight }}>
                <div className="absolute left-0 top-0 z-1" style={{ borderLeft: '20px solid var(--surface-card)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
                <a href="/#" className="cursor-pointer text-900 pl-4 white-space-nowrap">Level 1</a>
                <div className="absolute top-0" style={{ left: '1px', borderLeft: '20px solid var(--surface-border)', borderTop: '26px solid transparent', borderBottom: '26px solid transparent', width: '0', height: '0' }}></div>
            </li>
        </ul>
    );
}

export default BreadCrumbs;
