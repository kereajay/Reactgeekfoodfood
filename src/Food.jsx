import React, { useState, useEffect } from 'react'
// import useFoodhook from './Foodhook'

function Food() {
   
    const [fooddata, setFooddata] = useState([])
    const [searchdata, setSearchdata] = useState([])
    const [searchinputval, setSearchinputval] = useState("")
    const [selectedval, setSelectedval] = useState("Indian")
    useEffect(() => {
        fooddatafn();
    }, [selectedval])
    async function fooddatafn() {
        console.log(selectedval);
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedval}`)
        const data = await res.json()
        console.log(data.meals);
        setFooddata(data.meals)
        setSearchdata(data.meals);
        // setDefaultval(data.meals)

    }
    const searchapply = (e) => {
        console.log(searchinputval);
        setSearchinputval(e.target.value)
        const searchfilter = fooddata.filter((item) => {
            // const ajay=item.strMeal.split(" ").join("").toLowerCase();
            return item.strMeal.split(" ").join("").toLowerCase().startsWith(searchinputval.toLowerCase())

        })
        setSearchdata(searchfilter);
    }
    const handleselectedfilter = (e) => {
        setSelectedval(e.target.value)
        // console.log(e.target.value);
        //  fooddatafn()
        // setSearchdata(fooddata)
    }
    return (
        <>
            <div className='w-[90%] m-auto flex justify-between'>
                <div>

                    <input type="search" className='border-2 border-slate-600 py-1 w-56' onChange={(e)=>searchapply(e) } />
                    {/* <button className='px-4 py-1 text-lg bg-blue-400 ' onClick={}>Search</button> */}
                </div>
                <div>
                    <label className='text-lg font-semibold px-2' >Filter by</label>
                    <select name="" id="" className='border-2 border-slate-600' onChange={(e)=>handleselectedfilter(e)}>
                        <option value="Indian">Indian</option>
                        <option value="American">American</option>
                        <option value="Greek">Greek</option>
                        <option value="French">French</option>
                        <option value="Egyptian">Egyptian</option>
                        <option value="Filipino">Filipino</option>
                        <option value="Dutch">Dutch</option>
                        <option value="Croatian">Croatian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Canadian">Canadian</option>
                        <option value="British">British</option>
                        <option value="Irish">Irish</option>
                        <option value="Italian">Italian</option>
                        <option value="Jamaican">Jamaican</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Kenyan">Kenyan</option>
                        <option value="Malaysian">Malaysian</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Moroccan">Moroccan</option>
                        <option value="Polish">Polish</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Russian">Russian</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Thai">Thai</option>
                        <option value="Tunisian">Tunisian</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Vietnamese">Vietnamese</option>

                    </select>
                </div>
            </div>
            <br />
            <br />
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 w-[95%] mx-auto'>

                {
                    searchdata.map((item) => {
                        return (
                            <>
                                <div className=' shadow-2xl rounded-lg'>
                                    <div><img src={item.strMealThumb} alt="" width={350} className='rounded-xl hover:scale-105 transition-all duration-300' /></div>
                                    <div className='p-4'>
                                        <h1 className='text-xl font-semibold'>{item.strMeal}</h1>
                                        <br />

                                        <button className='px-4 py-1 text-lg bg-blue-400 rounded-2xl'>View</button>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Food
