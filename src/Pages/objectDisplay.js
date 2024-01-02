import { useState } from "react";

function ObjectDisplay() {
    var data = {
        "id": 4,
        "active": false,
        "stages": 2,
        "boosters": 0,
        "cost_per_launch": 7000000,
        "success_rate_pct": 0,
        "first_flight": "2021-12-01",
        "country": "United States",
        "company": "SpaceX",
        "height": {
            "meters": 118,
            "feet": 387
        },
        "diameter": {
            "meters": 9,
            "feet": 30
        },
        "mass": {
            "kg": 1335000,
            "lb": 2943000
        },
        "payload_weights": [
            {
                "id": "leo",
                "name": "Low Earth Orbit",
                "kg": 150000,
                "lb": 330000
            },
            {
                "id": "mars",
                "name": "Mars Orbit",
                "kg": 100000,
                "lb": 220000
            },
            {
                "id": "moon",
                "name": "Moon Orbit",
                "kg": 100000,
                "lb": 220000
            }
        ],
        "first_stage": {
            "reusable": true,
            "engines": 37,
            "fuel_amount_tons": 3300,
            "burn_time_sec": null,
            "thrust_sea_level": {
                "kN": 128000,
                "lbf": 28775544
            },
            "thrust_vacuum": {
                "kN": 138000,
                "lbf": 31023634
            }
        },
        "second_stage": {
            "reusable": true,
            "engines": 6,
            "fuel_amount_tons": 1200,
            "burn_time_sec": null,
            "thrust": {
                "kN": 1957,
                "lbf": 440000
            },
            "payloads": {
                "option_1": "Spaceship",
                "option_2": "composite fairing",
                "composite_fairing": {
                    "height": {
                        "meters": null,
                        "feet": null
                    },
                    "diameter": {
                        "meters": null,
                        "feet": null
                    }
                }
            }
        },
        "engines": {
            "number": 37,
            "type": "raptor",
            "version": "",
            "layout": null,
            "isp": {
                "sea_level": 330,
                "vacuum": 380
            },
            "engine_loss_max": null,
            "propellant_1": "liquid oxygen",
            "propellant_2": "liquid methane",
            "thrust_sea_level": {
                "kN": 1780,
                "lbf": 400000
            },
            "thrust_vacuum": {
                "kN": 1960,
                "lbf": 440000
            },
            "thrust_to_weight": 107
        },
        "landing_legs": {
            "number": 6,
            "material": "stainless steel"
        },
        "flickr_images": [
            "https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg",
            "https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg",
            "https://live.staticflickr.com/65535/48954138922_9c42173f08_b.jpg",
            "https://live.staticflickr.com/65535/48953947006_313f01ec93_b.jpg"
        ],
        "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Starship",
        "description": "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.",
        "rocket_id": "starship",
        "rocket_name": "Starship",
        "rocket_type": "rocket"
    }

    const DataList = ({arr})=>{
        let keys = Object.keys(arr);
        return keys.map((i)=>{
            if(typeof arr[i] === 'object'){
                if(Array.isArray(arr[i])){
                    return <span className="key">{i}</span>
                }
                else{
                    return(
                        <>
                            <span className="key">{i}{console.log(arr[i])}</span>
                            {DataList(arr[i])}
                        </>
                    
                    )
                }
            }
            else{
                return(
                    <div>
                        <span className="key">{i}</span>
                        <span className="value">{arr[i]}</span>
                    </div>
                    )
                }
        })
    }

    return(
    <div className="main-container">
        <h1>Details</h1><br></br>
        <div>
        <DataList arr={data}/>
        </div>
    </div>
    
    )
}
  
  export default ObjectDisplay;
  