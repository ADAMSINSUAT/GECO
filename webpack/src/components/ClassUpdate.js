import React, { Component } from "react";
import { connect} from "react-redux";
import { onUpdateClass } from '../action'
import { slice, findIndex } from "lodash";

class ClassUpdate extends Component {
    handleUpdate = (id) => {
        const empDataList = _.slice(this.props.ClassEmpData.map((data) => data));

        const index = findIndex(empDataList, function (data) {
            return data.id == id;
        })
        let empArray;

        if (id == 1) {
            empArray = {
                id: id,
                name: "Adam Keizzer G. Sinsuat",
                age: 25,
                dob: new Date(`08/26/1999`).toDateString(),
                email: "adamkeizzersinsuat@gmail.com",
                occ: "MS Tech Solutions Developer",
                contactno: "09918634051"
            }
            empDataList[index] = empArray;
        }
        if (id == 2) {
            empArray = {
                id: id,
                name: "John Michael G. Rasalan",
                age: 25,
                dob: new Date(`08/26/1986`).toDateString(),
                email: "thiefmage34@gmail.com",
                occ: "ASP.net Developer",
                contactno: "09797791868"
            }
            empDataList[index] = empArray;
        }
        if (id == 3) {
            empArray = {
                id: id,
                name: "Axela Mae E. Alonde",
                age: 25,
                dob: new Date(`07/18/1997`).toDateString(),
                email: "axelamae.alonde@gmail.com",
                occ: "ASP.net Developer",
                contactno: "09778191868"
            }
            empDataList[index] = empArray;
        }
        if (id == 4) {
            empArray = {
                id: id,
                name: "Leah S. Solamillo",
                age: 28,
                dob: new Date(`07/18/1995`).toDateString(),
                email: "leah.solamillo@gmail.com",
                occ: "ASP.net Developer",
                contactno: "09778197890"
            }
            empDataList[index] = empArray;
        }
        this.props.updateData(empDataList)
    }
    render() {
        return (
            <div>
                <table style={{ border: "2px solid forestgreen", width: "800px", height: "200px" }}>
                    <thead>
                        <tr>
                            <th style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}>Name</th>
                            <th style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}>Age</th>
                            <th style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}>Date of Birth</th>
                            <th style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}>Occupation</th>
                            <th style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}>Email</th>
                            <th style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}>Contact Number</th>
                            <th style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.ClassEmpData.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td style={{ textAlign: "center", borderBottom: "1px solid black", borderRight: "1px solid black" }}>{data.name}</td>
                                    <td style={{ textAlign: "center", borderBottom: "1px solid black", borderRight: "1px solid black" }}>{data.age}</td>
                                    <td style={{ textAlign: "center", borderBottom: "1px solid black", borderRight: "1px solid black" }}>{data.dob}</td>
                                    <td style={{ textAlign: "center", borderBottom: "1px solid black", borderRight: "1px solid black" }}>{data.occ}</td>
                                    <td style={{ textAlign: "center", borderBottom: "1px solid black", borderRight: "1px solid black" }}>{data.email}</td>
                                    <td style={{ textAlign: "center", borderBottom: "1px solid black", borderRight: "1px solid black" }}>{data.contactno}</td>
                                    <td><button style={{ textAlign: "center", borderBottom: "1px solid black", borderRight: "1px solid black" }} onClick={(e) => this.handleUpdate(data.id)}>Change Data</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ClassEmpData: state.ClassEmpData,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (val) => dispatch(onUpdateClass(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassUpdate);