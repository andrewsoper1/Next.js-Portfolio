'use client'

export default function Resume() {
    const onButtonClick = () => {
        const pdfUrl ="Andrew-Soper-Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Andrew-Soper-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    
        
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-grey">
            <div className="w-full max-w-3xl p-8 pb-20 gap-16 sm:p-20 bg-white shadow-md rounded">
            <h3 className="text-2xl font-bold mb-4 text-center">Development Proficiencies</h3>
            <div className="mb-4 border border-white p-2">
            <span className="block text-lg mb-2 text-center font-bold">Skilled in: </span> 
                <div className="flex justify-center">
                    <ul className="list-disc list-inside pl-12 text-left">
                        <li>HMTL</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Node.JS</li>
                        <li>SQL</li>
                        <li>APIs</li>
                        <li>React</li>
                        <li>GraphQl</li>
                        <li>MERN</li>
                        <li>And more to come!</li>
                    </ul>
                </div>
            </div>
                <h5 className="text-lg mb-4 border border-white p-2 text-center">Click on the button below to download my Resume:</h5>
                <div className="flex justify-center">
                    <button onClick={onButtonClick} className="p-2 bg-teal-500 text-white rounded text-center">
                        Download Resume
                    </button>
                </div>
            </div>     
        </div>
    )
}