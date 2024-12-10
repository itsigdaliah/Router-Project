import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { fetchReports } from '../api';

const ReportMap = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const getReports = async () => {
            try {
                const { data } = await fetchReports();
                setReports(data);
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };
        getReports();
    }, []);

    return (
        <MapContainer center={[4.05, 9.7]} zoom={12} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {reports.map((report) => (
                <Marker key={report._id} position={[report.location.latitude, report.location.longitude]}>
                    <Popup>
                        <strong>{report.type}</strong>
                        <p>{report.description}</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default ReportMap;
