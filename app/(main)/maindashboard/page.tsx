import CalendarDemo from '../apps/calendar/page';
import DashboardTable from '../components/DashboadTable/page';
import DepartureTable from '../components/DepartureTable/page';
import LiveActivityFeed from '../components/LiveActivity/page';

const MainDashboard = () => {


    return (
        <div className="layout-dashboard">
            <div className="grid">
                <div className="col-12 pb-3 pt-4">
                    <div className="notification notification shadow-2 surface-card border-round p-3 h-full">
                        <h6>
                            👋 Hello! Welcome to Hit! Before start please complete your profile to know you better.{' '}
                            <button className="p-link">
                                Profile settings <i className="pi pi-arrow-up"></i>
                            </button>
                        </h6>
                    </div>
                </div>

                <div className="col-12 pb-3 pt-4">
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col">
                            <div className="shadow-2 surface-card border-round p-3 h-full">
                                <div className="flex align-items-start">

                                    <div className="ml-0 flex-1">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                            <div>
                                                <span className="block text-900 mb-1 text-xl font-medium">
                                                    Arrivals
                                                </span>
                                            </div>

                                            <div className="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style={{ width: "34px", height: "34px" }}>
                                            <img src="demo/images/blocks/illustration/stats-illustration-3.svg" alt="freya-layout" />
                                            {/* demo\images\blocks\illustration */}
                                                {/* <img src="assets/demo/images/blocks/illustration/stats-illustration-1.svg" alt="freya-layout" /> */}
                                            </div>
                                        </div>

                                        <div className="flex align-items-center" style={{ justifyContent: 'flex-end', marginTop: '28px' }}>
                                            <span className="font-bold text-700">
                                                12/12
                                            </span>
                                        </div>

                                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="shadow-2 surface-card border-round p-3 h-full">
                                <div className="flex align-items-start">

                                    <div className="ml-0 flex-1">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                            <div>
                                                <span className="block text-900 mb-1 text-xl font-medium">
                                                    Departure
                                                </span>
                                            </div>

                                            <div className="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style={{ width: "34px", height: "34px" }}>
                                            <img src="demo/images/blocks/illustration/stats-illustration-2.svg" alt="freya-layout" />
                                                {/* <img src="assets/demo/images/blocks/illustration/stats-illustration-2.svg" alt="freya-layout" /> */}
                                            </div>
                                        </div>

                                        <div className="flex align-items-center" style={{ justifyContent: 'flex-end', marginTop: '28px' }}>
                                            <span className="font-bold text-700">
                                                12/12
                                            </span>
                                        </div>

                                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="shadow-2 surface-card border-round p-3 h-full">
                                <div className="flex align-items-start">

                                    <div className="ml-0 flex-1">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                            <div>
                                                <span className="block text-900 mb-1 text-xl font-medium">
                                                    Appointments
                                                </span>
                                            </div>

                                           
                                         <div className="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style={{ width: "34px", height: "34px" }}>
                                         <img src="demo/images/blocks/illustration/stats-illustration-1.svg" alt="freya-layout" />
                                                {/* <img src="assets/images/blocks/illustration/stats-illustration-3.svg" alt="freya-layout" /> */}
                                                {/* <img src="assets/images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} /> */}
                                            </div>
                                        </div>

                                        <div className="flex align-items-center" style={{ justifyContent: 'flex-end', marginTop: '28px' }}>
                                            <span className="font-bold text-700">
                                                12/12
                                            </span>
                                        </div>

                                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="shadow-2 surface-card border-round p-3 h-full">
                                <div className="flex align-items-start">

                                    <div className="ml-0 flex-1">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                            <div>
                                                <span className="block text-900 mb-1 text-xl font-medium">
                                                    Occupancy
                                                </span>
                                                <span className="text-500">
                                                    43%
                                                </span>
                                            </div>
                                            <div className="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style={{ width: "34px", height: "34px" }}>
                                            <img src="demo/images/blocks/illustration/stats-illustration-3.svg" alt="freya-layout" />
                                                {/* <img src="assets/demo/images/blocks/illustration/stats-illustration-2.svg" alt="freya-layout" /> */}
                                                {/* <img src="assets/images/blocks/illustration/stats-illustration-3.svg" alt="freya-layout" /> */}
                                            </div>
                                        </div>

                                        <div className="flex align-items-center justify-content-between" style={{ justifyContent: 'flex-end', marginTop: '18px' }}>
                                            <span className="text-xs text-500">
                                                2 Occupied
                                            </span>
                                            <span className="text-xs text-500">
                                                5 Available
                                            </span>
                                            <span className="font-bold text-700">
                                                12/12
                                            </span>
                                        </div>

                                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="shadow-2 surface-card border-round p-3 h-full">
                                <div className="flex align-items-start">

                                    <div className="ml-0 flex-1">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                            <div >
                                                <span className="block text-900 mb-1 text-xl font-medium">
                                                    Pending
                                                </span>
                                                <span className="text-400"  >
                                                    3 Requests
                                                </span>

                                            </div>

                                      
                                          <div className="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style={{ width: "34px", height: "34px" }}>
                                          <img src="demo/images/blocks/illustration/stats-illustration-1.svg" alt="freya-layout" />
                                            {/* <img src="assets/images/blocks/illustration/stats-illustration-3.svg" alt="freya-layout" /> */}
                                                {/* <img src="assets/demo/images/blocks/illustration/stats-illustration-1.svg" alt="freya-layout" /> */}
                                            </div>
                                        </div>

                                        <div className="flex align-items-center justify-content-between" >
                                            <span className="text-400" >
                                                2 Wait List
                                            </span>

                                            <span className="font-bold text-700" style={{ justifyContent: 'flex-end', marginTop: '18px' }}>
                                                12/12
                                            </span>
                                        </div>

                                        <ul className="list-none p-0 m-0 flex align-content-center mt-2 gap-2">
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                            <li style={{ height: "7px", borderRadius: "3px" }} className="flex-1 bg-blue-500"></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3 pb-3 pt-4">< DepartureTable tableName="Arrivals" /></div>
                <div className="col-12 md:col-8 xl:col-6 pb-3 pt-4">< DashboardTable tableName="Checked In" /></div>
                <div className="col-12 md:col-6 xl:col-3 pb-3 pt-4">< DepartureTable tableName="Departures" /></div>
                <LiveActivityFeed />
                <div className="col-12 md:col-6 pb-3 pt-4 "  >
                    <CalendarDemo   />
                </div>                
            </div>
        </div>
    );
};

export default MainDashboard;
