import React,{useState, useEffect} from "react";
import './App.css';

function App(){
    const [search, setSearch] = useState('')
    const [container, setContainer] = useState([])
    const [actual, setActual] = useState('')

    useEffect(() => {
        fetchMe()
    },[actual])

    const fetchMe = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '71ac730266msh862d66a8b856303p13817fjsn83259dc99284',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };
        
        fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${search}`, options)
            .then(response => response.json())
            .then(data => setContainer(data.d))//setContainer(data.d)
            .catch(err => console.error(err));
    }

    const onSubmitValue = e => {
        e.preventDefault()
        setActual(search)
    }

    const onChangevalue =(e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="App">
            <form onSubmit={onSubmitValue}>
                <input type='text' value={search} onChange={onChangevalue}/>
                <button type="submit">Submit</button>
            </form>     

            <div className="element">
            {container.map((item,index) => {
                return (
                    <div key={index} className='element-div'>
                    <img src={item.i.imageUrl} alt="" />
                    <p>{item.l}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}


export default App;