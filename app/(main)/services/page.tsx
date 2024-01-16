import CalendarDemo from '../apps/calendar/page';
import DashboardTable from '../components/DashboadTable/DashboardTable';
import DepartureTable from '../components/DepartureTable/DepartureTable';
import LiveActivityFeed from '../components/LiveActivity/DepartureTable';

const Services = () => {
    return (
        <div className="layout-dashboard">
            <div className="grid">
                <div className="col-12 pb-3 pt-4">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col p-3">
                            <div className="shadow-2 surface-card border-round p-3  h-full">
                                <div className="flex align-items-start">
                                    <div className="ml-0 flex-1 pb-0">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div>
                                                <span className="block text-900 mb-0  font-medium" style={{ fontSize: '1.15rem' }}>
                                                    Arrivals
                                                </span>
                                            </div>

                                            <div className="flex align-items-center" style={{ justifyContent: 'flex-end' }}>
                                                <span className="font-bold text-700">12/12</span>
                                            </div>
                                        </div>

                                        <div className="flex align-items-center" style={{ justifyContent: 'flex-end', marginTop: '22px' }}></div>

                                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col p-3">
                            <div className="shadow-2 surface-card border-round p-3 h-full">
                                <div className="flex align-items-start">
                                    <div className="ml-0 flex-1 pb-0">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div>
                                                <span className="block text-900 mb-0  font-medium" style={{ fontSize: '1.15rem' }}>
                                                    Departure
                                                </span>
                                            </div>

                                            {/* <div className="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style={{ width: "34px", height: "34px" }}>
                                            <span className="font-bold text-700">
                                                12/12
                                            </span>
                                        
                                            </div> */}
                                            <div className="flex align-items-center" style={{ justifyContent: 'flex-end' }}>
                                                <span className="font-bold text-700">12/12</span>
                                            </div>
                                        </div>

                                        <div className="flex align-items-center" style={{ justifyContent: 'flex-end', marginTop: '22px' }}>
                                            {/* <span className="font-bold text-700">
                                                12/12
                                            </span> */}
                                        </div>

                                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: '7px', borderRadius: '3px' }} className="flex-1 bg-blue-500"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3 pb-3 pt-0 pl-0">
                    <DepartureTable tableName="Boocked Services" />
                </div>
                <div className="col-12 md:col-8 xl:col-6 pb-3 pt-0 pl-0">
                    <DashboardTable tableName="Checked In" />
                </div>
                <div className="col-12 md:col-6 xl:col-3 pb-3 pt-0 pl-0 ">
                    <DepartureTable tableName="Completed" />
                </div>
                {/* <LiveActivityFeed /> */}
                <div className="col-12 md:col-12 pb-3 pt-4 h-1/2 ">
                    <CalendarDemo />
                </div>
            </div>
        </div>
    );
};

export default Services;
