

'use client';
import React, {  useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Chart } from 'primereact/chart';
import { ChartData, ChartOptions } from 'chart.js';
import { Menu } from 'primereact/menu';
import { classNames } from 'primereact/utils';
import { TabPanel, TabView, TabPanelHeaderTemplateOptions } from 'primereact/tabview';
import { Tag } from 'primereact/tag';
import { Ripple } from 'primereact/ripple';
import { Messages } from 'primereact/messages';
import { useMountEffect } from 'primereact/hooks';

interface IDateRange {
    name: string;
    code: string;
}

let chartData: ChartData;
let chart1: ChartData;
let pieData: ChartData;

function LiveActivityFeed() {
    const dateRanges: IDateRange[] = [
        { name: 'Daily', code: 'DAY' },
        { name: 'Weekly', code: 'WEEK' },
        { name: 'Monthly', code: 'MONTH' }
    ];


    const menu1 = useRef<Menu | null>(null);
    const menu2 = useRef<Menu | null>(null);
    const msgs = useRef<Messages | null>(null);


    const items = [
        {
            icon: 'pi pi-check',
            label: 'Complete'
        },
        {
            icon: 'pi pi-times',
            label: 'Cancel'
        },
        {
            icon: 'pi pi-external-link',
            label: 'Details'
        }
    ];



  

    const tab1HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        return (
            <button type="button" onClick={options.onClick} className={classNames('p-ripple', options.className)}>
                <div className="pr-2 p-overlay-badge">
                    <h6 className="m-0 mr-1 text-left">All</h6>
                </div>
                <Ripple />
            </button>
        );
    };
    const tab2HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        return (
            <button type="button" onClick={options.onClick} className={classNames('p-ripple', options.className)}>
                <div className="pr-2 p-overlay-badge">
                    <h6 className="m-0 mr-1 text-left">Daycare</h6>
                </div>
                <Ripple />
            </button>
        );
    };
    const tab3HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        return (
            <button type="button" onClick={options.onClick} className={classNames('p-ripple', options.className)}>
                <div className="pr-2 p-overlay-badge">
                    <h6 className="m-0 mr-1 text-left">Boarding</h6>
                </div>
                <Ripple />
            </button>
        );
    };
 
    const tab4HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        return (
            <button type="button" onClick={options.onClick} className={classNames('p-ripple', options.className)}>
                <div className="pr-2 p-overlay-badge">
                    <h6 className="m-0 mr-1 text-left">Customer</h6>
                </div>
                <Ripple />
            </button>
        );
    };
    const tab5HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        return (
            <button type="button" onClick={options.onClick} className={classNames('p-ripple', options.className)}>
                <div className="pr-2 p-overlay-badge">
                    <h6 className="m-0 mr-1 text-left">Grooming</h6>
                </div>
                <Ripple />
            </button>
        );
    };
    useMountEffect(() => {
        msgs?.current?.show({ sticky: true, content: <div>👋 Hello! Welcome to Freya! Before start please complete your profile to know you better.</div> });
    });

    return (
        <>
         
                        <div className="col-12 md:col-6 pt-4">
                            <div className="card">
                                <div className="card-header gap-3 pb-2 ">
                                    <div className="card-title">
                                        <h6>Live Activity Feed</h6>
                                    </div>
                                </div>
                                <TabView className="w-full p-0">
                                    <TabPanel headerTemplate={tab1HeaderTemplate}>
                                        <ul className="list-none p-0 overflow-auto" style={{ margin: '0 -1.5rem -1rem', maxHeight: '17.745rem' }}>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium">Order</h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-blue-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">4h ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1">
                                                        {' '}
                                                        <b>1</b> Bamboo Watch, <b>3</b> Blue Band,{' '}
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu1 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium">Order</h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-blue-300" value="#05852"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">6h ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1">
                                                        {' '}
                                                        <b>1</b> Bamboo Watch, <b>3</b> Blue Band,{' '}
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu1 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium">Order</h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-blue-300" value="#05605"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">1d ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1">
                                                        {' '}
                                                        <b>1</b> Bamboo Watch, <b>3</b> Blue Band,{' '}
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu1 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium">Order</h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-blue-300" value="#05462"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">1d ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1">
                                                        {' '}
                                                        <b>1</b> Bamboo Watch, <b>3</b> Blue Band,{' '}
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu1 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium">Order</h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-blue-300" value="#05241"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">1w 2d ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1">
                                                        {' '}
                                                        <b>1</b> Bamboo Watch, <b>3</b> Blue Band,{' '}
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu1 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium">Order</h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-blue-300" value="#05241"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">1w 2d ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1">
                                                        {' '}
                                                        <b>1</b> Bamboo Watch, <b>3</b> Blue Band,{' '}
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu1 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                        </ul>
                                        <Menu ref={menu1} popup={true} model={items}></Menu>
                                    </TabPanel>
                                    <TabPanel headerTemplate={tab2HeaderTemplate}>
                                        <ul className="list-none p-0 overflow-auto" style={{ margin: '0 -1.5rem -1rem', maxHeight: '17.745rem' }}>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Anna K.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">4h ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Daniel F.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">6h ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Judy F.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">1d ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                        </ul>
                                        <Menu ref={menu2} popup={true} model={items}></Menu>
                                    </TabPanel>
                                    <TabPanel headerTemplate={tab3HeaderTemplate}>
                                        <ul className="list-none p-0 overflow-auto" style={{ margin: '0 -1.5rem -1rem', maxHeight: '17.745rem' }}>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Anna K.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">4h ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Daniel F.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">6h ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Judy F.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">1d ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                        </ul>
                                        <Menu ref={menu2} popup={true} model={items}></Menu>
                                    </TabPanel>
                                    <TabPanel headerTemplate={tab4HeaderTemplate}>
                                        <ul className="list-none p-0 overflow-auto" style={{ margin: '0 -1.5rem -1rem', maxHeight: '17.745rem' }}>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Anna K.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">4h ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Daniel F.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">6h ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Judy F.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">1d ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                        </ul>
                                        <Menu ref={menu2} popup={true} model={items}></Menu>
                                    </TabPanel>
                                    <TabPanel headerTemplate={tab5HeaderTemplate}>
                                        <ul className="list-none p-0 overflow-auto" style={{ margin: '0 -1.5rem -1rem', maxHeight: '17.745rem' }}>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Anna K.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">4h ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Daniel F.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">6h ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                            <li className="border-round-lg pt-2 px-3 pb-2 mb-3" style={{ backgroundColor: 'var(--primary-lighter-color)' }}>
                                                <div className="flex justify-content-between align-items-center mb-1">
                                                    <div className="flex align-items-center gap-1">
                                                        <h6 className="line-height-3 m-0 font-medium font-medium">
                                                            Message from <b>Judy F.</b>
                                                        </h6>
                                                        <Tag className="m-0 mr-2 px-2 text-xs bg-orange-300" value="#05895"></Tag>
                                                    </div>

                                                    <span className="text-gray-300 font-semibold text-sm line-height-1">1d ago</span>
                                                </div>
                                                <div className="flex justify-content-between align-items-center">
                                                    <span className="mt-1 text-400 block text-sm line-height-1 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis
                                                        voluptate. Dolore, nisi vel.
                                                    </span>
                                                    <Button type="button" icon="pi pi-ellipsis-v" className="p-button-rounded p-button-text p-button-sm flex-shrink-0" onClick={() => (menu2 as any)?.current.toggle(event)}></Button>
                                                </div>
                                            </li>
                                        </ul>
                                        <Menu ref={menu2} popup={true} model={items}></Menu>
                                    </TabPanel>
                                    
                                </TabView>
                            </div>
                        </div>
          
        </>
    );
}

export default LiveActivityFeed;

