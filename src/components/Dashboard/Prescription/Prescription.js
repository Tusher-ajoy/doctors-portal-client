import React, { useEffect, useState } from 'react';
import { jsPDF } from "jspdf";
import teeth from '../../../images/whitening.png';

const Prescription = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        fetch('https://hidden-journey-37669.herokuapp.com/allPatients')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])
    // const date = new Date(patients[0].appointmentDate);
    // console.log(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`)
    let date = '';
    const generatePdf = (name, sex, weight, date) => {
        console.log(name, weight, sex, date);
        const doc = new jsPDF();
        doc.setTextColor(23, 210, 180);
        doc.setFontSize(25);
        doc.setFont("helvetica", "bold");
        doc.text("Dr. Caudi", 20, 20);

        doc.setFontSize(15);
        doc.setFont("courier", "normal");
        doc.setTextColor(100);
        doc.text("Teeth Specialist", 20, 30);

        doc.addImage(teeth, "PNG", 170, 15, 25, 25);

        doc.setDrawColor(23, 210, 180);
        doc.setLineWidth(1);
        doc.line(20, 45, 190, 45);


        doc.setFont("times", "normal");
        doc.setTextColor(100);
        doc.text("Name:", 20, 60);
        doc.setLineWidth(0.1);
        doc.setDrawColor(0, 0, 0);
        doc.setLineDash([2.5]);
        doc.line(40, 60, 100, 60);
        doc.setFont("helvetica", "bold");
        doc.text(`${name}`, 40, 57);

        doc.setFont("times", "normal");
        doc.setTextColor(100);
        doc.text("Weight:", 105, 60);
        doc.setLineWidth(0.1);
        doc.setDrawColor(0, 0, 0);
        doc.setLineDash([2.5]);
        doc.line(125, 60, 190, 60);
        doc.setFont("helvetica", "bold");
        doc.text(`${weight}`, 135, 57);

        doc.setFont("times", "normal");
        doc.setTextColor(100);
        doc.text("Sex:", 20, 75);
        doc.setLineWidth(0.1);
        doc.setDrawColor(0, 0, 0);
        doc.setLineDash([2.5]);
        doc.line(38, 75, 100, 75);
        doc.setFont("helvetica", "bold");
        doc.text(`${sex}`, 40, 72);

        doc.setFont("times", "normal");
        doc.setTextColor(100);
        doc.text("Date:", 105, 75);
        doc.setLineWidth(0.1);
        doc.setDrawColor(0, 0, 0);
        doc.setLineDash([2.5]);
        doc.line(121, 75, 190, 75);
        doc.setFont("helvetica", "bold");
        doc.text(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`, 123, 72);


        doc.setDrawColor(23, 210, 180);
        doc.setFillColor(23, 210, 180);
        doc.rect(0, 280, 210, 190, "F");

        doc.setFont("times", "normal");
        doc.text("New York - 101010 Hudson Yards", 105, 290, null, null, "center");

        doc.save("prescription.pdf");
    }
    return (
        <div className='col-md-10 py-4'>
            <h4 style={{ color: '#15D1CC' }}>Prescription</h4>
            {
                patients.length ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr No</th>
                                <th scope="col">Date</th>
                                <th scope="col">Name</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Prescription</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient, index) => (
                                date = new Date(patient.appointmentDate),
                                <tr key={patient._id}>
                                    <th scope="row">{++index}</th>
                                    <td>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.number}</td>
                                    <td><button type="button" className="btn btn-primary" style={{ background: 'rgb(23,210,180)', border: "none", padding: '5px 20px' }} onClick={() => generatePdf(patient.name, patient.gender, patient.weight, date)} >View</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    : <h1>No Patients</h1>
            }
        </div>
    );
};

export default Prescription;