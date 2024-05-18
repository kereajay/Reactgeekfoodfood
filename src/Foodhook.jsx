import { useEffect, useState } from "react"
const useFoodhook = () => {
    const [fooddata, setFooddata] = useState([])
    useEffect(() => {
        fooddatafn();
    }, [])
    async function fooddatafn() {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
        const data = await res.json()
        // console.log(data.meals);
        setFooddata(data.meals)

    }


    return { fooddata }
}
export default useFoodhook;