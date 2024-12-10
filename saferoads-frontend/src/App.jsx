import React from 'react';
import ReportForm from './components/ReportForm';
import ReportMap from './components/ReportMap';

const App = () => {
    return (
        <div>
            <h1>SafeRoads CM</h1>
            <ReportForm />
            <ReportMap />
        </div>
    );
};

export default App;
