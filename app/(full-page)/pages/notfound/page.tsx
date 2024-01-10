'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import React from 'react';

function NotFound() {
    const router = useRouter();

    const navigateToDashboard = () => {
        router.push('/');
    };

    return (
        <React.Fragment>
            <div>
                <div className="flex align-items-center py-0 px-3 w-full z-2 px-5" style={{ height: '62px', boxShadow: '0 10px 40px 0 rgb(41 50 65 / 6%)', background: 'var(--surface-card)' }}>
                    <a id="logolink" onClick={navigateToDashboard}>
                        <svg height="32" viewBox="0 0 66 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H4.99056V3.20992L14.1395 1.39922V5.5969L4.99056 7.40759V8.80682L14.1395 6.99612V11.1938L4.99056 13.0045V16.7907H0V0Z" fill="url(#paint0_linear_7_2)" />
                            <path
                                d="M26.6589 6.69198H24.5387V6.08721C24.5387 5.61683 24.8058 5.34804 25.2732 5.34804H26.6422V2.94574H24.4719C22.5686 2.94574 21.5669 4.0041 21.5669 5.83522V6.69198H20.031L20.0477 9.14468H21.5336V15.6124H24.6388V9.14468H26.6589V6.69198Z"
                                fill="url(#paint1_linear_7_2)"
                            />
                            <path
                                d="M33.1864 6.48062C32.1152 6.48062 31.3453 6.78389 30.7093 7.52522L30.2239 6.51432H28.1318V15.6124H31.2449V10.996C31.2449 9.83344 31.7135 9.34483 32.8014 9.34483H34.0232V6.48062H33.1864Z"
                                fill="url(#paint2_linear_7_2)"
                            />
                            <path
                                d="M44.7752 10.8813C44.7752 8.25063 42.7879 6.18605 39.9064 6.18605C37.0912 6.18605 35.0543 8.21733 35.0543 10.9645C35.0543 13.7118 37.1077 15.7597 39.9064 15.7597C42.1421 15.7597 43.9637 14.4777 44.593 12.4297H41.5128C41.2313 12.9625 40.6185 13.2789 39.9064 13.2789C38.9294 13.2789 38.2835 12.7461 38.0848 11.7138H44.7255C44.7586 11.4307 44.7752 11.1643 44.7752 10.8813ZM39.9064 8.61692C40.8338 8.61692 41.4797 9.09977 41.7446 9.99886H38.1345C38.3829 9.09977 39.0122 8.61692 39.9064 8.61692Z"
                                fill="url(#paint3_linear_7_2)"
                            />
                            <path
                                d="M52.0281 6.48062L50.235 11.5154L48.3077 6.48062H44.9225L48.6597 14.8607C48.2407 15.9926 47.8888 16.3137 46.6989 16.3137H45.8274V19H46.9C49.2462 19 50.3523 18.0032 51.5756 15.1986L55.3799 6.48062H52.0281Z"
                                fill="url(#paint4_linear_7_2)"
                            />
                            <path
                                d="M63.3589 6.45291L63.0402 7.15342C62.3023 6.53631 61.3464 6.18605 60.2731 6.18605C57.506 6.18605 55.5271 8.17083 55.5271 10.9562C55.5271 13.7582 57.506 15.7597 60.2731 15.7597C61.3296 15.7597 62.2688 15.4261 63.0067 14.8257L63.275 15.4595H65.6899V6.45291H63.3589ZM60.6924 13.0244C59.5185 13.0244 58.6632 12.1404 58.6632 10.9562C58.6632 9.78868 59.5185 8.92138 60.6924 8.92138C61.8663 8.92138 62.7216 9.78868 62.7216 10.9562C62.7216 12.1404 61.8663 13.0244 60.6924 13.0244Z"
                                fill="url(#paint5_linear_7_2)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear_7_2" x1="4.02237" y1="9.46943e-08" x2="8.24281" y2="16.4905" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="var(--primary-400)" />
                                    <stop offset="1" stopColor="var(--primary-700)" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_7_2" x1="25.0035" y1="0.213131" x2="18.0327" y2="13.0728" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="var(--primary-400)" />
                                    <stop offset="1" stopColor="var(--primary-700)" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_7_2" x1="30.3648" y1="0.168197" x2="23.1051" y2="13.5662" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="var(--primary-400)" />
                                    <stop offset="1" stopColor="var(--primary-700)" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_7_2" x1="29.6161" y1="0.521788" x2="21.5283" y2="15.4296" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="var(--primary-400)" />
                                    <stop offset="1" stopColor="var(--primary-700)" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_7_2" x1="35.5631" y1="0.11682" x2="27.7574" y2="14.5441" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="var(--primary-400)" />
                                    <stop offset="1" stopColor="var(--primary-700)" />
                                </linearGradient>
                                <linearGradient id="paint5_linear_7_2" x1="23.0068" y1="1.38676" x2="15.3473" y2="15.3525" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="var(--primary-400)" />
                                    <stop offset="1" stopColor="var(--primary-700)" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className="flex flex-column justify-content-center align-items-center px-4" style={{ minHeight: 'calc(100vh - 62px)' }}>
                    <div className="flex flex-column justify-content-center align-items-center text-center">
                        <img src="/layout/images/pages/asset-404.svg" alt="freya-layout" style={{ marginBottom: '-150px', width: '332px', height: '271px' }} />
                        <span className="" style={{ fontSize: '140px', lineHeight: '171px' }}>
                            404
                        </span>
                        <span className="block text-300 text-center font-medium">Looks like you are lost.</span>
                        <Button type="button" label="Go back to home" className="mt-4 font-medium p-button-lg" onClick={navigateToDashboard}></Button>
                    </div>
                    <div className="flex flex-wrap align-items-center pt-8 pb-4 px-4">
                        <h4 className="m-0 mr-5">freya</h4>
                        <h6 className="m-0 mt-1 text-300 font-medium">Copyright Ⓒ PrimeTek Informatics</h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NotFound;
