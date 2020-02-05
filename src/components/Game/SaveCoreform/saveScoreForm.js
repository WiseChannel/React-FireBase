import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useFirebase} from "../../FireBase/FireBaseContext";

export default function SaveScoreForm({score, scoreSaved}) {
    const [username, setUsername] = useState('');
    const firebase = useFirebase()
    console.log(firebase)

    const onUsernameChange = (e) => {
        const updateUsername = e.target.value
        setUsername(updateUsername)
    }

    const saveHighScore = (e) => {
        e.preventDefault()
        const record = {
            name: username,
            score
        }
        firebase.scores().push(record, () => {
            console.log('Score save in FireBaseDB')
            scoreSaved()
        })
        console.log(record)
    }

    return(
        <div>
            <h1>{score}</h1>
            <form onSubmit={saveHighScore}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder='name'
                    value={username}
                    onChange={onUsernameChange}
                />
                <button type="submit" className='btn' disabled={!username}>Save</button>
            </form>
            <Link to='/' className='btn'>Go Home</Link>
        </div>
    )
}
