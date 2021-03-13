import React, { useState } from 'react';

const Login = (props) => {

    const [id, setId] = useState();
    const [resid, setResid] = useState();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState('');
    const [userid, setUserid] = useState();
    const [status, setStatus] = useState(false);



    const Loginhandler = (e) => {
        e.preventDefault();
        fetch("http://localhost:3005/login", {

            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
                "content-Type": "application/json"
            },
        }).then((r) => {

            r.json().then((result) => {

                if (result.status === 'success') {
                    setStatus(true);
                    localStorage.setItem('data', JSON.stringify({

                        'token': result.token,

                    }))

                    setResid(result.data.id);
                    setBody(result.data.body);
                    setUserid(result.data.userId);
                    setTitle(result.data.title);

                } else {

                    props.history.push('/error')

                }
            })



        })
    }

    const logout = ()=>{
       
        localStorage.removeItem('data');
        setStatus(false);
        props.history.push('/');
}


    return


    {
        status ?


           
        

            <>
                <h1>Login Successfull</h1>
                <h1>Id:{id}</h1>
                <h2>userId:{userid}</h2>
                <h3>Body:{body}</h3>
                <p>Title:{title}</p>

             <button type="button" onClick ={()=>{logout()}}>Logout</button>


            </>
            :
            <>
            <h1>Please Enter your Id for Login</h1>
            <form onSubmit={(e) => { Loginhandler(e) }}>
                <label>Id</label>
                <input type="number" onChange={(ev) => { setId(ev.target.value) }} />
            </form>
        </>

    }


}
export default Login;