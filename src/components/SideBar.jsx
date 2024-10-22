
const SideBar = ({recipeQueue}) => {


    return (
        <div className="px-2 md:px-0">
            <div className="md:w-1/3 border-2 rounded-xl p-1 md:p-4 shadow-xl text-gray-600">
        <p className="text-lg md:text-2xl font-semibold text-center">Want to cook: {recipeQueue.length} </p>
        <hr className="border-t-2 border-gray-300 mt-1"/>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
    {recipeQueue.map((recipe, index) => (
        <tr className="hover" key={index}>
        <th> {index + 1} </th>
        <td> {recipe.recipe_name} </td>
        <td> {recipe.preparing_time} </td>
        <td> {recipe.calories} </td>
        <td>
             <button onClick={() => console.log('preparing')} className="btn rounded-full bg-[#0BE58A] text-xs md:px-4">preapring</button>
        </td>
      </tr> 
    ))}
    </tbody>
  </table>
</div>

        </div>
        </div>
    );
};

export default SideBar;