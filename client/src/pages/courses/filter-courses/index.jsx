import { useNavigate } from "react-router-dom";
export function CourseFilter() {
    let navigate = useNavigate();
    function clearFilter() {
        document.getElementById("difficulty").selectedIndex = "0";
        document.getElementById("length").selectedIndex = "0";
        document.getElementById("language").selectedIndex = "0";
        navigate("/course-listing/filter/All/All/All")
    }
    async function filterData() {
        let difficulty = document.getElementById("difficulty").value
        let courselength = document.getElementById("length").value
        let language = document.getElementById("language").value
        navigate("/course-listing/filter/" + language + "/" + difficulty + "/" + courselength)
    }
    return (
        <div>
            <div>
                <div>
                    <select id="difficulty" className="form-control m-1" name="difficulty">
                        <option>All</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advance</option>
                        <option>Expert</option>
                    </select>

                </div>
                <div>
                    <select id="length" className="form-control m-1" name="length">
                        <option>All</option>
                        <option>less than 15 day</option>
                        <option>less than 30 days</option>
                    </select>
                </div>
                <div>
                    <select id="language" className="form-control m-1" name="language">
                        <option>All</option>
                        <option>English</option>
                        <option>French</option>
                        <option>German</option>
                    </select>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={filterData}>Apply</button>
                </div>
                <br/>
                <div>
                    <button className='btn btn-primary' onClick={clearFilter}>Clear filters</button>
                </div>
            </div>
        </div>
    )

}