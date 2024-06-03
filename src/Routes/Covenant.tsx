import "../Styles/Covenant.css"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Outlet, Link, useNavigate, useParams } from "react-router-dom"
import { PacmanLoader } from "react-spinners";
import { Loading } from "./Loading";
import { Footer } from "./Footer";
import { School } from "./School";
import { Schools2 } from "./Schools2";
import { useQuery } from "react-query";
export const Covenant = () => {
    const params = useParams()

    const navigate = useNavigate()
    const handlenavigateunder = () => {
        navigate(`/university/${params.universityid}/undergraduate`);
    }
    const handlenavigatepost = () => {
        navigate(`/university/${params.universityid}/postgraduate`);
    }
    const handlenavigatecontact = () => {
        navigate(`/university/${params.universityid}/contact`);
    }
    interface OverviewItem {
        _id: string;
    }

    interface SearchResult {
        name: string;
        websiteLink: string;
        overview: OverviewItem[];
        shortName: string,
        address: string,
        yearFounded: string;
        ownership: string;
        location: string;
    }
    const [searchs, setsearchs] = useState<SearchResult>({ name: '', websiteLink: "", overview: [], shortName: "", address: "", yearFounded: "", ownership: "", location: "" });
    const [school, setschool] = useState([])
    const [loading, setLoading] = useState(true);
    const [showschool, setshowschool] = useState(true)
    const [over, setover] = useState([])
    const [text, settext] = useState([])
    const accesstoken = localStorage.getItem("token")
    useEffect(() => {
        if (!accesstoken) {
            navigate("/signin")
        }
    }, [accesstoken])
    useEffect(() => {
        const fetchdescribe = async () => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/description`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstoken}`,
                    }
                })
                let results: React.ReactNode = Array.isArray(searchs);
                const result = await res.json()
                console.log(result)
                console.log(result.overview)
                setover(result.overview)
                setsearchs(result)
                setschool(result.schoolNames)
                setLoading(false)
                if (!res.ok) {
                    throw new Error("error occured in the dexcription")
                }
                if (!searchs) {
                    console.log("No data found for this university")
                    setLoading(false)
                }
                console.log("the results are", results)
            }
            catch (error) {
                console.log("description error", error)
                setLoading(false)
            }
        }
        fetchdescribe()
    }, [])

    useEffect(() => {
        const fetchprograms = async () => {
            try {
                const res = await fetch(`https://almaquin.onrender.com/api/university/${params.universityid}/undergraduate`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${accesstoken}`,
                    }
                })
                const result = await res.json()
                console.log(result)
                settext(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchprograms()

    }, [])

    if (!searchs) {
        console.log("No data found for this universityvc c nvnb")
        setLoading(false)
    }
    if (loading) {
        return <div> <Loading /></div>;
    }

    return (
        <div>
            {
                showschool ? (
                    <motion.div className="Covenant_container"
                    >
                        <div id="firsts"></div>
                        <React.Fragment>

                            <div className="Covenant_container8">
                                <div></div>
                                <div className="Covenant_container8a">
                                    <div> <img src="/edit button.svg" alt="wearfs" /></div>
                                    <div> <img src="/Vector (4).svg" alt="ewqarsd" /></div>
                                </div>
                            </div>
                            <div className="Covenant_container2" onClick={() => setshowschool(false)}>
                                <div className="Covenant_container3">
                                    <div><img src="/Menu button.svg" alt="zsjhjdfn.lS" /></div>
                                    <div className="Covenant_container_input">  <input type="text" placeholder="Search here" /></div>
                                </div>
                                <div style={{ cursor: "pointer" }}><img src="/Search.svg" alt="whasf" /></div>
                            </div>
                            <div className="Covenant_container4">
                                {/* <div className="images">
                                    <img src="/download.png" alt="sdveds" />
                                </div> */}
                                <div className="container5">
                                    <h3>{searchs.name}, <h5 style={{ fontFamily: "Habibi" }}>({searchs.shortName})</h5></h3>
                                    <div> <p style={{ maxWidth: "100%" }}>{searchs.address}</p></div>
                                    <div className="Covenant_container6">
                                        {/* <div className="Container6"><img src="/Vector.svg" alt="gfgdf" /><div>{searchs.ownership}</div></div> */}
                                        {/* <div className="Container6"><img src="/Vector (1).svg" alt="2q3ref" /> <div> covenant.edu.ng</div></div> */}
                                    </div>
                                    <div className="Covenant_containers6"><img src="/Vector (2).svg" alt="rthg4r" /> <div className="tim">{searchs.yearFounded}</div></div>
                                </div>

                            </div>
                            {/* <p>Official colour :Crimson</p>
                                        <p>Alumni symbol</p>
                                        <p>Accreditation: NUC</p>
                                        <p>Campus: Decentralized</p>
                                        <p>Motto</p> */}
                            {/* <p>Previous name</p> */}

                            <div className="Covenant_container7z">
                                <div className="Covenant_container7">

                                    <div className="Covenant_container7a">
                                        {
                                            over.map((overs: {
                                                name: any,
                                                description: any,
                                                _id: any
                                            }) => (
                                                <div key={overs._id} style={{ display: "flex", alignItems: "center", margin: "2vw 0rem" }}>
                                                    <div>{overs.name}: {overs.description}
                                                    
                                                    </div>
                                                    
                                                </div>
                                            ))
                                        }
                                           <div style={{ textAlign: "center", position: "relative",fontWeight:"400", top: "0vw", margin: "0vw" ,fontSize:"3.4vw"}}>{searchs.ownership}</div>
                                    </div>

                                    <div className="Covenant_container7b">
                                        {/* <p>{searchs.location}</p> */}
                                     
                                        <p>Population UG</p>
                                        <p>Population PG</p>
                                        <p style={{ letterSpacing: "1px" }}>{searchs.shortName}</p>
                                        <p>Acceptance rate   (%)</p>
                                    </div>
                                </div>
                                <div className="gotobtn"><button><li><a href={searchs.websiteLink}>{searchs.name}'s website 👉</a></li></button></div>

                            </div>
                            <div className="Covenant_img">
                                <div className="Covenant_img1">
                                    <div><h2>Undergraduate</h2></div>
                                    <div className="imi"><div className="imi" onClick={handlenavigateunder}><h3>Learn more  </h3><div className="imi2"> <img src="/Arrow (1).svg" alt="dfDF" /></div></div></div>
                                </div>
                                <div className="Covenant_img1">
                                    <div><h2>Postgraduate</h2></div>
                                    <div className="imi" ><div className="imi" onClick={handlenavigatepost}><h3>Learn more  </h3><div className="imi2"><img src="/Arrow (1).svg" alt="dfDF" className="imi2" /></div></div></div>
                                </div>
                                <div className="Covenant_img1">
                                    <div><h2>Contact Us</h2></div>
                                    <div className="imi" onClick={handlenavigatecontact}><div className="imi" ><h3>Learn more  </h3><div className="imi2"><img src="/Arrow (1).svg" alt="dfDF" className="imi2" /></div></div></div>
                                </div>
                            </div>

                            <div className="Covenant-colleges">

                                <h1>Colleges</h1>

                                <div className="Covenant-collegesa">

                                    {
                                        text.length > 0 && text.map((program: {
                                            name: React.ReactNode;
                                            _id: any
                                        }) => (
                                            <Link to={`/university/${params.universityid}/${program._id}`} className="omots" key={program._id}>
                                                <div className="omot">
                                                    <div className="ot">
                                                        <h3>{program.name}</h3>
                                                        <div className="ire">
                                                            <span>See departments </span>
                                                            <div className="anya">
                                                                <img src="/Vector (3).svg" alt="rrwadf" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div><img src="/Rectangle 16.svg" alt="gfnhmb" /></div>
                                            </Link>

                                        ))
                                    }

                                </div>
                                {/* <div>
                                   {
                                    text.length > 0 && text.map((program:{
                                        name:React.ReactNode;
                                        _id: any;
                                        overview:React.ReactNode;
                                        description:React.ReactNode;
                                        websiteLink:React.ReactNode;
                                        image:React.ReactNode;
                                        logo:React.ReactNode;
                                    }) => (
                                        <div>
                                            <div className="Covenant-collegesa">
                                                <div>
                                                    <div><h3>{program.name}</h3>
                                                        <div className="ire">
                                                            <span>See departments </span>
                                                            <div className="anya">
                                                                <img src="/Vector (3).svg" alt="rrwadf" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div><img src="/Rectangle 16.svg" alt="gfnhmb" /></div>
                                            </div>
                                        </div>
                                    ))
                                   }
                                </div> */}

                                {/* <div className="Covenant-collegesa">
                        <div>
                            <div><h3>College of Management and <br></br>Social Science(CMSS)</h3>
                                <div className="ire">
                                    <span>See departments </span>
                                    <div className="anya">
                                        <img src="/Vector (3).svg" alt="rrwadf" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div><img src="/Rectangle 16.svg" alt="gfnhmb" /></div>
                    </div>
                    <div className="Covenant-collegesa">
                        <div>
                            <div><h3>College of Engineering <br></br>(COE)</h3>
                                <div className="ire">
                                    <span>See departments </span> 
                                    <div className="anya">
                                        <img src="/Vector (3).svg" alt="rrwadf" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div><img src="/Rectangle 16.svg" alt="gfnhmb" /></div>
                    </div>
                    <div className="Covenant-collegesa">
                        <div>
                            <div><h3>College of Science and <br></br>Technology(CST)</h3>
                                <div className="ire">
                                    <span>See departments </span>
                                    <div className="anya">
                                        <img src="/Vector (3).svg" alt="rrwadf" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div><img src="/Rectangle 16.svg" alt="gfnhmb" /></div>
                    </div> */}
                            </div>
                        </React.Fragment>

                        <Footer />
                    </motion.div>
                ) : (<Schools2 setshowschool={setshowschool} />)
            }
        </div>
    )
}
