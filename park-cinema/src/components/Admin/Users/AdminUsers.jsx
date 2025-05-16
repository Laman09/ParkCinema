import React, { useEffect, useState } from "react";
import "./AdminUsers.css";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    const deleteUser = (email) => {
        const confirmDelete = window.confirm("İstifadəçini silmək istədiyinizə əminsiniz?");
        if (confirmDelete) {
            const updatedUsers = users.filter(user => user.email !== email);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            setUsers(updatedUsers);
        }
    };

    return (
        <div className="users">
            <h2>Qeydiyyatdan Keçmiş İstifadəçilər</h2>
            {users.length === 0 ? (
                <p 
                    style={{color:"#d52b1e", textAlign:"center", padding:"20px", fontSize:"20px"}}
                >
                    Hələ qeydiyyatdan keçmiş istifadəçi yoxdur.
                </p>
            ) : (
                <div className="userTable">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ad</th>
                                <th>Soyad</th>
                                <th>Email</th>
                                <th>Telefon</th>
                                <th>Doğum tarixi</th>
                                <th>Cins</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.number}</td>
                                    <td>{user.date}</td>
                                    <td>{user.gender}</td>
                                    <td style={{border:"none"}}>
                                        <button onClick={() => deleteUser(user.email)}>Sil</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminUsers;
