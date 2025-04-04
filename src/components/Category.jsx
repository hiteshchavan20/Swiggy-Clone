import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Category() {
    const [categories, setCategory] = useState([]);
     const [slide,setSlide]=useState(0)
    const fetchCategory = async () => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await response.json();
        // console.log(typeof(data));

        setCategory(data.categories);


    }
    useEffect(() => {
        fetchCategory();
    }, [])

    const nextSlide=()=>{
        console.log(categories.length);
        console.log(slide+3);
      // if(slide == 0) return false;
      if(categories.length-8 ==slide) return false;
      setSlide(slide + 3)
    }

    const prevSlide=()=>{
        console.log(slide+3);
        if(slide == 0) return false;
        //if(categories.length-8 ==slide) return false;
     setSlide(slide - 3)
       
    }
    return (
        <>
            <div className="max-w-[1200px] mx-auto  r"> {/*This is scrrenn */}
                <div className="flex my-3 items-center justify-between">
                    <div className="text-[25px] font-bold">What's on your mind</div>

                    <div className="flex ">
                        <div className="w-[30px]  h-[30px] bg-[#e2e2e7] rounded-full mx-2 items-center flex justify-center cursor-pointer" onClick={prevSlide} ><FaArrowLeft /></div>
                        <div className="w-[30px]  h-[30px] bg-[#e2e2e7] rounded-full mx-2 items-center flex justify-center cursor-pointer"onClick={nextSlide} ><FaArrowRight /></div>
                    </div>
                </div>
                <div className="flex  overflow-hidden">
                    {
                        categories.map((cat, index) => {
                            return (
                                <div style={{ transform: `translateX(${slide * -100 }%`}} key={index} className='w-[200px] shrink-0 duration-500' ><img src={cat.strCategoryThumb} alt="" /></div>
                            )
                        })
                    }
                </div>
                <hr  className="my-6 border-[1px] text-[#e2e2e7]"/>
            </div>
        </>
    )
}
export default Category;