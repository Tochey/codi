import React, {useState, useEffect} from "react";
import axios from "axios";
import "./main.css"

const Loader = () => {
    // return  <div className="loader"></div>
    return <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
    </div>
}
const Main = () => {
    const [payload, setPayload] = useState([]);
    const [Loading, setLoading] = useState(true)


    useEffect(() => {
      axios.get("/payload").then((e) =>{ setPayload(e.data); setLoading(false); })
    }, []);

    return (

        Loading ? <Loader/> :
            <body>
            <div className="table-title">
            </div>
            <table className="table-fill">
                <thead>
                <tr>
                    <th className="text-left">Date/Time</th>
                    <th className="text-left">Sender</th>
                    <th className="text-left">Messages</th>
                </tr>
                </thead>
                <tbody className="table-hover">
                {payload.map((e) =>
                                <tr>
                                    <td>{e.date + " " + e.time}</td>
                                    <td>{e.sender}</td>
                                    <td>{e.body}</td>
                                </tr>
                            )}
                </tbody>
            </table>


            </body>





    )

}

export default Main