import React, { useState } from 'react';
import { createReport } from '../api';

const ReportForm = () => {
    const [formData, setFormData] = useState({
        type: '',
        description: '',
        location: { latitude: '', longitude: '' },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createReport(formData);
            alert('Report submitted successfully!');
        } catch (error) {
            console.error('Error submitting report:', error);
            alert('Failed to submit report. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type (e.g., Traffic, Accident)"
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                required
            />
            <textarea
                placeholder="Description"
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Latitude"
                onChange={(e) =>
                    setFormData({ ...formData, location: { ...formData.location, latitude: parseFloat(e.target.value) } })
                }
                required
            />
            <input
                type="number"
                placeholder="Longitude"
                onChange={(e) =>
                    setFormData({ ...formData, location: { ...formData.location, longitude: parseFloat(e.target.value) } })
                }
                required
            />
            <button type="submit">Submit Report</button>
        </form>
    );
};

export default ReportForm;
