import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const users = useSelector(state => state.users)
    console.log(users)
  return (
    <div>
        <h1>crud application json server</h1>
        <button className='bg-black text-white'>create +</button>
        <table>
            <thead>
                <tr className='flex justify-center gap-5'>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody className='flex gap-5'>
                {users.map((user , index) =>(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>

                    </tr>))
                }

            </tbody>
        </table>
    </div>
  )
}

export default Home