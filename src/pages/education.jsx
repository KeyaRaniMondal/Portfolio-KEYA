const Education = () => {
    return (
        <div id="edu" >
            <h2 className="text-5xl text-white mt-28 mb-20">Educational Qualification</h2>
            <ul className=" text-left timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white items-start -ml-[150px] w-[1000px]">

                <li className="flex items-start">
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                        <time className="font-mono italic">2022-2026</time>
                        <div className="text-lg font-black">BSC</div>
                        Currently I am pursuing BSC in CSE from Varendra University.Currently I am in 7th semester amd average of my CGPA till 6th semester is 3.97
                    </div>
                    <hr />
                </li>

                <li className="items-start">
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                        <time className="font-mono italic">2020</time>
                        <div className="text-lg font-black">HSC</div>
                        In higher secondary school certificate exam I got GPA 5.00 out of 5.00
                    </div>
                    <hr />
                </li>
                <li className="ml-[42px]">
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                        <time className="font-mono italic">2018</time>
                        <div className="text-lg font-black">SSC</div>
                        In secondary school certificate exam I got GPA 5.00 out of 5.00
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    )
}
export default Education


