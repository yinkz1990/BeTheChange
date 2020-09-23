import React,{useState,useEffect} from 'react'
import axios from 'axios'
import OfferComponent from '../LandingPage/OfferComponent';
import NetworkError from '../OtherPages/NetworkError';


const SearchCourse = () => {
    const [search,setSearch] = useState('');
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }

    useEffect(()=>{
        axios.get(`https://app-server20.herokuapp.com/courses?q=${search}`)
        .then(response=>{
            setLoading(false);
            setContents(response.data);
            setError('');  
        }).catch(error=>{

            setLoading(false);
            setContents([]);
            setError(error.message, 'Ooops! something went wrong');
            
        })
    }, [search])
    return ( 
        <> 
            <div className="py-8 bg-purple-100">

            
                <form>
              
                    <input 
                        
                        className="flex block w-11/12 px-4 py-2 mx-4 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none hover:bg-white focus:shadow-outline" 
                        type="text" value={search} 
                        onChange={handleSearch}
                        placeholder='Enter search here'
                    />
                </form>

            </div>
            <div className="py-0 mb-4 text-center bg-purple-100">
                <div className="py-6 text-xl font-bold text-center text-black">Search Result </div>
                
                    {loading ? <div className='flex justify-center my-40 spinner'></div> : null}
                    {error ? <NetworkError /> : null}
                    
                    <div className="md:grid md:grid-cols-3 md:gap-4">
                
                    { contents.length !== 0 ? contents.map((content) =>
                    <OfferComponent 
                            title={content.title}
                            coverImage={content.image}
                            author={content.author} 
                            description={content.description} 
                            video={content.video}
                            key={content.id} 
                            id={content.id} 
                    />)
                   : (<div className="text-center"><h1 className="text-lg">No search result</h1></div>) }
                   
                                                                  
            </div>
            </div>
        </>
     );
}
 
export default SearchCourse;