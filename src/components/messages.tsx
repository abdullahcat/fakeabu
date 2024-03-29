import { useState } from "react";

function MessagesButton() {
    const [messageCount] = useState(3); // Replace with your actual message count

    const handlemessagesClick = () => {
        // Handle click action for messages
        // For example, open a messages panel or perform any other relevant action
        console.log('messages clicked!');
    };

    return (
        <div className="relative">
            <button
                className="flex items-center focus:outline-none"
                onClick={handlemessagesClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 38 32" id="envelope"><g fill="#fff"><path d="M20.06.413c-.58-.533-1.539-.533-2.119 0L.253 11.084a.501.501 0 0 0-.242.428v18.922C.011 31.297.717 32 1.585 32h34.83c.868 0 1.574-.703 1.574-1.566V11.512a.501.501 0 0 0-.242-.428L20.06.413zm-1.556.827a.527.527 0 0 0 .095-.074.566.566 0 0 1 .801 0 .564.564 0 0 0 .095.074l17.227 10.394-12.478 7.436a.501.501 0 0 0 .511.86L37 12.64v17.757L20.065 19.131c-.538-.429-1.594-.429-2.096-.025L1 30.392V12.64l12.244 7.29a.5.5 0 0 0 .512-.86L1.277 11.634 18.504 1.24zM36.09 31H1.902l16.656-11.086c.173-.138.712-.137.919.025L36.09 31z"></path><path d="M6.5 13h25a.5.5 0 0 0 0-1h-25a.5.5 0 0 0 0 1z"></path></g></svg>

                {messageCount > 0 && (
                    <span className="bg-blue-400 text-white rounded-full w-4 h-4 flex items-center justify-center absolute top-0 left-0 -mt-1 -ml-1">
                        {0}
                    </span>
                )}
            </button>
        </div>
    );
}

export default MessagesButton;
