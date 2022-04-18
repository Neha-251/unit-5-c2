import {useState, useEffect} from "react";


function ShowStudent({data, setData}){

    const [text, setText] = useState("");

    return (
        <div className="container">
            <table border="1">

                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Thenth Score</th>
                        <th>Twlfth Score</th>
                        <th>Preferred Batch</th>
                    </tr>
                </thead>
                <tbody>

                {data.map((student, index) => {
                    return (
                        <tr key={student.id} className="studentDetails">

                            <td>{student.id}</td>
                            <td className="">{student.first_name}</td>
                            <td>{student.last_name}</td>
                            <td>{student.email}</td>
                            <td>{student.gender}</td>
                            <td>{student.age}</td>
                            <td>{student.tenth_score}</td>
                            <td>{student.twelth_score}</td>
                            <td>{student.preferred_branch}</td>


                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export {ShowStudent};