import { useState } from 'react';
import './App.css'
import InputInfSide from './components/InputInfSide/InputInfSide'
import ResumePreview from './components/ResumePreview/ResumePreview'
import { PersonalInfo } from './types/personalInfo';

function App() {

    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
        name: '',
        lastName: '',
        jobPosition: '',
        photo: null,
        about: '',
    })

    const updatePersonalInfo = (key: keyof PersonalInfo, value: any) => {
        setPersonalInfo(prevInfo => ({...prevInfo, [key]: value}))
    }
    
    return (
        <div className="app">
            <InputInfSide updatePersonalInfo={updatePersonalInfo} />
            <ResumePreview {...personalInfo}/>
        </div>
    )
}

export default App
