import React, {useState, useEffect} from "react";
import axios from "axios";
import "./infopage.css"

const InfoPage = () => {
    const [payload, setPayload] = useState([]);


    useEffect(() => {
      axios.get("/payload").then((e) =>{ setPayload(e.data); })
    }, []);

    return (
            <body>
            <div className="table-title">
            </div>
            <table className="table-fill">
                <thead>
                <tr>
                    {/*<th className="text-left">Date/Time</th>*/}
                    <th className="text-left">Sender</th>
                    <th className="text-left">Messages</th>
                </tr>
                </thead>
                <tbody className="table-hover">
                {payload.map((e) =>
                                <tr>
                                    {/*<td>{e.date + " " + e.time}</td>*/}
                                    <td>{e.sender}</td>
                                    <td>{e.body}</td>
                                </tr>
                            )}
                </tbody>
            </table>


            </body>





    )

}

export default InfoPage