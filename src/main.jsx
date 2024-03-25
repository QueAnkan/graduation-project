import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { RouterProvider } from 'react-router-dom'
import router from './RoutesConfig'
import './base.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RecoilRoot>
            <RouterProvider router = {router} />
        </RecoilRoot>
    </React.StrictMode>,
)
