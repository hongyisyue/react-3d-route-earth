import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import { MyLocations, geoToXYZ } from "./data/locations";
import { MapDot } from "./mapDot";
import { MovingPath } from "./movingPath";
import { TextPole } from "./textPole";
import { DefaultSettings } from "./data/default";
import { Earth } from "./earth";
import { Space } from "./space";

export function Demo(params) {

    const [isEnter, setEnter] = useState(false);
    const [time, setTime] = useState(0.0);

    const earth_r = DefaultSettings.earth_r || 1.6;

    /** Locations */
    const beijing_xyz = geoToXYZ(earth_r, MyLocations.beijing);
    const vancouver_xyz = geoToXYZ(earth_r, MyLocations.vancouver);
    const toronto_xyz = geoToXYZ(earth_r, MyLocations.toronto);
    const la_xyz = geoToXYZ(earth_r, MyLocations.la);
    const tokyo_xyz = geoToXYZ(earth_r, MyLocations.tokyo);
    const cancun_xyz = geoToXYZ(earth_r, MyLocations.cancun);
    const berlin_xyz = geoToXYZ(earth_r, MyLocations.berlin);
    const dubai_xyz = geoToXYZ(earth_r, MyLocations.dubai);

    /** Animation */
    useFrame(() => {
        setTime(time + 0.2);
    });

    return (
        <Space
            content={
                <span>
                    <Earth
                        isEnter={isEnter}
                        content={
                            <span>
                                <MapDot dot={beijing_xyz}></MapDot>
                                <TextPole
                                    dot={beijing_xyz}
                                    text={'BEIJING'}
                                    rotate={1.2}
                                    mouseEnterEvent={(e) => setEnter(true)}
                                    mouseLeaveEvent={(e) => setEnter(false)}
                                    mouseDownEvent={(e) => { window.open("https://www.google.com/maps/place/Xiamen,+Fujian,+China/@24.4788776,117.7973602,11z/data=!3m1!4b1!4m6!3m5!1s0x34148379e5bfeb27:0x28a0670a9668d056!8m2!3d24.4795099!4d118.0894799!16zL20vMDEyNmMz?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"); }}
                                ></TextPole>

                                <MapDot dot={tokyo_xyz}></MapDot>
                                <TextPole
                                    dot={tokyo_xyz}
                                    text={'TOKYO'}
                                    rotate={1.1}
                                    mouseEnterEvent={(e) => setEnter(true)}
                                    mouseLeaveEvent={(e) => setEnter(false)}
                                ></TextPole>

                                <MapDot dot={cancun_xyz}></MapDot>
                                <TextPole
                                    dot={cancun_xyz}
                                    text={'CANCUN'}
                                    rotate={0.1}
                                    mouseEnterEvent={(e) => setEnter(true)}
                                    mouseLeaveEvent={(e) => setEnter(false)}
                                ></TextPole>

                                <MapDot dot={la_xyz}></MapDot>
                                <TextPole
                                    dot={la_xyz}
                                    text={'LA'}
                                    rotate={0.1}
                                    mouseEnterEvent={(e) => setEnter(true)}
                                    mouseLeaveEvent={(e) => setEnter(false)}
                                ></TextPole>

                                <MapDot dot={berlin_xyz}></MapDot>
                                <TextPole
                                    dot={berlin_xyz}
                                    text={'BERLIN'}
                                    rotate={1.7}
                                    mouseEnterEvent={(e) => setEnter(true)}
                                    mouseLeaveEvent={(e) => setEnter(false)}
                                ></TextPole>

                                <MapDot dot={dubai_xyz}></MapDot>
                                <TextPole
                                    dot={dubai_xyz}
                                    text={'DUBAI'}
                                    rotate={1.3}
                                    mouseEnterEvent={(e) => setEnter(true)}
                                    mouseLeaveEvent={(e) => setEnter(false)}
                                    mouseDownEvent={(e) => { window.open("https://en.wikipedia.org/wiki/University_of_Saskatchewan") }}
                                ></TextPole>

                                <MapDot dot={toronto_xyz}></MapDot>
                                <TextPole
                                    dot={toronto_xyz}
                                    text={'TORONTO'}
                                    rotate={0.1}
                                    mouseEnterEvent={(e) => setEnter(true)}
                                    mouseLeaveEvent={(e) => setEnter(false)}
                                ></TextPole>

                                <MapDot dot={vancouver_xyz}></MapDot>
                                <TextPole
                                    dot={vancouver_xyz}
                                    text={'VANCOUVER'}
                                    rotate={0.1}
                                    mouseEnterEvent={(e) => setEnter(true)}
                                    mouseLeaveEvent={(e) => setEnter(false)}
                                    mouseDownEvent={(e) => { window.open("https://www.google.com/maps/place/Vancouver,+BC/@49.2577062,-123.2063043,12z/data=!3m1!4b1!4m6!3m5!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375!16zL20vMDgwaDI?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"); }}
                                ></TextPole>

                                <MovingPath
                                    from={beijing_xyz}
                                    to={tokyo_xyz}
                                    frameTime={time}
                                ></MovingPath>
                                <MovingPath
                                    from={vancouver_xyz}
                                    to={cancun_xyz}
                                    frameTime={time}
                                ></MovingPath>
                                <MovingPath
                                    from={vancouver_xyz}
                                    to={la_xyz}
                                    frameTime={time}
                                ></MovingPath>
                                <MovingPath
                                    from={beijing_xyz}
                                    to={berlin_xyz}
                                    frameTime={time}
                                ></MovingPath>
                                <MovingPath
                                    from={beijing_xyz}
                                    to={dubai_xyz}
                                    frameTime={time}
                                ></MovingPath>
                                <MovingPath
                                    from={toronto_xyz}
                                    to={berlin_xyz}
                                    frameTime={time}
                                ></MovingPath>
                                <MovingPath
                                    from={toronto_xyz}
                                    to={berlin_xyz}
                                    frameTime={time}
                                ></MovingPath>
                                <MovingPath
                                    from={vancouver_xyz}
                                    to={toronto_xyz}
                                    frameTime={time}
                                ></MovingPath>
                                <MovingPath
                                    from={beijing_xyz}
                                    to={vancouver_xyz}
                                    frameTime={time}
                                ></MovingPath>
                            </span>
                        }
                    >
                    </Earth>
                </span>
            }>
        </Space>
    );
}