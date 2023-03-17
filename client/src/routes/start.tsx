import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Start = () => {
    const [query, setQuery] = useState('')
    const [images, setImages] = useState('')
    const form = useRef<HTMLFormElement>(null)

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

    }
    console.log(query);

    return (
        <div className="category">
            <div className="select">Select A Category:</div>
            <div className="option">
                <div className="form">
                    {/* <form className="form" ref={form} onSubmit={submit}> */}
                    <div>
                        <label className="free-label four col">
                            <input type="radio" name="radio1" id="free1" value="6414589986086c81caa10c9e" onChange={e => setQuery(e.target.value)}></input>
                            <div className="back-end box">
                                <span>
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title /><g id="Samoyed"><path d="M438.4141,243.617c-15.0625-72.8032-40.4844-135.85-43.475-143.1344-3.5063-20.3875-13.2313-51.0469-39.53-82.6656a19.7014,19.7014,0,0,0-24.9766-4.6782c-23.4711,13.502-42.3162,30.8461-56.1969,51.5071q-5.0444-.4723-10.139-.4758H247.9031q-5.0926,0-10.14.4761C223.8848,43.9849,205.04,26.6408,181.5656,13.1388a19.7,19.7,0,0,0-24.975,4.6782c-26.2984,31.6187-36.0234,62.2781-39.53,82.6656-2.9906,7.2844-28.4125,70.3312-43.475,143.1344a6.4,6.4,0,0,0-.1125,1.8c.3079,3.9062,8.0266,96.5687,48.13,176.2406a6.403,6.403,0,0,0,9.7938,2.0562l18.0094-14.8781c5.9437,12.8906,19.17,39.1563,37.5015,61.475a6.3957,6.3957,0,0,0,8.786,1.0563l15.7109-11.7844a147.9629,147.9629,0,0,0,41.0781,40.8125c.0738.0484.1578.0629.2328.1078a6.2619,6.2619,0,0,0,1.1071.5141c.1693.0617.33.1445.5023.191a6.402,6.402,0,0,0,1.601.23c.09.0016.0581.0016.1484,0a6.4066,6.4066,0,0,0,1.5992-.23c.1744-.0477.3375-.1309.5088-.1934a6.33,6.33,0,0,0,1.1-.5113c.0756-.0453.16-.06.2344-.1086a147.9629,147.9629,0,0,0,41.0781-40.8125l15.7109,11.7844a6.3953,6.3953,0,0,0,8.786-1.0563c18.3312-22.3187,31.5578-48.5844,37.5016-61.475l18.0093,14.8781a6.403,6.403,0,0,0,9.7938-2.0562c40.1031-79.6719,47.8219-172.3344,48.13-176.2406A6.4,6.4,0,0,0,438.4141,243.617ZM382.4922,408.67,364.2234,393.58a6.4008,6.4008,0,0,0-10.0015,2.5156c-.1422.3469-13.7547,33.3687-35.2156,61.2969L302.6547,445.13a6.4087,6.4087,0,0,0-9.4859,2.1031c-.1241.23-12.2217,22.36-37.1688,40.0312-24.9471-17.6711-37.0445-39.8008-37.1641-40.0218a6.3993,6.3993,0,0,0-9.4906-2.1125L192.9937,457.392c-21.4265-27.8875-35.0734-60.95-35.2171-61.3a6.4011,6.4011,0,0,0-10-2.5125L129.5078,408.67C95.5469,336.93,87.175,254.7045,86.3109,245.292c15.7078-75.3969,42.57-139.9094,42.8407-140.5563a6.3533,6.3533,0,0,0,.4109-1.4219c3.1406-18.8218,12.0875-47.5156,36.8687-77.3093a6.848,6.848,0,0,1,8.7516-1.7719C195.0621,35.6709,211.3592,50.0017,223.7756,66.9a110.523,110.523,0,0,0-15.1569,4.6136,6.4,6.4,0,0,0,4.6032,11.9438A96.0931,96.0931,0,0,1,247.9031,76.97h16.1938a96.0931,96.0931,0,0,1,34.6812,6.4875,6.4,6.4,0,0,0,4.6032-11.9438A110.538,110.538,0,0,0,288.2234,66.9c12.4172-16.8993,28.7145-31.2321,48.5922-42.6672a6.8488,6.8488,0,0,1,8.7532,1.7719c24.7812,29.7937,33.7281,58.4875,36.8687,77.3093a6.3586,6.3586,0,0,0,.4109,1.4219c.27.6438,27.12,65.1,42.8407,140.5563C424.8281,254.6982,416.4844,336.867,382.4922,408.67Z" /><path d="M313.62,230.0013a6.3943,6.3943,0,0,0-7.7219,4.7219l-4.6718,19.3844A17.4809,17.4809,0,0,1,279.62,266.8732l-21.93-6.0062c-.1025-.0286-.2049-.03-.3076-.0528a6.2364,6.2364,0,0,0-.7812-.134c-.203-.0195-.4018-.0187-.603-.0191s-.3994,0-.6019.0191a6.2969,6.2969,0,0,0-.79.136c-.0992.0222-.1982.0234-.2972.0508l-21.9281,6.0062a17.4816,17.4816,0,0,1-21.6079-12.7656l-4.6718-19.3844a6.4,6.4,0,0,0-12.4438,3l4.6719,19.3844a30.038,30.038,0,0,0,14.0328,18.975,30.3894,30.3894,0,0,0,8.03,3.28v8.1133a35.6078,35.6078,0,0,0,71.2156,0V279.363a30.3839,30.3839,0,0,0,8.03-3.28,30.038,30.038,0,0,0,14.0328-18.975l4.6719-19.3844A6.4,6.4,0,0,0,313.62,230.0013Zm-34.8125,57.475a22.8078,22.8078,0,1,1-45.6156,0V279.74c.8576-.1578,1.717-.29,2.5687-.5234L256,273.674l20.2406,5.543c.851.2335,1.71.3652,2.5672.5234Z" /><path d="M208.6742,189.667a14.4169,14.4169,0,0,0,14.4-14.4V165.1279a14.4,14.4,0,1,0-28.8,0V175.267A14.4168,14.4168,0,0,0,208.6742,189.667Z" /><path d="M303.3258,189.667a14.4169,14.4169,0,0,0,14.4-14.4V165.1279a14.4,14.4,0,1,0-28.8,0V175.267A14.4169,14.4169,0,0,0,303.3258,189.667Z" /><path d="M247.3344,251.4357a11.107,11.107,0,0,0,17.33.0031l14.4922-18.5312c5.5451-7.0906.3206-17.775-8.6641-17.775H241.5078c-8.9837,0-14.21,10.6821-8.6625,17.7781Z" /></g></svg>
                                    Animal
                                </span>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label className="free-label four col">
                            <input type="radio" name="radio1" id="free2" value="6414589986086c81caa10ca0" onChange={e => setQuery(e.target.value)}></input>

                            <div className="back-end box">
                                <span>
                                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Layer 20" id="Layer_20"><path d="M55,16H43V1a1,1,0,0,0-1-1H38a1,1,0,0,0-1,1V16H36a1,1,0,0,0,0,2H54v2H40a1,1,0,0,0,0,2H51.921l-.945,12.337a5.96,5.96,0,0,0-3.34-.162c-.051.012-.1.027-.154.04a6.16,6.16,0,0,0-.587.188c-.066.025-.131.048-.2.075a5.885,5.885,0,0,0-.7.343,5.931,5.931,0,0,0-1.8-.7,1,1,0,1,0-.41,1.957,4.024,4.024,0,0,1,1.6.738,1,1,0,0,0,1.206,0,3.875,3.875,0,0,1,.517-.328c.051-.028.105-.048.157-.073a3.932,3.932,0,0,1,.4-.172c.056-.02.113-.034.169-.051a4.12,4.12,0,0,1,.421-.107c.051-.01.1-.016.153-.024a3.933,3.933,0,0,1,.46-.043c.041,0,.083,0,.124,0a3.934,3.934,0,0,1,.5.029l.093.011a4.144,4.144,0,0,1,.515.111l.074.02a4.019,4.019,0,0,1,.5.192c.026.012.053.02.078.033s.037.023.057.033L48.855,62H40a1,1,0,0,0,0,2h9.782a1,1,0,0,0,1-.924l2.076-27.095L53.926,22H55a1,1,0,0,0,1-1V17A1,1,0,0,0,55,16ZM41,16H39V2h2Z" /><path d="M39.738,34.353A1,1,0,0,0,38.977,34h-.04a.983.983,0,0,0-.417.092c-.493.226-1,.43-1.5.633V21a1,1,0,0,0-1-1H33.013V19a1,1,0,0,0-1-1H29.006V17a1,1,0,0,0-1-1H19.994a1,1,0,0,0-1,1v1H15.987a1,1,0,0,0-1,1v1H11.981a1,1,0,0,0-1,1V34.744c-.521-.208-1.04-.419-1.547-.652a1.078,1.078,0,0,0-1.219.261,1,1,0,0,0-.226.808l4.566,28a1,1,0,0,0,.987.84H34.411a1,1,0,0,0,.987-.839l4.566-28A1,1,0,0,0,39.738,34.353ZM33.013,22h2.006V35.451c-.3.1-.595.2-.9.3-.381.116-.748.22-1.108.318Zm-4.007-2h2.007V36.537c-.146.029-.286.06-.438.088l-.3.055c-.388.068-.792.134-1.228.2l-.043.005ZM25,18h2.006V37.1c-.155.017-.311.038-.467.05l-.026,0c-.274.02-.535.036-.784.05h-.022c-.246.013-.481.024-.707.031Zm-4.006,1V18H23V37.238c-.47-.015-.974-.043-1.532-.082l-.027,0c-.15-.011-.3-.031-.447-.047Zm-4.007,2V20h2.007V36.888l-.091-.01c-.432-.063-.833-.129-1.222-.2l-.282-.052c-.141-.026-.274-.055-.412-.083Zm-4.006,1h2.006V36.077c-.373-.1-.755-.209-1.155-.331-.286-.087-.567-.186-.851-.28Zm20.58,40H14.393l-.979-6H34.539Zm1.19-8h-21.5L11.67,44h8.675l2.937,3.029a1.029,1.029,0,0,0,1.436,0L27.655,44H36.33Zm2.07-12H27.232a1,1,0,0,0-.717.3L24,44.9,21.485,42.3a1,1,0,0,0-.717-.3H11.132l-.878-5.385.316.125c.357.139.718.268,1.08.394.53.185,1.063.363,1.6.526.449.136.88.26,1.3.372s.847.219,1.279.319l.1.025c.8.178,1.676.335,2.68.48.28.041.563.069.846.1l.838.092c.33.039.661.079,1,.1h0c1.009.073,1.851.107,2.668.107h.082c.79,0,1.608-.034,2.612-.106.357-.026.708-.068,1.059-.111l.8-.088c.274-.026.547-.053.817-.093,1-.146,1.881-.3,2.68-.48l.218-.054c.8-.184,1.6-.4,2.463-.662.556-.168,1.1-.351,1.65-.543.345-.122.691-.244,1.034-.377l.314-.125Z" /></g></svg>
                                    Food
                                </span>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label className="free-label four col">
                            <input type="radio" name="radio1" id="free3" value="6414589986086c81caa10c9f" onChange={e => setQuery(e.target.value)}></input>
                            <div className="front-end box">
                                <span>
                                    <svg viewBox="0 0 446.02 483.84" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><title /><g data-name="Capa 2" id="Capa_2"><g id="Outline"><g id="Watermelon"><path className="cls-1" d="M223,0,0,401.81l6,4.44c1.06.8,26.6,19.68,66.12,38.79,66.32,32.06,118.68,38.8,150.92,38.8,58.42,0,114.32-21.1,150.93-38.8,39.51-19.11,65.05-38,66.12-38.79l6-4.44Zm0,35,172.68,311.1c-39.2,23.48-104.42,62.36-172.67,62.36S89.54,369.61,50.35,346.13Zm0,431.81c-90.85,0-177.54-54.22-200.82-70L42.09,361C82.85,385.41,150.36,425.49,223,425.49S363.17,385.41,403.93,361l19.9,35.86C400.58,412.63,314,466.84,223,466.84Z" /><path className="cls-1" d="M264.92,283.25c.13,1.75,7.1,14.31,10.7,20.7a2,2,0,0,0,3.65-.27c2.62-6.86,7.64-20.31,7.51-22.06a11,11,0,1,0-21.86,1.63Z" /><path className="cls-1" d="M252.28,231.66c6-4.24,17.66-12.61,18.53-14.14a11,11,0,0,0-19.07-10.82c-.87,1.53-2.07,15.84-2.64,23.16A2,2,0,0,0,252.28,231.66Z" /><path className="cls-1" d="M222.16,152.35c4.43-5.86,13-17.37,13.37-19.09a11,11,0,0,0-21.45-4.53c-.36,1.72,2.83,15.72,4.5,22.86A2,2,0,0,0,222.16,152.35Z" /><path className="cls-1" d="M182.48,280.76c.64,1.64,11,11.59,16.31,16.65a2,2,0,0,0,3.41-1.33c.48-7.33,1.34-21.66.7-23.3a11,11,0,1,0-20.42,8Z" /><path className="cls-1" d="M325.73,337.62c5.46-4.91,16.08-14.57,16.76-16.19a11,11,0,1,0-20.18-8.54c-.69,1.62-.23,16,.05,23.3A2,2,0,0,0,325.73,337.62Z" /><path className="cls-1" d="M179.89,221.91c3.77-6.3,11.05-18.67,11.23-20.42a11,11,0,0,0-21.81-2.19c-.18,1.75,4.5,15.32,6.94,22.24A2,2,0,0,0,179.89,221.91Z" /><path className="cls-1" d="M214.85,360.78c6-4.3,17.52-12.81,18.37-14.35A11,11,0,0,0,214,335.83c-.85,1.54-1.89,15.86-2.38,23.18A2,2,0,0,0,214.85,360.78Z" /><path className="cls-1" d="M106.2,305.28c.8,1.56,12.09,10.43,17.89,14.93a2,2,0,0,0,3.26-1.67c-.25-7.33-.83-21.68-1.63-23.24a11,11,0,1,0-19.52,10Z" /></g></g></g></svg>
                                    Fruit
                                </span>
                            </div>
                        </label>
                    </div>

                </div>
                <div className="buttondiv">
                    <button className="startbutton"><Link to="/GuessWhat/game?" state={query} id='buttonlink'>Start</Link></button>
                </div>
                {/* </form> */}
            </div >
        </div >

    );
};

export default Start;


