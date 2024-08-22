import {useState} from 'react';

import { DashboardContext } from './context';
import Dashboard from './components/Dashboard';

export interface User {
    isSubscribed: string;
    name: string;
}

interface DemoProps {}

export default function Demo({}: DemoProps) {
    const [user] = useState<User>({
        isSubscribed: 'true',
        name: 'You',
    });

    return (
        <DashboardContext.Provider value={user}>
            <div>
                <Dashboard />
            </div>
        </DashboardContext.Provider>
        
    );
}